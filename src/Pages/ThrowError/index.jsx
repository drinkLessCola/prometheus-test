import React, { useEffect } from 'react'
import './index.css'
import Section from '../../Component/Section'
import { JSData, PromiseData, ResourceData } from './error'
export default function ThrowError() {
  
  useEffect(() => {
    function handleError(err){
      console.log(err.message, err)
      err.preventDefault()
    }
    function handlePromiseError(err){
      console.log(err.reason, err)
      err.preventDefault()
    }
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handlePromiseError)
   return () => {
    window.removeEventListener('error', handleError)
    window.removeEventListener('unhandledrejection', handlePromiseError)
   }
  }, [])

  return (
    <div>
      <Section title="JavaScript 异常" sid="101" btnData={JSData}></Section>
      <Section title="Promise 未处理异常" sid="102" btnData={PromiseData}></Section>
      <Section title="资源加载错误" sid="103" btnData={ResourceData}></Section>
    </div>
  )
}
