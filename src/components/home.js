/**
 * Created by Daniel on 01/07/2017.
 */

import React, {Component} from 'react'
import { Player, BigPlayButton } from 'video-react';
import Header from '../base components/header';


import './home.css'
import '../../node_modules/video-react/dist/video-react.css';
import { FormattedMessage } from 'react-intl';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-101371483-1');

const Home = () =>{
    const orderLink = "https://new-booking.frontdeskmaster.com/?hostelId=m%2F5%2B%2FrJ7YEeR%2Bqaj%2BajxEF6Cw4ARsrjS";
    
    let styleShadow = {
        boxShadow: "4px 4px 10px black"
    };


    function handleClick() {
        ReactGA.event({
            category: 'Book Now',
            action: 'Book Now',
        });
    }



    return(


            <div className="background-home row">


                    <div className="video-div col-xs-12 col-sm-6 col-md-6 col-xl-6 large-video large-video1" >


                        <div style={styleShadow}>
                            <Player
                                playsInline
                                poster="/videos/poster.png"
                                src="/videos/LagartoClipMixed.mp4"
                                fluid={true}
                                width={320}
                                height={240}
                            >
                                <BigPlayButton position="center" />
                            </Player>

                        </div>

                    </div>

                    <div className="header-align col-xs-12 col-sm-6 text-pad">

                            <Header headerFont="Knewave" isfontSize="true" isPadding="true"  headerCon="home.header1"/>

                        <Header headerFont="Knewave" isfontSize="true"  isPadding={(window.innerWidth < 576) ? "true" : "false"} headerCon="home.header2"/>

                        <div className="div-btn">
                            <a href={orderLink}
                               className="button"
                               onClick={()=> {handleClick()}} >
                                <FormattedMessage id="home.button"/>
                                <img className="monk-size" src="/images/icons/monk.png" />
                            </a>
                        </div>
                    </div>

            </div>


        );

};
 export default Home;
