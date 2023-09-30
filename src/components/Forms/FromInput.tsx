"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeHolder?: string;
  validate?: object;
  label?: string;
}

const FromInput = ({
  name,
  type,
  size,
  value,
  id,
  placeHolder,
  validate,
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
          <Input
            type={type}
            size={size}
            placeholder={placeHolder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FromInput;
