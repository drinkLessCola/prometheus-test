import React from 'react'
import './index.css'
export default function Section(props) {
  const { title, sid, btnData } = props
  return (
    <section className="section">
      <h2 id={sid}>{title}</h2>
      <section className="btn-group">
        {btnData.map(({ text, callback, id }) => (
          <button onClick={callback} key={id}>{text}</button>
        ))}
      </section>
    </section>
  )
}
