import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CounterArea from './CounterArea/CounterArea';
import DoctorOneTeamArea from './DoctorOneTeamArea/DoctorOneTeamArea';
import { useTranslation } from 'react-i18next';

const DoctorsOne = () => {
    const { t } = useTranslation();
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title={t('doctores_key')} subtitle={t('doctor_key')} />
            <DoctorOneTeamArea />
            <HomeFact />
            <CounterArea />
            <Footer />
        </>
    );
};

export default DoctorsOne;