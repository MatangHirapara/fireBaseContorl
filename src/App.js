import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Demo from './Demo';
import Addlist from './Addlist';

function App() {
  return (
    <>
      <div>
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Demo />} />
          <Route path='/addList' element={<Addlist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
