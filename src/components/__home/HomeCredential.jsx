import React from 'react'
import { credentialPic } from '../../imports/Images'
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1'
import BoxThemeProvider from '../../providers/BoxThemeProvider'

export default function HomeCredential() {
  return (
    <BoxThemeProvider
      className={''}
      children={ 
        <div className='w-full h-fit'>
          <DataLayout1
            title={'credentials'}
            heading={'more about me'}
            path={'/about/credentials'}
            image={credentialPic}
          />
        </div>
      }
    />
  )
}
