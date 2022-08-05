import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles-list' element={<ArticlesList />} />
            <Route path='/article' element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
