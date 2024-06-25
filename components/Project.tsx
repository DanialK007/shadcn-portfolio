"use client"; // Ensure this is at the very top of the file

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Replace this array with your actual image URLs
const images = [
  "https://via.placeholder.com/150", // Example image URL
  "https://via.placeholder.com/150", // Example image URL
  "https://via.placeholder.com/150", // Example image URL
  "https://via.placeholder.com/150", // Example image URL
  "https://via.placeholder.com/150", // Example image URL
];

export function Project() {
  return (
    <Carousel className="w-[80vw] overflow-hidden md:w-full max-w-2xl">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
