import i18next from 'i18next';

import './LanguageSwitcher.scss';

type languagesType = {
  [key: string]: {
    nativeName: string
  }
}

const languages: languagesType = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

function LanguageSwitcher() {
  return (
    <div id="LanguageSwitcher">
      {Object.keys(languages).map((lng: string) => (
        <button
          type="submit"
          key={lng}
          onClick={() => i18next.changeLanguage(lng)}
          disabled={i18next.resolvedLanguage === lng}
        >
          {languages[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
