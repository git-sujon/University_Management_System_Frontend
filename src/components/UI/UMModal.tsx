"use client";

import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { useDeleteDepartmentMutation } from "@/redux/api/departmentApi";

interface IUMModel {
  data: any;
  buttonType: any;
  buttonName: any;
  modalTitle: string;
  modalContent?: any;
  loadingMessage?: string;
  actionFunction:any
  successMessage?: string;

}

const UMModel = ({
  data,
  buttonType,
  buttonName,
  modalTitle,
  modalContent,
  loadingMessage,
  actionFunction,
  successMessage
}: IUMModel) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async() => {

    message.loading(loadingMessage);
    await actionFunction(data);
    message.success(successMessage);

    console.log("handle ok:", data);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type={buttonType} onClick={showModal}>
        {buttonName}
      </Button>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent ? modalContent : ""}
      </Modal>
    </>
  );
};

export default UMModel;
