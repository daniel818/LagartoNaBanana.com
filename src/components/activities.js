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
            header: "activities.header",
            tabsActivities: [
                {
                    index:0,
                    text: "activities.breakfast",
                    img: "/images/active/breakfast.jpg"

                },
                {
                    index:1,
                    text: "activities.dinner",
                    img: "/images/active/vegdinner.jpg"
                },

                {
                    index:2,
                    text: "activities.med",
                    img: "/images/active/meditation.jpg"
                },
                {
                    index:3,
                    text: "activities.dance",
                    img: "/images/active/dance.jpg"
                },
                {
                    index:4,
                    text: "activities.surf",
                    img: "/images/active/surfing.jpg"
                },
                {
                    index:5,
                    text: "activities.yoga",
                    img: "/images/active/yoga.jpg"
                }
            ],
            tabsFacilities: [

                {
                    index:0,
                    text: "facilities.pool",
                    img: "/images/facilities/swimingpool.jpg"
                },
                {
                    index:1,
                    text: "facilities.hammock",
                    img: "/images/facilities/hammockarea.jpg"
                },
                {
                    index:2,
                    text: "facilities.wifi",
                    img: "/images/facilities/wifi.jpg"
                },
                {
                    index:3,
                    text: "facilities.share",
                    img: "/images/facilities/sharedkitchen.jpg"
                },
                {
                    index:4,
                    text: "facilities.area",
                    img: "/images/facilities/batlounge.jpg"
                },
                {
                    index:5,
                    text: "facilities.bar",
                    img: "/images/facilities/bar.jpg"
                },
                {
                    index:6,
                    text: "facilities.bbq",
                    img: "/images/facilities/bar.jpg"

                }
            ],
            activeBtn: 1

        };


    }


    changeTab(index){
        this.setState({
            activeTab:index
        });
    };

    selectActivities(){
        this.setState({
            tabsActivities: [
                {
                    index:0,
                    text: "activities.breakfast",
                    img: "/images/active/breakfast.jpg"

                },
                {
                    index:1,
                    text: "activities.dinner",
                    img: "/images/active/vegdinner.jpg"
                },

                {
                    index:2,
                    text: "activities.med",
                    img: "/images/active/meditation.jpg"
                },
                {
                    index:3,
                    text: "activities.dance",
                    img: "/images/active/dance.jpg"
                },
                {
                    index:4,
                    text: "activities.surf",
                    img: "/images/active/surfing.jpg"
                },
                {
                    index:5,
                    text: "activities.yoga",
                    img: "/images/active/yoga.jpg"
                },
                {
                    index:6,
                    text: "activities.sound",
                    img: "/images/active/yoga.jpg"
                }
            ],
            header: "activities.header",
            activeBtn: 1
        });
    }
    selectFacilities(){
        this.setState({
            tabsActivities: this.state.tabsFacilities,
            header: "facilities.header",
            activeBtn: 2
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

        const tabs = this.state.tabsActivities.map((tab) =>{
            return <button  key={tab.index} className={this.state.activeTab === tab.index ? "active" : "no-active"}
                    onClick={()=>this.changeTab(tab.index)}>
                <FormattedMessage id={tab.text}/>
            </button>
        });

        const activeTab = this.state.tabsActivities[this.state.activeTab];

        return(


        <div  className="align-self-center row" style={styleAct}>

            <div className="brush">
                <img src="/images/icons/brush-yellow.png"/>
            </div>


            <div className="col-12">
                <button
                    className={this.state.activeBtn === 1 ? "active-category" : "no-active"}
                    onClick={() => this.selectActivities()}>

                    <Header headerFont="'Knewave', cursive" headerCon="activities.categoryAct" isPadding="true"/>
                </button>
                <button
                    className="no-active">

                    <Header headerFont="'Knewave', cursive" headerCon="activities.and" isPadding="true"/>
                </button>
                <button
                    className={this.state.activeBtn === 2 ? "active-category" : "no-active-category"}
                    onClick={() => this.selectFacilities()}>

                    <Header headerFont="'Knewave', cursive" headerCon="activities.categoryFact" isPadding="true"/>
                </button>
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