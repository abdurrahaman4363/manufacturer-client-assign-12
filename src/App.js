import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Login/RequiredAuth';
import PurchasePage from './Pages/Home/PurchasePage';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="myPortfolio" element={<MyPortfolio/>} />
        <Route path="purchasePage" element={
          <RequiredAuth>
            <PurchasePage></PurchasePage>
          </RequiredAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
