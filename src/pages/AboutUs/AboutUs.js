import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import AboutArea from './AboutArea/AboutArea';
import AboutAnalysis from './AboutAnalysis/AboutAnalysis';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
   const { t } = useTranslation();

   return (
      <>
         <HomeHeader />
         <CommonPageHeader title={t("about_us_key")} subtitle={t("about_key")} />
         <AboutArea />
         {/* <AboutCounter /> */}
         {/* <AboutAppoinment /> */}
         {/* <HomeOurTeam/> */}
         {/* <HomeFact /> */}
         {/* <AboutTestimonial /> */}
         {/* <AboutAnalysis /> */}
         <Footer />
      </>
   );
};

export default AboutUs;