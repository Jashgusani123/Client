import React from 'react'
import {Helmet} from "react-helmet-async"
const Title = ({title="Chat APP" , description="This is chat Description"}) => {
  return (
    <Helmet>
        <title >{title}</title>
        <meta name='description' content={description} />
    </Helmet>
  )
}

export default Title