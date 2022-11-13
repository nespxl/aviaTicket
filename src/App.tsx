import './index.css'
import Avia from './pages/Avia';
import Info from './pages/Info';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Main from './pages/Main';

const Path = () => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/avia", element: <Avia /> },
    { path: "/avia/info", element: <Info /> },
  ]);
  return routes;
}

function App() {
  return (
    <div className='main'>
      <Router>
        <Path />
      </Router>
    </div>
  );
}

export default App;
