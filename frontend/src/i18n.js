// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          profile: {
            firstName: 'Prénom',
            secondName: 'Nom de famille',
            rating: 'Évaluation',
            specialty: 'Spécialité',
            contactDetails: 'Coordonnées',
            languages: 'Langues parlées',
            basicInfo: 'Informations de Base',
            skillsAndExperience: 'Compétences et Expériences',
            description: 'Description',
            takeAppointment: 'Prendre rendez-vous',
            commentsAndRatings: 'Commentaires et Évaluations',
            addComment: 'Ajouter un commentaire...',
            addCommentBtn: 'Ajouter',
            viewAllComments: 'Voir tous les commentaires',
            viewLess: 'Voir moins',
            geographicalMap: 'Carte Géographique',
          },
        },
      },
      ar: {
        translation: {
          profile: {
            firstName: 'الاسم الأول',
            secondName: 'اسم العائلة',
            rating: 'التقييم',
            specialty: 'التخصص',
            contactDetails: 'تفاصيل الاتصال',
            languages: 'اللغات المتحدث بها',
            basicInfo: 'معلومات أساسية',
            skillsAndExperience: 'المهارات والخبرات',
            description: 'الوصف',
            takeAppointment: 'تحديد موعد',
            commentsAndRatings: 'التعليقات والتقييمات',
            addComment: 'إضافة تعليق...',
            addCommentBtn: 'إضافة',
            viewAllComments: 'عرض جميع التعليقات',
            viewLess: 'عرض أقل',
            geographicalMap: 'الخريطة الجغرافية',
          },
        },
      },
    },
    lng: 'fr', // default language
    fallbackLng: 'fr', // fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
