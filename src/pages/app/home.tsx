import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CapysLogo from "../../assets/image.png";
import { fetchLivros } from "../../services/livrosService"; 
import { Livro } from "../../types/livro"; 
import "./home.css";

export default function Home() {
  const [livros, setLivros] = useState<Livro[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const loadLivros = async () => {
      try {
        const data = await fetchLivros(); 
        setLivros(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro desconhecido";
        setError(errorMessage); 
        toast.error("Erro ao carregar os livros"); 
        setLoading(false); 
      }
    };

    loadLivros(); 
  }, []);

  const handleLogout = () => {
    toast.success("Você saiu com sucesso!");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-actions">
          <div className="header-logo">
            <img src={CapysLogo} alt="Capys Logo" />
          </div>
          <Link to="/" className="button-secondary" onClick={handleLogout}>
            Sair
          </Link>
        </div>

        <div className="header-content">
          <h1>Olá, Teste Capys</h1>
          <p>Desenvolvedor Front-End</p>
        </div>
      </header>

      <main className="home-main">
        <section className="home-section">
          <h2>Lista de Livros</h2>
          {livros.length > 0 ? (
            <div className="livros-list">
              {livros.map((livro) => (
                <div key={livro.ID} className="livro-item">
                  <h3>{livro.NOME}</h3>
                  <p>Autor: {livro.AUTOR}</p>
                  <p>Editora: {livro.EDITORA}</p>
                  <p>Publicação: {livro.DATA_PUBLICACAO}</p>
                  <p>Avaliação: {livro.Star} </p>
                  {livro.FL_FAVORITO && <span> Favorito</span>}
                </div>
              ))}
            </div>
          ) : (
            <p>Nenhum livro encontrado.</p>
          )}
        </section>
      </main>
    </div>
  );
}
