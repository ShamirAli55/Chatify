import { Tags } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const items={
   Links:[
    {
        id:"1",
        name:"Homepage",
        url:"/"
    },
    {
        id:"2",
        name:"Blog",
        url:"/blog"
    },
    {
        id:"3",
        name:"About",
        url:"/about"
    },
    {
        id:"4",
        name:"Contact",
        url:"/contact"
    }
   ],
   Tags:[
    {
        id:"1",
        name:"Style",
        url:"/tag/style"
    },
    {
        id:"2",
        name:"Fashion",
        url:"/tag/fashion"
    },
    {
        id:"3",
        name:"Coding",
        url:"/tag/coding"
    },
    {
        id:"4",
        name:"Travel",
        url:"/tag/travel"
    }
   ],
   Socials:[
    {
        id:"1",
        name:"Facebook",
        url:"/facebook",
    },
    {
        id:"2",
        name:"Instagram",
        url:"/instagram",
    },
    {
        id:"3", 
        name:"TikTok",
        url:"/tiktok",
    },
    {
        id:"4", 
        name:"YouTube",
        url:"/youtube",
    }
   ]
}
const Footer = () => {
  return (
    <footer className='w-full flex justify-between py-8'>
        <div className='w-1/2'>
            <Image src={"/logo.png"} alt='logo' width={30} height={30} className='mx-auto'/>
            <p className='text-sm py-3 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero expedita delectus veniam sit.</p>
        </div>
        <div className="flex items-center justify-evenly w-1/2 text-md">   
            <div>
                <h3 className='pb-1 font-semibold opacity-80'>Links</h3>
                {items.Links.map((link)=>(
                    <p key={link.id} className='cursor-pointer hover:underline'>{link.name}</p>
                ))}
            </div>

            <div>
                <h3 className='pb-1 font-semibold opacity-80'>Tags</h3>
                {items.Tags.map((tag)=>(
                    <p key={tag.id} className='cursor-pointer hover:underline flex items-center gap-2'>{tag.name}</p>
                ))}
            </div>
            <div>
                <h3 className='pb-1 font-semibold opacity-80'>Socials</h3>
                {items.Socials.map((social)=>(
                    <p key={social.id} className='cursor-pointer hover:underline'>{social.name}</p>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer