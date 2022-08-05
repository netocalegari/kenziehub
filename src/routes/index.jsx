import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

function MainRoutes() {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(user)
  }, [user]);

  console.log(user)

  return (
    <Routes>
      <Route path='/login' element={<Login setUser={setUser}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
      <Route path='*' element={<Login/>}/>
    </Routes>
  );
};

export default MainRoutes;