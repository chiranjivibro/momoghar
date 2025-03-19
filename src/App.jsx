import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Momo from "./Pages/Momo";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import Advice from "./Pages/Advice";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import ProductDescription from "./Pages/ProductDescription";
import Footer from "./Components/Footer";
import Protected from "./Pages/Protected";
import './App.css';
function App() {
 
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Momo/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/advice" element={<Advice/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/menu" element={<Protected Comp={Menu}/>}/>
      <Route path="/cart" element={< Protected Comp={Cart}/>}/>
      <Route path="/payment" element={<Protected Comp={Payment}/>}/>
      <Route path="/success" element={<Protected Comp={Success}/>}/>
      <Route path="/failure" element={<Protected Comp={Failure}/>}/>    
      <Route path="/profile" element={<Protected Comp={Profile}/>}/>
      <Route path="/productdescription/:id" element={<Protected Comp={ProductDescription}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App
