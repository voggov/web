import React, {useState, useEffect} from 'react';
import ListComponent from './ListComponent';
import search from './search';

function App() {
  const array=[
    {id:1, content: 'BMW 1-Series (F20)'},
    {id:2, content: 'Mercedes AMG GT'},
    {id:3, content: 'Audi A6 allroad quattro'},
    {id:4, content: 'BMW 6-Series Gran Turismo (G32)'},
    {id:5, content: 'Mercedes G-class'},
    {id:6, content: 'Audi e-tron Sportback'}];

  const [elementsArray, setNewArray] = useState([]);
  const [enter, setEnterElement]=useState('');
  useEffect (()=>{
    if(enter.length!==0){
      search(array,enter,setNewArray);
    }else{
      document.title='useEffect hook example';
      setNewArray([...array]);
    }
  },[enter]);

  return (
      <div className = "App">
        <input type = "text" value={enter} onChange = {(event)=>setEnterElement(event.target.value)}/>
        <ListComponent elements={elementsArray}/>
      </div>
  );
}

export default App;


















// My code
/*
import '../styles/globals.css'
/!*
import 'react-awesome-slider/dist/styles.css';
*!/

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/
