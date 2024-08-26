import React, { useEffect } from 'react';
import { Container, SectionCountry, ImageCountry, TitleCountry, InfoCountry } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectContinent,
    getContinentStatus,
    getContinentError,
    fetchContinent,
} from '../../../state/getContinent.slice';

const ContinentFiltered = () => {
  const dispatch = useDispatch();
  const continent = useSelector(selectContinent);
  const continentStatus = useSelector(getContinentStatus);
  const error = useSelector(getContinentError);

  useEffect(() => {
    if (continentStatus === 'idle') {
      dispatch(fetchContinent());
    }
  }, [continentStatus, dispatch]);

  let continentToDisplay = '';
  if (continentStatus === 'loading') {
    continentToDisplay = <h2>Loading...</h2>;
  } else if (continentStatus === 'succeeded') {
    continentToDisplay = continent.map((data) => (
      <SectionCountry key={data.cca3}>
        <ImageCountry src={data.flags.png} alt={data.name.official}/>
        <TitleCountry>{data.name.official}</TitleCountry>
        <InfoCountry>Capital: {data.capital}</InfoCountry>
        <InfoCountry>Continent: {data.region}</InfoCountry>
        <InfoCountry>Subcontinent: {data.subregion}</InfoCountry>
      </SectionCountry>
    ));
  } else if (continentStatus === 'failed') {
    continentToDisplay = <p>{error}</p>;
  }

  return (
    <Container>
      {continentToDisplay}
    </Container>
  );
};

export default ContinentFiltered;