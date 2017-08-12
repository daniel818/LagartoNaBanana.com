/**
 * Created by Daniel on 02/07/2017.
 */
import React,{Component} from 'react';

import Header from '../base components/header';

import './activities.css';
import { FormattedMessage } from 'react-intl';

class Activities extends Component{


    constructor(props){
        super(props);

        this.state = {
            activeTab : 2,
            tabs: [
                {
                    index:0,
                    text: "activities.breakfast",
                    img: "/images/food.jpg"
                },
                {
                    index:1,
                    text: "activities.pool",
                    img: "/images/pool.jpg"
                },
                {
                    index:2,
                    text: "activities.hammock",
                    img: "/images/hammocks.jpg"
                },
                {
                    index:3,
                    text: "activities.wifi",
                    img: "/images/wifi.jpg"
                },
                {
                    index:4,
                    text: "activities.share",
                    img: "/images/kitchen.jpg"
                },
                {
                    index:5,
                    text: "activities.dance",
                    img: "/images/dance.jpg"
                },
                {
                    index:6,
                    text: "activities.surf",
                    img: "/images/surfing.jpg"
                },
                {
                    index:7,
                    text: "activities.yoga",
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
                    onClick={()=>this.changeTab(tab.index)}>
                <FormattedMessage id={tab.text}/>
            </button>
        });

        const activeTab = this.state.tabs[this.state.activeTab];

        return(


        <div  className="align-self-center row" style={styleAct}>

            <div className="brush">
                <img src="/images/icons/brush-yellow.png"/>
            </div>

            <div className="col">
            <Header style={headerFix} headerFont="'Knewave', cursive" headerCon="activities.header"/>
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