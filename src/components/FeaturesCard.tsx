import type { ReactNode } from "react";

interface FeaturesCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const FeaturesCard = ({
  number,
  icon,
  title,
  description,
}: FeaturesCardProps) => {
  return (
    <div className=" rounded-2xl bg-white border border-gray-400 px-3 py-3 text-start">
      <h2 className=" text-gray-400 font-bold ml-2"> {number}</h2>

      <div className=" bg-green-50 text-green-500 py-3 px-1 rounded-xl w-10 flex justify-center">
        {/* Icon */}
        {icon}
      </div>

      <h3 className=" font-semibold">
        {/* title */}

        {title}
      </h3>

      <p>{description}</p>
    </div>
  );
};

export default FeaturesCard;
