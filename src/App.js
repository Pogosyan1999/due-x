
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/HomePage/Home';
import Register from './Components/Pages/RegisterPage/Register';
import Login from './Components/Pages/LoginPage/Login';




function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path = "/login" element = {<Login/>}/>

        </Route>
      </Routes>
  );
}

export default App;
