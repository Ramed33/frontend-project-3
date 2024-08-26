import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { fetchCountry } from "../../state/getCountry.slice";
import { fireEvent, store, render, screen, waitFor } from "../../app/mockedStoreWrapper";
import FilterCountry from "../CountryPage/FilterCountry";


const countryData = {
  cca3: "MEX",
  name: {
    common: "mexico",
    official: "United Mexican States",
    nativeName: {
    spa: {
    official: "Estados Unidos Mexicanos",
    common: "México"
    }
    }
  },
};

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("https://restcountries.com/v3.1/name/mexico").reply(200, countryData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};
describe("Country slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a country", async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${countryData.name.common}`
    );
    expect(data).toEqual(countryData);
  });
});


const mockedStore = store();
describe("Country slice", () => {
  it("should fetch a country with the fetchCountry thunk", async () => {
    await mockedStore.dispatch(fetchCountry(countryData.name.common));
    const  countryItems  = mockedStore.getState().country.country;
expect(countryItems).toEqual(countryData);
  });
});

describe('Filter Country', () => {
  it('updates the searching when there is a bad input', async () => {
    render(<FilterCountry/>);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: "americas"}});

    const button = screen.getByAltText("search");
    fireEvent.click(button);

    await waitFor(() => {
  
    const updateText = screen.getByText(/Request failed with status code 404/i);
    expect(updateText).toBeInTheDocument();
    });
  });
});