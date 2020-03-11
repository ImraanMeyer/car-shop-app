import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';

const App = () => {    
    const [cars, setCars] = useState([]);

    const getData = () => {
        fetch('http://localhost:5050/api')
            .then(res => setCars(res))
    }

    useEffect(() => {
        getData()
    }, [setCars])

    console.log(cars)

    return(
        <div>
            <Navbar/>  
        </div>
    )
}

export default App;