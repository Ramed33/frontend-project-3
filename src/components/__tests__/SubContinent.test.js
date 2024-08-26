import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { fetchSubContinent } from "../../state/getSubContinent.slice";
import { fireEvent, store, render, screen, waitFor } from "../../app/mockedStoreWrapper";
import FilterSubContinent from "../SubContinentPage/FilterSubContinent";


const subcontinentData = {
  cca3: "CAN",
  subregion: "north america",
};

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("https://restcountries.com/v3.1/subregion/north america").reply(200, subcontinentData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};
describe("SubContinent slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a subcontinent", async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/subregion/${subcontinentData.subregion}`
    );
    expect(data).toEqual(subcontinentData);
  });
});


const mockedStore = store();
describe("SubContinent slice", () => {
  it("should fetch a continent with the fetchContinent thunk", async () => {
    await mockedStore.dispatch(fetchSubContinent(subcontinentData.subregion));
    const  subcontinentItems  = mockedStore.getState().subcontinent.subcontinent;
expect(subcontinentItems).toEqual(subcontinentData);
  });
});

describe('Filter SubContinent', () => {
  it('updates the searching when there is a bad input', async () => {
    render(<FilterSubContinent/>);

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