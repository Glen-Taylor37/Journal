import { createGlobalStyle } from 'styled-components';

import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratBold from './Montserrat-Bold.ttf';
import MontserratItalic from './Montserrat-Italic.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular});
        font-style: normal;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBold});
        font-weight: bold;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratItalic});
        font-style: italic;
    }
`;
