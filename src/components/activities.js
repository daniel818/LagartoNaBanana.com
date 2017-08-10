/**
 * Created by Daniel on 02/07/2017.
 */
import React,{Component} from 'react';

import Header from '../base components/header';

import './activities.css';

class Activities extends Component{


    constructor(props){
        super(props);

        this.state = {
            activeTab : 2,
            tabs: [
                {
                    index:0,
                    text: "Delicious breakfast",
                    img: "/images/food.jpg"
                },
                {
                    index:1,
                    text: "Swimming Pool",
                    img: "/images/pool.jpg"
                },
                {
                    index:2,
                    text: "Hammock Area",
                    img: "/images/hammocks.jpg"
                },
                {
                    index:3,
                    text: "Free WiFi",
                    img: "/images/wifi.jpg"
                },
                {
                    index:4,
                    text: "Shared Kitchen",
                    img: "/images/kitchen.jpg"
                },
                {
                    index:5,
                    text: "Dance Classes",
                    img: "/images/food.jpg"
                },
                {
                    index:6,
                    text: "Surfing Lessons",
                    img: "/images/surfing.jpg"
                },
                {
                    index:7,
                    text: "Free Yoga",
                    img: "/images/yoga-act.jpg"
                }
            ]
        }
    }

    changeTab(index){
        this.setState({
            activeTab:index
        });
    }



    render(){

        let styleAct = {
            backgroundColor : "#2E2929",
            color: "#FFFFFF",
            fontSize: 15,
            paddingTop: "115px",
            paddingBottom: "90px",
            position: "relative"
        };

        let headerFix = {
          marginLeft: "0%"
        };

        const tabs = this.state.tabs.map((tab) =>{
            return <button  key={tab.index} className={this.state.activeTab === tab.index ? "active" : "no-active"}
                    onClick={()=>this.changeTab(tab.index)}>{tab.text} </button>
        });

        const activeTab = this.state.tabs[this.state.activeTab];

        return(


        <div  className="align-self-center row" style={styleAct}>

            <div className="brush">
                <img src="/images/icons/brush-yellow.png"/>
            </div>

            <div className="col">
            <Header style={headerFix} headerFont="'Knewave', cursive" headerCon="Activities and Facilities"/>
            </div>

            <div className="col-12">

            <div className="tabs-font">
                {tabs}
            </div>
            </div>

            <div className="col-12">

            <div className="container-image">
            <img className="image-act img-responsive" src={activeTab.img} alt={activeTab.text}/>
            </div>
            </div>
        </div>

        );
    }
}

export default Activities;