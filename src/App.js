import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Rotas from './Rotas';



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </>
  );
}

export default App;
