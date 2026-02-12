import React from 'react'
import PmIntro from '../Pm/PmIntro'
import Lineup from '../Lineup'
import PmContent from '../Pm/PmContent'

export default function ProductManager() {
  return (
    <div className='flex flex-col items-center w-full px-[1.19rem] sm:px-0'>
      <div className='pb-[3.75rem] sm:pb-[3.87rem]'>
        <PmIntro/>
        <Lineup/>
      </div>
      <div>
        <PmContent/>
      </div>
    </div>
  )
}
