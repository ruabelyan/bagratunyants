import { useTranslation } from 'react-i18next';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';

const ServicesOne = () => {
   const { t } = useTranslation('');
   return (
      <>
         <HomeHeader />
         <CommonPageHeader title={t('department_key')} subtitle={t('department_key')} />
         <ServicesOneABout />
         {/* <CalculateArea /> */}
         <ServicesOneHiringArea />
         <Footer />
      </>
   );
};

export default ServicesOne;