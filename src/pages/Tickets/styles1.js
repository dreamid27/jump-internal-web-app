import styled from '@emotion/styled';
import pixelToRem from '../../utils/helpers/pixelToRem';

export const Container = styled.div`
`

export const Content = styled.div`
    padding: ${pixelToRem(0)} ${pixelToRem(30)};
    & > ant-table-wrapper {
        background-color: red;
    }
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
            margin: ${pixelToRem(0)};
            color: #252733;
            font-size: ${pixelToRem(14)};
        }
        & > h2 {
            margin: ${pixelToRem(0)};
            color: #C5C7CD;
            font-size: ${pixelToRem(14)};
        }
    }
`

export const CustomerNameView = styled.div`
    & > h1 {
        margin: ${pixelToRem(0)};
        color: #252733;
        font-size: ${pixelToRem(14)};
    }
    & > h2 {
        margin: ${pixelToRem(0)};
        color: #C5C7CD;
        font-size: ${pixelToRem(14)};
    }
`

export const DateView = styled.div`
    & > h1 {
        margin: ${pixelToRem(0)};
        color: #252733;
        font-size: ${pixelToRem(14)};
    }
    & > h2 {
        margin: ${pixelToRem(0)};
        color: #C5C7CD;
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
        background-color: #F12B2C;
        width: ${pixelToRem(52)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: #FFFFFF;
    }
    & > svg {
        position: absolute;
        right: ${pixelToRem(0)};
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
        color: #C5C7CD;
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
        background-color: #29CC97;
        width: ${pixelToRem(76)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: #FFFFFF;
    }
    & > svg {
        position: absolute;
        right: ${pixelToRem(0)};
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
        color: #C5C7CD;
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
        background-color: #FEC400;
        width: ${pixelToRem(52)};
        height: ${pixelToRem(24)};
        border-radius: ${pixelToRem(100)};
        color: #FFFFFF;
    }
    & > svg {
        position: absolute;
        right: ${pixelToRem(0)};
        height: ${pixelToRem(20)};
        width: ${pixelToRem(20)};
        color: #C5C7CD;
    }
`

export default Container;