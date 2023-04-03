import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles.css";
import ImgOne from "./blog-image-1.jpg";
import ImgTwo from "./blog-image-2.jpg";

function App() {
  return (
    <div className="main">
      <Header />
      <Nav classname="first" />
      <Article date="11/12/20" title="On the Street in Brooklyn" img={ImgOne} />
      <Article date="11/11/20" title="Vintage in Vogue" img={ImgTwo} />
      <Nav classname="second" />
      <Footer />
    </div>
  );
}

export default App;
