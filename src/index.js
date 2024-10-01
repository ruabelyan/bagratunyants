import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-image-lightbox/style.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "home_key": "Home",
          "department_key": "Department",
          "doctors_key": "Doctors",
          "about_key": "About",
          "contact_key": "Contact",
          "appointment_key": "Appointment",
          "hero_care": "We are here for your care.",
          "hero_best_care": "Best Care & Better Doctor.",
          "hero_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "therapeutic_key": "Therapeutic",
          "pediatric_key": "Pediatric",
          "womens_consultation_key": "Women’s Consultation",
          "physiotherapy_key": "Physiotherapy",
          "daytime_hospital_key": "Daytime Hospital",
          "medical_physical_education_key": "Medical Physical Education",
          "palliative_service_key": "Palliative Service",
          "doctores_key": 'Doctors',
          "doctor_key": 'Doctor',
          "care_key": "We are here for your care.",
          "professional_care_provider_key": "A Professional & Care Provider",
          "always_ready_challenge_key": "We Always Ready For A Challenge.",
          "available_24_7_key": "We are available 24/7",
          "our_team_key": "Our Team",
          "expert_doctors_key": "Expert Doctors",
          "problem_solve_key": "Problem Solve",
          "award_winner_key": "Award Winner",
          "short_story_clinic_key": "Short Story About MediDove Clinic.",
          "manage_healthcare_key": "Managed Your Healthcare Services",
          "satisfied_patients_key": "Satisfied Patients",
          "world_awards_key": "World Awards",
          "read_more_key": "Read more",
          "phone_key": "Phone",
          "phone_number_key": "Phone number",
          "specialized_departments_key": "Specialized Departments of the Organization",
          "cabinet_kka_key": "KKA Cabinet",
          "ophthalmology_cabinet_key": "Ophthalmology Cabinet",
          "endocrinology_cabinet_key": "Endocrinology Cabinet",
          "dermatology_cabinet_key": "Dermatology Cabinet",
          "neurology_cabinet_key": "Neurology Cabinet",
          "infectious_disease_cabinet_key": "Infectious Disease Cabinet",
          "diagnostic_services_key": "Diagnostic Services",
          "xray_cabinet_key": "X-ray Cabinet",
          "fluorography_cabinet_key": "Fluorography Cabinet",
          "ecg_cabinet_key": "ECG Cabinet",
          "ultrasound_cabinet_key": "Ultrasound Examination Cabinet",
          "echocardiography_key": "Echocardiography",
          "electroneuromyography_key": "Electroneuromyography",
          "autorefractor_key": "Autorefractor",
          "laboratories_key": "Laboratories",
          "clinical_laboratory_key": "General Clinical",
          "biochemical_laboratory_key": "Biochemical",
          "serological_laboratory_key": "Serological",
          "paid_services_key": "Paid Services",
          "physiotherapy_cabinet_key": "Physiotherapy Cabinet",
          "massage_cabinet_key": "Massage Cabinet",
          "intravenous_laser_therapy_key": "Intravenous Laser Therapy",
          "eye_treatment_apparatus_key": "Apparatus Treatment for Eyes",
          "gastroenterology_cabinet_key": "Gastroenterology Cabinet",
          "urology_cabinet_key": "Urology Cabinet",
          "dentistry_cabinet_key": "Dentistry Cabinet"

        },
      },
      hy: {
        translation: {
          'services_description_key': 'Ծառայությունների բնութագիրը',
          "home_key": "Գլխավոր",
          "department_key": "Ծառայություններ",
          "all_department_key": "Ծառայություններ",
          "doctors_key": "Բժիշկներ",
          "about_key": "Մեր մասին",
          "contact_key": "Կապ մեզ հետ",
          "appointment_key": "Բժիշկ նշանակել",
          "hero_care": "Մենք այստեղ ենք ձեր խնամքի համար։",
          "hero_best_care": "Որակյալ բժշկական ծառայություններ",
          "hero_description": "Լորեմ իպսում դոլոր սիտ ամետ, կոնսեկտետուր ադիպիսցինգ էլիտ, սեդ դո էյուզմոդ տեմպոր ինցիդիդունթ_ut լաբորե և դոլորե մագնա ալիքուա։",
          "therapeutic_key": "Թերապևտիկ",
          "pediatric_key": "Մանկաբուժական",
          "womens_consultation_key": "Կանանց կոնսուլտացիա",
          "physiotherapy_key": "Ֆիզիոթերապևտիկ",
          "daytime_hospital_key": "Ցերեկային ստացիոնար",
          "medical_physical_education_key": "Բուժական ֆիզկուլտուրա",
          "palliative_service_key": "Պալիատիվ ծառայություն",
          "doctores_key": 'Բժիշկներ',
          "doctor_key": 'Բժիշկ',
          "care_key": "Մենք այստեղ ենք ձեր խնամքի համար։",
          "professional_care_provider_key": "Պրոֆեսիոնալ անձնակազմ",
          "always_ready_challenge_key": "Մենք միշտ պատրաստ ենք մարտահրավերին։",
          "available_24_7_key": "Մենք մատչելի ենք 24/7",
          "our_team_key": "Մեր թիմը",
          "expert_doctors_key": "Փորձառու բժիշկներ",
          "problem_solve_key": "Մշտական խնդիրը լուծել",
          "award_winner_key": "Պարգևակրող",
          "short_story_clinic_key": "Կարճ պատմություն Բագրատունյանց ԱԿ-ի կլինիկայի մասին։",
          "manage_healthcare_key": "Ձեր առողջապահական ծառայությունների կառավարում",
          "satisfied_patients_key": "Գոհ հիվանդներ",
          "world_awards_key": "Համաշխարհային պարգևներ",
          "read_more_key": "Կարդալ ավելին",
          "phone_number_key": "Հեռախոսահամար",
          "specialized_departments_key": "Կազմակերպության նեղ մասնագիտական ստորաբաժանումներ",
          "cabinet_kka_key": "ՔԿԱ կաբինետ",
          "ophthalmology_cabinet_key": "Ակնաբուժական կաբինետ",
          "endocrinology_cabinet_key": "Ներզատաբանական կաբինետ",
          "dermatology_cabinet_key": "Մաշկաբանական կաբինետ",
          "neurology_cabinet_key": "Նյարդաբանական կաբինետ",
          "infectious_disease_cabinet_key": "Ինֆեկցիոն կաբինետ",
          "diagnostic_services_key": "Ախտորոշիչ ծառայություններ",
          "xray_cabinet_key": "Ռենտգեն կաբինետ",
          "fluorography_cabinet_key": "Ֆլուորոգրաֆիայի կաբինետ",
          "ecg_cabinet_key": "ԷՍԳ կաբինետ",
          "ultrasound_cabinet_key": "Ուլտրաձայնային հետազոտության կաբինետ",
          "echocardiography_key": "Էխոսրտագրություն",
          "electroneuromyography_key": "Էլեկտրոնեյրոմիագրաֆիա",
          "autorefractor_key": "Ավտոռեֆ",
          "laboratories_key": "Լաբորատորիաներ",
          "clinical_laboratory_key": "Ընդհանուր կլինիկական",
          "biochemical_laboratory_key": "Կենսաքիմիական",
          "serological_laboratory_key": "Սերոլոգիական",
          "paid_services_key": "Վճարովի ծառայություններ",
          "physiotherapy_cabinet_key": "Ֆիզիոթերապևտիկ կաբինետ",
          "massage_cabinet_key": "Մերսման կաբինետ",
          "intravenous_laser_therapy_key": "Ներերակային լազերոթերապիա",
          "eye_treatment_apparatus_key": "Աչքերի ապարատային բուժում",
          "gastroenterology_cabinet_key": "Գաստրոէնթերոլոգիական կաբինետ",
          "urology_cabinet_key": "Ուռոլոգիական կաբինետ",
          "dentistry_cabinet_key": "Ատամնաբուժական կաբինետ"

        }
      },
      ru: {
        translation: {
          "home_key": "Главная",
          "department_key": "Отдел",
          "doctors_key": "Врачи",
          "about_key": "О нас",
          "contact_key": "Контакт",
          "appointment_key": "Запись на прием",
          "hero_care": "Мы здесь для вашего ухода.",
          "hero_best_care": "Лучшая забота и лучший доктор.",
          "hero_description": "Лорем ипсум долор сит амет, консектетур адиписцинг элит, сед до эйузмод темпор инцидидунт ут лаборе эт долоре магна аликуа.",
          "therapeutic_key": "Терапевтический",
          "pediatric_key": "Педиатрический",
          "womens_consultation_key": "Консультация для женщин",
          "physiotherapy_key": "Физиотерапия",
          "daytime_hospital_key": "Дневная больница",
          "medical_physical_education_key": "Медицинская физическая культура",
          "palliative_service_key": "Паллиативная служба",
          "doctores_key": '',
          "doctor_key": '',
          "care_key": "Мы здесь для вашего ухода.",
          "professional_care_provider_key": "Профессиональный и заботливый поставщик",
          "always_ready_challenge_key": "Мы всегда готовы к вызову.",
          "available_24_7_key": "Мы доступны 24/7",
          "our_team_key": "Наша команда",
          "expert_doctors_key": "Экспертные врачи",
          "problem_solve_key": "Решение проблем",
          "award_winner_key": "Лауреат премии",
          "short_story_clinic_key": "Краткая история клиники MediDove.",
          "manage_healthcare_key": "Управление вашими медицинскими услугами",
          "satisfied_patients_key": "Довольные пациенты",
          "world_awards_key": "Мировые награды",
          "read_more_key": "Подробнее",
          "phone_number_key": "Номер телефона",
          "specialized_departments_key": "Узкоспециализированные отделения организации",
          "cabinet_kka_key": "Кабинет ККА",
          "ophthalmology_cabinet_key": "Офтальмологический кабинет",
          "endocrinology_cabinet_key": "Эндокринологический кабинет",
          "dermatology_cabinet_key": "Дерматологический кабинет",
          "neurology_cabinet_key": "Неврологический кабинет",
          "infectious_disease_cabinet_key": "Инфекционный кабинет",
          "diagnostic_services_key": "Диагностические услуги",
          "xray_cabinet_key": "Кабинет рентгена",
          "fluorography_cabinet_key": "Кабинет флюорографии",
          "ecg_cabinet_key": "Кабинет ЭКГ",
          "ultrasound_cabinet_key": "Кабинет ультразвукового исследования",
          "echocardiography_key": "Эхокардиография",
          "electroneuromyography_key": "Электронейромиография",
          "autorefractor_key": "Авторефрактометр",
          "laboratories_key": "Лаборатории",
          "clinical_laboratory_key": "Общеклинический",
          "biochemical_laboratory_key": "Биохимический",
          "serological_laboratory_key": "Серологический",
          "paid_services_key": "Платные услуги",
          "physiotherapy_cabinet_key": "Физиотерапевтический кабинет",
          "massage_cabinet_key": "Кабинет массажа",
          "intravenous_laser_therapy_key": "Внутривенная лазеротерапия",
          "eye_treatment_apparatus_key": "Аппаратное лечение глаз",
          "gastroenterology_cabinet_key": "Гастроэнтерологический кабинет",
          "urology_cabinet_key": "Урологический кабинет",
          "dentistry_cabinet_key": "Стоматологический кабинет"



        }
      }
    },
    lng: localStorage.getItem('lng') || 'hy', // if you're using a language detector, do not define the lng option
    fallbackLng: "hy",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
