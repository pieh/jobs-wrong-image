import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      imageSharp {
        resize(width: 1500, height: 1500) {
          src
          width
          height
        }
      }
    }
  `)

  return (
    <div>
      Hello world!
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.imageSharp.resize.src} />
    </div>
  )
}
