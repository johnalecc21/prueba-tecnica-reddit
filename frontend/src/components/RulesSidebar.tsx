import React from 'react';

interface Rule {
  id: number;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

const rules: Rule[] = [
  {
    id: 1,
    title: {
      en: "Be respectful",
      es: "Sé respetuoso"
    },
    description: {
      en: "Treat others with respect and follow community guidelines.",
      es: "Trata a los demás con respeto y sigue las pautas de la comunidad."
    }
  },
  {
    id: 2,
    title: {
      en: "No spam",
      es: "No spam"
    },
    description: {
      en: "Don't post promotional content without permission.",
      es: "No publiques contenido promocional sin permiso."
    }
  },
  {
    id: 3,
    title: {
      en: "Follow Reddit's rules",
      es: "Sigue las reglas de Reddit"
    },
    description: {
      en: "Remember to follow the site-wide rules of Reddit.",
      es: "Recuerda seguir las reglas generales de Reddit."
    }
  }
];

interface RulesSidebarProps {
  language: 'en' | 'es';
}

const RulesSidebar: React.FC<RulesSidebarProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <h3 className="text-sm font-bold mb-4">
        {language === 'en' ? 'r/programming Rules' : 'Reglas de r/programming'}
      </h3>
      <ol className="list-decimal list-inside">
        {rules.map((rule) => (
          <li key={rule.id} className="mb-4">
            <p className="font-medium text-sm inline-block">
              {rule.title[language]}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {rule.description[language]}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RulesSidebar;