import styled from '@emotion/styled'; 
import pixelToRem from '../../utils/helpers/pixelToRem';

export const HeadContents =styled.div`
    margin: ${pixelToRem(30)} ${pixelToRem(30)} ${pixelToRem(54)} ${pixelToRem(30)};
    display: flex;
    align-items: center;
    & > h1 {
        font-size: ${pixelToRem(24)};
        color: #252733;
        padding-right: ${pixelToRem(695)};
        margin: auto;
    }
    & > svg {
        height: ${pixelToRem(15)};
        width: ${pixelToRem(15)};
        color: #C5C7CD;
        margin-right: ${pixelToRem(15)};
    }
    & > h2 {
        color: #252733;
        font-size: ${pixelToRem(14)};
        padding-right: ${pixelToRem(14)};
        margin: auto;
    }
    & > img {
        height: ${pixelToRem(44)};
        width: ${pixelToRem(44)};
    }
`

export default HeadContents;