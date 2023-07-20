import "./home.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <div className="box">
      <header className="header back sm:screen lg:screen">
        <Navbar />
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
