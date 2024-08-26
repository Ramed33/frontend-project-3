import { Container } from "./styles";

const InitialPage = () => {

    return (
        <article>
            <Container>
                <h1>Welcome to globe app</h1>
                <h2>Click on menu icon and select an option to look for:</h2>
                <h3>Country:</h3>
                <p>to see all information about this country</p>
                <h3>Continent:</h3>
                <p>to see all the countries in such continent</p>
                <h3>Subcontinent:</h3>
                <p>to see all the countries in a region of a continent</p>
                <h3>Language:</h3>
                <p>to see a list of a countries where is spoken</p>
            </Container>
        </article>
    )
};

export default InitialPage;