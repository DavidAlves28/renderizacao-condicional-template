import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  // Condicao com if
  // if (trocarTela === 1) {
    //   return (
      //     <MainContainer >
      //       <GlobalStyled />
      //       <TelaLogin />
      //     </MainContainer>
      //   )
      // } else {
        
        //   return (
          //     <MainContainer >
          //       <GlobalStyled />
          //       <TelaCadastro />
          //     </MainContainer>
          //   );
          // }
          
          
          // if ternario 
          // const mudarpagina = trocarTela ===1 ?<TelaLogin/>:<TelaCadastro/>
          // {mudarpagina}
          {/* <TelaLogin/>
        <TelaCadastro /> */}
        const [trocarTela, setTrocarTela] = useState(1)
        
        function irPara(tela) {
          setTrocarTela(tela)
        }

  switch(trocarTela) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin irPara={irPara} />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaCadastro  irPara={irPara} />
        </MainContainer>
      )
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaUsuarioCadastrado irPara={irPara}/>
        </MainContainer>
      )
        default :
        return "Página não encontrada"
  }

  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {/* ternario dentro do JSX */}
  //     {trocarTela === 1 ? <TelaLogin irPara={irPara} /> : <TelaCadastro trocarTela={trocarTela} irPara={irPara} />}

  //     {/* <TelaLogin/>
  //     <TelaCadastro /> */}
  //   </MainContainer>
  // );
}

export default App;