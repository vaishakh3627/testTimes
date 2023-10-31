import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Row, Form as RBForm } from "react-bootstrap";

import { AiOutlineGoogle, AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import { storeArray } from "../redux/action";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username or email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, actions) => {
          dispatch(storeArray(values));
          navigate("/home");
          actions.setSubmitting(false);
        }}
        className="d-flex align-items-start justify-content-center flex-column">
        {({ handleChange, values, isSubmitting }) => (
          <Form style={{ height: "100vh" }}>
            <Row className="h-100">
              <Col lg={6} sm={12}>
                <Row className="h-100 d-flex justify-content-end">
                  <Col
                    lg={6}
                    sm={12}
                    className="d-flex align-items-center justify-content-center flex-column p-1">
                    <div style={{ textAlign: "start" }} className="w-100">
                      <h2>Sign In</h2>
                      <p>
                        New user ? {""}
                        <span className="text-primary fs--1">
                          Create an account
                        </span>
                      </p>
                    </div>
                    <div className="w-100 mb-2">
                      <Field
                        type="text"
                        as={RBForm.Control}
                        name="username"
                        id="username"
                        placeholder="Username or email"
                        value={values.username}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="w-100 mb-2">
                      <Field
                        type="password"
                        as={RBForm.Control}
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="d-flex gap-2 align-items-start justify-content-center my-2">
                      <Field
                        type="checkbox"
                        name="keepSignedIn"
                        id="keepSignedIn"
                        className="mt-1"
                      />
                      <label htmlFor="keepSignedIn">Keep me signed in</label>
                    </div>
                    <Button
                      type="submit"
                      variant="dark"
                      className="w-100"
                      style={{ borderRadius: "0px" }}
                      disabled={isSubmitting}>
                      Sign In
                    </Button>
                    <div className="mt-2 mb-2">
                      <p>Or Sign In With</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3">
                      <div
                        style={{
                          border: "1px solid black",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}>
                        <AiOutlineGoogle size={20} />
                      </div>
                      <div
                        style={{
                          border: "1px solid black",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}>
                        <FaFacebookF size={20} />
                      </div>
                      <div
                        style={{
                          border: "1px solid black",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}>
                        <AiOutlineLinkedin size={20} />
                      </div>
                      <div
                        style={{
                          border: "1px solid black",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}>
                        <FaTwitter size={20} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default LoginForm;
