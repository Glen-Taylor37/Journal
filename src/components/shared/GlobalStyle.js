import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   
    html, body, #root {
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 0;
        min-width: 800px;
    }

    .ql-toolbar {
        border-radius: 4px;
    }
`;
