/**
 * Created by Daniel on 04/07/2017.
 */
import React from 'react';

import Text from './text';
import './contact_item.css';

const ContactItem = (props) =>{

    let styleText = {
        paddingLeft: "31px",
        fontWeight: "100",
        fontStyle: "italic",
        alignSelf: "center",
        //fontFamily: "sans-serif"
    };
    return(
        <div className="align-contact">
            <i className={props.iconSrc + " align-self-center"} aria-hidden="true"/>
            <div style={styleText}>
                <a href={props.link}>{props.info}</a>
            </div>
        </div>
    );
};

export default ContactItem;