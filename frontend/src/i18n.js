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
          appointment: {
            title: 'Prenez votre rendez-vous ici',
            form: {
              title: 'Prendre un rendez-vous',
              firstName: 'Prénom',
              lastName: 'Nom',
              email: 'Email',
              day: 'Jour',
              selectDay: 'Sélectionnez un jour',
              time: 'Heure',
              selectTime: 'Sélectionnez une heure',
              book: 'Réserver',
            },
            table: {
              workHours: 'Heures de travail pour l\'avocat',
              tokenHours: 'Horaires de jetons pour l\'avocat',
              date: 'Date',
              time: 'Heure',
              clientFirstName: 'Prénom du client',
              clientLastName: 'Nom du client',
            },
          },
          editProfile: {
            title: 'Modifier le Profil de l\'Avocat',
            form: {
              uploadPhoto: 'Télécharger une Photo :',
              firstName: 'Prénom :',
              lastName: 'Nom :',
              speciality: 'Spécialité :',
              description: 'Description :',
              languages: 'Langues :',
              phoneNumber: 'Téléphone :',
              email: 'Email :',
              address: 'Adresse :',
              saveChanges: 'Enregistrer les Changements',
            },
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
          appointment: {
            title: 'تحديد موعد',
            form: {
              title: 'تحديد موعد',
              firstName: 'الاسم الأول',
              lastName: 'اسم العائلة',
              email: 'البريد الإلكتروني',
              day: 'اليوم',
              selectDay: 'اختر يوم',
              time: 'الوقت',
              selectTime: 'اختر الوقت',
              book: 'حجز',
            },
            table: {
              workHours: 'ساعات العمل للمحامي',
              tokenHours: 'ساعات الرموز للمحامي',
              date: 'تاريخ',
              time: 'وقت',
              clientFirstName: 'اسم العميل الأول',
              clientLastName: 'اسم العميل الأخير',
            },
          },
          editProfile: {
            title: 'تعديل ملف المحامي',
            form: {
              uploadPhoto: 'تحميل صورة :',
              firstName: 'الاسم الأول :',
              lastName: 'اسم العائلة :',
              speciality: 'التخصص :',
              description: 'الوصف :',
              languages: 'اللغات :',
              phoneNumber: 'رقم الهاتف :',
              email: 'البريد الإلكتروني :',
              address: 'العنوان :',
              saveChanges: 'حفظ التغييرات',
            },
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
