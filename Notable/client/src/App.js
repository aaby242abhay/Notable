import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import View from './components/View';
import Notecard from './components/Notecard'; 
import Update from './components/Update';
function App() {
  return (
    <div className=' bg-primary'>
      <Router>
            <Routes path ='/notes'>
              <Route path='/' element={<Notecard />} />
              <Route path='/create' element={<Create />} />
              <Route path='/view/:id' element={<View />} />
              <Route path='/update/:id' element={<Update />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;