
import BTCTracker from './settings'
import Background from './Background'
import './Moeda.css';

function App() {
  return (
    <div className="App">
      <Background></Background>
      <BTCTracker/>
      <div ClassName="Footer">
        <a href='https://www.github.com/horberlan'>Source code</a>
      </div>
    </div>
  );
}

export default App;
