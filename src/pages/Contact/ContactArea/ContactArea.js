import { useTranslation } from 'react-i18next';

const ContactArea = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="contact-area pt-120 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-envelope"></i>
                                <h3>{t("mail_here_key")}</h3>
                                <a href="email:poliklinika-13@mail.ru">poliklinika-13@mail.ru</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>{t("visit_here_key")}</h3>
                                <p>{t("shahamiryanneri_street_key")}</p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-phone"></i>
                                <h3>{t("call_here_key")}</h3>
                                <a href="tel:+37410482151">
                                    <span > +374 10 48-21-51</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;