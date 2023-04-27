import React, {useState, useEffect} from 'react';
import ListComponent from './ListComponent';
import search from './search';

function App() {
    const array = [
        {id: 1, content: 'Java Core'},
        {id: 2, content: 'Kotlin'},
        {id: 3, content: 'PHP'},
        {id: 4, content: 'Python'},
        {id: 5, content: 'C#'},
        {id: 6, content: 'Swift'}];

    const [elementsArray, setNewArray] = useState([]);
    const [enter, setEnterElement] = useState('');
    const styles = {marginLeft: "45%"};
    useEffect(() => {
        if (enter.length !== 0) {
            search(array, enter, setNewArray);
        } else {
            document.title = 'useEffect hook example';
            setNewArray([...array]);
        }
    }, [enter]);

    return (
        <div className="App">
            <input type="text" value={enter} onChange={(event) => setEnterElement(event.target.value)} style={styles}/>
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
