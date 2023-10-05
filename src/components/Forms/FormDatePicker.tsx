"use client";
import { DatePicker} from "antd";
import type { DatePickerProps } from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import { useFormContext, Controller } from "react-hook-form";
interface IDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small"
}

const FormDatePicker = ({ name, label, onChange,size }: IDatePickerProps) => {
  const { control, setValue } = useFormContext();



  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  return (
    <>
      {label}
      <br/>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
          defaultValue={dayjs(field.value) || Date.now()}
          size={size}
          onChange={handleOnChange}
          style={{ width: "100%" }}
        />
        )}
      />
    </>
  );
};

export default FormDatePicker;
