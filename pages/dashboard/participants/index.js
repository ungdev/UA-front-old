import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-form';

import Select from '../../../src/components/select';
import withDashboardLayout from '../../../src/layouts/dashboardLayout';

class Participants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotlight: 1,
    };

    this.changeSpotlight = this.changeSpotlight.bind(this);
  }

  changeSpotlight(spotlight) {
    this.setState({
      spotlight: spotlight.value,
    });
  }

  render() {
    const teams = this.props.teams
      .filter(team => team.spotlightId === this.state.spotlight)
      .filter(team => team.isInSpotlight);
    teams.forEach(team => {
      if (team.soloTeam && team.name.includes('solo-team'))
        team.name = team.name.substr(0, team.name.length - 10);
    });
    const options = this.props.spotlights
      .map(spotlight => ({
        id: spotlight.id,
        label: spotlight.name,
        value: spotlight.id,
      }))
      .sort((s1, s2) => s1.id > s2.id);
    return (
      <div className="a-participants a-dashboard-page">
        <h2>Participants</h2>
        <Form
          render={({ submitForm }) => (
            <form onSubmit={submitForm}>
              <Select
                field="spotlight"
                onChange={this.changeSpotlight}
                options={options}
                searchable={false}
              />
              {teams.length > 0 && (
                <div>
                  <strong>Liste des équipes :</strong>
                  <br />
                  {teams.map((team, i) => (
                    <div style={{ margin: '4px 0' }} key={i}>
                      {team.name}
                    </div>
                  ))}
                </div>
              )}
              {teams.length === 0 && <div>Aucune équipe dans ce tournoi pour le moment</div>}
            </form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotlights: state.spotlights.spotlights,
  teams: state.teams.teams || [],
});

export default withDashboardLayout(
  connect(
    mapStateToProps,
    null
  )(Participants)
);
