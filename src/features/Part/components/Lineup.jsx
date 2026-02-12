import React from 'react'
import ShortcutBtn from "./ShortcutBtn"

export default function Lineup() {
  return (
    <div className='flex flex-col sm:items-end sm:flex-row sm:justify-between px-[1.19rem] sm:px-0 mt-[1.25rem] sm:mt-[2.37rem] w-full flex-1 sm:w-[75.8125rem] gap-[4.44rem]'>
        <div className=' flex flex-col items-start sm:flex-row gap-[1.88rem] sm:gap-auto'>
        <div className='flex flex-col gap-[0.69rem]'>
            <div className='typo-small1'>기획 파트장</div>
            <div className='typo-subtitlek'>유승빈</div>
        </div>
        <div className='flex flex-col gap-[0.69rem]'>
            <div className='typo-small1'>아기사자</div>
            <div className='typo-subtitlek text-text/20'>모집 중</div>
        </div>
        </div>
        <div className='flex flex-row justify-center sm:justify-start gap-[1.88rem] sm:gap-[1.5rem] h-[2.125rem]'>
        <ShortcutBtn/>
        <ShortcutBtn text="세션 소개"/>
        </div>

    </div>
  )
}
