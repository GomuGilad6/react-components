import React from "react";
import styled from "styled-components";

const StyledButton = styled("div")`
  background: #7bb6ff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 15px;
  text-align: center;
  width: max-content;
  font-size: 16px;
  transition: transform 0.1s;
  &:before{
    content: '';
    display: block;
    position: absolute;
    background: rgba(255,255,255,0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .5;
    filter: blur(30px);
    transform: translateX(-100px)  skewX(-15deg);
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    background: rgba(255,255,255,0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }
  &:hover {
    transform: scale(1.05);
    &:before{
      transform: translateX(300px)  skewX(-15deg);  
      opacity: 0.6;
      transition: .7s;
    }
    &:after{
      transform: translateX(300px) skewX(-15deg);  
      opacity: 1;
      transition: .7s;
    }
  }
`;

const Button = ({ text }) => (
  <StyledButton>
    {text}
  </StyledButton>
);

export { Button };