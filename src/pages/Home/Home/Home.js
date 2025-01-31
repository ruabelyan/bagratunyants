import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomeServices from './HomeServices/HomeServices';
import HomeFourPhotoGallery from '../../HomeFour/HomeFourPhotoGallery/HomeFourPhotoGallery';
import HomeThreeMembership from '../../HomeThree/HomeThreeMembership/HomeThreeMembership';


const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeHeroSection />
            <div className="container mt-5">
                <div className="text-center mb-4">
                    <h3 style={{
                        fontFamily: 'Arial, sans-serif',
                        color: '#2c3e50',
                        backgroundColor: '#f9f9f9',
                        borderLeft: '5px solid #3f5ece',
                        padding: '15px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>Առողջության գրավականը հիվանդությունների կանխարգելումն է։ Այս նպատակով պետպատվերի շրջանակներում
                        մատուցվւոմ են հետևյալ ծառայությունները:</h3>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Իմունականխարգելում</h5>
                                <p className="card-text">Պատվաստումներ՝ տարբեր հիվանդությունների կանխարգելման նպատակով:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Զարկերակային ճնշման չափում</h5>
                                <p className="card-text">Հիպերտոնիայի վաղ հայտնաբերման նպատակով:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Գլյուկոմետրիա</h5>
                                <p className="card-text">Դիաբետի վաղ հայտնաբերման նպատակով գլյուկոզի չափում:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Կրծքագեղձի զննում</h5>
                                <p className="card-text">Քաղցկեղի վաղ հայտնաբերման նպատակով (մամոգրաֆիա):</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Պապ քսուք</h5>
                                <p className="card-text">Արգանդի վզիկի քաղցկեղի վաղ հայտնաբերման նպատակով:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Տեսողության զննում</h5>
                                <p className="card-text">Գլաուկոմայի վաղ հայտնաբերման նպատակով՝ տեսողության սրության և ներակնային ճնշման չափում:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Մարմնի զանգվածի ցուցանիշ</h5>
                                <p className="card-text">Քաշի և մետաբոլիկ խանգարումների վաղ հայտնաբերման նպատակով:</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 style={{ fontWeight: 600, color: '#223645' }} className="card-title">Մինչև 18 տարեկան երեխաների դիսպանսերիզացիա</h5>
                                <p className="card-text">Երեխաների առողջության ստուգումներ և կանխարգելում:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeAboutArea />
            <HomeServices />
            <HomeThreeMembership />
            <HomeFourPhotoGallery />
            <HomeOurTeam />
            {/* <HomeFact /> */}
            {/* < HomeBlogs/> */}

            {/* <HomeBlogs /> */}
            <HomeFooter />
        </>
    );
};

export default Home;