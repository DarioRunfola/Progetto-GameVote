import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGame from './components/CardGame';
import SingleCard from './components/SingleCard';
import GameList from './Data/GameList.json'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';



function App() {
  return (
    <div className="App">
    
        <MyNav/>
        <SingleCard game={GameList[2]}/> 
        <CardGame games={GameList}/>
        <MyFooter/>
    </div>
  );
}

export default App;
