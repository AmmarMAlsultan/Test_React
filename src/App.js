

import { Routes, Route } from 'react-router-dom';
import Navebar from "./components/navber";
import Footer from "./components/footer";
// import Card from "./components/card";
import { data } from "./components/data";
import "./style.css";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import News from "./pages/News";
import About from "./pages/About";
import Form from './pages/form';
import ShowApi from './pages/ShowApi';
function App() {
    console.log(data);
    // const datashow = data.map(el => <Card titel={el.titel} old={el.old} name={el.name} />);
    return (
        <>
            <Navebar />
                <Routes>
                    <Route path="/"/>
                    <Route path="/home" element={<Home />} errorElement="Ammar" />
                    <Route path='form' element={<Form/>}/>
                    {/* <Route path="/contant" element={<Contact />} /> */}
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/api' element={<ShowApi />}/>
                </Routes>
            <Footer />
        </>
    );
}
export default App;