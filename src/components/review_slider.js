/**
 * Created by Daniel on 04/07/2017.
 */


import React from 'react';
import ReviewItem from './review_item';

const ReviewSlider = () =>{

    let reviewItem = [
        {
            review: '"The best place to make friends and have fun!!!....the staff ' +
            'is the most amazing people I could ever expect to meet! I feel like I made some real ' +
            'friends there and had one of the best trips in my life thanks to Lagarto na Banana! ' +
            'This trip will be forever in my heart. If you go there, be prepared to never want to leave!!!"',
            profileImage: "/images/review_profiles/Giovana Vescovi.jpg",
            details: "Giovana Vescovi, Brazil"
        },
        {
            review: '""Feels like HOME" ' +
            'Lagarto na Banana is the place to be in Pipa! Its not just a Hostel its a FAMILY"',
            profileImage: "/images/review_profiles/Martina Rechsteiner.jpg",
            details: "Martina Rechsteiner, Zurich"
        },
        {
            review: `"I love this unique place! Nature everywhere, calm and welcoming. 
            Its hard to describe the place! You'll have to come and check it out lol!"`,
            profileImage: "/images/review_profiles/Christelle Louise Giuntini.jpg",
            details: "Christelle Louise Giuntini, Brazil"
        },
        {
            review: '"When I arrived at the hostel late and drained I was revitalized by ' +
            'the energy and the welcoming atmosphere at this hostel. The people are the best ' +
            'part of the hostel and you are never wanting here for anything."',
            profileImage: "/images/review_profiles/Samantha-Lynn Doe.jpg",
            details: "Samantha-Lynn Doe, Canada"
        },
        {
            review: `"!!Most beautiful hostel in the world!!
            For everyone who stays there, you have to know that you are gonna want to stay there forever!!
            Gorgeous place, wonderful rooms, delicious food but most of all beautiful people and only good vibes!"`,
            profileImage: "/images/review_profiles/Mauro Pinelli Pine.jpg",
            details: "Mauro Pinelli Pinè, Italy"
        },
    ];

    const reviewItemGen = reviewItem.map((review)=>{
        return (
            <div className="carousel-item">
                <ReviewItem className="col" reviewItem={review}/>
            </div>
        );
    });

    let reviewStyle = {
        backgroundColor : "#2E2929",
        paddingTop: "90px",
        paddingBottom: "70px",
        position: "relative"
    };

    let reviewItemStyle = {
        fontWeight:"300"
    };

    return(


        <div className="row" style={reviewStyle}>

            <div className="brush">
                <img src="/images/icons/brush-black.png"/>
            </div>

            <div id="carouselExampleControls" className="carousel slide col" data-ride="carousel">
                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">
                        <ReviewItem className="col" reviewItem={reviewItem[0]}/>
                    </div>

                    {/*<div className="carousel-item">*/}
                        {/*<ReviewItem className="col" reviewItem={reviewItem}/>*/}
                    {/*</div>*/}

                    {/*<div className="carousel-item">*/}
                        {/*<ReviewItem className="col" reviewItem={reviewItem}/>*/}
                    {/*</div>*/}
                    {reviewItemGen}

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
        </div>


    );
};

export default ReviewSlider;