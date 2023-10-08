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


export const academicFacultyOptions: ISelectOptions[] = [
  'arts',
  'science',
  'engineering',
  'business',
  'medicine',
].map((faculty) => ({
  label: faculty.charAt(0).toUpperCase() + faculty.slice(1),
  value: faculty.toLowerCase(),
}));
export const academicDepartmentOptions: ISelectOptions[] = [
  'biology',
  'chemistry',
  'computer science',
  'physics',
  'mathematics',
  'history',
  'psychology',
  'economics',
].map((department) => ({
  label: department.charAt(0).toUpperCase() + department.slice(1),
  value: department.toLowerCase().replace(/\s/g, '_'), // Replace spaces with underscores for values
}));
export const academicSemesterOptions: ISelectOptions[] = [
  'spring',
  'summer',
  'fall',
  'winter',
].map((semester) => ({
  label: semester.charAt(0).toUpperCase() + semester.slice(1),
  value: semester.toLowerCase(),
}));


