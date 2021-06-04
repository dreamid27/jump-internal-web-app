import React from 'react';
import { Bell, MagnifyingGlass } from 'phosphor-react';
import Avatar from './images/photo.png';
import HeadContents from './styles';

const HeadContent = () => {
    return (
        <HeadContents>
                <h1>Tickets</h1>
                <MagnifyingGlass />
                <Bell />
                <h2>Jones Ferdinand</h2>
                <img src={Avatar} alt='Avatar'></img>
            </HeadContents>
    );
};

export default HeadContent;