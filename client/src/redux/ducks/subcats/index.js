import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_LISTINGS = "subcats/GET_LISTINGS"
const POST_LISTING = "subcats/POST_LISTINGS"

const initialState = {
  listings: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGS:
      return { ...state, listings: action.payload }
    case POST_LISTING:
      return { ...state, listings: [...state.listings, action.payload] }
    default:
      return state
  }
}

function getListings(slug, id) {
  return dispatch => {
    axios.get("/api/categories/" + slug + '/' + id).then(resp => {
      dispatch({
        type: GET_LISTINGS,
        payload: resp.data
      })
    })
  }
}

function postListing(form) {
  return dispatch => {
    axios.post("/api/categories", form).then(resp => {
      dispatch({
        type: POST_LISTING,
        payload: form
      })
    })
  }
}

export function useSubCat() {
  const dispatch = useDispatch()

  const listings = useSelector(appState => appState.subState.listings)

  const fetchListings = (slug, id) => dispatch(getListings(slug, id))
  const post = (form) => dispatch(postListing(form))

  return { fetchListings, post, listings }
}