import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_HOME = "home/GET_HOME"

const initialState = {
  home: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return { ...state, home: action.payload }
    default:
      return state
  }
}

function getHome() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      dispatch({
        type: GET_HOME,
        payload: resp.data.categories
      })
    })
  }
}

export function useHome() {
  const dispatch = useDispatch()

  const home = useSelector(appState => appState.homeState.home)

  useEffect(() => dispatch(getHome()), [dispatch])

  return { home }
}