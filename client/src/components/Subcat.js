import React, { useEffect } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
import { useSubCat } from '../hooks'

export default props => {
  const { listings, fetchListings } = useSubCat()
  const prop = props.match.params

  useEffect(() => {
    fetchListings(props.match.params.slug)
  }, [props.match.params])

  return (
    <div className="postingList">
      <button className="home" onClick={e => props.history.push('/')}>Home</button>
      <Link className="navForm" to={'/form/' + prop.slug + '/' + prop.id + '/create'} >Create New Post</Link>
      {listings.map((post, i) => (
        <Link
          to={'/' + prop.slug + '/' + prop.id + '/' + post.id}
          key={'posting-list-' + i}
          className="listings"
        >
          <p>{post.listingname} - {moment(post.time_created).fromNow()}</p>
        </Link>
      ))}
    </div>
  )
}