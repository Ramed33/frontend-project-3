import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLanguage } from "../../../state/getLanguage.slice"
import search from "../../../assets/search.svg";
import LanguageFiltered from '../LanguageFiltered';
import { SearchBar,Container } from './styles';

const FilterLanguage = () => {
    const [language, setLanguage] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (language === "") return alert('Please enter a language !!!');
        dispatch(fetchLanguage(language));
        setLanguage('');
    };
    return (
        <Container>
            <h1>Language page</h1>
            <SearchBar>
                <form onSubmit={submitHandler}>
                    <input type='text' 
                    value={language} 
                    placeholder='Search Language' 
                    onChange={(e) => setLanguage(e.target.value)}/>
                    <button type='submit'><img src={search} alt='search'/></button>
                </form>
            </SearchBar>
            <div>
                <LanguageFiltered/>
            </div>
        </Container>
    );
};

export default FilterLanguage;