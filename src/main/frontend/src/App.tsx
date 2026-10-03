import './App.css';
import UsuariosPage from './pages/UsuariosPage';
import PermissoesPage from './pages/PermissoesPage';
import ProdutosPage from './pages/ProdutosPage';

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="hero-tag">Sistema CRUD • Front-end + Spring Boot</p>
        <h1>Programação Web II</h1>
        <p className="hero-subtitle">
          Painel de gerenciamento para usuários, permissões e produtos.
        </p>
      </header>

      <div className="sections-grid">
        <UsuariosPage />
        <PermissoesPage />
        <ProdutosPage />
      </div>
    </main>
  );
}

export default App;
