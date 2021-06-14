import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCityWeather} from "../asyncActions/GetCityWeather";

function SearchBar(){
     const [searchText, setSearchText] = useState(useSelector(state => state.city));
     const dispatch = useDispatch()

     function searchCity(){
         dispatch(getCityWeather(searchText));
     }


return (
    <>
        <h1 className="header">Just enter your city and we are good to go</h1>
        <p>
        <input className="cityText" type="text" value={searchText} onChange={(event => setSearchText(event.target.value))} />
        </p>
        <input className="sendButton" type="button" value="Check Weather" onClick={searchCity}/>
    </>
)
}


export default SearchBar;
