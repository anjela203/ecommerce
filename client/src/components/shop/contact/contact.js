import React from 'react'
import ContactComponent from './ContactComponent'
import Layout from '../layout'




function contact() {
  return (
    <Layout children={<ContactComponent />} />
  )
}

export default contact