import { BrowserRouter, useRoutes } from 'react-router-dom';
import './styles/App.scss';
import CVView from './view/cv';

function App() {
  return (
    <BrowserRouter>
      {<RoutesWrapper />}
    </BrowserRouter>
  );
}

function RoutesWrapper() {
  return useRoutes([{ path: '/cv', element: <CVView /> }, { path: '/cv/:lang', element: <CVView /> }]);
};

export default App;
