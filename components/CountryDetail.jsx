import { useContext, useEffect, useState } from 'react';
import FetchError from './FetchError';
import Loader from './Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { DarkMode } from '../src/App';
import NoData from './NoData';

/* eslint-disable react/prop-types */
function CountryDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState('');

  const { mode } = useContext(DarkMode);

  const navigate = useNavigate();

  useEffect(() => {
    function fetchData() {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setErrorState(error))
        .finally(() => setLoading(false));

      // .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  const params = useParams();
  const id = params.id;

  const country = data.find((country) => country.cca3.includes(id));

  const border = data.reduce((acc, curr) => {
    return [...acc, curr.cca3];
  }, []);

  if (errorState) {
    return <FetchError />;
  } else if (loading) {
    return <Loader />;
  } else if (data.length === 0) {
    return <NoData />;
  } else {
    return (
      <>
        <div
          className={'back-btn ' + mode}
          onClick={() => navigate(-1)}
        >
          {mode === 'light' ? (
            <img src="/src/assets/arrow-back.svg" alt="back-image" />
          ) : (
            <img src="/src/assets/arrow-dark.svg" alt="back-image" />
          )}
          <button className={mode}>Back</button>
        </div>

        <section className={'country-detail ' + mode}>
          <img
            id="detail-image"
            src={country.flags.svg}
            alt="flag of something"
          />
          <div className="DetailSecondHalf">
            <h2 id="detailCountryName">{country.name.common}</h2>
            <div className="country-details">
              <p>
                <span>Native Name: </span>
                {Object.keys(country.name).includes('nativeName')
                  ? Object.values(country.name.nativeName)[0].common
                  : ''}
                {/* {country.name?.nativeName[0]?.common} */}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Subregion: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
              <p>
                <span>Top Level Domain: </span>
                {country.tld.join(', ')}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.keys(country).includes('currencies')
                  ? Object.values(country.currencies)[0].name
                  : ''}
              </p>
              <p>
                <span>Languages: </span>
                {Object.keys(country).includes('languages')
                  ? Object.values(country.languages).join(', ')
                  : ''}
              </p>
            </div>
            <div className="borders">
              <span>Border Countries:</span>
              {Object.keys(country).includes('borders')
                ? country.borders.map((name) => {
                    return (
                      <button
                        className={'border-country ' + mode}
                        key={name}
                        onClick={() => {
                          navigate(`/country/${name}`);
                        }}
                      >
                        {data[border.indexOf(name)].name.common}
                      </button>
                    );
                  })
                : ' None'}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CountryDetail;
