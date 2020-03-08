import React from 'react'
import { Link } from 'react-router-dom'

import { useHome } from '../hooks'

export default props => {
  const { home } = useHome()

  return (
    <div className="cats">
      {home.map(cat => (
        <div key={"cat-" + cat.id} className="subcatWrap">
          <h3>{cat.name}</h3>
          <div>
            {cat.subcat.map(subcat => (
              <Link
                key={"subcat-" + subcat.id}
                to={'/' + subcat.slug + '/' + subcat.id}
              >
                <p>{subcat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      ))
      }
    </div >
  )
}