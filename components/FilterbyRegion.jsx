/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import FilterbyRegionDrop from './FilterByRegionDrop';
import { DarkMode } from '../src/App';

function FilterbyRegion(props) {
  const { data, setRegion, setSubRegion } = props;
  const { mode } = useContext(DarkMode);

  // console.log(data);
  let regions = new Set();

  data.filter((ele) => regions.add(ele.region));

  let uniqueRegions = [...regions].sort();

  // console.log(regions);

  return (
    <div className={'dropdown ' + mode}>
      <select
        className={mode}
        onChange={(e) => {
          setRegion(e.target.value), setSubRegion('');
        }}
      >
        <option value="">Filter by region</option>
        {uniqueRegions.map((region) => (
          <FilterbyRegionDrop key={region} region={region} />
        ))}
      </select>
    </div>
  );
}

export default FilterbyRegion;
