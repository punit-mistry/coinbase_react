import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(https://r4.wallpaperflare.com/wallpaper/1005/822/563/star-wars-death-star-at-at-space-wallpaper-abe6bced53f1bfb9a5847bf93dac5c90.jpg)",
    backgroundSize:"cover"
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
           
            }}
          >
            Crypto World
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
             
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              color:"gold"
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
            <br></br>
            Start Tracking and Happy Trading !!
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
