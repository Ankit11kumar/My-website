import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Portfolio from "./contents/Portfolio";
import Contact from "./contents/Contact";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .condiv{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  nav{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  a{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .back1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .social{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .btnsame{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu2{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
`;

function App() {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify({ mode: "light" }));
      setTheme({ mode: "light" });
    } else {
      setTheme(JSON.parse(localStorage.getItem("theme")));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "theme",
  //     JSON.stringify(
  //       theme.mode === "dark" ? { mode: "dark" } : { mode: "light" }
  //     )
  //   );
  // }, [theme]);
  return (
    <>
      {JSON.parse(localStorage.getItem("theme")) ? (
        <ThemeProvider theme={JSON.parse(localStorage.getItem("theme"))}>
          <>
            <GlobalStyle />
            <Router>
              <div className="App">
                <Navbar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <div
                  class="back1"
                  onClick={async (e) => {
                    await localStorage.setItem(
                      "theme",
                      JSON.stringify(
                        theme.mode === "dark"
                          ? { mode: "light" }
                          : { mode: "dark" }
                      )
                    );
                    await setTheme(
                      theme.mode === "dark"
                        ? { mode: "light" }
                        : { mode: "dark" }
                    );
                  }}
                >
                  <i
                    class={
                      JSON.parse(localStorage.getItem("theme")).mode === "dark"
                        ? "fa fa-sun i1"
                        : "fa fa-moon i1"
                    }
                  ></i>
                </div>
              </div>
            </Router>
          </>
        </ThemeProvider>
      ) : null}
    </>
  );
}

export default App;
