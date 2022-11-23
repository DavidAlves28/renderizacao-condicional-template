import { BackToLoginButton } from "./styled";
import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado({irPara}) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={()=>irPara(1)}> Logout </BackToLoginButton>
          </Div>
    )
}

export default TelaUsuarioCadastrado;