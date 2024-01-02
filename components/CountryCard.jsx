import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../src/App';
import { useContext } from 'react';

/* eslint-disable react/prop-types */
function CountryCard({ country }) {
  const { mode } = useContext(DarkMode);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`country/${country.cca3}`);
  };

  return (
    <div className={'country-card ' + mode} onClick={handleCardClick}>
      <img src={country.flags.png} alt={`${country.name.common}`} />
      <div className="country-description">
        <p className="country-name">{country.name.common}</p>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
