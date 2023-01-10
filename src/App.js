import './App.css';
import RouteTest from './components/RouteTest';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary'; 

//COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headText='App' 
        leftChild={<MyButton text={"왼쪽버튼"}
        onClick={()=>alert("왼쪽 클릭")}/>}
        rightChild={<MyButton text={"오른쪽버튼"}
        onClick={()=>alert("오른쪽 클릭")}/>}
        />
        <h2>App.js</h2> 
        <MyButton text={'버튼'} onClick={()=>alert("버튼클릭")} type={'positive'}/>
        <MyButton text={'버튼'} onClick={()=>alert("버튼클릭")} type={'negative'}/>
        <MyButton text={'버튼'} onClick={()=>alert("버튼클릭")} />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/new' element={<New/>}/>
          <Route path = '/edit' element={<Edit/>}/>
          <Route path = '/diary/:id' element={<Diary/>}/>
        </Routes>
      </div>                
    </BrowserRouter>

  );
}

export default App; 
