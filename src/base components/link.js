/**
 * Created by Daniel on 19/07/2017.
 */

import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

const Link =(props) =>{


    return(

            <div style={props.style} className={props.className} onClick={props.onClick} >{props.name}
                <img src={props.src}/>
            </div>

    );
};

export default Link;