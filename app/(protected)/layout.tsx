import Navbar from './_components/navbar'

const ProtectedLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
