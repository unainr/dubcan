import MainHeader from "@/components/layouts/Header"

export interface LayoutProps{
    children:React.ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <MainHeader/>
    {children}
    </>
  )
}

export default Layout