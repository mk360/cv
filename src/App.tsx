import { useState } from 'react';
import Intro from './components/intro';
import './styles/App.scss';
import LanguageKey from './types/language-key';

function App() {
  const [language, updateLanguage] = useState<LanguageKey>('en');
  return <Intro />
}

export default App;
;