import React from 'react';
import HomeThreeSingleMembership from '../../../components/HomeThreeSingleMembership/HomeThreeSingleMembership';
import Slider from "react-slick";
import HomeThreeSingleReviews from '../../../components/HomeThreeSingleReviews/HomeThreeSingleReviews';

const HomeThreeMembership = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         },
      ]

   };
   return (
      <>
         <section className="membership-area membership-bg pt-120 pb-120 pos-rel"
            data-background="img/membership/membership-bg.jpg">
            <div className="container">
               <div className="membership-box pt-115 pb-90 white-bg">
                  <div className="row">
                     <div className="col-xl-10 offset-xl-1">
                        <div className="section-title text-center pos-rel mb-70">
                           <div className="section-icon">
                              <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h1>Կարծիքներ մեր մասին</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                 
               </div>
               <div className="membership-review member-ship-map gray-bg pos-rel">
                  <Slider className='testimonials-activation' {...settings}>
                     <HomeThreeSingleReviews text='«Շատ հոգատար և պրոֆեսիոնալ բժիշկ է։ Միշտ հանգիստ և սիրալիր վերաբերմունք ունի երեխաների նկատմամբ։ Նրա շնորհիվ իմ փոքրիկի առողջական վիճակը արագ բարելավվեց։»' image="2" name="Gayane M" />
                     <HomeThreeSingleReviews text='Աննա Մելիք-Փաշայանը բավականին բանիմաց բժիշկ է։ Իր գործը շատ լավ է կատարում։' image="3" name="Նարինե Անդրեասյան" />
                     <HomeThreeSingleReviews text='Shat lav spasarkum en katarum, hogatar bjishkner' image="1" name="Սոսե" />
                     <HomeThreeSingleReviews text='mianshanak xorhurd ktam ays poliklinikan ' image="2" name="Արամ" />
                  </Slider>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeMembership;