import { Button, Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuardianInfo = () => {
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
            name="student.localGuardian.Name"
            type="text"
            label="Father Name"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.localGuardian.Occupation"
            type="text"
            label="Father Occupation"
            size="large"
          />
        </Col>
        
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.localGuardian.ContactNo"
            type="text"
            label="Father Contact No"
            size="large"
          />
        </Col>
        <Col className="mb-2" span={6}>
          <FormInput
            name="student.localGuardian.address"
            type="text"
            label="Address"
            size="large"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LocalGuardianInfo;
