"use client";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
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

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeHolder,
  validate,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label}

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeHolder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeHolder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small className="text-red-600">{errorMessage}</small>
    </>
  );
};

export default FormInput;
