import React from 'react'
import { Link } from 'react-router-dom'

import { useHome } from '../hooks'

export default props => {
  const { home } = useHome()

  return (
    <div>
      {home.map(cat => (
        <div>
          <h3>{cat.name}</h3>
          <div>
            {cat.subcat.map(subcat => (
              <Link to={'/' + subcat.slug}><p>{subcat.name}</p></Link>
            ))}
          </div>
        </div>
      ))
      }
    </div >
  )
}