import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div>
      <h1><b>Hey there !</b> Discover my stories and creative ideas.</h1>
      <div>
        <div className='relative w-[200px] h-[200px]'>
          <Image src={"/p1.jpeg"} alt='' fill/>
        </div>
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, totam?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit ratione, natus magni repudiandae quaerat non, libero mollitia est totam vero ut eligendi facere pariatur excepturi eveniet, quasi repellendus blanditiis.</p>
            <button>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured