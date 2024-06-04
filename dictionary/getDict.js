import "server-only";
import { getLang } from "@/utils/setLang";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async () => {
  const locale = await getLang();
  return dictionaries[locale]();
};
