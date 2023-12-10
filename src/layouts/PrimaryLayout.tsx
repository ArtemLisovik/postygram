import React, { useEffect } from 'react'
import { Footer, Header } from '../containers'

type PrimaryLayoutProps = {
    children: React.ReactNode
}

export const PrimaryLayout = ({children}:PrimaryLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
     <Header/>
        <main className="main">
            {children}
        </main>
    <Footer/>
    </>
   
  )
}
