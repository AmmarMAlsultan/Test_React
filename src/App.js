
import Navebar from "./components/navber";
import Footer from "./components/footer";
import Card from "./components/card";
import { data } from "./components/data";
import "./style.css";


function App() {
    console.log(data);
    const datashow = data.map(el => <Card titel={el.titel} old={el.old} name={el.name}/>);
    return (
        <div>
            <Navebar />
            {datashow}
            <Footer />
        </div>

    );
}
export default App;