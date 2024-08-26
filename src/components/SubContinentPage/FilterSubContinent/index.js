import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSubContinent } from '../../../state/getSubContinent.slice';
import search from "../../../assets/search.svg";
import SubContinentFiltered from '../SubContinentFiltered';
import { SearchBar,Container } from './styles';

const FilterContinent = () => {
    const [subcontinent, setSubContinent] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (subcontinent === "") return alert('Please enter a Subcontinent !!!');
        dispatch(fetchSubContinent(subcontinent));
        setSubContinent('');
    };
    return (
        <Container>
            <h1>Subcontinent page</h1>
            <SearchBar>
                <form onSubmit={submitHandler}>
                    <input type='text' 
                    value={subcontinent} 
                    placeholder='Search Subcontinent' 
                    onChange={(e) => setSubContinent(e.target.value)}/>
                    <button type='submit'><img src={search} alt='search'/></button>
                </form>
            </SearchBar>
            <div>
                <SubContinentFiltered/>
            </div>
        </Container>
    );
};

export default FilterContinent;