import logo from './logo.svg';
import './App.css';
import './hello.css'

function Hello({fname}) {
  return <p className='myname'>This is a para in Hello tag name: <strong>{fname}</strong></p>
}

export default Hello;
