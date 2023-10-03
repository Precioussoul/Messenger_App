interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = async ({children}: SidebarProps) => {
  return <div className='h-full'>{children}</div>
}

export default Sidebar
