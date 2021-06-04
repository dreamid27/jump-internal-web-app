import { css } from '@emotion/react';
import pixelToRem from './utils/helpers/pixelToRem';

//Global

export const classGlobal = css`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;600;700&display=swap');

    body {
    margin: ${pixelToRem(0)};
    width: ${pixelToRem(1440)};
    font-size: 16px;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3 {
        margin: ${pixelToRem(0)};
        padding: ${pixelToRem(0)};
    }
`

export default classGlobal;