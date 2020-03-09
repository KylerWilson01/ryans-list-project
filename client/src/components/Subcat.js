import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSubCat } from '../hooks'

export default props => {
  const { listings, fetchListings, post } = useSubCat()
  const prop = props.match.params
  const [form, setForm] = useState({ title: '', subCat_id: prop.id, desc: '' })

  useEffect(() => {
    fetchListings(props.match.params.slug)
  }, [props.match.params])

  const handleChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (form.title !== '') {
      post(form)
    }
  }

  return (
    <div className="postingList">
      <div className="form">
        <p>New Posting: </p>
        <input type="text" placeholder="Title" onInput={e => handleChange(e, 'title')} />
        <textarea placeholder="Description" onChange={e => handleChange(e, 'desc')}></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {listings.map((post, i) => (
        <Link
          to={'/' + prop.slug + '/' + prop.id + '/' + post.id}
          key={'posting-list-' + i}
          className="listings"
        >
          <p>{post.listingname}</p>
        </Link>
      ))}
    </div>
  )
}