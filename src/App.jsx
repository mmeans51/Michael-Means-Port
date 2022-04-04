import { useContext } from "react";
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import MyworkList from "./components/MyworkList/MyworkList";
import Contactme from "./components/contact/contact";
import Toggle from "./components/toggle/toggle"
import { ThemeContext } from "./context";
const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Intro/>
        <About/>
        <MyworkList/>
        <Contactme/>
        </div>
  );
};

export default App;