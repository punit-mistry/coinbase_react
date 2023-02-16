import {AppBar,Container,MenuItem,Select,Toolbar,Typography,} from "@material-ui/core";

import {createTheme,makeStyles,ThemeProvider,} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Data from "../Pages/Welcome";
import './Header.css'
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  
  name:{
    color: "gold",
  },
  
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});



function Header(props) {
  if(props.name[0]===""){
    props.name[0]="Enter"
  props.name[1]="Name";
}
else{
props.name[0] = props.name
}
  
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const history = useHistory();
  console.log(props.lastname)
  return (
    <><ThemeProvider theme={darkTheme}>
      
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/home`)}
              variant="h6"
              className={classes.title}
            >
              Crypto World
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
           <span ><p className="text">Welcome, <span className={classes.name}>{props.name[0] } {props.name[1]}.</span></p></span>
            
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"RUB"}>RUB</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"CAD"}>CAD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider><>
  
            
            
      </>
      </>
  );

}

export default Header;
