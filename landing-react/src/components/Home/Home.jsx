import "./home.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Body from "../Body/Body";

const Home = () => {
  return (
    <div className="box">
      <header className="header back sm:screen lg:screen">
        <Navbar />
        <span className="header__text">
          <h2>IMMERSIVE</h2>
          <h2>EXPERIENCES</h2>
          <h2>THAT</h2>
          <h2>DELIVER</h2>
        </span>
      </header>
      <main>
        <Body/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
