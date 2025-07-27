import {
  ContainerGeneral,
  ContainerLogin,
  ContainerLoginDisplay,
} from "./style";
import logo from "./assets/images/logo-jellyfy.svg";
import { Button } from "./components/button";
import { Input } from "./components/input";
export function App() {
  return (
    <>
      <ContainerGeneral>
        <ContainerLogin>
          <span>
            Jellyfy <img width={30} src={logo} alt="" />
          </span>
          <ContainerLoginDisplay>
            <div>
              <span>
                <Button
                  urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  name="Logar com Google"
                />
              </span>
              <Button
                urlImage="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                name="Logar com Github"
              />
            </div>
            <Input placeholder="Insira o Usuário" />
            <Input placeholder="Insira a Senha" />
            <Button name="Entrar" />
          </ContainerLoginDisplay>
        </ContainerLogin>
      </ContainerGeneral>
    </>
  );
}
