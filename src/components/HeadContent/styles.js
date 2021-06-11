import styled from '@emotion/styled'; 
import pixelToRem from '../../utils/helpers/pixelToRem';
import { DARK_BLUE, LIGHT_GREY } from '../../utils/styles/color';

export const HeadContents =styled.div`
    margin: ${pixelToRem(30)} ${pixelToRem(30)} ${pixelToRem(54)} ${pixelToRem(30)};
    display: flex;
    position: relative;
`

export const Left = styled.div`
    position: absolute;
    left: 0;
    font-size: ${pixelToRem(24)};
    color: ${DARK_BLUE};
    margin: auto;
    left: 0;
`

export const Right = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    right: 0;
    & > svg {
        height: ${pixelToRem(15)};
        width: ${pixelToRem(15)};
        color: ${LIGHT_GREY};
        margin-right: ${pixelToRem(15)};
    }
    & > h2 {
        color: ${DARK_BLUE};
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