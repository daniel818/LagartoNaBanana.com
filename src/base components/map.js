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
        header: "Getting Here",
        text:"From Natal airport....",
        directions:[
            {
                type:"By Uber",
                how:"R$120-R$150"
            },
            {
                type:"By Taxi",
                how:"R$160 – R$180 – Takes about 1h30 min. "

            },
            {
                type:"By Shuttle",
                how:"R$50 - Exit through baggage collection and on the right is the VIP " +
                "Transfer stand which regularly provides shuttles to and from Pipa."
            },
            {
                type:" From Natal Centre - By Bus ",
                how:" R$15 – Buses regularly leave between 6am and 6pm with " +
                "reduced hours on Sundays. Buses are leaving from central station of " +
                "Natal (Rodoviia) or from Ponta Negra close to Natal shopping centre."
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
                <Header headerFont="Knewave" headerCon="Getting Here" isPadding="true"/>
                <Text fontSize={18} textCon={gettingHere.text}/>
                <div className="row">
                    {ways}
                </div>
            </div>
        </div>

    );
};


export default Map;