import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Router } from 'react-router-dom'; 
// import 'antd/dist/reset.css';

function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children
  } else {
    return <Navigate to="/login" />;
  }
}

function App() {
  return (
    // <div className="container-fluid">
    //   <h1 className="text-center">Hello</h1>
    // </div>
    <div className='maain'>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}



export default App;
