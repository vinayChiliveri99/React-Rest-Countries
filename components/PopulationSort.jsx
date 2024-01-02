import { useContext } from 'react';
import { DarkMode } from '../src/App';

/* eslint-disable react/prop-types */
function PopulationSort(props) {
  const { setPopOrder } = props;
  const { mode } = useContext(DarkMode);

  return (
    <div className={'dropdown ' + mode}>
      <select
        className={mode}
        onChange={(e) => setPopOrder(e.target.value)}
      >
        <option value="">Sort by Population</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default PopulationSort;
