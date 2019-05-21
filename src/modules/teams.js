import axios from '../lib/axios'
import errorToString from '../lib/errorToString'

import { toast } from 'react-toastify'

import { fetchUser } from './user'
import { push } from './router'

export const SET_TEAMS = 'teams/SET_TEAMS'

const initialState = {
  teams: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return {
        ...state,
        teams: action.payload
      }
    default:
      return state
  }
}

export const fetchTeams = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      const res = await axios.get('teams', { headers: { 'X-Token': authToken } })
      dispatch({ type: SET_TEAMS, payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }
}

export const cancelRequest = id => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.delete(`/team/${id}/cancelRequest`, { headers: { 'X-Token': authToken } })

      dispatch(fetchUser())
    } catch (err) {
      toast.error(errorToString(err.response.data.error))
    }
  }
}

export const createTeam = ({ name, spotlight }) => {
  spotlight = spotlight.value

  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.post(`/team`, { name, spotlight }, { headers: { 'X-Token': authToken } })

      await dispatch(fetchUser())
      dispatch(push('/dashboard/team'))
    } catch (err) {
      toast.error(
        err && err.response && err.response.data
          ? err.response.data.error
          : 'Une erreur est survenue'
      )
    }
  }
}

export const joinTeam = ({ team, message }) => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    if (!team || !team.value) {
      return toast.error(errorToString('INVALID_FORM'))
    }

    try {
      await axios.post(
        `/team/${team.value}/join`,
        { message },
        { headers: { 'X-Token': authToken } }
      )

      await dispatch(fetchUser())
      dispatch(push('/dashboard/requests'))
    } catch (err) {
      toast.error(errorToString(err.response.data.error))
    }
  }
}

export const allowPlayer = user => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token
    const team = getState().user.user.team

    if (!authToken || authToken.length === 0) {
      return
    }

    //test if team is full
    if (team.users.length >= team.spotlight.perTeam) {
      toast.error("L'équipe est déjà complète")
      return
    }
    try {
      await axios.post(`/team/${team.id}/accept`, { user }, { headers: { 'X-Token': authToken } })

      dispatch(fetchUser())
    } catch (err) {
      toast.error(errorToString(err.response.data.error))
    }
  }
}

export const refusePlayer = user => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token
    const team = getState().user.user.team.id

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.post(`/team/${team}/refuse`, { user }, { headers: { 'X-Token': authToken } })

      dispatch(fetchUser())
    } catch (err) {
      toast.error(errorToString(err.response.data.error))
    }
  }
}

export const kickPlayer = user => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    if (user === 'self') {
      user = getState().user.user.id
    }

    try {
      await axios.post(`/team/kick/${user}`, null, { headers: { 'X-Token': authToken } })

      dispatch(push('/dashboard'))
      await dispatch(fetchUser())
    } catch (err) {
      console.log(err)
      toast.error(errorToString(err.response.data.error))
    }
  }
}
