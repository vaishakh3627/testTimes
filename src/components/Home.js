import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedArray = useSelector((state) => state.array);
  const [tab, setTab] = useState("all");
  const [filterData, setFilterData] = useState([]);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => {
        if (res?.data) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavbar = (tab) => {
    setTab(tab);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      if (tab === "all") {
        setFilterData(data);
      } else if (tab === "asia") {
        let filteredData = data.filter((item) => item.region === "Asia");
        setFilterData(filteredData);
      } else if (tab === "europe") {
        let filteredData = data.filter((item) => item.region === "Europe");
        setFilterData(filteredData);
      }
    }
  }, [tab, data]);

  return (
    <Container fluid className="h-100">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Countries</Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "13px" }}>
            <span>Welcome</span>{" "}
            {storedArray?.username && <span>{storedArray?.username}</span>}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                active={tab === "all"}
                onClick={() => handleNavbar("all")}>
                All
              </Nav.Link>
              <Nav.Link
                active={tab === "asia"}
                onClick={() => handleNavbar("asia")}>
                Asia
              </Nav.Link>
              <Nav.Link
                active={tab === "europe"}
                onClick={() => handleNavbar("europe")}>
                Europe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="p-5 g-2 d-flex aling-items-center justify-content-around">
        {filterData && filterData.length > 0 && !loading ? (
          filterData.map((item, index) => (
            <Col
              style={{ height: "7rem", border: "1px solid black" }}
              lg={5}
              md={5}
              key={index}
              className="p-2 d-flex">
              <div>
                <img src={item?.flag} alt="flag" height={90} width={100} />
              </div>
              <div className="p-2 text-start">
                <h4>{item?.name}</h4>
                <h6>{item?.region}</h6>
              </div>
            </Col>
          ))
        ) : (
          <h6>Loading Your Data!</h6>
        )}
      </Row>
    </Container>
  );
}

export default Home;
