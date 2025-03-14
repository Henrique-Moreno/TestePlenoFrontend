import { ResponseLivros } from '../Mocks/livros';
import { Livro } from '../types/livro'; 

export async function fetchLivros(): Promise<Livro[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um delay de 1 segundo

    const response = ResponseLivros(); 
    if (response.status === 200) {
      return response.data.lstLivros; 
    }
    throw new Error('Erro ao carregar os livros');
  } catch (error) {
    console.error(error);
    throw error;
  }
}