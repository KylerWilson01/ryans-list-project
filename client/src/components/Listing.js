import React, { useEffect } from 'react'

import { useListing } from '../hooks'

export default props => {
  const { listing, fetchListing } = useListing()

  useEffect(() => {
    fetchListing(props.match.params.postid)
  }, [props.match.params])

  return (
    <div className="singlePost">
      <button onClick={e => props.history.goBack()}>Go Back</button>
      {listing.map(post => (
        <div className="post">
          <h1>{post.listingname}</h1>
          <p>{post.desc}</p>
        </div>
      ))}
    </div>
  )
}