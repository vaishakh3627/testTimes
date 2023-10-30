import {React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
const [data,setData] = useState([])
const [loading,setLoading] = useState(false)
const storedArray = useSelector((state) => state.array);

const fetchData = () => {
    setLoading(true)
    axios.get('https://restcountries.com/v2/all?fields=name,region,flag').then((res) => {
        if(res?.data){
            setData(res.data)
            setLoading(false)
        }
    }).catch((error) => {
        if(error){
            console.log(error)
            setLoading(false)
        }
    })
}

useEffect(() => {
    fetchData()
},[])

  return (
    <Container fluid className='h-100' >
        <div className='d-flex align-items-center justify-content-between'>
            <h2>Countries</h2>
            <div className='d-flex gap-2'>
           <h5 style={{borderBottom: "1px solid blue"}}>All</h5>
           <h5>Asia</h5>
           <h5>Europe</h5>
            </div>
        </div>
        <Row className='p-5 g-2 d-flex aling-items-center justify-content-around'>
            {storedArray?.username && <h5>Welcome {storedArray?.username}</h5>}
            {data && data.length > 0 && !loading ? data.map((item,index) => (
                <Col style={{height: "7rem",border: "1px solid black"}} lg={5} md={5} key={index} className='p-2 d-flex'>
                    <div>
                    <img src={item?.flag} alt='flag' height={90} width={100} />
                    </div>
                    <div className='p-2 text-start'>
                    <h4>{item?.name}</h4>
                    <h6>{item?.region}</h6>
                    </div>
                </Col>
            )) : <h6>Loading Your Data!</h6>}
        </Row>
    </Container>
  )
}

export default Home