import Image from 'next/image'
import React from 'react'
import CategoryList from './categoryList/CategoryList'

const Featured = () => {
  return (
    <div>
      <h1 className='text-7xl'><b>Hey there !</b> Discover my stories and creative ideas.</h1>

      <div className='flex gap-5 mt-10 w-full min-h-[400px] pt-6 justify-between'>
        <div className='relative w-1/2'>
          <Image src={"/p1.jpeg"} alt='' fill className='object-cover rounded-lg'/>
        </div>

        <div className='p-4 pl-0 w-1/2 h-full flex justify-center items-center gap-4'>
           <div>
            <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, totam?</h1>
            <p className='font-semibold text-md py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit ratione, natus magni repudiandae quaerat non, libero mollitia est totam vero ut eligendi facere pariatur excepturi eveniet, quasi repellendus blanditiis.</p>
            <button className='bg-primary text-primary-foreground px-4 py-2 rounded-md hover:cursor-pointer'>Read more</button>
           </div>
        </div>
      </div>
          <CategoryList/>
    </div>
  )
}

export default Featured