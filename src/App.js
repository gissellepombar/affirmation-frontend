import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Affirmation from './componets/Affirmation';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import DailyAff from './componets/DailyAff';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        {/* <Routes>
            < Route exact path='/' element={<Affirmation />} />
        </Routes> */}
        {/* <Affirmation /> */}
        <DailyAff />
    
    </div>
    </BrowserRouter>
  );
}

export default App;
