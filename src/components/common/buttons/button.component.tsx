import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={`focus:outline-none focus:ring-4 font-semibold rounded-full text-sm px-5 py-2.5 text-center `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
