import React from 'react';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'es';
  onLanguageChange: (language: 'en' | 'es') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <div className="bg-white rounded-md p-4 mb-4">
      <h3 className="text-sm font-bold mb-2">
        {currentLanguage === 'en' ? 'Select Language' : 'Seleccionar Idioma'}
      </h3>
      <div className="flex gap-2">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded text-sm ${
            currentLanguage === 'en'
              ? 'bg-[#FF4500] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          English
        </button>
        <button
          onClick={() => onLanguageChange('es')}
          className={`px-3 py-1 rounded text-sm ${
            currentLanguage === 'es'
              ? 'bg-[#FF4500] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;