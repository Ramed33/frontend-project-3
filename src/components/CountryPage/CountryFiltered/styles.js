import styled from "styled-components";

const Container = styled.div`
    background-color: #98CB89;
    padding: 10px;
`;

const SectionCountry = styled.div`
    background-color: #1571B3;
    padding: 10px;
`;

const ImageCountry = styled.img`
    width: 30%;
    margin: auto;
    display: block;    
`;

const TitleCountry = styled.h4`
    text-align: center;
    font-size: larger;
    font-weight: 700;
`;

const InfoCountry = styled.p`
    text-align: center;
    text-align-last: center;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: medium;
    font-weight: 500;
`;

export {
    Container,
    SectionCountry,
    ImageCountry,
    TitleCountry,
    InfoCountry
}