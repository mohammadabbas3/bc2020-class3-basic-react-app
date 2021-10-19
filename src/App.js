import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello Form App.js <strong>{name}</strong> Age = {age - 2}
          <br/>
          <Hello fname={name}></Hello>
          <p>My Hobbies</p>
          <ul>
            <li>watching movies</li>
            <li>chatting</li>
          </ul>
          <p>Academics</p>
          <ol>
            <li>Bsc in Aph</li>
            <li>Msc in Aph</li>
          </ol>
        </div>
}

export default App;
