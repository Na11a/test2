import React from "react";
import { ImageWrapper } from "../styles/components";
import { ImageProps } from "../styles/components/ImageWrapper";

interface ICompanyLogo extends ImageProps {
  height?:string
};

const CompanyLogo = ({
  src = "companyLogo.jpeg",
  alt = "bluePrint",
  width,
  height
}: ICompanyLogo) => {
  return (
    <>
      <ImageWrapper src={src} alt={alt}  width={width} height={height}/>
    </>
  );
};
export default CompanyLogo;
