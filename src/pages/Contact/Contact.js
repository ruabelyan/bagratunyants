import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title={t('contact_key')} subtitle={t('contact_key')} />
            <ContactArea />
            <ContactFormArea />
            <ContactMap />
            <Footer />
        </>
    );
};

export default Contact;