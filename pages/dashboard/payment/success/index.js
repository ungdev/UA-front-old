import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../../src/modules/user';

import './success.css';
import withDashboardLayout from '../../../../src/layouts/dashboardLayout';

class PayementFail extends React.Component {
  constructor(props) {
    super(props);
    props.fetchUser();
  }

  render() {
    return (
      <div className="errorframe">
        <h1>Paiement refusé :/</h1>
        <p>Vous n'avez pas été débité, veuillez réessayer.</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default withDashboardLayout(
  connect(
    null,
    mapDispatchToProps
  )(PayementFail)
);
