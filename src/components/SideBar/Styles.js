import styled from '@emotion/styled';

const Container = styled.div`
    height: 100vh;
`

export const HeadNav = styled.div`
    display: flex;
    align-items: center;
    padding: 2.32rem 0rem 3.69rem 2rem;
    & > h1 {
        font-size: 1.19rem;
        color: #A4A6B3;
        padding-left: 0.75rem;
    }
`

export const Logo = styled.div`
    background-color: #3751FF;
    width: 2rem;
    height: 2rem;
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
            padding: 1.25rem 0rem 1.25rem 2rem;
            font-size: 1rem;
            color: #A4A6B3;
            display: flex;
            align-items: center;
            & > svg {
                padding-right: 1.5rem;
                width: 1rem;
                height: 1rem;
            }
        }
`

export default Container;