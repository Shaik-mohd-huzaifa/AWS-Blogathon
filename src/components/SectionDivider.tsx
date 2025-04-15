
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="my-10 flex items-center">
      <div className="flex-grow border-t border-gray-200"></div>
      <div className="mx-4 flex">
        <span className="h-2 w-2 rounded-full bg-aws-blue mx-1"></span>
        <span className="h-2 w-2 rounded-full bg-aws-orange mx-1"></span>
        <span className="h-2 w-2 rounded-full bg-aws-blue mx-1"></span>
      </div>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default SectionDivider;
