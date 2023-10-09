import React from "react";

export default function TwoArrow({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="-2.4 -2.4 28.80 28.80"
      id="double-down-sign"
      fill="currentColor"
      className={className}
      stroke="#000000"
      strokeWidth="0.00024000000000000003"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.624"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M2.13,4.51a1,1,0,0,1,1.36-.38L12,8.86l8.51-4.73a1,1,0,0,1,1,1.74l-9,5a.94.94,0,0,1-.15.06l-.09,0A1,1,0,0,1,12,11h0a1,1,0,0,1-.25,0l-.09,0a.94.94,0,0,1-.15-.06l-9-5A1,1,0,0,1,2.13,4.51Zm18.38,8.62L12,17.86,3.49,13.13a1,1,0,0,0-1,1.74l9,5,.15.06.09,0A1,1,0,0,0,12,20h0a1,1,0,0,0,.25,0l.09,0,.15-.06,9-5a1,1,0,1,0-1-1.74Z"></path>
      </g>
    </svg>
  );
}
