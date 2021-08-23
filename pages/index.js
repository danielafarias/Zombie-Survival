import styles from '../styles/Home.module.css';
import { Grid, } from '@material-ui/core';
import MenuBar from '../components/MenuBar';
import Header from '../components/Header';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Home() {
  const [apocalypseTimer, setApocalypseTimer] = React.useState(999999999)
  let intervalRef = React.useRef();

  const decreaseTimer = () => setApocalypseTimer((prev) => prev - 1);

  React.useEffect(() => {
        intervalRef.current = setInterval(decreaseTimer, 1000); 
        return () => clearInterval(intervalRef.current);
    }, []);

  return (
      <div>
        <Header />
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item>
            <div className={styles.card}>
              <h3>{apocalypseTimer}</h3>
              <h3>to end of the world, <br/> Rent a bunker!</h3>
            </div>
            <LinearProgress color="secondary" />
          </Grid>
        </Grid>
        <br />
        <img className={styles.zombieHandImg} src='images/zombie-hand.svg' alt='Zombie Hand'/>
        
      </div>
  )
}
