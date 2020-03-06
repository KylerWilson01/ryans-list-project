import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_LISTINGS = "subcats/GET_LISTINGS"

const initialState = {
  listings: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGS:
      return { ...state, listings: action.payload }
    default:
      return state
  }
}

function getListings() {
  return dispatch => {
    axios.get("/api/categories/slug").then(resp => {
      console.log(resp.data)

      dispatch({
        type: GET_LISTINGS,
        payload: resp.data
      })
    })
  }
}

export function useSubCat() {
  const dispatch = useDispatch()

  const listings = useSelector(appState => appState.subState.listings)

  useEffect(() => dispatch(getListings()))

  return { listings }
}