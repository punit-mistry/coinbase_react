import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import Footer from "./components/footer";
import TokenForm from "./Pages/Welcome";
const useStyles = makeStyles(() => ({
  App: {
    background: "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);",
    // backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  console.log(TokenForm.data)
  return (
    <BrowserRouter>
    <WavyContainer />
      <div className={classes.App}>
      <Route
          path="/"
          element={
            <>
              <WavyLink to="/" color="red">
              TokenForm.TokenForm
              </WavyLink>
              <WavyLink direction="up" to="/home" color="blue">
              Homepage
              </WavyLink>
              <WavyLink duration={1000} to="/coins/:id" color="yellow">
              CoinPage
              </WavyLink>
              <Switch />
            </>
          } />
        
        <div className="form"><Route  path="/" component={TokenForm.TokenForm} exact  /></div>
        
        <Route path="/home" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <div className="footer">

        <Footer  />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
