import React from 'react'
import { Form, Text } from 'react-form'

import Button from '../../../components/button'
import errorToString from '../../../lib/errorToString'

const EditInfos = props => (
  <Form
    onSubmit={console.log}
    render={({ submitForm }) => (
      <form onSubmit={submitForm} className="a-dashboard-edit">
        Changez ici vos informations personnelles. Vous recevrez votre place par e-mail. Si vous êtes membres d'une école partenaire, pensez à mettre votre e-mail associée pour profiter des tarifs préférentiels.<br/>
        <strong>Si vous ne souhaitez pas changer votre mot de passe, laissez les champs vides.</strong>
        <Text
          field="name"
          placeholder="Nom d'utilisateur"
          pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž]+"
          minLength="3"
          maxLength="90"
          autoFocus
        />
        <Text
          field="fullname"
          placeholder="Prénom Nom"
          pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž \-]+"
          minLength="3"
          maxLength="200"
        />
        <Text field="email" type="email" placeholder="Mail" />
        <Text
          field="password"
          type="password"
          placeholder="Mot de passe"
          minLength="6"
        />
        <Text
          field="password2"
          type="password"
          placeholder="Confirmation"
          minLength="6"
        />
        {props.registerError && (
          <strong className="error">{errorToString(props.registerError)}</strong>
        )}
        <br />
        <Button type="submit" raised>
          Connexion
        </Button>
      </form>
    )}
  />
)

export default EditInfos
