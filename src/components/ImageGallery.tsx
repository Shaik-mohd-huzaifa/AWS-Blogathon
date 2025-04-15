
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ImageGalleryProps {
  images: string[];
  title: string;
  description: string;
}

const ImageGallery = ({ images, title, description }: ImageGalleryProps) => {
  return (
    <Card className="my-6">
      <CardContent className="p-6">
        <h3 className="font-bold text-lg text-aws-blue mb-2">{title}</h3>
        <p className="text-aws-darkgray mb-4">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Generated image ${index + 1}`} 
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGallery;
