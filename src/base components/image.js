/**
 * Created by Daniel on 04/07/2017.
 */
import React from 'react';


const Image =(props) =>{

    let brushStyle ={
        position: "absolute",
        height: "72px",
        top: "-16px",
    };



    let brush2Style ={
        position: "relative",
        height: "72px",
        bottom: "50px"
    };

    let brushColor={
        blue: "/images/icons/brush-blue.png",
        bright: "/images/icons/brush-light-blue.png",
        yellow: "/images/icons/brush-yellow.png"
    };

    return(
        <div>
            <img className={props.brushclassName} src={props.brushSrc} style={props.brushStyle}/>
            <img className={props.className} src={props.imgSrc} style={props.imgStyle}/>
            <img className={props.brush2className} src={props.brush2Src} style={props.brush2Style}/>
        </div>

    );
};

export default Image;