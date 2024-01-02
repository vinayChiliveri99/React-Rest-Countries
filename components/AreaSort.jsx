import { useContext } from 'react';
import { DarkMode } from '../src/App';

/* eslint-disable react/prop-types */
function AreaSort(props) {
  const { setAreaOrder } = props;
  const { mode } = useContext(DarkMode);

  return (
    <div className={'dropdown ' + mode}>
      <select
        className={mode}
        onChange={(e) => setAreaOrder(e.target.value)}
      >
        <option value="">Sort by Area</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default AreaSort;
