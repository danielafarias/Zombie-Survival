
import styles from '../styles/Home.module.css';
import { Grid } from '@material-ui/core';
import MenuBar from '../components/MenuBar';
import React from 'react';

export default function Header() {

  return (
      <div>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item>
            <img className={styles.zombieImg} src='images/zombie.svg' alt='Zombie'/>
          </Grid>

          <Grid item>
            <h1>Zombie <br/> Survival</h1>
          </Grid>
        </Grid>

          <MenuBar />
        
      </div>
  )
}

