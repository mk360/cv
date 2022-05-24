import { HashRouter, useRoutes } from 'react-router-dom';
import './styles/App.scss';
import CVView from './view/cv';

function App() {
  return (
    <HashRouter>
      {<RoutesWrapper />}
    </HashRouter>
  );
}

console.log("deployed");

function RoutesWrapper() {
  return useRoutes([{ path: '/', element: <CVView /> }, { path: '/:lang', element: <CVView /> }]);
};

export default App;
