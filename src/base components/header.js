/**
 * Created by Daniel on 03/07/2017.
 */
/**
 * Created by Daniel on 03/07/2017.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';


const Header = (props) =>{

    let headStyle = {
        fontSize : props.isfontSize === "true" ? "47px" : "38px" ,
        fontFamily: props.headerFont,
        paddingBottom: props.isPadding === "true" ? "12px" : "40px",
        marginLeft: props.marginLeft
    };

    return(
        <h2 className={props.className} style={headStyle}>
            <FormattedMessage id={props.headerCon} />
        </h2>
    );
};


export default Header;