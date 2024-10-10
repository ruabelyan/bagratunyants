import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import { useTranslation } from 'react-i18next';
import PriceListArea from './PriceListArea/PriceListArea';


const PriceList = () => {
   const { t } = useTranslation();

   return (
      <>
         <HomeHeader />
         <CommonPageHeader title={t("about_us_key")} subtitle={t('price_list_key')} />
         <PriceListArea />
         <Footer />
      </>
   );
};

export default PriceList;