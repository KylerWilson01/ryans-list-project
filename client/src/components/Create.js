import React, { useState } from 'react'
import { useSubCat } from '../hooks'

import "../styles/newPost.css"

export default props => {
  const [form, setForm] = useState({
    title: '',
    subCat_id: props.match.params.id,
    desc: '',
    city: '',
    state: '',
    price: ''
  })
  const { post } = useSubCat()

  const handleChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (form.title !== '') {
      post(form)
      props.history.push('/')
    }
  }

  return (
    <div className="form">
      <button className="formHome" onClick={e => props.history.push('/')}>Home</button>
      <p>New Posting</p>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Title"
        className="formTitle"
        onInput={e => handleChange(e, 'title')}
      />
      <label>Description:</label>
      <textarea
        placeholder="Description"
        className="formDesc"
        onChange={e => handleChange(e, 'desc')}
      >
      </textarea>
      <label>City:</label>
      <input
        type="text"
        placeholder="Ding Dong"
        className="formTitle"
        onInput={e => handleChange(e, 'city')}
      />
      <label>State:</label>
      <input
        type="text"
        placeholder="Texas"
        className="formTitle"
        onInput={e => handleChange(e, 'state')}
      />

      <label>Price:</label>
      <input
        type="number"
        placeholder="$999.01"
        className="formTitle"
        onInput={e => handleChange(e, 'price')}
      />
      <button
        className="formSubmit"
        onClick={handleSubmit}>Submit</button>
    </div>
  )

}