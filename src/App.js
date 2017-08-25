import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Rooms from'./components/rooms';
import Room from'./components/room';

import ReviewSlider from './components/review_slider';
import Contacts from './components/contact';
import Activities from './components/activities';
import Map from '../src/base components/map';
import ImageSlider from '../src/components/image_slider';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
    }


    render() {
    return (
      <div className="App">
          <Navbar updateLocale={this.props.updateLocale} />
          <Home/>
          <ReviewSlider/>
          <About/>
          <Activities/>
          <ImageSlider/>
          <Room/>
          <Map/>
          <Contacts/>
      </div>
    );
  }
}

export default App;
