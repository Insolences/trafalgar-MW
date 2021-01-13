import React from "react";
import s from "./Main.module.css";

import search_doctor from "../../img/card_service/search_doctor.png";
import consultation from "../../img/card_service/consultation.png";
import details from "../../img/card_service/details.png";
import tracking from "../../img/card_service/tracking.png";
import emergency from "../../img/card_service/emergency.png";
import online_pharmacy from "../../img/card_service/online_pharmacy.png";

import  header_illustration_img from "../../img/trafalgar-header illustration.png"
import leading_providers_img from "../../img/leading-providers-illustration.png"
import download_mobile_img from "../../img/download_mobile_img.png"

import detection_img from "../../img/CheckOut/image1.png"
import medicines_img from "../../img/CheckOut/image2.png"
import natural_img from "../../img/CheckOut/image2.png"

import {Section} from "../Section/Section";
import {CardService} from "../../Components/Card_service/CardService";
import {Button} from "../../Components/Button/Button";
import Carousel from "../../Components/Carousel/Carousel";
import {CheckOutCard} from "../../Components/CheckOut_card/CheckOutCard";

export function Main() {
    return (
        <div className={s.main}>
             <Section reverse={false}
                      ractangle={false}
                      title='Virtual healthcare for you'
                      content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                      To us, it’s not just work. We take pride in the solutions we deliver'
                      img={header_illustration_img}
                      button_blue_color={true}
                      button_text = 'Consult today'
                      background=''
             />
                <div className={s.section}>
                    <div className={s.main_title}>
                        <h3>Our services</h3>
                        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                    </div>
                    <div className={s.section_content}>
                       <CardService
                            img={search_doctor}
                            title="Search doctor"
                            content="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                        />
                        <CardService
                            img={online_pharmacy}
                            title="Online pharmacy"
                            content="Buy  your medicines with our mobile application with a simple delivery system"
                        />
                        <CardService
                            img={consultation}
                            title="Consultation"
                            content="Free consultation with our trusted doctors and get the best recomendations"
                        />
                        <CardService
                            img={details}
                            title="Details info"
                            content="Free consultation with our trusted doctors and get the best recomendations"
                        />
                        <CardService
                            img={emergency}
                            title="Emergency care"
                            content="You can get 24/7 urgent care for yourself or your children and your lovely family"
                        />
                        <CardService
                            img={tracking}
                            title="Tracking"
                            content="Track and save your medical history and health data "
                        />
                    </div>
                </div>
            <Button text='Learn more'/>
            <Section reverse={true}
                     ractangle={true}
                     title='Leading healthcare providers'
                     content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                     To us, it’s not just work. We take pride in the solutions we deliver'
                     img={leading_providers_img}
                     button_blue_color={false}
                     button_text = 'Learn more'
                     background=''
            />
            <Section reverse={false}
                     ractangle={true}
                     title='Leading healthcare providers'
                     content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                     To us, it’s not just work. We take pride in the solutions we deliver'
                     img={download_mobile_img}
                     button_blue_color={false}
                     button_text='Download'
                     background=''
            />
            <div className={s.carousel_container}>
                <div className={s.carousel_content}>
                    <Carousel/>
                </div>
            </div>
            <div className={s.check_out_container}>
                <div className={s.check_out_content}>
                    <h3>Check out our latest article</h3>
                    <div className={s.check_out_card_list}>
                        <CheckOutCard
                            img={detection_img}
                            title='Disease detection, check up in the laboratory'
                            content='In this case, the role of the health laboratory is very important to do
                            a disease detection...'
                        />
                        <CheckOutCard
                            img={medicines_img}
                            title='Herbal medicines that are safe for consumption'
                            content='Herbal medicine is very widely used at this time because of its very good for your health...'
                        />
                        <CheckOutCard
                            img={natural_img}
                            title='Natural care for healthy facial skin'
                            content='A healthy lifestyle should start from now and also for your skin health. There are some...'
                        />
                    </div>
                    <Button text='View all'/>
                </div>
            </div>
        </div>
    );
}
