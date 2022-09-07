import { StrictMode } from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import './styles/App.scss';
import CVView from './view/cv';

function App() {
  return (
    <StrictMode>
      <HashRouter>
        {<RoutesWrapper />}
      </HashRouter>
    </StrictMode>
  );
}

function RoutesWrapper() {
  return useRoutes([{ path: '/', element: <CVView /> }, { path: '/:lang', element: <CVView /> }]);
};

export default App;
