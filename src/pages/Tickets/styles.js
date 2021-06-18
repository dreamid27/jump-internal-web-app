import styled from '@emotion/styled';
import pixelToRem from '../../utils/helpers/pixelToRem';
import { DARK_BLUE, GREEN, LIGHT_BLUE, LIGHT_GREY, RED, WHITE, YELLOW } from '../../utils/styles/color';

export const Container = styled.div`
`

export const Content = styled.div`
    padding: 0 ${pixelToRem(30)};
`

export const TiketDetailsView = styled.div`
    display: flex;
    align-items: center;
    & > img {
        height: ${pixelToRem(44)};
        width: ${pixelToRem(44)};
    }
    & > div {
        margin-left: ${pixelToRem(24)};
        & > h1 {
            margin: 0;
            color: ${DARK_BLUE};
            font-size: ${pixelToRem(14)};
        }
        & > h2 {
            margin: 0;
            color: ${LIGHT_GREY};
            font-size: ${pixelToRem(14)};
        }
    }
`

export const CustomerNameView = styled.div`
    & > h1 {
        margin: 0;
        color: ${DARK_BLUE};
        font-size: ${pixelToRem(14)};
    }
    & > h2 {
        margin: 0;
        color: ${LIGHT_GREY};
        font-size: ${pixelToRem(14)};
    }
`

export const DateView = styled.div`
    & > h1 {
        margin: 0;
        color: ${DARK_BLUE};
        font-size: ${pixelToRem(14)};
    }
    & > h2 {
        margin: 0;
        color: ${LIGHT_BLUE};
        font-size: ${pixelToRem(12)};
    }
`

export const HighLevel = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${pixelToRem(11)};
        background-color: ${RED};
        width: ${pixelToRem(52)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: ${WHITE};
    }
    & > svg {
        position: absolute;
        right: 0;
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
        color: ${LIGHT_GREY};
    }
`

export const NormalLevel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${pixelToRem(11)};
        background-color: ${GREEN};
        width: ${pixelToRem(76)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: ${WHITE};
    }
    & > svg {
        position: absolute;
        right: 0;
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
        color: ${LIGHT_GREY};
    }
    
`
export const LowLevel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${pixelToRem(11)};
        background-color: ${YELLOW};
        width: ${pixelToRem(52)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: ${WHITE};
    }
    & > svg {
        position: absolute;
        right: 0;
        height: ${pixelToRem(20)};
        width: ${pixelToRem(20)};
        color: ${LIGHT_GREY};
    }
`



export default Container;