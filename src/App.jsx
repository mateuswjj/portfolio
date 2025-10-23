/* eslint-disable no-unused-vars */
import './App.css';
import { Grid } from '@mui/material';
import { Title } from './components/Title';
import { MultiActionAreaCard } from './components/CardComponent';
import { MainMenu } from './components/Menu';

import bisao from './assets/bisao.png';

function App() {

  const itens = [
    {
      name: "card 1",
      image_url: bisao,
      message: " textttt textttt textttt textttt textttt textttt",
      link: " textttt textttt textttt textttt textttt textttt"
    },
    {
      name: "card 2",
      image_url: bisao,
      message: " textttt textttt textttt textttt textttt textttt",
      link: " textttt textttt textttt textttt textttt textttt"
    },
    {
      name: "card 3",
      image_url: bisao,
      message: " textttt textttt textttt textttt textttt textttt",
      link: " textttt textttt textttt textttt textttt textttt"
    },
    {
      name: "card 4",
      image_url: bisao,
      message: " textttt textttt textttt textttt textttt textttt",
      link: " textttt textttt textttt textttt textttt textttt"
    },
    {
      name: "card 5",
      image_url: bisao,
      message: " textttt textttt textttt textttt textttt textttt",
      link: " textttt textttt textttt textttt textttt textttt"
    }
  ]

  return (
    <>
      <div>
        <MainMenu></MainMenu>
        <Title></Title>
        
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {itens.map((item) => (
            <Grid item>
              <MultiActionAreaCard content={item}></MultiActionAreaCard>
            </Grid>
          ))}

        </Grid>
      </div>
    </>
  )
}


export default App
