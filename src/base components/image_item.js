/**
 * Created by Daniel on 04/07/2017.
 */

import React from 'react';

import Header from '../base components/header';
import Text from '../base components/text';
import Image from '../base components/image';

import  Slider  from 'react-slick';

import './image_item.css';

const ImageItem = (props) => {

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

    const specs = props.text.map((text) => {
        return (
            <div className="col-xl-6 div-list-items">
                <img  src="/images/wood.png"/>
                <Text className="p-items"textSize={15} isBold="true" textCon={text}/>
            </div>
        );

    });

    const imageSlide = props.images.map((image) =>{
        return(
        <div>
            <Image
                imgSrc={image}
                className="img-respons"
            />
        </div>
        );
    });

    let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,

    };

    return(
        <div>



            <div className="specs-padding">

                <div >
                    <img src="/images/monkey-item.png"/>
                    <Header className="color-header" headerFont="Knewave" headerCon={props.header}/>
                </div>

                {specs}

            </div>
            <div className="container-slider-item img-res-padding-rooms">
                <img className="brushStyle-g brush-res" src="/images/icons/brush-rooms.png"/>
                <Slider {...settings}>
                    {imageSlide}
                </Slider>
            </div>
        </div>
    );
};

export default ImageItem;