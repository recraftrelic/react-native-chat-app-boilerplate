import { AppConstants } from '../config/DefaultConfig';
import useConstants from './useConstants';
import { languages } from '../config/languages';

const useLanguage = (): AppConstants => {
  const { selectedLanguage }: AppConstants = useConstants()

  return languages[selectedLanguage];
}

export default useLanguage;
