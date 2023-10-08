import { Button } from "antd";
import Link from "next/link";

type ActionsBarProps = {
  title: string;
  children: React.ReactElement | React.ReactNode;
};

const ActionsBar = ({ title, children }: ActionsBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div  className="flex items-center gap-x-20">{children}</div>
    </div>
  );
};

export default ActionsBar;
