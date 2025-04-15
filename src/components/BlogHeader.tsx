
import React from 'react';

const BlogHeader = () => {
  return (
    <header className="bg-aws-dark text-white py-6 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-sm font-medium bg-aws-orange text-white px-3 py-1 rounded-full">
              AWS Community Day Blogathon 2025
            </span>
            <h1 className="text-2xl md:text-4xl font-bold mt-3 mb-2">
              Unleashing Intelligence in the Cloud
            </h1>
            <h2 className="text-xl md:text-2xl text-aws-blue mb-4">
              Real-World Applications of AWS AI/ML Services
            </h2>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-300">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                7 min read
              </span>
            </span>
            <span className="text-sm text-gray-300">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                April 15, 2025
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
