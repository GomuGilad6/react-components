import React from "react";
import styled from "styled-components";

const Container = styled("div")`
    background: blue;
    position: absolute;
    left: 50%;
    top: 50%;
`;

export default (storyFn) => (
    <Container>
        {storyFn()}
    </Container>
);