import Link from 'next/link'
import {ModeToggle} from "./ThemeToggle"
import AuthLinks from './authLinks/AuthLinks'
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
    }
]
const Navbar = () => {


  return (
    <nav className='w-full flex items-center justify-between py-6 px-1 relative'>
        
         <div className='font-semibold sm:text-xl md:text-2xl uppercase'>
            MindBytes
        </div>

        <div className='hidden md:flex items-center'>
        
        <ModeToggle/>
        
        {links.map((link)=>(
            <Link key={link.id} href={link.url} className='text-md px-3'>{link.name}</Link>
        ))}
        </div>
        <AuthLinks/>
    </nav>  
)
}

export default Navbar