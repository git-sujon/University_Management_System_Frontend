"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import ImageUploader from "../UI/ImageUploader";
import FormSelectFields from "../Forms/FormSelectFields";
import {
  academicDepartmentOptions,
  academicFacultyOptions,
  academicSemesterOptions,
  departmentOptions,
  genderOptions,
} from "@/Constants/global";

const StudentInfo = () => {
  return (
    <div
      className="border-2 rounded p-4 my-2 "
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.name.firstName"
            type="text"
            label="First Name"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.name.middleName"
            type="text"
            label="Middle Name"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.name.lastName"
            type="text"
            label="Last Name"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormInput
            name="password"
            type="text"
            label="Password"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormSelectFields
            name="student.gender"
            label="Gender"
            size="large"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>

        <Col className="mb-2" span={6}>
          <FormSelectFields
            name="student.academicFaculty"
            label="Academic Faculty"
            size="large"
            options={academicFacultyOptions}
            placeholder="Select"
          />
        </Col>

        <Col className="mb-2" span={6}>
          <FormSelectFields
            name="student.academicDepartment"
            label="Academic Department"
            size="large"
            options={academicDepartmentOptions}
            placeholder="Select"
          />
        </Col>

        <Col className="mb-2" span={6}>
          <FormSelectFields
            name="student.academicSemester"
            label="Academic Semester"
            size="large"
            options={academicSemesterOptions}
            placeholder="Select"
          />
        </Col>
        <Col className="mb-2" span={6}>
              <ImageUploader />
            </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
