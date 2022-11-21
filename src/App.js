import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import History from './History';
import {
  useState
} from 'react';

function App() {
  const [list,setList] = useState([]);
  const handleChange = (data) => {
     list.push(data);
     setList(JSON.parse(JSON.stringify(list)));
  }
  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Calculator onChange={handleChange}></Calculator>
      <h1>History</h1>
      <History list={list} onUpdate={(list)=>{
        setList(list);
      }}></History>
    </div>
  );
}

export default App;
