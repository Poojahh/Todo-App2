import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchTodo from './components/SearchTodo';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTodo/>}/>
        <Route path="/search" element={<SearchTodo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
