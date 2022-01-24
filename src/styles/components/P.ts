import styled from "styled-components";
import { media } from "..";
import { pxToRem } from "../convector";
interface ITextBlock {
  color?: string;
  backgroundColor?: string;
  position?: string;
}

export const BaseTextBlock = styled.p<ITextBlock>`
    color:${(props) => props.theme.colors.black};
    position:center;
    text-transform:capitalize;
`;
export const FooterTextBlock = styled(BaseTextBlock)`
  color: ${(props) => props.color || props.theme.colors.powderWhite};
  font-size:${(props) => props.theme.fontSizes.small};
  ${(props) => media.greaterThan('sm')`
    color:${(props) => props.theme.colors.onyx};
    line-height:18px;
    font-size:${props.theme.fontSizes.footerText};
  `}
`;
export const LinkText = styled(BaseTextBlock)`
  color: ${(props) => props.color || props.theme.colors.blue};
`;
