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

import {Section} from "../Section/Section";
import {CardService} from "../../Components/Card_service/CardService";
import {Button} from "../../Components/Button/Button";

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
                      background=''
             />
                <div className={s.section}>
                    <h3>Our services</h3>
                    <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
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
                   </div>
                    <div className={s.section_content}>
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
            <Button blue={false} text='Learn more'/>
            <Section reverse={true}
                     ractangle={true}
                     title='Leading healthcare providers'
                     content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                     To us, it’s not just work. We take pride in the solutions we deliver'
                     img={leading_providers_img}
                     button_blue_color={false}
                     background=''
            />
            <Section reverse={false}
                     ractangle={true}
                     title='Leading healthcare providers'
                     content='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                     To us, it’s not just work. We take pride in the solutions we deliver'
                     img={download_mobile_img}
                     button_blue_color={false}
                     background=''
            />
        </div>
    );
}
