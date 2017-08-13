/**
 * Created by Daniel on 01/07/2017.
 */

import React, {Component} from 'react'
import { Player, BigPlayButton } from 'video-react';
import Header from '../base components/header';


import './home.css'
import '../../node_modules/video-react/dist/video-react.css';
import { FormattedMessage } from 'react-intl';


const Home = () =>{

    let styleShadow = {
        boxShadow: "4px 4px 10px black"
    };

    let styleHead={
        paddingRight: "29",

    };

        return(


            <div className="background-home row">

                 {/* <div >className="video-text-items"*/}

                    <div className="video-div col-xs-12 col-sm-6 col-md-6 col-xl-6 large-video" >


                        <div style={styleShadow}>
                            <Player
                                playsInline
                                poster="/videos/poster.png"
                                src="/videos/LagartoClipMixed.mp4"
                                fluid='true'
                                width={320}
                                height={240}
                            >
                                <BigPlayButton position="center" />
                            </Player>

                        </div>

                    </div>

                    <div className="header-align col-xs-12 col-sm-6 text-pad">

                        {/*<div style={styleHead}>*/}
                            <Header headerFont="Knewave" isfontSize="true" isPadding="true"  headerCon="home.header1"/>
                        {/*</div>*/}

                        <Header headerFont="Knewave" isfontSize="true"  headerCon="home.header2"/>

                        <div className="div-btn">
                            <a href="https://reservation.frontdeskmaster.com/?hostelId=55YNdD2BGaOA8NEgg051Y5GjKNtPneSe" className="button">
                                <FormattedMessage id="home.button"/>
                                <img className="monk-size" src="/images/icons/monk.png" />
                            </a>
                        </div>
                    </div>
                {/*</div>*/}

            </div>


        );

};
 export default Home;