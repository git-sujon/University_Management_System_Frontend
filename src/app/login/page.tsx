import Login from "@/components/Pages/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'UMS | Login',
  description: 'This is the login page',
}


const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
