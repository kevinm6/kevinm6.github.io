let translations = {};

const setLocale = async (langSymbol) => {
   // translations = {};
   translations = await fetchLocalization(langSymbol);
   localizePage();
}

const fetchLocalization = async (langSymbol) => {
   let res = await fetch(`lang/${langSymbol}.json`);
   return await res.json();
}

const localizePage = () => {
   document.querySelectorAll('[localization-key]').forEach((element) => {
      let key = element.getAttribute('localization-key');
      let localized = translations[key];
      element.innerText = typeof localized == 'string' ? localized : localized.join('\n');
   });
}

