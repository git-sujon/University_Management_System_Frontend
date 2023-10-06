"use client"


import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';


type FromValues = {
    password: string;
  };
  

const ChangePasswordPage = () => {

    const onsubmit: SubmitHandler<FromValues> = async (data: any) => {

        console.log("data:", data)

        try {
         
        } catch (error: any) {
          console.error(error.message);
        }
      };
    


    return (
        <div className='flex items-center justify-center min-w-full min-h-screen'>
           <Row
          
           >
            <Col>
            <h1 className='text-xl font-bold mb-3'>Reset Password</h1>
                <Form submitHandler={onsubmit}>
                    <div className='mb-2'>
                        <FormInput 
                        name='oldPassword'
                        type='password'
                        label='Old Password'
                        size='large'
                        

                        />
                    </div>
                    <div className='mb-2'>
                        <FormInput 
                        name='newPassword'
                        type='password'
                        label='New Password'
                        size='large'


                        />
                    </div>
                    <Button htmlType='submit' type='primary' >Submit</Button>
                </Form>
            </Col>
           </Row>
        </div>
    );
};

export default ChangePasswordPage;