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
      className={`w-${width || "1/4"} h-${
        height || "auto"
      } border border-gray-700 rounded-lg bg-black p-4 overflow-y-auto`}
    >
      <h2 className="text-white text-xl font-semibold mb-4">{text}</h2>
      {children}
    </div>
  );
}
