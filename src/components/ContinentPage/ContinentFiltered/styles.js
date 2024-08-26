import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    background-color: #98CB89;
`;

const SectionCountry = styled.div`
    background-color: #1571B3;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3px;
`;

const ImageCountry = styled.img`
    width: 200px;
    height: 200px;
    margin: 1% auto;
    display: block;    
`;

const TitleCountry = styled.h4`
    width: 190px;
    text-align: center;
    font-size: medium;
    font-weight: 700;
`;

const InfoCountry = styled.p`
    text-align: center;
    text-justify:distribute;
    font-size: small;
    font-weight: 500;
`;

export {
    Container,
    SectionCountry,
    ImageCountry,
    TitleCountry,
    InfoCountry
}