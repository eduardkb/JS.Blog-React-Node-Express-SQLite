import '@fontsource/roboto/300.css';
import Header from "./components/Header";
import MainPannel from "./components/MainPannel";
import Footer from "./components/Footer";
import TestComponents from './components/TestComponents';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPannel />
      <Footer />      
      <TestComponents />
    </div>
  );
}

export default App;
