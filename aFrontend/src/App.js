import Header from "./components/Header";
import MainPannel from "./components/MainPannel";
import Footer from "./components/Footer";
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from "./mui_css/muiStyles"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
          <Header />
          <MainPannel />
          <Footer />
      </ ThemeProvider>
    </div>
  );
}

export default App;
