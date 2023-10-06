import React, { useState, ReactElement, ReactNode, useEffect } from "react";
import { Button, message, Steps, theme } from "antd";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
interface IStep {
  title: string;
  content: React.ReactElement | React.ReactNode;
}

interface IStepperFormProps {
  steps: IStep[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const StepperForm = ({ steps, submitHandler,navigateLink }: IStepperFormProps) => {
  const router = useRouter()
  const { token } = theme.useToken();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const formConfig: FormConfig = {};

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink)
  };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
