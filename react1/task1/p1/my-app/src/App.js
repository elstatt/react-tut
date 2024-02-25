import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo';


function KyokaInfo() {
  return (
    <div class="kyoka effect">
      
      <h1>Kyoka</h1>
      <p>I am a student at My Hero Academia</p>
      <h3>My future vacation spots</h3>
      <ul>
        <li>LA</li>
        <li>NYC</li>
        <li>Sweden</li>
      </ul>
      
    </div>
  )
}

function MomoInfo() {
  return (
    <div class="momo effect">
      <h1>Momo Yayarazou</h1>
      <p>A star student at My Hero Academia</p>
      <h3>My future vacation spots</h3>
      <ul>
        <li>Paris</li>
        <li>Seoul</li>
        <li>Denmark</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div class="App">
      <MyInfo />
      <KyokaInfo />
      <MomoInfo />
    </div>
  );
}

export default App;
