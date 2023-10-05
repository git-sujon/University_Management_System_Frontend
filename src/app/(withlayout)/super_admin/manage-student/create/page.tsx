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

    return (
        <StepperForm steps={steps} />
    );
};

export default CreateStudentPage;