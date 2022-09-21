import React, { useState } from 'react';
import DisplayFilters from './DisplayFilters';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import SortPlanet from './SortPlanet';
import '../style/PlanetSeatch.css';

function PlanetSeatch() {
  const [showFilters, setShowFilter] = useState(false);
  return (
    <section>
      <NameFilter />
      <div style={ { display: 'flex', justifyContent: 'center' } }>
        <button
          type="button"
          className="name-filter-container btn btn-primary"
          style={ { width: '40rem' } }
          onClick={ () => setShowFilter(!showFilters) }
        >
          { showFilters ? 'Hide Filters' : 'Show Filters' }
        </button>
      </div>
      {
        showFilters
          ? (
            <div className="planet-search-container">
              <NumericFilter />
              <SortPlanet />
            </div>
          )
          : null
      }
      <DisplayFilters />
    </section>
  );
}

export default PlanetSeatch;
