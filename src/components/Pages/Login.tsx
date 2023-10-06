"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";

type FromValues = {
  id: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [userLogin, { isLoading, error }] = useUserLoginMutation();

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const response = await userLogin({ ...data }).unwrap();

      if (isLoading) {
        return <LoadingPage />;
      }

      if (response?.accessToken) {
        router.push("/profile");
        message.success("Welcome Back")
      }

      storeUserInfo({ accessToken: response?.accessToken });
    } catch (error: any) {
      console.error(error.message);
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
      <Col sm={12} md={16} lg={10}></Col>
      <Col sm={12} md={8} lg={8}>
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

export default Login;
