import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchContinent} from "../../../state/getContinent.slice"
import search from '../../../assets/search.svg' 
import ContinentFiltered from '../ContinentFiltered';
import { SearchBar,Container } from './styles';

const FilterContinent = () => {
    const [continent, setContinent] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (continent === "") return alert('Please enter a continent !!!');
        dispatch(fetchContinent(continent));
        setContinent('');
    };
    return (
        <Container>
            <h1>Continent page</h1>
            <SearchBar>
                <form onSubmit={submitHandler}>
                    <input type='text' 
                    value={continent} 
                    placeholder='Search Continent' 
                    onChange={(e) => setContinent(e.target.value)}/>
                    <button type='submit'><img src={search} alt='search'/></button>
                </form>
            </SearchBar>
            <div>
            <ContinentFiltered/>
            </div>
        </Container>
    );
};

export default FilterContinent;