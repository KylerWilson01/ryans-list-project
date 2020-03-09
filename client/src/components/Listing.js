import React, { useEffect } from 'react'

import { useListing } from '../hooks'

export default props => {
  const { listing, fetchListing } = useListing()

  useEffect(() => {
    fetchListing(props.match.params.postid)
  }, [props.match.params])

  return (
    <div>
      {listing.map(post => (
        <div className="post">
          <h1>{post.listingname}</h1>
          <p>{post.desc}</p>
        </div>
      ))}
    </div>
  )
}