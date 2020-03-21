import { injectGlobal } from "styled-components";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  .custom-date-picker {
    max-height: 434px !important;
    height: 434px !important;
  }
  
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;
