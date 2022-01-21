import styled from "styled-components";
interface ITextBlock {
  color?: string;
  backgroundColor?: string;
  position?: string;
}

export const BaseTextBlock = styled.p<ITextBlock>`
    color:${(props) => props.theme.colors.black}
    position:center
    text-transform:capitalize;
`;
export const FooterTextBlock = styled(BaseTextBlock)`
  color: ${(props) => props.color || props.theme.colors.powderWhite};
`;
export const LinkText = styled(BaseTextBlock)`
  color: ${(props) => props.color || props.theme.colors.blue};
`;
