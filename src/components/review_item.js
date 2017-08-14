/**
 * Created by Daniel on 02/07/2017.
 */

import React from 'react';

import Text from '../base components/text';
import Image from '../base components/image';
import {Provider , Avatar} from 'rebass';
import {FormattedMessage,injectIntl} from 'react-intl'

const ReviewItem = (props) =>{

    let reviewItemStyle = {
        color : "#FFFFFF",
        fontStyle: "italic",
        fontFamily:"Helvetica Neue",
        fontWeight : "300"
    };

    const imgs =  <FormattedMessage id={props.reviewItem.profileImage}/>

    return(
        <div className={props.className} style={reviewItemStyle}>

                <Text textSize={25} textCon={props.reviewItem.review}/>
                <Avatar size={58}
                        src={props.intl.formatMessage({id: props.reviewItem.profileImage })}/>
                <Text textSize={20} textCon={props.reviewItem.details}/>

        </div>
    );


};
export default injectIntl(ReviewItem);