import './ExploreContainer.css';
import axios from 'axios';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

const API_KEY = '';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (query:any) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};

// Uso estático
const result = await searchBooks('React Native');
console.log(result);

export default ExploreContainer;
