export default error => {
  switch (error) {
    case 'DISABLED_LOGIN':
      return 'Inscription désactivée'
    case 'INVALID_FORM':
      return 'Formulaire incomplet'
    case 'PASSWORD_MISMATCH':
      return 'Les mots de passe ne correspondent pas'
    default:
      return error
  }
}
