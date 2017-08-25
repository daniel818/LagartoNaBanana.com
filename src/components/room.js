/**
 * Created by Daniel on 02/07/2017.
 */
import React, {Component} from 'react';
import ImageItem from '../base components/image_item';
import Header from '../base components/header';
import { FormattedMessage } from 'react-intl';
import Text from "../base components/text";

import './rooms.css';

class Room extends Component{

    constructor(props) {
        super(props);

        this.state = {
            activeTab:0,

            roomType:[
                {

                    index:0,
                    include: "facilities.include",
                    roomType : "room.dorms.header",
                    cost:"room.dorms.cost",
                    roomSpecs: ['room.dorms.people' ,
                    'room.dorms.what' ,
                    'room.dorms.fan' ,
                    'room.dorms.shower',
                    'room.free'],
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
                    index:1,
                    include: "room.private.include",
                    roomType : "room.private.header",
                    cost:"room.private.cost",
                    roomSpecs: ['room.private.people',
                        'room.private.what',
                        'room.private.fan',
                        'room.private.shower',
                        'room.free'],
                    images:[
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
                {
                    index:2,
                    include: "room.privateTwins.include",
                    roomType : "room.privateTwins.header",
                    cost:"room.privateTwins.cost",
                    roomSpecs: ['room.privateTwins.people',
                        'room.privateTwins.what',
                        'room.privateTwins.fan',
                        'room.privateTwins.shower',
                        'room.free'],
                    images:[
                        '/images/rooms/twin-bed.jpeg',
                    ]
                },
                {
                    index:3,
                    include: "facilities.include",
                    roomType : "room.camping.header",
                    cost:"room.camping.cost",
                    roomSpecs: ['room.camping.people' ,
                        'room.camping.what' ,
                        'room.camping.bath' ,
                        'room.camping.shower',
                        'room.free'],
                    images:
                        [
                            '/images/rooms/cam.png',
                            '/images/rooms/cam-area.jpeg'
                        ]
                }

            ]
        }
    }

    changeTab(index){
        this.setState({
            activeTab:index
        });
    };

render() {

    const tabs = this.state.roomType.map((tab) =>{
        return(<button  key={tab.index} className={this.state.activeTab === tab.index ? "active-room" : "no-active-room"}
                        onClick={()=>this.changeTab(tab.index)}>
            <FormattedMessage id={tab.roomType}/>
            <Text className="include"textSize={15} isBold="true" textCon={tab.include} isEnglebert="true"/>


        </button>);
    });

    const activeTab = this.state.roomType[this.state.activeTab];



    return (


        <div className="row rooms-back">

            <div className="brush">
                <img src="/images/icons/brush-green.png"/>
            </div>

            <div className="col-12">
                <Header isPadding="true" headerFont="'Knewave', cursive" headerCon="room.header"/>
            </div>


            <div className="col tabs-font">
                {tabs}
            </div>

            <div className="col-12">
                <Text className="cost"textSize={23} isBold="true" textCon={activeTab.cost} isEnglebert="true"/>
            </div>

            <div className="col-12">
                <ImageItem header={activeTab.roomType} text={activeTab.roomSpecs} images={activeTab.images}/>
            </div>

        </div>


    )
}

}

export default Room;