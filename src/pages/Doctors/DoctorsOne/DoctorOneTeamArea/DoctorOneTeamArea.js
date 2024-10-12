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
                        <HomeSingleTeam image="1" title="Վալերի Ադամյան" />
                        <HomeSingleTeam image="2" title="Աննա Ասոյան" />
                        <HomeSingleTeam image="3" title="Աստղիկ Դավթյան" />
                        <HomeSingleTeam image="4" title="Աննա Ավանեսովա" />
                        <HomeSingleTeam image="5" title="Գայանե Ավետիկյան" />
                        <HomeSingleTeam image="6" title="Գոհար Բաբայան" />
                        <HomeSingleTeam image="7" title="Մարինե Բաբայան" />
                        <HomeSingleTeam image="8" title="Գոհար Բաբայան" />
                        <HomeSingleTeam image="9" title="Գայանե Բարսելյանց" />
                        <HomeSingleTeam image="10" title="Աննա Գալաջյան" />
                        <HomeSingleTeam image="11" title="Սուսան Գևորգյան" />
                        <HomeSingleTeam image="12" title="Էմմա Գրիգորյան" />
                        <HomeSingleTeam image="13" title="Հասմիկ Երվանդյան" />
                        <HomeSingleTeam image="14" title="Ջուլիետտա Զոհրաբյան" />
                        <HomeSingleTeam image="15" title="Մարինե Իգիթյան" />
                        <HomeSingleTeam image="16" title="Ստեփան Կսպոյան" />
                        <HomeSingleTeam image="17" title="Հասմիկ Հովակիմյան" />
                        <HomeSingleTeam image="18" title="Մարիամ Հովհաննիսյան" />
                        <HomeSingleTeam image="19" title="Հասմիկ Մանուկյան" />
                        <HomeSingleTeam image="20" title="Աննա Մելիք-Փաշայան" />
                        <HomeSingleTeam image="21" title="Ծաղիկ Միդուրյան" />
                        <HomeSingleTeam image="22" title="Լուսինե Միրազիզյան" />
                        <HomeSingleTeam image="23" title="Դիանա Մկրտչյան" />
                        <HomeSingleTeam image="24" title="Ռոմելլա Միրզոյան" />
                        <HomeSingleTeam image="25" title="Անուշիկ Սահակյան" />
                        <HomeSingleTeam image="26" title="Մարիետա Սարկիսովա" />
                        <HomeSingleTeam image="27" title="Սերգեյ Գինոսյան" />
                        <HomeSingleTeam image="28" title="Մուշեղ Ստեփանյան" />
                        <HomeSingleTeam image="29" title="Վարվառա Հակոբյան" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;