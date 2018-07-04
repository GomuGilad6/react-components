import { configure, addDecorator } from "@storybook/react";

import Container from "./Container";

// automatically import all files ending in *.story.js
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(Container);

configure(loadStories, module);