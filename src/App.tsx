import { useState } from 'react';
import Intro from './components/intro';
import './styles/App.scss';
import LanguageKey from './types/language-key';
import CVView from './view/cv';

function App() {
  // const [language, updateLanguage] = useState<LanguageKey>('en');
  return <CVView />
}

export default App;
