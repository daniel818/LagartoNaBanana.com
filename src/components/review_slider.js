/**
 * Created by Daniel on 04/07/2017.
 */


import React from 'react';
import ReviewItem from './review_item';

const ReviewSlider = () =>{

    let reviewItem = [
        {
            review: "reviews.review1.text",
            profileImage: "reviews.review1.img",
            details: "reviews.review1.name"
        },
        {
            review: "reviews.review2.text",
            profileImage: "reviews.review2.img",
            details: "reviews.review2.name"
        },
        {
            review: "reviews.review3.text",
            profileImage: "reviews.review3.img",
            details: "reviews.review3.name"
        },
        {
            review: "reviews.review4.text",
            profileImage: "reviews.review4.img",
            details: "reviews.review4.name"
        },
        {
            review: "reviews.review5.text",
            profileImage: "reviews.review5.img",
            details: "reviews.review5.name"
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

            <div style={{top: "-6px"}} className="brush">
                <img src="/images/icons/brush-black.png"/>
            </div>

            <div id="carouselExampleControls" className="carousel slide col" data-ride="carousel">
                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">
                        <ReviewItem className="col" reviewItem={reviewItem[0]}/>
                    </div>

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