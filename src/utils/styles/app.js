import styled from '@emotion/styled';
import pixelToRem from '../helpers/pixelToRem';

export const Container = styled.div`
    display: flex;
`

export const SideBar = styled.div`
    position: fixed;
    overflow: auto;
    background-color: #363740;
    width: ${pixelToRem(255)};
`

export const Content = styled.div`
    overflow: hidden;
    background-color: #F7F8FC;
    width: 100%;
    padding-left: ${pixelToRem(255)};
`

export default Container;