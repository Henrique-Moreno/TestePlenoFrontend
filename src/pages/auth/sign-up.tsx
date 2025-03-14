import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button/button'; 
import { PasswordInput } from '../../components/ui/password-input/passwordInput';

import CapysLogo from "../../assets/image.png";
import './sign-up.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Confirmar Senha:', confirmPassword);
    console.log('Bio:', bio);
    console.log('Contato:', contact);
    console.log('Cargo:', role);
  };

  return (
    <div className="sign-container">
      <div className="sign-header">
        <div className="sign-logo">
        <img src={CapysLogo} alt="Capys Logo" />
        </div>
        <Link to="/" className="button-secondary">
          Voltar
        </Link>
      </div>
      <form className="sign-form" onSubmit={handleSignUp}>
        <h1 className="title1">Crie sua conta</h1>
        <p className="headline">Rápido e grátis, vamos nessa</p>
        <div className="input-group">
          <label htmlFor="name" className="headline-bold">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            className="input-default"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="headline-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
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
            placeholder="Digite aqui sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="headline-bold">
            Confirmar Senha
          </label>
          <PasswordInput
            placeholder="Digite novamente sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="bio" className="headline-bold">
            Bio
          </label>
          <textarea
            id="bio"
            placeholder="Fale sobre você"
            className="input-default"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="contact" className="headline-bold">
            Contato
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            className="input-default"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="role" className="headline-bold">
            Selecionar Cargo
          </label>
          <select
            id="role"
            className="input-default"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Selecione um cargo</option>
            <option value="frontend">Desenvolvedor Front-End</option>
            <option value="backend">Desenvolvedor Back-End</option>
            <option value="fullstack">Desenvolvedor Full-Stack</option>
          </select>
        </div>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
