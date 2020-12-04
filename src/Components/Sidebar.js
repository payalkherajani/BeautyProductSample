import React,{useState,useEffect} from 'react';
import axios from 'axios';

 const Sidebar = () => {

    const [data,setData] = useState([]);

    const getData = async() => {
        const res = await axios.get('http://localhost:8000/options');
        setData(res.data);
    }

    useEffect(() => {
        getData();
    },[])
    return (
        <div className="sidebar-container">
              <h2 className="heading-sidebar">Filter Options</h2>
            <div>
                <h3>Item Type</h3>
                <ul>
                    <li><input type="checkbox" />All</li>
                    <li> <input type="checkbox" />Subscription</li>
                    <li> <input type="checkbox" />Premium</li>
                    <li> <input type="checkbox" />Free</li>

                </ul>
            </div>

            <div>
            <h3>Category</h3>
            <div>
                {data.map(d => <div key={d}> <input type="checkbox" /> {d} </div>)}
            </div>
            </div>   
        </div>
    )
}


export default Sidebar;