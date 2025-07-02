import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-black">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black"/>
      </svg>
    </div>
  );
}
