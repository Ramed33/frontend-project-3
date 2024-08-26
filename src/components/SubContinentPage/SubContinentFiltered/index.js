import React, { useEffect } from 'react';
import { Container, SectionCountry, ImageCountry, TitleCountry, InfoCountry } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    getSubContinentStatus,
    getSubContinentError,
    fetchSubContinent,
    selectSubContinent,
} from '../../../state/getSubContinent.slice';

const SubContinentFiltered = () => {
  const dispatch = useDispatch();
  const subContinent = useSelector(selectSubContinent);
  const subContinentStatus = useSelector(getSubContinentStatus);
  const error = useSelector(getSubContinentError);

  useEffect(() => {
    if (subContinentStatus === 'idle') {
      dispatch(fetchSubContinent());
    }
  }, [subContinentStatus, dispatch]);

  let subContinentToDisplay = '';
  if (subContinentStatus === 'loading') {
    subContinentToDisplay = <h2>Loading...</h2>;
  } else if (subContinentStatus === 'succeeded') {
    subContinentToDisplay = subContinent.map((data) => (
      <SectionCountry key={data.cca3}>
        <ImageCountry src={data.flags.png} alt={data.name.official}/>
        <TitleCountry>{data.name.official}</TitleCountry>
        <InfoCountry>Capital: {data.capital}</InfoCountry>
        <InfoCountry>Continent: {data.region}</InfoCountry>
        <InfoCountry>Subcontinent: {data.subregion}</InfoCountry>
      </SectionCountry>
    ));
  } else if (subContinentStatus === 'failed') {
    subContinentToDisplay = <p>{error}</p>;
  }

  return (
    <Container>
      {subContinentToDisplay}
    </Container>
  );
};

export default SubContinentFiltered;