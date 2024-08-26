import styled from "styled-components";

const AppHeader = styled.header`
    justify-content: space-between;
    align-items: center;
    background-color: #98CB89;
    display: flex;
    padding: 5px;
    margin: auto;

    .menu {
        width: 40px;
        cursor: pointer;
    }

    .logo {
        width: 50px;
        cursor: pointer;
    }
`;

export default AppHeader;