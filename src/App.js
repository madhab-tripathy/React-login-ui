import React, { useEffect, useState } from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin?(<Profile />):(<Login loginFn={setIsLogin} loginValue={isLogin}/>)}
    </div>
  );
}

export default App;