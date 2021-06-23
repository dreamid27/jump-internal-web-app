import styled from '@emotion/styled';
import pixelToRem from '../../utils/helpers/pixelToRem';
import { BLUE, LIGHT_BLUE } from '../../utils/styles/color';

const Container = styled.div`
    height: 100vh;
`

export const HeadNav = styled.div`
    display: flex;
    align-items: center;
    padding: ${pixelToRem(37)} 0 ${pixelToRem(59)} ${pixelToRem(32)};
    & > div {
        font-size: ${pixelToRem(19)};
        color: ${LIGHT_BLUE};
        font-weight: bold;
    }
`

export const Logo = styled.div`
    margin-right: ${pixelToRem(12)};
    background-color: ${BLUE};
    width: ${pixelToRem(32)};
    height: ${pixelToRem(32)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    & > img {
        margin: auto;
    }
`

export const ListNav = styled.div`
    & > a {
            text-decoration: none;
            padding: ${pixelToRem(20)} 0 ${pixelToRem(20)} ${pixelToRem(32)};
            font-size: ${pixelToRem(16)};
            color: ${LIGHT_BLUE};
            display: flex;
            align-items: center;
            & > svg {
                margin-right: ${pixelToRem(25)};
                width: ${pixelToRem(16)};
                height: ${pixelToRem(16)};
            }
        }
`

export default Container;