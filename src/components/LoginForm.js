import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {AiOutlineGoogle,AiOutlineLinkedin} from 'react-icons/ai'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { storeArray } from '../redux/action'
 
function LoginForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

const [formData,setFormData] = useState({
    username: '',
    password: ''
})

const handleFieldChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData((prev) => ({
        ...prev,
        [`${name}`]: value
    }))
}

const handleSubmit = () => {
    dispatch(storeArray(formData));
    navigate('/home')
}

  return (
    <Container fluid style={{ height:'100vh'}}>
        <Row className='h-100'>
            <Col lg={8} sm={12} className='d-flex align-items-center justify-content-center flex-column p-0'>
                
                    <h2>
                Sign In
                </h2>
                <p>New user ? <span className='text-primary fs--1'>Create an account</span></p>
                <Form.Control placeholder='Uername or email' type='text' className='w-50 mb-2' value={formData.username} name='username' onChange={handleFieldChange} />
                <Form.Control placeholder='Password' type='password' className='w-50' value={formData.password} name='password' onChange={handleFieldChange} />
                <div className='d-flex gap-2 align-items-start justify-content-start'>
                <Form.Check />
                <p>Keep me signed in</p>
                </div>
                <Button variant='dark' className='w-50' style={{borderRadius: "0px"}} onClick={handleSubmit}>Sign In</Button>
                <div className='mt-2 mb-2'>
                    <p>Or Sign In With</p>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-3'>
                    <div style={{border: "1px solid black", width:"2rem" ,height: "2rem" ,borderRadius: "50%"}}>
                        <AiOutlineGoogle size={20} />
                    </div>
                    <div style={{border: "1px solid black", width:"2rem" ,height: "2rem" ,borderRadius: "50%"}}>
                        <FaFacebookF size={20} />
                    </div>
                    <div style={{border: "1px solid black", width:"2rem" ,height: "2rem" ,borderRadius: "50%"}}>
                        <AiOutlineLinkedin size={20} />
                    </div>
                    <div style={{border: "1px solid black", width:"2rem" ,height: "2rem" ,borderRadius: "50%"}}>
                        <FaTwitter size={20} />
                    </div>
                </div>
            </Col>
            <Col lg={4} sm={12}>
            </Col>
        </Row>
    </Container>
  )
}

export default LoginForm