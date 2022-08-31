import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";
import { ImgContextProvider } from "./context/imgContext.js";
import { TextContextProvider } from "./context/textContext.js";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
      
      
    </div>
  );
}

export default App;
