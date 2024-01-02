/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SearchBar from './SearchBar';
import FilterbyRegion from './FilterbyRegion';
import FilterBySubRegion from './FilterbySubRegion';
import PopulationSort from './PopulationSort';
import AreaSort from './AreaSort';
import { useContext } from 'react';
import { DarkMode } from '../src/App';

function Bars(props) {
  const {
    searchedCountry,
    setSearchedCountry,
    data,
    region,
    setRegion,
    setSubRegion,
    setPopOrder,
    setAreaOrder,
  } = props;

  // console.log(region);

  const { mode } = useContext(DarkMode);

  return (
    <div className={'searchFilter ' + mode}>
      <SearchBar
        searchedCountry={searchedCountry}
        setSearchedCountry={setSearchedCountry}
      />
      <FilterbyRegion
        data={data}
        setRegion={setRegion}
        setSubRegion={setSubRegion}
      />
      <FilterBySubRegion
        region={region}
        data={data}
        setSubRegion={setSubRegion}
      />
      <PopulationSort setPopOrder={setPopOrder} />
      <AreaSort setAreaOrder={setAreaOrder} />
    </div>
  );
}

export default Bars;
