/**
 * Created by Daniel on 03/07/2017.
 */

import React from 'react';


const Text = (props) =>{

    let textStyle = {
        fontSize : props.textSize,
        fontWeight: props.isBold ? "bold" :"none",
        fontFamily: props.isEnglebert ?"'Englebert', sans-serif":"sans-serif"

    };

    return(
        <p className={props.className} style={textStyle}>{props.textCon}</p>
    );
};
export default Text;