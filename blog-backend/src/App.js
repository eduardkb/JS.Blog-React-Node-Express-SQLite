import '@fontsource/roboto/300.css';
import Header from "./components/Header";
import MainPannel from "./components/MainPannel";
import Footer from "./components/Footer";
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from './mui_css/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
          <Header />
          <MainPannel />
          <Footer />
          {/* <TestComponents /> */}
      </ ThemeProvider>
    </div>
  );
}

export default App;
