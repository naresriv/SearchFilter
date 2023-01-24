import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchFilter = () => {

    const [search, setSearch] = useState([])
    const [inputInfo, setInputInfo] = useState("")

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((resposive) => setSearch(resposive.data))
            .catch((error) => setSearch(error))
    }, []);
    console.log("search", search)


    return (
        <div className='serach'>
            <h4>Serach Filter example</h4>
            <input placeholder='Search Title' onChange={(e) => setInputInfo(e.target.value)} type="text" />
            {search.filter((text) => text.title.includes(inputInfo)).map((item) => {
                return (
                    <p>{item.title.slice(0, 30)}</p>
                )
            })}
        </div>
    )
}

export default SearchFilter


