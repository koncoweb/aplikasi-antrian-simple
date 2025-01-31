import { Link } from 'react-router-dom'
import { Users, Banknote } from 'lucide-react'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Selamat Datang
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link 
          to="/queue/cs" 
          className="ios-card group hover:shadow-md transition-all duration-200"
        >
          <div className="flex flex-col items-center gap-4">
            <Users className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-semibold text-gray-800">Customer Service</span>
          </div>
        </Link>

        <Link 
          to="/queue/teller" 
          className="ios-card group hover:shadow-md transition-all duration-200"
        >
          <div className="flex flex-col items-center gap-4">
            <Banknote className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-semibold text-gray-800">Teller</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
