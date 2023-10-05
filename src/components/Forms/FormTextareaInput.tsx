"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | undefined;
  placeHolder?: string;
}

const FormTextareaInput = ({
  name,
  rows,
  value,

  placeHolder,

  label,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeHolder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextareaInput;
