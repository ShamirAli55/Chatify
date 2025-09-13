import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const images = [
    {
        id:"1",
        src:"/facebook.png",
        alt:"facebook"
    },
    {
        id:"2",
        src:"/instagram.png",
        alt:"instagram"
    },
    {
        id:"3",
        src:"/tiktok.png",
        alt:"tik-tok"
    },
    {
        id:"4",
        src:"/youtube.png",
        alt:"youtube"
    },
]

const links=[
    {
        id:"1",
        name:"Homepage",
        url:"/"
    },
    {
        id:"2",
        name:"Contact",
        url:"/contact"
    },
    {
        id:"3",
        name:"About",
        url:"/about"
    },
    {
        id:"4",
        name:"login",
        url:"/login"
    },
]
const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-6 px-1 relative'>
        <div className='flex items-center gap-3'>
        {images.map((image)=>(
            <Image key={image.id} src={image.src} alt={image.alt} width={20} height={20}/>
        ))}
        </div>
        
         <div className='absolute left-1/2 transform -translate-x-1/2 font-bold text-3xl'>
            LamaBlog
        </div>

        <div className='flex items-center'>
        {links.map((link)=>(
            <Link key={link.id} href={link.url} className='text-sm px-3'>{link.name}</Link>
        ))}
        </div>
    </nav>  
)
}

export default Navbar