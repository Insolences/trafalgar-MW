import Carousel from 'react-elastic-carousel';
import classes from './Carousel.module.css';
import arrow_to_right from  '../../img/carousel/arrow_to_right.png';
import arrow_to_left from  '../../img/carousel/arrow_to_left.png';
import carousel_img1 from '../../img/carousel/carousel_img1.png';
import carousel_img2 from '../../img/carousel/carousel_img2.jpg';
import carousel_img3 from '../../img/carousel/carousel_img3.jpg';
import carousel_img4 from '../../img/carousel/carousel_img4.jpg';
import React from "react";

export default class testCarousel extends React.Component {

    renderArrow({ type, onClick, isEdge }) {
        const pointer = type === 'PREV' ? <img src={arrow_to_left} alt={"prevArrow"} className={classes.carousel_left_button}/> : <img src={arrow_to_right} alt={"nextArrow"} className={classes.carousel_right_button}/>
        return (
            <div onClick={() => onClick() } disabled={isEdge} >
                {pointer}
            </div>
        )
    }

    renderPagination = ({ pages, activePage, onClick }) =>{
        return(
            <div className={classes.carousel_square_block} >
                {pages.map(page => {
                    const isActivePage = activePage === page
                    return (
                        <div
                            className={isActivePage ? classes.carousel_active_square : classes.carousel_square}
                            key={page}
                            onClick={() => onClick(page)}
                            active={isActivePage.toString()}
                        />
                    )
                })}
            </div>
        )
    }

    createCarouselItemContent = ({id, title, img}) => {
        return (
            <div className={classes.carousel_img_bg} key={id} title={title}>
                <h3 className={classes.carousel_h3}>What our customer are saying</h3>
                <div className={classes.carousel_content}>
                    <div className={classes.carousel_img_block}>
                        <img src={img} className={classes.carousel_img}/>
                        <div>
                            <h4  className={classes.carousel_h4}>Edward Newgate</h4>
                            <p>Founder Circle</p>
                        </div>
                    </div>
                    <div className={classes.carousel_content_block}>
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
                <Carousel
                    renderArrow={this.renderArrow}
                    renderPagination={this.renderPagination}
                    enableAutoPlay
                    autoPlaySpeed={5500}
                >
                    { this.createCarouselItemContent({id: 1, title: 'item #1', img: carousel_img1})}
                    { this.createCarouselItemContent({id: 2, title: 'item #2', img: carousel_img2})}
                    { this.createCarouselItemContent({id: 3, title: 'item #3', img: carousel_img3})}
                    { this.createCarouselItemContent({id: 4, title: 'item #4', img: carousel_img4})}
                </Carousel>
        )
    }

}


