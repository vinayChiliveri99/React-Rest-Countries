/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import FilterBySubRegionDrop from './FilterbySubRegionDrop';
import { DarkMode } from '../src/App';

function FilterBySubRegion(props) {
  const { region, data, setSubRegion } = props;
  const { mode } = useContext(DarkMode);

  // let subRegions = new Set();

  //   data.filter((ele) => subRegions.add(ele.subregion));
  const subRegions = new Set(
    data
      .filter((ele) => ele.region === region)
      .map((ele) => ele.subregion)
  );

  let uniqueSubRegions = [...subRegions].sort();

  console.log(region);
  console.log(data);

  return (
    <div className={'dropdown ' + mode}>
      <select
        className={mode}
        onChange={(e) => setSubRegion(e.target.value)}
      >
        <option value="">Filter by subregion</option>
        {uniqueSubRegions.map((reg) => (
          <FilterBySubRegionDrop key={reg} subregion={reg} />
        ))}
      </select>
    </div>
  );
}

export default FilterBySubRegion;
