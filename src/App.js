import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import PropsDrilling from './PropsDrilling';
import PropsNonDrilling from "./PropsNonDrilling";
import LocalStorage from "./LocalStorage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/propsdrilling' element={<PropsDrilling />} />
          <Route exact path='/propsnondrilling' element={<PropsNonDrilling />} />
          <Route exact path="/localstorage" element={<LocalStorage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
