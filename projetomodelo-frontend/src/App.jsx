import 'bootswatch/dist/solar/bootstrap.css';
import CadastroUsuario from './views/cadastroUsuario';


function App() {
  return (
    <div>
      <CadastroUsuario />
    </div>
  );
}

export default App;

// Usando o JSX ele entende os atalhos, por exemplo, se vc colcoar h1 ele entende que é um html
// Já no JS ele não entende e não vai te dá sugestão. E também é bom usar quando for trabalhar em arquivo que use pouco HTML
//bootswatch.com