import React from 'react';


import Header from './header';
import Text from './text'

import './map.css';
const Map = () => {

    let styles={

        width :"80%",
        height:"400",
        frameborder:"0",
        border:"0"
    };

    let gettingHere ={
        header: "directions.header",
        text:"directions.header2",
        directions:[
            {
                type:"directions.uber.type",
                how:"directions.uber.how"
            },
            {
                type:"directions.taxi.type",
                how:"directions.taxi.how"

            },
            {
                type:"directions.shuttle.type",
                how:"directions.shuttle.how"
            },
            {
                type:"directions.bus.type",
                how:"directions.bus.how"
            },




        ]
    };

    const ways = gettingHere.directions.map((way)=>{
        return(
        <div className="col-md-6">
            <Text isBold="true" fontSize={18} textCon={way.type}/>
            <Text fontSize={18} textCon={way.how}/>
        </div>
        );
    });


    return (

        <div className="row div-container">

            <div className="brush">
                <img src="/images/icons/brush-bright2.png"/>
            </div>

            <div className="col-md-6 map-res-padding align-self-center">
                <iframe style={styles} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJS-Ok-_uPsgcREuVrHw5Uzhs&key=AIzaSyCxiZX48pan0F7GhVzkzhVVKO_XAhBreTw" allowfullscreen/>
            </div>
            <div className="col-md-6 map-tab">
                <Header headerFont="Knewave" headerCon={gettingHere.header} isPadding="true"/>
                <Text fontSize={18} textCon={gettingHere.text}/>
                <div className="row">
                    {ways}
                </div>
            </div>
        </div>

    );
};


export default Map;