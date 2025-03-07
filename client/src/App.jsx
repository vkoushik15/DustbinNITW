import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import Upload from './pages/upload';
import Navbar from './components/navbar';
import Login from './pages/login';
import ProtectedRoute from './components/protectedRoute';
import NotFoundPage from './pages/404';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      
      
      <Route path="/" element={<Main />} />
      <Route path="/upload" element={<Upload />} />
      <Route path='/login' element={<Login />} />
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  );
}

export default App;
