import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 
import './translate.css';

const translationButton = () => {

    const changeLanguage = (lng) => {
        console.log('Changing language to:', lng);
        i18n.changeLanguage(lng);
      };
  return (
    <div className='translateButton'>
        <button onClick={() => changeLanguage('fr')} className='translate'>French</button>
        <button onClick={() => changeLanguage('ar')} className='translate'>العربية</button>
    </div>
  );

  };
export default translationButton;
