import Carousel from 'react-elastic-carousel'
import s from './Carousel.module.css';
import carousel_img_bg from '../../img/carousel/carousel_bg.png'
import arrow_to_right from  '../../img/carousel/arrow_to_right.png'
import arrow_to_left from  '../../img/carousel/arrow_to_left.png'
import React from "react";

export default class testCarusel extends React.Component {
    state = {
        items: [
            {id: 1, title: 'item #1'},
            {id: 2, title: 'item #2'},
            {id: 3, title: 'item #3'},
            {id: 4, title: 'item #4'}
        ]
    }

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === 'PREV' ? <img src={arrow_to_left} alt={"prevArrow"} className={s.carousel_left_button}/> : <img src={arrow_to_right} alt={"nextArrow"} className={s.carousel_right_button}/>
        return (
            <div onClick={() => onClick() } disabled={isEdge}>
                {pointer}
            </div>
        )
    }

    createCarouselItemContent = () => {
        return (
            <div className={s.carousel_img_bg}>
                <h3>What our customer are saying</h3>
                <div className={s.carousel_content}>
                    <div className={s.carousel_img_block}>
                        <h4>Edward Newgate</h4>
                        <p>Founder Circle</p>
                    </div>
                    <div className={s.carousel_content_block}>
                        <p>
                            “Our dedicated patient engagement app and
                            web portal allow you to access information instantaneously (no tedeous form, long calls,
                            or administrative hassle) and securely”
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    render () {
        return (
                <Carousel renderArrow={this.myArrow}>
                    {this.createCarouselItemContent()}
                    {this.createCarouselItemContent()}
                    {this.createCarouselItemContent()}
                    {this.createCarouselItemContent()}
                </Carousel>
        )
    }

}


