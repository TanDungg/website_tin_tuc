import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CustomCarousel from "./components/Common/CustomCarousel";

function App() {
  const images = [
    "src/assets/images/LogoTinTuc.png",
    "src/assets/images/LOGO DAO TAO-05.png",
    "src/assets/images/LogoTinTuc.png",
  ];

  return (
    <>
      <CustomCarousel autoplay images={images} />
      <div className="container-app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
