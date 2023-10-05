import React, {useState, ReactElement, ReactNode } from "react";
import { Button, message, Steps, theme } from "antd";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";
interface IStep {
  title: string;
  content: React.ReactElement | React.ReactNode;
}

interface IStepProps {
  steps: IStep[];
}

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const StepperForm = ({ steps }: IStepProps) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const formConfig: FormConfig = {};

//   const contentStyle: React.CSSProperties = {
//     lineHeight: "260px",
//     textAlign: "center",
//     color: token.colorTextTertiary,
//     backgroundColor: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: `1px dashed ${token.colorBorder}`,
//     marginTop: 16,
//   };
  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;
  //   const onSubmit = (data: any) => {
  //     submitHandler(data);
  //     reset();
  //   };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form>
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
