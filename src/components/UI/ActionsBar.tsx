import { Button } from "antd";
import Link from "next/link";

type ActionsBarProps ={
    title:string,
    children:React.ReactElement | React.ReactNode
}


const ActionsBar = ({title, children}:ActionsBarProps) => {
    return (
        <>
        <h1>{title}</h1>
        <div
        //  style={{
        //     display:"flex"
        // }}
        >
            {children}
        </div>
      </>
    );
};

export default ActionsBar;