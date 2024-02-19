import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import UserService from '../services/userService'
import * as Yup from "yup"
import { Formik } from 'formik'

export default function Register() {

    const initialValues = { email: "@gmail.com", password: 1234 }
    const schema = Yup.object({
        email: Yup.string().required("ürün adı zorunludur"),
        password: Yup.string().required("ürün fiyatı girmek zorunludur")
    })

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }


    const handleSubmit = () => {
        const user = {
            email: data.email,
            password: data.password
        }
        console.log(user)
        let userService = new UserService()
        userService.addUser(user).then(result => setData(result.data.data))
    }



    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema}>
                <Form class="ui form" onSubmit={handleSubmit}>
                    <input name='email' value={data.email} onChange={handleChange} type="email" placeholder="mailinizi giriniz" />
                    <div class="ui pointing red basic label">
                        E mail formatında giriniz
                    </div>
                    <input name='password' value={data.password} onChange={handleChange} type="text" placeholder='şifrenizi giriniz' />
                    <div class="ui  pointing red basic label">
                        şifre 6 karakterden büyük olmalı
                    </div>
                    <div><Button color='green'>Kayıt ol</Button></div>
                    
                </Form>
            </Formik>
        </div>
    )
}
