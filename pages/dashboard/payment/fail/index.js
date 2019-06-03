import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../../src/modules/user';

import './fail.css';
import { push } from '../../../../src/modules/router';
import withDashboardLayout from '../../../../src/layouts/dashboardLayout';

class PayementSuccess extends React.Component {
  constructor(props) {
    super(props);
    props.fetchUser();
  }

  render() {
    if (this.props.user && !this.props.user.paid) this.props.redirect();
    return (
      <div className="successframe">
        <h1>Paiement validé !</h1>
        <p>Vous devriez recevoir sous peu un mail confirmant le paiement.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/dashboard/payment')),
  fetchUser: () => dispatch(fetchUser()),
});

export default withDashboardLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PayementSuccess)
);
