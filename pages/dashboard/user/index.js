import React from 'react';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form';

import Button from '../../../src/components/button';

import { editUser } from '../../../src/modules/user';
import Select from '../../../src/components/select';

import withDashboardLayout from '../../../src/layouts/dashboardLayout';

import './user.css';

const genderOptions = [
  { label: '', value: 'N/A' },
  { label: 'Homme', value: 'M' },
  { label: 'Femme', value: 'F' },
];

class EditInfos extends React.Component {
  render() {
    let gender = 'N/A';
    if (this.props.user.gender) {
      if (this.props.user.gender === 'M') gender = { label: 'Homme', value: 'M' };
      if (this.props.user.gender === 'F') gender = { label: 'Femme', value: 'F' };
    }
    return (
      <Form
        onSubmit={this.props.editUser}
        defaultValues={{
          ...this.props.user,
          gender,
        }}
        render={({ submitForm }) => (
          <form onSubmit={submitForm} className="a-dashboard-page a-dashboard-edit">
            <h2>Gestion de compte</h2>
            <p>
              Changez ici vos informations personnelles. Vous recevrez votre place par e-mail. Si
              vous êtes membre d'une école partenaire, pensez à mettre votre e-mail associée pour
              profiter des tarifs préférentiels.
              <br />
              <strong>
                Si vous ne souhaitez pas changer votre mot de passe, laissez les champs vides.
              </strong>
            </p>
            <Text
              field="name"
              placeholder="Nom d'utilisateur"
              pattern="[ªµºÀÂÃÄÅÆÇÈÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÞßàâãäåæèìíîïðñòóôõöøùúûüþÿĄąĆćĘęıŁłŃńŒœŚśŸŹźŻżƒˆˇˉμﬁﬂ0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-z áčďéěêçëùíňóřšťúůýž-]+"
              minLength="3"
              maxLength="90"
              autoFocus
            />
            <Select
              field="gender"
              isClearable={false}
              backspaceRemovesValue={false}
              isSearchable={false}
              options={genderOptions}
              onChange={this.log}
              value="H"
            />
            <Text
              field="firstname"
              placeholder="Prénom"
              pattern="[ªµºÀÂÃÄÅÆÇÈÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÞßàâãäåæèìíîïðñòóôõöøùúûüþÿĄąĆćĘęıŁłŃńŒœŚśŸŹźŻżƒˆˇˉμﬁﬂ0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-z áčďéěêçëùíňóřšťúůýž-]+"
              minLength="2"
              maxLength="200"
            />
            <Text
              field="lastname"
              placeholder="Nom"
              pattern="[ªµºÀÂÃÄÅÆÇÈÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÞßàâãäåæèìíîïðñòóôõöøùúûüþÿĄąĆćĘęıŁłŃńŒœŚśŸŹźŻżƒˆˇˉμﬁﬂ0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-z áčďéěêçëùíňóřšťúůýž-]+"
              minLength="2"
              maxLength="200"
            />
            <Text field="email" type="email" placeholder="Mail" />
            <Text field="password" type="password" placeholder="Mot de passe" minLength="6" />
            <Text field="password2" type="password" placeholder="Confirmation" minLength="6" />
            <br />
            <Button type="submit" raised>
              Modifier mes informations
            </Button>
          </form>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
});
const mapDispatchToProps = dispatch => ({
  editUser: newUser => dispatch(editUser(newUser)),
});
export default withDashboardLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditInfos)
);
