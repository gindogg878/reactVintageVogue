import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        img="./public/pics/blog-image-1.jpg"
      />
      <Article
        date="11/11/20"
        title="Vintage in Vogue"
        img="./public/pics/blog-image-2.jpg"
      />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
