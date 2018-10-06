export default state => {
  const team = state.user.user.team

  if (!team) {
    return { status: 'Aucune équipe — Libre', theme: 'warning' }
  }

  const teamUsers = team.users
  const spotlight = team.spotlight

  if (team && !spotlight) {
    return { status: 'Équipe non inscrite — Libre', theme: 'error' }
  }
  if(team && team.isInSpotlight) return { status: 'Équipe inscrite', theme: 'success' }

  const { isFull } = (state.spotlights.spotlights.find(s => s.id === state.user.user.team.spotlightId) || {})

  const playerCount = teamUsers.size
  const playerPaidCount = teamUsers.filter(player => player.paid).length
  const maxPlayers = spotlight.perTeam

  if (isFull) {
    if (playerCount < maxPlayers || playerPaidCount < maxPlayers) {
      return { status: 'Équipe incomplète - tournoi plein', theme: 'error' }
    } else {
      return { status: 'Équipe complète — tournoi plein', theme: 'error' }
    }
  } else {
    if (playerCount < maxPlayers || playerPaidCount < maxPlayers) {
      return { status: 'Équipe incomplète', theme: 'warning' }
    } else {
      return { status: 'Équipe complète', theme: 'success' }
    }
  }

}
