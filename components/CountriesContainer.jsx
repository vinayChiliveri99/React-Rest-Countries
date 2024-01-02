/* eslint-disable react/prop-types */
import CountryCard from './CountryCard';
import Loader from './Loader';
import NoCountry from './NoCountry';
import NoData from './NoData';

function CountriesContainer(props) {
  const {
    data,
    searchedCountry,
    region,
    subRegion,
    popOrder,
    areaOrder,
    loading,
  } = props;

  // console.log(region);
  // console.log(subRegion);

  // console.log(searchedCountry);

  let filteredData = data.filter((ele) => {
    return (
      ele.name.common
        .toLowerCase()
        .includes(searchedCountry.toLowerCase()) &&
      (region === '' || ele.region.includes(region)) &&
      (subRegion === '' || ele.subregion.includes(subRegion))
    );
  });

  if (areaOrder === 'asc') {
    filteredData.sort((a, b) => a.area - b.area);
  } else if (areaOrder === 'desc') {
    filteredData.sort((a, b) => b.area - a.area);
  }

  if (popOrder === 'asc') {
    filteredData.sort((a, b) => a.population - b.population);
  } else if (popOrder === 'desc') {
    filteredData.sort((a, b) => b.population - a.population);
  }

  if (loading === true) {
    return <Loader />;
  } else if (data.length === 0) {
    return <NoData />;
  } else if (filteredData.length === 0) {
    return <NoCountry />;
  } else {
    return (
      <div className="countries-container">
        {filteredData.map((ele) => (
          <CountryCard key={ele.name.common} country={ele} />
        ))}
      </div>
    );
  }
}

export default CountriesContainer;
