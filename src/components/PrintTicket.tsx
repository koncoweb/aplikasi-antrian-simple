interface PrintTicketProps {
  ticketNumber: string
  type: string
  date: string
}

function PrintTicket({ ticketNumber, type, date }: PrintTicketProps) {
  return (
    <div className="print-ticket hidden print:block p-8 text-center">
      <div className="border-2 border-gray-800 p-6 max-w-[300px] mx-auto">
        <h1 className="text-2xl font-bold mb-4">QueueFlow</h1>
        <div className="mb-4">
          <p className="text-sm mb-1">Nomor Antrian</p>
          <p className="text-4xl font-bold mb-2">{ticketNumber}</p>
          <p className="text-lg font-semibold">{type}</p>
        </div>
        <div className="text-sm text-gray-600 mt-4">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default PrintTicket
