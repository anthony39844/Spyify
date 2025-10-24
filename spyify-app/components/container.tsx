import React from "react";
interface ContainerProps {
  text: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}
export default function Container({
  text,
  width,
  height,
  children,
}: ContainerProps) {
  return (
    <div
      className={`w-${width || "full"} h-${
        height || "full"
      } rounded-3xl w-full h-full bg-[#191414] p-4 overflow-y-auto`}
    >
      <h1 className="text-white text-3xl font-semibold mb-4">{text}</h1>
      {children}
    </div>
  );
}
