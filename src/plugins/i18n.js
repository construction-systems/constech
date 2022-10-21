import { createI18n } from "vue-i18n";
import messages from "../config/locales";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: messages,
});
