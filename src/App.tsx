import { useState } from 'react';
import './styles/App.scss';
import LanguageKey from './types/language-key';

function App() {
  const [language, updateLanguage] = useState<LanguageKey>('en');
  return null;
}

export default App;
