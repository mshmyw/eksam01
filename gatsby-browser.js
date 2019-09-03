
import React from "react"
import "normalize.css"
import "typeface-fira-sans"
import "typeface-merriweather"

import { ThemeProvider } from "./src/context/theme-context"
import {GlobalStyle} from "./src/styles/GlobalStyle"

require('prismjs/themes/prism-solarizedlight.css')
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
