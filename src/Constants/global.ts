import { ISelectOptions } from "@/components/Forms/FormSelectFields";

export const genderOptions: ISelectOptions[] = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];


export const bloodGroupOptions: ISelectOptions[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
].map((group) => ({
  label: group,
  value: group,
}));

export const departmentOptions: ISelectOptions[] = [
  {
    label: "HR",
    value: "hr management",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Others",
    value: "other",
  },
 
];
