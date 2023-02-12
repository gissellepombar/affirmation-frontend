import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Affirmation from './componets/Affirmation';
//import AffForm from './componets/AffForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            < Route exact path='/' element={<Affirmation />} />
            {/* <AffForm /> */}
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
