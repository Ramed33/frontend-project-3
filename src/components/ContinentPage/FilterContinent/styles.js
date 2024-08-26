import styled from "styled-components";

const Container = styled.section`
    margin: auto;
    padding: 25px;
    background-color: #1571B3;

    h1 {
        font-size: xx-large;
    }
`;

const SearchBar = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    background: #1571B3;
    padding: 25px;

    form {
        display: flex;
        justify-content: center;
        width: 70%;

        button {
            padding: 0px 8px;
            font-size: 20px;
            cursor: pointer;
            height: 34px;
            border-radius: 0px 6px 6px 0px;
            border: none;
        }
    }

    input {
        font-size: 18px;
        width: 100%;
        padding: 5px 5px 5px 10px;
        height: 24px;
        outline: none;
        border-radius: 6px 0px 0px 6px;
        border: none;
    }
`;

export {
    SearchBar,
    Container
}