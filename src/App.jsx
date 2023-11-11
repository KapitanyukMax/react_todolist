import './App.css';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, veniam!</p>

      <Counter />
      <Users />
    </div>
  );
}

export default App;
