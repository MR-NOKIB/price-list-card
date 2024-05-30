/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 mb-3 font-medium text-xl text-black hover:bg-purple-600 rounded p-1'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;