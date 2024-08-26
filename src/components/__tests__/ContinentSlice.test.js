import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { fetchContinent } from "../../state/getContinent.slice";
import { fireEvent, store, render, screen, waitFor } from "../../app/mockedStoreWrapper";
import FilterContinent from "../ContinentPage/FilterContinent";


const continentData = {
  cca3: "NOR",
  region: "europe",
};

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("https://restcountries.com/v3.1/region/europe").reply(200, continentData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};
describe("Continent slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a continent", async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/region/${continentData.region}`
    );
    expect(data).toEqual(continentData);
  });
});


const mockedStore = store();
describe("Continent slice", () => {
  it("should fetch a continent with the fetchContinent thunk", async () => {
    await mockedStore.dispatch(fetchContinent(continentData.region));
    const  continentItems  = mockedStore.getState().continent.continent;
expect(continentItems).toEqual(continentData);
  });
});

describe('Filter Continent', () => {
  it('updates the searching when there is a bad input', async () => {
    render(<FilterContinent/>);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: "french"}});

    const button = screen.getByAltText("search");
    fireEvent.click(button);

    await waitFor(() => {
  
    const updateText = screen.getByText(/Request failed with status code 404/i);
    expect(updateText).toBeInTheDocument();
    });
  });
});