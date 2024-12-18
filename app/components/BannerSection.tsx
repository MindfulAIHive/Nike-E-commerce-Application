import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./Button";
import { Roboto } from "next/font/google";

interface BannerSectionProps {
    heading: string,
    imageUrl: StaticImageData,
    secondHeading: string,
    para: string,
    buttonText: string,
    imageAlt: string,
}

const BannerSection: React.FC<BannerSectionProps> = ({heading, imageUrl, secondHeading, para, buttonText, imageAlt}) => {
  return (
    <section className="px-10 font-Roboto">
      <h2 className="mb-4 ">{heading}</h2>
      <Image src={imageUrl} alt={imageAlt}/>
      <div className="flex flex-col items-center py-10">
        <h2 className="text-5xl uppercase pt-2 text-center">{secondHeading}</h2>
        <p className="w-full md:w-1/2 text-center py-6">
          {para}
        </p>
        <Button text={buttonText} classNames="rounded-full py-2" />
      </div>
    </section>
  );
};

export default BannerSection;
