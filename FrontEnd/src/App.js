import './App.css';
import EmpCard from './Components/EmpDetails/EmpCard';
import EmpForm from './Components/EmpForm/EmpForm';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Delete from './Components/Delete/Delete';
import UpdateForm from './Components/UpdateDetails/UpdateForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/view" element={<EmpCard />} />
          <Route path="/add" element={<EmpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/update" element={<UpdateForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
