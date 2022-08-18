import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions
            .map((mission, index) => (<MissionCard
              name={ mission.name }
              key={ index }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
        }
      </div>
    );
  }
}

export default Missions;
