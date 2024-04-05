import React from "react";

interface CardAuthProps {
  title: string
  children: React.ReactNode
}

export default function CardAuth({title, children}: CardAuthProps) {
  return (
    <div className="flex justify-center h-screen items-center animate-fade">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm px-6 py-12 lg:px-8 space-y-6 bg-gray-900 rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
