import React from 'react'
import { Link } from 'react-router-dom'

import { useHome } from '../hooks'

export default props => {
  const { home } = useHome()

  return (
    <div className="homePage">
      <h1 className="homeTitle gray">Ryan's List</h1>
      <div className="cats">
        {home.map(cat => (
          <div key={"cat-" + cat.id} className="subcatWrap">
            <h3 className="gray spacing">{cat.name}</h3>
            <div className="spacing">
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
    </div>
  )
}