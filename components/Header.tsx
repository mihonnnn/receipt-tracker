export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          💳 Receipt Tracker
        </h1>
        <p className="text-gray-600 mt-1">クレカ履歴とレシートを簡単照合</p>
      </div>
    </header>
  )
}