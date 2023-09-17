import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z\d-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z\d-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const supportedLocales = ["en", "fr", "nl"];
const savedLocale = localStorage.getItem("user-locale");

// Détectez la langue du navigateur, mais coupez les spécificateurs régionaux, par exemple, "en-US" devient "en"
const browserLocale = (navigator.language || "en").split("-")[0];

// Utilisez la langue enregistrée s'il y en a une, sinon vérifiez si la langue du navigateur est prise en charge, sinon utilisez "en" par défaut
const defaultLocale = savedLocale || (supportedLocales.includes(browserLocale) ? browserLocale : "en");

// Mettez à jour l'attribut lang de l'élément HTML pour refléter la langue actuelle
document.documentElement.lang = defaultLocale;

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
