import React from 'react'
import { fetchData, xhrData, axiosData } from './request'
import Section from '../../Component/Section'

export default function index() {
  console.log('HttpRequest render')

  return (
    <div>
      <Section title="fetch" sid="101" btnData={fetchData}></Section>
      <Section title="XHR" sid="102" btnData={xhrData}></Section>
      <Section title="Axios" sid="103" btnData={axiosData}></Section>
    </div>
  )
}
