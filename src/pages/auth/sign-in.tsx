import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button/button"; 
import { PasswordInput } from "../../components/ui/password-input/passwordInput"; 
import { ResponseLogin } from "../../Mocks/login";
import { toast } from "react-toastify";

import CapysLogo from "../../assets/image.png";
import "./sign-in.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    if (!email || !password) {
      toast.error('Preencha todos os campos!'); 
      return;
    }
  
    // Simula os dados de login
    const loginData = {
      Email: email,
      Senha: password,
    };

    const response = ResponseLogin(loginData);
  
    if (response.status === 200) {
      toast.success(response.data.mensagem); 
      navigate('/home'); 
    } else {
      toast.error('Ops! Algo deu errado'); 
    }
  };

  return (
    <div className="sign-container">              
      <figure className="sign-logo">
      <img src={CapysLogo} alt="Capys Logo" />
      </figure>
      <form className="sign-form" onSubmit={handleLogin}>
        <h1 className="title1">Login</h1>
        <div className="input-group">
          <label htmlFor="email" className="headline-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="teste@capys.com.br"
            className="input-default"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="headline-bold">
            Senha
          </label>
          <PasswordInput
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
        <div className="sign-up-container">
          <p className="headline">Ainda não possui uma conta?</p>
          <Link to="/sign-up" className="button secondary">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
