import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
   
    html, body, #root {
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 0;
        min-width: 800px;
    }

    .ql-toolbar {
        box-shadow: 4px 1px 8px 1px ${colors.blackShadow};
        border-radius: 6px;
    }
`;
