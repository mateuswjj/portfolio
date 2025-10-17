/* eslint-disable no-unused-vars */
import './App.css'
import { Title } from './components/Title'
import { MultiActionAreaCard } from './components/CardComponent'
import * as React from 'react';
import { Grid, Paper } from "@mui/material";

function App() {

  const itens = [
    {
      name: "card 1",
      image_url: "src/assets/bisao.png",
      message: "x",
      link: "x"
    },
    {
      name: "card 2",
      image_url: "src/assets/bisao.png",
      message: "x",
      link: "x"
    },
    {
      name: "card 3",
      image_url: "src/assets/bisao.png",
      message: "x",
      link: "x"
    },
    {
      name: "card 4",
      image_url: "src/assets/bisao.png",
      message: "x",
      link: "x"
    },
    {
      name: "card 5",
      image_url: "src/assets/bisao.png",
      message: "x",
      link: "x"
    }
  ]

  return (
    <>
      <div>
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
