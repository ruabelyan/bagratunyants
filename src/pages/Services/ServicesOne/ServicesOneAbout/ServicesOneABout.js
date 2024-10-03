import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import { useTranslation } from 'react-i18next';

const ServicesOneABout = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row ">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text section-text-small pos-rel">
                           <h5>{t("health_care_facility_key")}</h5>
                           <h1>{t("stay_at_home_key")}</h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text mb-50">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                           qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                           omnis iste natus error sit voluptatem accusantium.</p>
                     </div>
                  </div>
               </div>

               <div className="container">
                  <div className="row">
                     <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section-title text-center pos-rel mb-75">
                           <div className="section-icon">
                              <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                           </div>
                           <div className="section-text pos-rel home_ser_title">
                              <h2>{t('Շենգավիթ ստորաբաժանում')}</h2>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <HomeSIngleService icon="1" title={t('therapeutic_key')} />
                     <HomeSIngleService icon="2" title={t('pediatric_key')} />
                     <HomeSIngleService icon="3" title={t('womens_consultation_key')} />
                  </div>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section-title text-center pos-rel mb-75">
                           <div className="section-icon">
                              <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                           </div>
                           <div className="section-text pos-rel home_ser_title">
                              <h2>{t('Նորագավիթ ստորաբաժանում')}</h2>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <HomeSIngleService icon="1" title={t('therapeutic_key')} />
                     <HomeSIngleService icon="2" title={t('pediatric_key')} />
                     <HomeSIngleService icon="3" title={t('Նեղ մասնագիտական բաժանմունք')} />
                     <HomeSIngleService icon="3" title={t('Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք')} />
                  </div>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section-title text-center pos-rel mb-75">
                           <div className="section-icon">
                              <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                           </div>
                           <div className="section-text pos-rel home_ser_title">
                              <h2>{t('Նոր Խարբերդ ստորաբաժանում')}</h2>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <HomeSIngleService icon="1" title={t('therapeutic_key')} />
                     <HomeSIngleService icon="2" title={t('pediatric_key')} />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesOneABout;