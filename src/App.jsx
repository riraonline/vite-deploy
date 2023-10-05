import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Sidebar from './components/Sidebar';
import Navbar from './routes/Navbar';
import Home from './routes/Home';

// routes
import User from './routes/User';
import Order from './routes/Order';

const App = () => {
  const [toggle, setToggle] = useState(false);
  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className={toggle ? 'd-none' : 'w-auto position-fixed'}>
          <Sidebar />
        </div>
        <div className={toggle ? 'd-none' : 'invisible'}>
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar Toggle={Toggle} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<User />}></Route>
            <Route path="/orders" element={<Order />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
