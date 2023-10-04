import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props_Component from './components/Props';
import ClassProps from './components/Props_Class';

function App() {
  return (
    <div className="App">
      <Greet></Greet> /* Functional Component */
      <Welcome></Welcome> /* Class Component */
      <Hello></Hello> /* JSX Example Component */
      <h1>Functional Props Component</h1> 
      <Props_Component name="Geetha" secondname="Chandrasekar"></Props_Component>
      <Props_Component name="Uday" secondname="Kanappan"></Props_Component>
      <Props_Component name="Sangeetha" secondname="Chandrasekar"></Props_Component>
      <h1>Class Props Component</h1> 
      <ClassProps  name="Geetha" secondname="Chandrasekar"></ClassProps>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Kick Started React ! Cool ......
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
