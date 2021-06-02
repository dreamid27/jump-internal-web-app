import styled from '@emotion/styled';

export const Container = styled.div`
`

export const HeadContent =styled.div`
    margin: 1.88rem 1.88rem 3.38rem 1.88rem ;
    display: flex;
    align-items: center;
    & > h1 {
        font-size: 1.5rem;
        color: #252733;
        padding-right: 43.4rem;
        margin: auto;
    }
    & > svg {
        height: 0.94rem;
        width: 0.94rem;
        color: #C5C7CD;
        margin-right: 1.5rem;
    }
    & > h2 {
        color: #252733;
        font-size: 0.88rem;
        padding-right: 0.88rem;
        margin: auto;
    }
    & > img {
        height: 2.75rem;
        width: 2.75rem;
    }
`

export const Content = styled.div`
    padding: 0rem 1.88rem;
    & > ant-table-wrapper {
        background-color: red;
    }
`

export const TiketDetailsView = styled.div`
    display: flex;
    align-items: center;
    & > img {
        height: 2.75rem;
        width: 2.75rem;
    }
    & > div {
        margin-left: 1.5rem;
        & > h1 {
            margin: 0rem;
            color: #252733;
            font-size: 0.88rem;
        }
        & > h2 {
            margin: 0rem;
            color: #C5C7CD;
            font-size: 0.75rem;
        }
    }
`

export const CustomerNameView = styled.div`
    & > h1 {
        margin: 0rem;
        color: #252733;
        font-size: 0.88rem;
    }
    & > h2 {
        margin: 0rem;
        color: #C5C7CD;
        font-size: 0.75rem;
    }
`

export const DateView = styled.div`
    & > h1 {
        margin: 0rem;
        color: #252733;
        font-size: 0.88rem;
    }
    & > h2 {
        margin: 0rem;
        color: #C5C7CD;
        font-size: 0.75rem;
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
        font-size: 0.69rem;
        background-color: #F12B2C;
        width: 3.25rem;
        height: 1.5rem;
        border-radius: 6.25rem;
    }
    & > svg {
        position: absolute;
        right: 0;
        height: 1.5rem;
        width: 1.5rem;
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
        font-size: 0.69rem;
        background-color: #29CC97;
        width: 4.75rem;
        height: 1.5rem;
        border-radius: 6.25rem;
    }
    & > svg {
        position: absolute;
        right: 0;
        height: 1.5rem;
        width: 1.5rem;
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
        font-size: 0.69rem;
        background-color: #FEC400;
        width: 3.25rem;
        height: 1.5rem;
        border-radius: 6.25rem;
    }
    & > svg {
        position: absolute;
        right: 0;
        height: 1.5rem;
        width: 1.5rem;
        color: #C5C7CD;
    }
`

export default Container;