import styled from "styled-components";
import media from "../media";
interface ImagePropsCss {
  padding?: string;
  margin?: string;
}
export interface ImageProps {
  src?: string;
  alt?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}
interface IImageContainer {
  width: string;
  height: string;
}
const ImageContainer = styled.div<IImageContainer>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const Img = styled.img<ImagePropsCss>`
  margin: ${({ margin }) => margin && `${margin}`};
  max-width: 100%;
  max-height:100%;
  padding: ${({ padding }) => padding && `${padding}`};
  ${media.greaterThan("sm")`
`}
`;

const defaultWidth = "13vw";
const defaultHeight = "12vh";
const ImageWrapper = ({ src, alt, width, height }: ImageProps) => {
  return (
    <ImageContainer
      width={width ? width : defaultWidth}
      height={height ? height : defaultHeight}
    >
      <Img src={src} alt={alt}></Img>
    </ImageContainer>
  );
};
export default ImageWrapper;
