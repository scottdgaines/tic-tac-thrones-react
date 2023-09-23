import './App.css';
import Sidebar from '../Sidebar/Sidebar'
import Grid from '../Grid/Grid'

function App() {
  return (
    <div>
      <Sidebar player1={true} />
      <Grid />
      <Sidebar player2={true} />
    </div>
  );
}

export default App;
