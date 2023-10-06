"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateDepartment = () => {
  const onsubmit = async (data: any) => {
    console.log("data:", data);

    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="">
      <UMBreadCrump
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `department`,
            link: `/super_admin/department`,
          },
          {
            label: `create-department`,
            link: `/super_admin/department/create`,
          },
        ]}
      />

      <Form submitHandler={onsubmit}>
        <div className="">
          <h3 className="text-xl mb-4">Create Department</h3>
          <Row >
            <Col className="mb-2" >
              <FormInput
                name="title"
                type="text"
                label="Department Name"
                size="large"
              />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit" className="mt-4">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;
