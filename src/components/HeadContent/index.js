import React from 'react';
import { Bell, MagnifyingGlass } from 'phosphor-react';
import Avatar from './images/photo.png';
import HeadContents, { Left, Right } from './styles';

const HeadContent = () => {
    return (
        <HeadContents>
            <Left>
                Tickets
            </Left>
            <Right>
                <MagnifyingGlass />
                <Bell />
                <h2>Jones Ferdinand</h2>
                <img src={Avatar} alt='Avatar'></img>
            </Right>
        </HeadContents>
    );
};

export default HeadContent;