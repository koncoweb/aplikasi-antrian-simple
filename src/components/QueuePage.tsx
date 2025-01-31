import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import ConfirmationModal from './ConfirmationModal'

function QueuePage() {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()
  const [currentNumber, setCurrentNumber] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [newTicketNumber, setNewTicketNumber] = useState('')

  const prefix = type?.toUpperCase() === 'CS' ? 'CS' : 'TL'

  useEffect(() => {
    const savedNumber = localStorage.getItem(`queue_${prefix}`)
    if (savedNumber) {
      setCurrentNumber(parseInt(savedNumber))
    }
  }, [prefix])

  const getNextNumber = () => {
    const nextNumber = currentNumber + 1
    localStorage.setItem(`queue_${prefix}`, nextNumber.toString())
    setCurrentNumber(nextNumber)
    setNewTicketNumber(`${prefix}-${nextNumber.toString().padStart(3, '0')}`)
    setShowModal(true)
  }

  const resetQueue = () => {
    localStorage.setItem(`queue_${prefix}`, '0')
    setCurrentNumber(0)
  }

  return (
    <div className="min-h-screen flex flex-col p-6">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali
      </button>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          {type?.toUpperCase() === 'CS' ? 'Customer Service' : 'Teller'}
        </h1>

        <div className="ios-card w-full max-w-md">
          <div className="text-center mb-8">
            <p className="text-gray-500 mb-2">Nomor Antrian Terakhir</p>
            <p className="text-4xl font-bold text-blue-500">
              {prefix}-{currentNumber.toString().padStart(3, '0')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={getNextNumber}
              className="ios-button w-full"
            >
              Ambil Nomor Antrian
            </button>

            <button 
              onClick={resetQueue}
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Antrian
            </button>
          </div>
        </div>
      </div>

      <ConfirmationModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        ticketNumber={newTicketNumber}
        type={prefix}
      />
    </div>
  )
}

export default QueuePage
