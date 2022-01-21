import React from "react";
import styled from "styled-components";
const A = styled.a`
  .fa {
    padding: 50px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
  }
  .fa:hover {
    opacity: 0.7;
  }
  .fa-twitter {
    background: #55ACEE;
    color: white;
  }
`;

type Props = {};
const socialMedias = ["google", "twitter", "linkedin", "instagram"];
const SocialMedia = (props: Props) => {
  return (
    <>
      {socialMedias.map((media) => (
        <A href="#" className={"fa ".concat(`fa-${media}`)}>
          {" "}
        </A>
      ))}
    </>
  );
};
export default SocialMedia;
