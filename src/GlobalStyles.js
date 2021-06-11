import { css } from '@emotion/react';
import pixelToRem from './utils/helpers/pixelToRem';

//Global

export const classGlobal = css`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;600;700&display=swap');

    body {
    margin: 0;
    font-size: ${pixelToRem(16)};
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3 {
        margin: 0;
        padding: 0;
    }
`

export default classGlobal;