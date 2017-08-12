/**
 * Created by Daniel on 02/07/2017.
 */
import React from 'react';
import ImageItem from '../base components/image_item';
import Header from '../base components/header';

import './rooms.css';

const Rooms = () => {

    let roomsDetail =[
        {

            roomType : "room.dorms.header",
            roomSpecs: ['room.dorms.people' ,
                       'room.dorms.what' ,
                       'room.dorms.fan' ,
                       'room.dorms.shower'],
            images:
                [
                    '/images/rooms/dorms.jpg',
                    '/images/rooms/bathroom_dorms.jpg',
                    '/images/rooms/balcony_dorms.jpg',
                    '/images/rooms/bedroom_cabana.jpg',
                    '/images/rooms/buildng_cabana.jpg',
                    '/images/rooms/bathroom_cabana.jpg',
                    '/images/rooms/outside_cabana.jpg',
                    '/images/rooms/shower_cabana.jpg',
                    '/images/rooms/toilet_cabana.jpg',
                    '/images/rooms/toilet2_cabana.jpg'
                ]
        },
        {
            roomType : "room.private.header",
            roomSpecs: ['room.private.people',
                       'room.private.what',
                       'room.private.fan',
                       'room.private.shower'],
            images:
                [
                    '/images/rooms/room.jpg',
                    '/images/rooms/bathroom_private.jpg',
                    '/images/rooms/outside_private.jpg',
                    '/images/rooms/bathroom_solo.jpg',
                    '/images/rooms/bedroom2_solo.jpg',
                    '/images/rooms/bedroom_solo.jpg',
                    '/images/rooms/shower_solo.jpg',
                    '/images/rooms/toilet_solo.jpg'
            ]
        },
    ];



    const imageItem = roomsDetail.map((room) => {


        return (

            <div className="col-md-6 col-xl-6">
                <ImageItem header={room.roomType} text={room.roomSpecs} images={room.images}/>
            </div>
        );
    });

    return(


        <div className="row rooms-back">

            <div className="brush">
                <img src="/images/icons/brush-green.png"/>
            </div>

            <div className="col-12">
                <Header headerFont="'Knewave', cursive" headerCon="room.header"/>
            </div>
            {imageItem}
        </div>


    );

};

export default Rooms;