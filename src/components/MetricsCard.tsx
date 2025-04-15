
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

const MetricsCard = ({ title, value, description, icon }: MetricsCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start">
          <span className="text-3xl mr-4">{icon}</span>
          <div>
            <h3 className="font-medium text-gray-500">{title}</h3>
            <p className="text-3xl font-bold text-aws-blue">{value}</p>
            <p className="text-sm text-aws-darkgray mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
