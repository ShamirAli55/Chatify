import Link from 'next/link';
import React from 'react'

const AuthLinks = () => {
 const [open, setOpen] = React.useState(false);
 const status = "notauthenticated"
  return (
    <>
    {status === "notauthenticated" ? 
      <Link>Login</Link>
      :(
        <>
        <Link href={"/write"}>Write</Link>
        <span>Logout</span>
        </>
      )
    }
    </>
  )
}

export default AuthLinks