import spanish from "./es.json";
import english from "./en.json";

export const LANGUAGES = {
  Español: "es",
  English: "en",
};
export const getI18N = ({ currentLocale ="es" }: { currentLocale ?: string }) => {
  if (currentLocale === LANGUAGES.Español) return spanish;
  if (currentLocale === LANGUAGES.English) return english;
  return spanish
};