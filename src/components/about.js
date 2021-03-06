/**
 * Created by Daniel on 02/07/2017.
 */
import React ,{Component} from 'react'

import Header from '../base components/header';
import Text from '../base components/text';
import Image from '../base components/image';

import {FormattedMessage,injectIntl} from 'react-intl'
import  Slider  from 'react-slick';

import './about.css';

class About extends Component{


    constructor(props,intl){

        super(props,intl);

        this.state = {
            header :"about.header",
            content:  "about.description",
            selectedImd: 0,
            images:[
                {
                    id:0,
                    src:"/images/about/aboutlagarto1.png"
                },
                {
                    id:1,
                    src:"/images/about/aboutlagarto2.png"
                },
                {
                    id:2,
                    src:"/images/about/aboutlagarto3.png"
                },
                {
                    id:3,
                    src:"/images/about/aboutlagarto4.png"
                },
                {
                    id:4,
                    src:"/images/about/aboutlagarto5.png"
                }
            ]
        }
    }

    render() {
       const { header } = this.state;

        let brushStyle ={
            position: "absolute",
            height: "72px",
            top: "-16px",
        };

        let brush2Style ={
            position: "relative",
            height: "72px",
            bottom: "50px",
            maxWidth:"100%"
        };

        let settings = {
            arrows:false,
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            fade: true
        };

        let aboutStyle={
            backgroundColor: "#1760BE",
            color: "#FFFFFF",
            textAlign: "left",
            paddingBottom:"0px",
            paddingTop: "40px",
            position: "relative"
        };

        const image = this.state.images.map((image,i) =>{
            return(
                <div key={i}>
                    <Image
                        brushSrc="images/icons/brush-blue-new.png"
                        brush2Src="images/icons/brush-blue-new.png"
                        imgSrc={this.state.images[image.id].src}
                        className="img-responsive"
                        brushStyle={brushStyle}
                        brush2Style={brush2Style}
                    />
                </div>
            )
        });

       return (

           <div className="row" style={aboutStyle}>

               <div className="brush">
                   <img src="/images/icons/brush-blue-new.png"/>
               </div>

               <div className="col-sm-12 col-xs-12 col-md-6 about-padding-top">

                   <Header headerFont="'Knewave', cursive" headerCon={header} marginLeft="14%"/>

                   <div className="text-about">
                       <Text textSize={16} textCon={this.state.content}/>
                   </div>

               </div>

               <div className="col-sm-12 col-xs-12 col-md-6 img-res-padding">
                   <div>
                       <Slider {...settings} >
                           {image}
                       </Slider>
                   </div>
               </div>
        </div>
       );
    }
}

export default About;

