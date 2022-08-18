import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets
            .map((planet, index) => (<PlanetCard
              planetName={ planet.name }
              key={ index }
              planetImage={ planet.image }
            />))
        }
        ;
      </div>
    );
  }
}

export default SolarSystem;
