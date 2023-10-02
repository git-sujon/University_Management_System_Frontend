"use client";

import React from "react";
import { Button, Col, Row } from "antd";
import loginPageImage from "@/assets/image/Reset password-bro.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";

type FromValues = {
  id: string;
  password: string;
};

const LoginPage: React.FC = () => {
getUserInfo()
  const [userLogin, {isLoading, error}] = useUserLoginMutation()

  const onsubmit: SubmitHandler<FromValues> = async(data:any) => {
    try {

      const response = await userLogin({...data}).unwrap()

      console.log( response)

      storeUserInfo({accessToken: response?.data?.accessToken})


    } catch (error:any) {
      console.error(error.message)
    }
  };

  return (
    <Row
      justify="center"
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginPageImage} width={500} alt="login page image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>First login to your account</h1>
        <div
          style={{
            margin: "15px 0",
          }}
        >
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
