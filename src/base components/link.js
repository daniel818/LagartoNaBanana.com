/**
 * Created by Daniel on 19/07/2017.
 */

import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

const Link =(props) =>{


    return(

            <RouterLink style={props.style} className={props.className} to={props.to} >{props.name}
                <img src={props.src}/>
            </RouterLink>

    );
};

export default Link;