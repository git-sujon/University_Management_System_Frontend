"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import ImageUploader from "../UI/ImageUploader";
import FormSelectFields from "../Forms/FormSelectFields";
import {
  academicDepartmentOptions,
  academicFacultyOptions,
  academicSemesterOptions,
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/Constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import FormTextareaInput from "../Forms/FormTextareaInput";

const BasicStudentInfo = () => {
    return (
        <div
        className="border-2 rounded p-4 my-2 "
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="mb-2" span={8}>
            <FormInput
              name="student.email"
              type="text"
              label="Email"
              size="large"
            />
          </Col>
          <Col className="mb-2" span={8}>
            <FormInput
              name="student.contactNo"
              type="text"
              label="Contact No"
              size="large"
            />
          </Col>
          <Col className="mb-2" span={8}>
            <FormInput
              name="student.emergencyContactNo"
              type="text"
              label="Emergency Contact No"
              size="large"
            />
          </Col>
          <Col className="mb-2" span={8}>
            <FormDatePicker
              name="student.DateOfBirth"
              label="Date of Birth"
              size="large"
            />
          </Col>

          <Col className="mb-2" span={8}>
            <FormSelectFields
              name="student.bloodGroup"
              label="Blood Group"
              size="large"
              options={bloodGroupOptions}
              placeholder="Select"
            />
          </Col>

          <Col className="mb-2" span={12}>
            <FormTextareaInput
              name="student.presentAddress"
              rows={4}
              label="Present Address"
            />
          </Col>
          <Col className="mb-2" span={12}>
            <FormTextareaInput
              name="student.permanentAddress"
              rows={4}
              label="Permanent Address"
            />
          </Col>
        </Row>
      </div>
    );
};

export default BasicStudentInfo;