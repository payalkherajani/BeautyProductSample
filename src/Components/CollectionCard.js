import React,{useState,useEffect} from 'react';
import axios from 'axios';

//Components
import SingleCard from './SingleCard';

const CollectionCard = () => {

    const [data,setData] = useState([]);

    const getData = async() => {
        const res = await axios.get('http://localhost:8000/CardData');
        setData(res.data);
    }


    useEffect(() => {
        getData()
    },[]);

    return (
        <div className="collectioncard-container">
           {
               data.map(sd => <SingleCard sd={sd} key={sd.id} />)
           }
        </div>
    )
}

export default CollectionCard;