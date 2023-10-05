"use client"

import StepperForm from '@/components/StepperForm/StepperForm';
import BasicStudentInfo from '@/components/StudentForms/BasicStudentInfo';
import GuardianInfo from '@/components/StudentForms/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentForms/LocalGuardianInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import React from 'react';

const CreateStudentPage = () => {

    const steps = [
        {
          title: 'Student Information',
          content: <StudentInfo />,
        },
        {
          title: 'Basic Information',
          content: <BasicStudentInfo />,
        },
        {
          title: 'Guardian Information',
          content: <GuardianInfo />,
        },
        {
          title: 'Local Guardian Information',
          content: <LocalGuardianInfo />,
        },
      ];

      const handleStudentSubmit = async (data: any) => {
        console.log("data:", data);
    
        try {
        } catch (error: any) {
          console.error(error.message);
        }
      };
    

    return (
        <StepperForm submitHandler= {(value)=> handleStudentSubmit (value)} steps={steps} />
    );
};

export default CreateStudentPage;