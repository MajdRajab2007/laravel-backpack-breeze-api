import { redirect } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    redirect('/about-us')
  return (
    <div>

    </div>
  )
}

export default NotFound
