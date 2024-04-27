import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-r from-[#5433FF] via-[#20BDFF]  to-[#A5FECB] bg-clip-text text-transparent'>
    {" "}
    {text}
    {" "}
      
    </span>
  )
}

export default HighlightText
