import './style.scss'
import Carousel from "./components/common/Carousel";
import BasicExample from "./components/common/NavBar";
import CardLayout from "./components/common/CardLayout";
import Home from "./components/landing/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
     {/*   <BasicExample />*/}
     {/*<Carousel />*/}
     {/*   <CardLayout/>*/}
        <Home />
        <Footer/>
    </div>
  );
}

export default App;
