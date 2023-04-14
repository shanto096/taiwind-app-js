import React from 'react';

const Link = ({list}) => {
    return (
        <div>
            <li className='m-4 text-white'>
                <a href={list.path}>{list.name}</a>
            </li>
        </div>
    );
};

export default Link;