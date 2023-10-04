"use client";

import { genderOptions } from "@/Constants/global";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateAdminPage = () => {
  const onsubmit = async (data: any) => {
    console.log("data:", data);

    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <UMBreadCrump
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `admin-list`,
            link: `/super_admin/admin`,
          },
          {
            label: `create-admin`,
            link: `/super_admin/admin/create`,
          },
        ]}
      />

      <div
        className="border-2 rounded p-4 mb-2 "
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
        }}
      >
        <h3 className="text-xl mb-4">Admin Information</h3>
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.firstName"
                type="text"
                label="First Name"
                size="large"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.middleName"
                type="text"
                label="Middle Name"
                size="large"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.lastName"
                type="text"
                label="Last Name"
                size="large"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectFields
                name="admin.gender"
                label="Gender"
                size="large"
                options={genderOptions}
                placeholder = "Select"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="password"
                type="text"
                label="Password"
                size="large"
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" className="mt-4">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateAdminPage;
