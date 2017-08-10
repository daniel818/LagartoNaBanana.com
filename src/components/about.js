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
            header :"About Lagarto",
            content:  "Just 13 minutes from Pipa's buzzing center and the marvelous Praia do Amor, " +
            "our sharing community is the ideal place to connect...with nature, yourself, and other " +
            "adventurous souls in our jungle surroundings.",
            selectedImd: 0,
            images:[
                {
                    id:0,
                    src:"/images/about_resize.png"
                },
                {
                    id:1,
                    src:"/images/menu_.png"
                },
                {
                    id:2,
                    src:"/images/secret_sunset.jpg"
                }
            ]
        }
    }



    // let images =[
    //                 {
    //                     id:0,
    //                     src:"/images/about_resize.png"
    //                 },
    //                 {
    //                     id:1,
    //                     src:"/images/menu_.png"
    //                 },
    //                 {
    //                     id:2,
    //                     src:"/images/secret_sunset.jpg"
    //                 }
    //             ];
    render() {
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
           autoplaySpeed: 5000,
           slidesToShow: 1,
           slidesToScroll: 1,
           pauseOnHover: true,
           fade: true
        };

       let aboutStyle={
           backgroundColor: "#126cfb",
           color: "#FFFFFF",
           textAlign: "left",
           paddingBottom:"70px",
           paddingTop: "100px",
           position: "relative"
       };

       return (


           <div className="row" style={aboutStyle}>

               <div className="brush">
                   <img src="/images/icons/brush-blue.png"/>
               </div>

               <div className="col-sm-12 col-xs-12 col-md-6 about-padding-top">
                   <Header headerFont="'Knewave', cursive" headerCon={<FormattedMessage id='about.header' />} marginLeft="14%"/>

                   <div className="text-about">
                   <Text textSize={16} textCon={this.state.content}/>
                   </div>

               </div>


               <div className="col-sm-12 col-xs-12 col-md-6 img-res-padding">
                   <div>

                  <Slider {...settings} >
                      <div>
                          <Image
                              brushSrc="images/icons/brush-blue.png"
                              brush2Src="images/icons/brush-blue.png"
                              imgSrc={this.state.images[0].src}
                              className="img-responsive"
                              brushStyle={brushStyle}
                              brush2Style={brush2Style}
                          />
                      </div>
                      <div>
                          <Image
                              brushSrc="images/icons/brush-blue.png"
                              brush2Src="images/icons/brush-blue.png"
                              imgSrc={this.state.images[1].src}
                              className="img-responsive"
                              brushStyle={brushStyle}
                              brush2Style={brush2Style}
                          />
                      </div>
                  </Slider>

                   </div>
               </div>
        </div>


    );

    }
}



export default About;