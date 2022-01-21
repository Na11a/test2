import styled from "styled-components";
import { media } from "..";
interface LiProps {
  fontSize?: number;
  textTransform?: string;
  color?: string;
}

const Li = styled.li<LiProps>`
  margin: 0 10px;
  font-size: ${(props) => props.theme.fontSizes.small};
  text-transform: ${({ textTransform }) => textTransform || "normal"};
  color: ${(props) => props.theme.colors.black};
  ${media.lessThan("sm")`

`}
`;
export default Li;
