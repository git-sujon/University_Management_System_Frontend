"use client";

import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/Constants/global";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import FormTextareaInput from "@/components/Forms/FormTextareaInput";
import ImageUploader from "@/components/UI/ImageUploader";
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

      <Form submitHandler={onsubmit}>
        <div
          className="border-2 rounded p-4 my-2 "
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
          }}
        >
          <h3 className="text-xl mb-4">Admin Information</h3>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.name.firstName"
                type="text"
                label="First Name"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.name.middleName"
                type="text"
                label="Middle Name"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.name.lastName"
                type="text"
                label="Last Name"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormInput
                name="password"
                type="text"
                label="Password"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormSelectFields
                name="admin.gender"
                label="Gender"
                size="large"
                options={genderOptions}
                placeholder="Select"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormSelectFields
                name="admin.department"
                label="Department"
                size="large"
                options={departmentOptions}
                placeholder="Select"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <ImageUploader />
            </Col>
          </Row>
        </div>
        <div
          className="border-2 rounded p-4 my-2 "
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
          }}
        >
          <h3 className="text-xl mb-4">Basic Information</h3>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.email"
                type="text"
                label="Email"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.contactNo"
                type="text"
                label="Contact No"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.emergencyContactNo"
                type="text"
                label="Emergency Contact No"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={8}>
              <FormDatePicker
                name="admin.DateOfBirth"
                label="Date of Birth"
                size="large"
              />
            </Col>

            <Col className="mb-2" span={8}>
              <FormSelectFields
                name="admin.bloodGroup"
                label="Blood Group"
                size="large"
                options={bloodGroupOptions}
                placeholder="Select"
              />
            </Col>

            <Col className="mb-2" span={8}>
              <FormInput
                name="admin.designation"
                type="text"
                label="Designation"
                size="large"
              />
            </Col>
            <Col className="mb-2" span={12}>
              <FormTextareaInput
                name="admin.presentAddress"
                rows={4}
                label="Present Address"
              />
            </Col>
            <Col className="mb-2" span={12}>
              <FormTextareaInput
                name="admin.permanentAddress"
                rows={4}
                label="Permanent Address"
              />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit" className="mt-4">
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreateAdminPage;
