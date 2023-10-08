"use client";

import LoadingPage from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import {
  useGetSingleDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const UpdateDepartmentPage = ({ params }: { params: { id: string } }) => {
 const router = useRouter()

  const { id } = params;

  const { data, isLoading } = useGetSingleDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  if (isLoading) {
    return <LoadingPage />;
  }

  const onsubmit = async (values: any) => {

   

    try {
      message.loading("Updating...");
      await updateDepartment({ id, body: values });
      message.success("Department Updated Successfully");
    router.push("/super_admin/department")
    } catch (error: any) {
      console.error(error.message);
      message.error(error.message);
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

      <Form
        submitHandler={onsubmit}
        defaultValues={{ title: data?.title || "" }}
      >
        <div className="">
          <h3 className="text-xl mb-4">Create Department</h3>
          <Row>
            <Col className="mb-2">
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateDepartmentPage;
