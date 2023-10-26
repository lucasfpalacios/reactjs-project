import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () =>{

  React.useEffect(()=>{
    characters.getById({id: 1}).then((r)=>{
      console.log(r.data)
    }).catch((e)=>{
      console.error(e)
    })
  },[])
  return(
    <Container maxWidth='xl'>
      <HeaderComponent
        title="Hola Mundo"
        description="Bienvenido a codrr"
        element={<Button fullWidth variant="contained">Hola Mundo</Button>}
      />
    </Container>
  );
};

