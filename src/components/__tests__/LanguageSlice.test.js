import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { fetchLanguage } from "../../state/getLanguage.slice";
import { fireEvent, store, render, screen, waitFor } from "../../app/mockedStoreWrapper";
import FilterLanguage from "../LanguagePage/FilterLanguage"


const languageData = {
  cca3: "ITA",
  languages: {
    ita: "italian"
  },
};

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("https://restcountries.com/v3.1/lang/italian").reply(200, languageData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};
describe("Language slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a language", async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/lang/${languageData.languages.ita}`
    );
    expect(data).toEqual(languageData);
  });
});


const mockedStore = store();
describe("Language slice", () => {
  it("should fetch a language with the fetchLanguage thunk", async () => {
    await mockedStore.dispatch(fetchLanguage(languageData.languages.ita));
    const languageItems  = mockedStore.getState().language.language;
expect(languageItems).toEqual(languageData);
  });
});

describe('Filter Language', () => {
  it('updates the searching when there is a bad input', async () => {
    render(<FilterLanguage/>);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: "mexico"}});

    const button = screen.getByAltText("search");
    fireEvent.click(button);

    await waitFor(() => {
  
    const updateText = screen.getByText(/Request failed with status code 404/i);
    expect(updateText).toBeInTheDocument();
    });
  });
});