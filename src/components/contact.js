/**
 * Created by Daniel on 02/07/2017.
 */
import React from 'react';

import  ContactItem from '../base components/contact_item';
import Header from '../base components/header';
import Facebook from '../svg_components/facebook';
import Whatsapp from '../svg_components/whatsapp';

import './contact.css'
const Contact = () => {

    let details = {
    facebook: "https://www.facebook.com/lagartonabananahostel/",
    instagram: "https://www.instagram.com/lagartonabananahostel/",
    whatsapp: +5584996578129,
    address: "Rua Travessa do Sol 22, Pipa",
    email:"lagartonabanana@gmail.com"
    };

    let contactItems=[
        {
            id:0,
            name:"address",
            detail: "Rua Travessa do Sol 22, Pipa",
            icon: "fa fa-home fa-2x"
        },
        {
            id:1,
            name:"telephone",
            detail: "+55 84 99657-8129",
            link: "tel:+55 84 99657-8129",
            icon:  "fa fa-phone fa-2x"
        },
        {
            id:2,
            name:"email",
            detail: "lagartonabanana@gmail.com",
            link:"mailto:lagartonabanana@gmail.com?subject=Reservation",
            icon: "fa fa-envelope fa-2x"
        }
    ];

    let socialMedia = [
        {
            id:3,
            name:"Facebook",
            detail: "Lagarto Na Banana",
            link: "https://www.facebook.com/lagartonabananahostel/",
            icon: "fa fa-facebook-official fa-2x"
        },
        {
            id:4,
            name:"Instagram",
            detail: "@lagartonabanana",
            link: "https://www.instagram.com/lagartonabananahostel/",
            icon: "fa fa-instagram fa-2x"
        },
        {
            id:5,
            name: "Whatsapp",
            detail: "+55 84 99657-8129",
            link:  "https://api.whatsapp.com/send?phone=5584996578129",
            icon: "fa fa-whatsapp fa-2x"
        }
    ];

    let booking = [
        {
            id:6,
            name: "Hostelworld Reviews",
            detail: "Hostelworld Reviews",
            link: "http://www.hostelworld.com/hosteldetails.php/Lagarto-na-Banana/Pipa/269922/reviews?dateFrom=2017-06-27&dateTo=2017-06-30&number_of_guests=2#propname",
            icon: "fa fa-h-square fa-2x"
        },
        {
            id:7,
            name: "Booking Reviews",
            detail: "Booking Reviews",
            link: "https://www.booking.com/hotel/br/lagarto-na-banana.en-gb.html?aid=376388;label=booking-name-he-qdipZM1Jjhyijzghn_Y4GwS57584940617%3Apl%3Ata%3Ap1%3Ap21%2C368%2C000%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138230%3Akwd-65526620%3Alp1008006%3Ali%3Adec%3Adm;sid=790d539c00d0e819aea7071cef423e3f;dist=0;group_adults=2;m_occ=2;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#tab-reviews",
            icon: "fa fa-bed fa-2x"
        }
        ];

    let styleFix={
        marginLeft:"10px"
    };

    const creatList =(item) =>
    {
        return item.map((contact) => {
            return (
                    <ContactItem key={contact.id} iconSrc={contact.icon} info={contact.detail} link={contact.link}/>
            );
        });
    };

    return(

        <div className="row back-contacs">

            <div className="col-12 no-gutters brush" style={{paddingLeft: "0",paddingRight: "0"}}>
                <img style={{width: "100%"}} src="/images/icons/brush-brown.png"/>
            </div>



                <div className="col-12 item-style" style={{paddingTop: "112px"}}>
                    <Header headerFont="'Knewave', cursive" headerCon="Contact Us" />
                </div>

                <div className="col-md-6 col-xs-12 col-sm-6 col-xl-4 item-style" >
                    {creatList(contactItems)}
                </div>

                <div className="col-md-5 col-xs-12 col-sm-6 col-xl-3 item-style">
                    {creatList(socialMedia)}
                </div>

                <div className="col-md-5 col-xs-12 col-sm-6 col-xl-4 item-style">
                    {creatList(booking)}
                </div>


        </div>

    );

};

export default Contact;