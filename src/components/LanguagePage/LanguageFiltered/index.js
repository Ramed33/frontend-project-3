import React, { useEffect } from 'react';
import { Container, SectionCountry, ImageCountry, TitleCountry, InfoCountry } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectLanguage,
    getLanguageStatus,
    getLanguageError,
    fetchLanguage,
} from '../../../state/getLanguage.slice';

const LanguageFiltered = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const languageStatus = useSelector(getLanguageStatus);
  const error = useSelector(getLanguageError);

  useEffect(() => {
    if (languageStatus === 'idle') {
      dispatch(fetchLanguage());
    }
  }, [languageStatus, dispatch]);

  let languageToDisplay = '';
  if (languageStatus === 'loading') {
    languageToDisplay = <h2>Loading...</h2>;
  } else if (languageStatus === 'succeeded') {
    languageToDisplay = language.map((data) => (
      <SectionCountry key={data.cca3}>
        <ImageCountry src={data.flags.png} alt={data.name.official}/>
        <TitleCountry>{data.name.official}</TitleCountry>
        <InfoCountry>Capital: {data.capital}</InfoCountry>
        <InfoCountry>Continent: {data.region}</InfoCountry>
        <InfoCountry>Subcontinent: {data.subregion}</InfoCountry>
      </SectionCountry>
    ));
  } else if (languageStatus === 'failed') {
    languageToDisplay = <p>{error}</p>;
  }

  return (
    <Container>
      {languageToDisplay}
    </Container>
  );
};

export default LanguageFiltered;