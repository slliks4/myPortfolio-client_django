import React from 'react'
import { Link } from 'react-router-dom'
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

export default function CredentialDataLayout({ title, heading, date, text, path ,image }) {
  return (
    <SlideAnimationProvider>
        <div className='border p-2'>
            { image && <img src="" alt={title} /> }
            { date && <h4>{ date }</h4> }
            { title && <h2>{ title }</h2> }
            { heading && <h3>{ path ? <Link to={path}>{ heading }</Link>: <>{ heading }</>}</h3> }
            { text && <p>{ text }</p> }
        </div>
    </SlideAnimationProvider>
  )
}
