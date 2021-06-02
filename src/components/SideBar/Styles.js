import styled from '@emotion/styled';

const Container = styled.div`
    height: 100vh;
`

export const HeadNav = styled.div`
    display: flex;
    align-items: center;
    padding: 2.32rem 0rem 3.69rem 2rem;
    & > div {
        font-size: 1.19rem;
        color: #A4A6B3;
        font-weight: bold;
    }
`

export const Logo = styled.div`
    margin-right: 0.75rem;
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
                margin-right: 1.5rem;
                width: 1rem;
                height: 1rem;
            }
        }
`

export default Container;