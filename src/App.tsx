import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import QueuePage from './components/QueuePage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/queue/:type" element={<QueuePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
