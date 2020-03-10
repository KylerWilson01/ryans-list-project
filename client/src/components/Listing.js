import React, { useEffect } from 'react'

import { useListing } from '../hooks'

export default props => {
  const { listing, fetchListing } = useListing()
  console.log(listing)

  useEffect(() => {
    fetchListing(props.match.params.postid)
  }, [props.match.params])

  return (
    <div className="singlePost">
      <button onClick={e => props.history.push('/')}>Home</button>
      {listing.map(post => (
        <div key={'listing-post-' + post.id} className="post">
          <h1>{post.listingname}{post.price ? ` - $${post.price}` : ''}</h1>
          <h4>{post.city ? `City: ${post.city}` : ''}</h4>
          <h4>{post.state ? `State: ${post.state}` : ''}</h4>
          <p>{post.desc}</p>
        </div>
      ))}
    </div>
  )
}