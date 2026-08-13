import type { ReactNode } from "react";

interface DashboardCardProps {
  value: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const DashboardCard = ({
  value,
  icon,
  title,
  description,
}: DashboardCardProps) => {
  return (
    <div className=" bg-white  border border-gray-400 rounded-2xl py-4 px-4 w-full">
      <div className=" flex justify-between w-full">
        {/* title */}
        <p>{title}</p>

        {/* icon */}
        {icon}
      </div>

      <h2 className=" font-bold">{value}</h2>

      {/* description */}
      <p>{description}</p>
    </div>
  );
};

export default DashboardCard;
