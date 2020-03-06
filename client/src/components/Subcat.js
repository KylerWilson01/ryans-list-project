import React from 'react'
import { Link } from 'react-router-dom'
import { useSubCat } from '../hooks'

export default props => {
  const { listings } = useSubCat()

  return (
    <div>
      {listings.map(post => {
        <div>Hello World</div>
      })}
    </div>
  )
}