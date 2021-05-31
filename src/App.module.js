/* eslint-disable import/no-anonymous-default-export */
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
`

export const Sidebar = styled.div`
    ${Container}{
        width: 255px;
    }
`

export const Content = styled.div`
    ${Container} {
        width: 1.185px;
    }
`
export default Container;
// export default Container;