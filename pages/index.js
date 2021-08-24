import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Header from "../components/Header";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [apocalypseTimer, setApocalypseTimer] = React.useState(999999999);
  let intervalRef = React.useRef();

  const decreaseTimer = () => setApocalypseTimer((prev) => prev - 1);

  React.useEffect(() => {
    intervalRef.current = setInterval(decreaseTimer, 100);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Zombie Survival</title>
      </Head>
      <Header title="Welcome to apocalypse survival!" />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <div className={styles.card}>
            <h3>{apocalypseTimer}</h3>
            <h3>
              to the end of the world, <br /> Rent a bunker!
            </h3>
          </div>
        </Grid>
        <br />
        <Grid item>
          <img
            src="https://i.pinimg.com/originals/9e/c6/ba/9ec6ba018d919bd20fc8715cddeb66e0.gif"
            alt="Zombie Running"
          />
        </Grid>
      </Grid>
    </div>
  );
}
