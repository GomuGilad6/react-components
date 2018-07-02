import React from "react";
import styled from "styled-components";

const StyledButton = stlyed("button")`
    background: blue;
`;

const Button = () => (
    <StyledButton>
        Click Me!
    </StyledButton>
);

export { Button };