import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountry } from "../../../state/getCountry.slice";
import search from "../../../assets/search.svg";
import CountryFiltered from '../CountryFiltered';
import { SearchBar, Container } from './styles';

const FilterCountry = () => {
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (country === "") return alert('Please enter a country !!!');
        dispatch(fetchCountry(country));
        setCountry('');
    };
    return (
        <Container>
            <h1>Country page</h1>
            <SearchBar>
                <form onSubmit={submitHandler}>
                    <input type='text' 
                    value={country}
                    placeholder='Search Country' 
                    onChange={(e) => setCountry(e.target.value)}/>
                    <button type='submit'><img src={search} alt='search'/></button>
                </form>
            </SearchBar>
            <div>
                <CountryFiltered/>
            </div>
        </Container>
    );
};

export default FilterCountry;