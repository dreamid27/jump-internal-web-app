import styled from '@emotion/styled';

const Container = styled.div`
    background-color: #363740;
    width: 255px;
    height: 100vh;
    & > a {
            text-decoration: none;
            padding: 18px 0;
            color: white;
            font-size: 16px;
            text-align: center;
            display: block;
        }
`

export const HeadNav = styled.div`
    ${Container} {
        background-color: red;
    }
`

export const ListNav = styled.div`
    ${Container} {
        & > a {
            text-decoration: none;
            padding: 18px 0;
            color: white;
            font-size: 16px;
            text-align: center;
            display: block;
        }
    }
`

export default Container;