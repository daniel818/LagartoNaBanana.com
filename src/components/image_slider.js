/**
 * Created by Daniel on 27/07/2017.
 */
import React from 'react';
import Slider from 'react-slick';
import ImageGallery from 'react-image-gallery'
import Header from '../base components/header';

import './image_slider.css';

const ImageSlider = () =>{

    let imgSrcs = [
        {src: "16665190_439846929690185_9128420332559242792_o"},
        {src: "16700696_440506852957526_6042926649715844057_o (1)"},
        {src: "16836220_443197819355096_5453929144300320539_o"},
        {src: "16903456_445671032441108_7319230483164034039_o"},
        {src: "17097997_448195465521998_5001803041749167572_o"},
        {src: "17192593_452205971787614_2030874152996409647_o"},
        {src: "17211963_455254251482786_8109549966109161732_o"},
        {src: "17212144_454825211525690_1969807740022495782_o"},
        {src: "17212152_451006001907611_5072046003837142006_o"},
        {src: "17240644_454459294895615_5277499498615340583_o"},
        {src: "17389032_458672421140969_7479290583794184276_o"},
        {src: "17389041_456326604708884_1760427715263150772_o"},
        {src: "17504234_462065004135044_561252134518441166_o"},
        {src: "17504653_460171387657739_6489095265324138549_o"},
        {src: "17545554_464707993870745_2732757576934863631_o"},
        {src: "17621770_463081250700086_1830365189253431027_o"},
        {src: "17632035_464022847272593_2346312211766293422_o"},
        {src: "17637008_465731270435084_4505723747358724717_o"},
        {src: "17758484_471266929881518_8234210528815071401_o"},
        {src: "17834174_469068426768035_5407767882366205791_o"},
        {src: "17917708_471917846483093_5513812615359099909_o"},
        {src: "17966053_472068526468025_2313706218345493435_o"},
        {src: "18056065_475743692767175_5074171902814380150_o"},
        {src: "18121879_477502405924637_7704196198923286075_o"},
        {src: "18193146_480714998936711_3608287277091327859_o"},
        {src: "18209417_482245372117007_2270049258384917523_o"},
        {src: "18401906_486277338380477_6965367070417204434_o"},
        {src: "18595513_490873927920818_7289575152388894178_o (1)"},
        {src: "18588724_488779668130244_486412676247970664_o"},
        {src: "18880093_499215983753279_6419868593730702189_o"},
        {src: "18922794_499766197031591_666264324817239787_o"},
        {src: "19025082_502559546752256_5766818995322186669_o"},
        {src: "19095513_503497886658422_2954914175625747916_o"},
        {src: "19143960_505590153115862_4526366337491555282_o"},
        {src: "19388542_507332079608336_2333156005779385296_o"},
        {src: "19452768_511298859211658_4490139653723286672_o"},
        {src: "19466586_510793335928877_2283431180608165639_o"},
        {src: "19477451_513972332277644_2690436983264259343_o"},
        {src: "19693405_516420552032822_4138029451341461437_o"},
        {src: "19800961_518769135131297_181256583146488287_o"},
        {src: "19956217_523973301277547_4652861295578822892_o"},
        {src: "19983254_521567568184787_823581221393850177_o"},
        {src: "20229614_526363037705240_3935131533953277840_o"},
        {src: "20368729_529922694015941_1705895919990889347_o"}


    ];
    let imgGeneral = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    const createSrc = imgSrcs.map((src) => {
        return `/images/gallery/${src.src}.jpg`
    });
    const createSrcGeneral = imgGeneral.map((src) => {
        return `/images/general/general-${src}.jpg`
    });

    const image = createSrc.map((image)=>{
        return(
            <div key={image}><img className="img-slider-container" src={image} /></div>

        );
    });
    const imageGeneral = createSrcGeneral.map((image)=>{
        return(
            <div key={image}><img className="img-slider-container" src={image} /></div>

        );
    });

    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };

    return(
        <div className="row container-images">

            <div className="brush">
                <img src="/images/icons/brush-light-blue.png"/>
            </div>

            <div className="col-12 align-self-center" style={{zIndex: "2"}}>
                <Header headerFont="'Knewave', cursive" headerCon="gallery.header" isPadding="true"/>
            </div>

            <div className="col-12 no-gutters">
                <div className="brush brush-div-fix">
                <img className="brush-img-fix" src="/images/icons/brush-light-blue.png"/>
                </div>

                <Slider {...settings}>
                    {imageGeneral}
                    {image}
                </Slider>

                <div className="brush brush-div-fix" style={{top: "272px"}}>
                <img className="brush-img-fix" src="/images/icons/brush-light-blue.png"/>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;