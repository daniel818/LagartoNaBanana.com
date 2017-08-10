/**
 * Created by Daniel on 02/07/2017.
 */

import React from 'react';

import Text from '../base components/text';
import Image from '../base components/image';
import {Provider , Avatar} from 'rebass';

const ReviewItem = (props) =>{

    let reviewItemStyle = {
        color : "#FFFFFF",
        fontStyle: "italic",
        fontFamily:"Helvetica Neue",
        fontWeight : "300"
    };

    return(
        <div className={props.className} style={reviewItemStyle}>

                <Text textSize={25} textCon={props.reviewItem.review}/>
                <Avatar size={58} src={props.reviewItem.profileImage}/>
                <Text textSize={20} textCon={props.reviewItem.details}/>

        </div>
    );


};
export default ReviewItem;