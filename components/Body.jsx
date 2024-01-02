import { useContext, useEffect, useState } from 'react';
import Bars from './Bars';
import CountriesContainer from './CountriesContainer';
import FetchError from './FetchError';
import { DarkMode } from '../src/App';

function Body() {
  // usestate to set data and pass it as props to its children components.
  const [data, setData] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [region, setRegion] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [popOrder, setPopOrder] = useState('');
  const [areaOrder, setAreaOrder] = useState('');
  const [errorState, setErrorState] = useState('');
  const [loading, setLoading] = useState(true);

  const { mode } = useContext(DarkMode);

  // console.log('in body', region, subRegion);

  // console.log('in body', popOrder);

  // console.log(searchedCountry);

  // useeffect to fetch data using api.

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

  if (errorState) {
    return <FetchError />;
  } else {
    return (
      <div className={mode}>
        <Bars
          searchedCountry={searchedCountry}
          setSearchedCountry={setSearchedCountry}
          data={data}
          region={region}
          setRegion={setRegion}
          setSubRegion={setSubRegion}
          setPopOrder={setPopOrder}
          setAreaOrder={setAreaOrder}
        />

        <CountriesContainer
          data={data}
          searchedCountry={searchedCountry}
          region={region}
          subRegion={subRegion}
          popOrder={popOrder}
          areaOrder={areaOrder}
          loading={loading}
        />
      </div>
    );
  }
}
export default Body;
