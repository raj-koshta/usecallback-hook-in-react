import React, { memo, useRef } from 'react'

const MemoCount = () => {

    const renderCount = useRef(0)

  return (
    <div className='mt-3 font-bold text-center'>
      <p>
        Nothing changed here But I've rendered : <span className='text-red-600'>{renderCount.current++} Count</span>
      </p>
    </div>
  )
}

export default memo(MemoCount)
