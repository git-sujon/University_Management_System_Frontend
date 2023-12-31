"use client";

import React, { useEffect, useState } from "react";
import {Layout } from "antd";
import SideBar from "@/components/UI/SideBar";
import Contents from "@/components/UI/Contents";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

const IsUserLoggedIn = isLoggedIn()
const router = useRouter()
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
  if(!IsUserLoggedIn){
    return router.push("/login")
  }
  setIsLoading(true)
}, [router, IsUserLoggedIn, isLoading])

if(!isLoading){
  return <LoadingPage />
}

  return (
    <Layout style={{}} hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
