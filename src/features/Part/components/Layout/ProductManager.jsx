import React from 'react'
import PmIntro from '../Pm/PmIntro'
import Lineup from '../Lineup'

export default function ProductManager() {
  return (
    <div className='flex flex-col items-center'>
      <div className='pb-[3.75rem] sm:pb-[3.87rem]'>
        <PmIntro/>
        <Lineup/>
      </div>
    </div>
  )
}
