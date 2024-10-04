import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';

const DoctorOneTeamArea = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="team-area pt-115 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title pos-rel mb-75">
                                <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>{t('our_team_key')}</h5>
                                    <h1>{t('professional_care_provider_key')}</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="section-button text-end d-none d-lg-block pt-80">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>{t('contact_key')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <HomeSingleTeam image="1" title="Ադամյան" />
                        <HomeSingleTeam image="2" title="Ասոյան-մաշկաբան" />
                        <HomeSingleTeam image="3" title="Աստղիկ Դավթյան" />
                        <HomeSingleTeam image="4" title="Ավանեսովա-մանկաբարձ գինեկոլոգ" />
                        <HomeSingleTeam image="5" title="Ավետիկյան-սրտաբան" />
                        <HomeSingleTeam image="6" title="Բաբայան" />
                        <HomeSingleTeam image="7" title="Բաբայան-բժիշկ-լաբորանտ" />
                        <HomeSingleTeam image="8" title="Բաբայան" />
                        <HomeSingleTeam image="9" title="Բարսելյանց-բժիշկ էխոսկոպիստJPG" />
                        <HomeSingleTeam image="10" title="Գալաջյան" />
                        <HomeSingleTeam image="11" title="Գևորգյան-ռենտգենոլոգ" />
                        <HomeSingleTeam image="12" title="Գրիգորյան" />
                        <HomeSingleTeam image="13" title="Երվանդյան" />
                        <HomeSingleTeam image="14" title="Զոհրաբյան" />
                        <HomeSingleTeam image="15" title="Իգիթյան" />
                        <HomeSingleTeam image="16" title="Կսպոյան-քիթ-կոկորդ-ականջաբան" />
                        <HomeSingleTeam image="17" title="Հովակիմյան" />
                        <HomeSingleTeam image="18" title="Հովհաննիսյան" />
                        <HomeSingleTeam image="19" title="Մանուկյան" />
                        <HomeSingleTeam image="20" title="Մելիք-Փաշայան" />
                        <HomeSingleTeam image="21" title="Միդուրյան" />
                        <HomeSingleTeam image="22" title="Միրազիզյան-մերսող" />
                        <HomeSingleTeam image="23" title="Մկրտչյան-բժիշկ էխոսկոպիստ" />
                        <HomeSingleTeam image="24" title="Ռոմելլա Միրզոյան" />
                        <HomeSingleTeam image="25" title="Սահակյան" />
                        <HomeSingleTeam image="26" title="Սարկիսովա-մանկաբարձ գինեկոլոգ" />
                        <HomeSingleTeam image="27" title="Սերգեյ Գինոսյան" />
                        <HomeSingleTeam image="28" title="Ստեփանյան" />
                        <HomeSingleTeam image="29" title="Վարվառա Հակոբյան" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;