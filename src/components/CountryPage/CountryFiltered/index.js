import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCountry,
    getCountryStatus,
    getCountryError,
    fetchCountry,
} from '../../../state/getCountry.slice';
import { Container, SectionCountry, ImageCountry, TitleCountry, InfoCountry } from './styles';

const CountryFiltered = () => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const countryStatus = useSelector(getCountryStatus);
  const error = useSelector(getCountryError);

  useEffect(() => {
    if (countryStatus === 'idle') {
      dispatch(fetchCountry());
    }
  }, [countryStatus, dispatch]);

  let countryToDisplay = '';
  if (countryStatus === 'loading') {
    countryToDisplay = <h2>Loading...</h2>;
  } else if (countryStatus === 'succeeded') {
    countryToDisplay = country.map((data) => (
      <SectionCountry key={data.cca3}>
        <ImageCountry src={data.flags.png} alt={data.name.official}/>
        <TitleCountry>Official name</TitleCountry>
        <InfoCountry>{data.name.official}</InfoCountry>
        <TitleCountry>Capital</TitleCountry>
        <InfoCountry>{data.capital}</InfoCountry>
        <TitleCountry>Continent</TitleCountry>
        <InfoCountry>{data.region}</InfoCountry>
        <TitleCountry>Time zones</TitleCountry>
        <InfoCountry>{data.timezones}</InfoCountry>
        <TitleCountry>Start of week</TitleCountry>
        <InfoCountry>{data.startOfWeek}</InfoCountry>
        <TitleCountry>Google Maps</TitleCountry>
        <InfoCountry>{data.maps.googleMaps}</InfoCountry>
        <hr/>
      </SectionCountry>
    ));
  } else if (countryStatus === 'failed') {
    countryToDisplay = <p>{error}</p>;
  }

  return (
    <Container>
      {countryToDisplay}
    </Container>
  );
};

export default CountryFiltered;