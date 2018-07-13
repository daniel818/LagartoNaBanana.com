/**
 * Created by Daniel on 20/07/2017.
 */
import React from 'react';

import Link from '../base components/link';

import './Navbar.css';
import { FormattedMessage } from 'react-intl';

import  ReactGA from "react-ga";
ReactGA.initialize('UA-101371483-1');


const Navbar =(props) =>{
    const orderLink = "https://be-staging.frontdeskmaster.com/?hostelId=m%2F5%2B%2FrJ7YEeR%2Bqaj%2BajxEF6Cw4ARsrjS"
    function handleClick() {
        ReactGA.event({
            category: 'Book Now',
            action: 'Book Now',
        });
    }

    return(
        <nav style={{backgroundImage: "url(images/icons/brush-bright.png",
                     backgroundSize: "100% 62px"}} className="row nav-toggle-back nav-bar-padding1 nav-fix nav-fix1 navbar navbar-toggleable-md navbar-light back-brush">

            <button style={{top: "-13px"}} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <a className="navbar-brand" href="#">
                <img className="logo-style logo-res" src="/images/icons/logo.png"/>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto-left nav-pad-toggle">

                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => props.updateLocale("en-US")} src="/images/icons/england.png"/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => props.updateLocale("es-ES")}   src="/images/icons/sain flaf.png"/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => props.updateLocale("pt-PT")}   src="/images/icons/brazil flag.png"/>
                    </li>

                    <li className="nav-item" >
                        <a style={{color: "#000000"}}
                           href="https://be-staging.frontdeskmaster.com/?hostelId=m%2F5%2B%2FrJ7YEeR%2Bqaj%2BajxEF6Cw4ARsrjS"
                           className="button1 nav-link"
                           onClick={()=>{
                               handleClick()
                           }} >
                            <FormattedMessage id="home.button"/>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;