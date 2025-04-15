
import React from 'react';
import { Card } from "@/components/ui/card";

const ArchitectureDiagram = () => {
  return (
    <Card className="p-4">
      <div className="bg-aws-lightgray p-6 rounded-lg">
        <h3 className="text-center font-semibold mb-6">Intelligent Customer Service Architecture</h3>
        
        <div className="flex flex-col items-center">
          {/* This is a simplified SVG diagram - in a real implementation you would have a more detailed diagram */}
          <svg width="100%" height="400" viewBox="0 0 800 400" className="max-w-full">
            {/* User */}
            <g transform="translate(100, 50)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">Customers</text>
            </g>
            
            {/* API Gateway */}
            <g transform="translate(350, 50)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">API Gateway</text>
            </g>

            {/* Connecting lines */}
            <line x1="220" y1="80" x2="350" y2="80" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />
            <polygon points="340,75 350,80 340,85" fill="#333" />
            
            {/* Amazon Lex */}
            <g transform="translate(200, 150)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">Amazon Lex</text>
            </g>
            
            {/* Amazon Comprehend */}
            <g transform="translate(350, 150)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="30" textAnchor="middle" fill="#333">Amazon</text>
              <text x="60" y="45" textAnchor="middle" fill="#333">Comprehend</text>
            </g>
            
            {/* Amazon Bedrock */}
            <g transform="translate(500, 150)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">Amazon Bedrock</text>
            </g>
            
            {/* Connecting lines from API Gateway */}
            <line x1="410" y1="110" x2="410" y2="150" stroke="#333" strokeWidth="2" />
            <polygon points="405,140 410,150 415,140" fill="#333" />
            <line x1="410" y1="110" x2="260" y2="150" stroke="#333" strokeWidth="2" />
            <polygon points="262,142 260,150 268,148" fill="#333" />
            <line x1="410" y1="110" x2="560" y2="150" stroke="#333" strokeWidth="2" />
            <polygon points="552,148 560,150 558,142" fill="#333" />
            
            {/* Lambda Layer */}
            <g transform="translate(350, 250)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#1EAEDB" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">AWS Lambda</text>
            </g>
            
            {/* Connecting lines to Lambda */}
            <line x1="260" y1="210" x2="350" y2="250" stroke="#333" strokeWidth="2" />
            <polygon points="343,244 350,250 347,242" fill="#333" />
            <line x1="410" y1="210" x2="410" y2="250" stroke="#333" strokeWidth="2" />
            <polygon points="405,240 410,250 415,240" fill="#333" />
            <line x1="560" y1="210" x2="470" y2="250" stroke="#333" strokeWidth="2" />
            <polygon points="473,242 470,250 477,248" fill="#333" />
            
            {/* Backend Systems */}
            <g transform="translate(200, 350)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#F97316" strokeWidth="2" />
              <text x="60" y="35" textAnchor="middle" fill="#333">SageMaker</text>
            </g>
            
            <g transform="translate(350, 350)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#F97316" strokeWidth="2" />
              <text x="60" y="30" textAnchor="middle" fill="#333">Customer</text>
              <text x="60" y="45" textAnchor="middle" fill="#333">Database</text>
            </g>
            
            <g transform="translate(500, 350)">
              <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8fafc" stroke="#F97316" strokeWidth="2" />
              <text x="60" y="30" textAnchor="middle" fill="#333">Legacy</text>
              <text x="60" y="45" textAnchor="middle" fill="#333">Systems</text>
            </g>
            
            {/* Connecting lines to Backend Systems */}
            <line x1="410" y1="310" x2="260" y2="350" stroke="#333" strokeWidth="2" />
            <polygon points="262,342 260,350 268,348" fill="#333" />
            <line x1="410" y1="310" x2="410" y2="350" stroke="#333" strokeWidth="2" />
            <polygon points="405,340 410,350 415,340" fill="#333" />
            <line x1="410" y1="310" x2="560" y2="350" stroke="#333" strokeWidth="2" />
            <polygon points="552,348 560,350 558,342" fill="#333" />
          </svg>
        </div>
        
        <p className="text-sm text-center text-gray-500 mt-4">
          A simplified architecture diagram of the intelligent customer service solution
        </p>
      </div>
    </Card>
  );
};

export default ArchitectureDiagram;
