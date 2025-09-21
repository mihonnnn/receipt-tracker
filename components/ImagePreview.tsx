'use client'

interface ImagePreviewProps {
  previewUrl: string
  onUpload: () => void
  onRemove: () => void
}

export default function ImagePreview({ previewUrl, onUpload, onRemove }: ImagePreviewProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-gray-600 text-lg font-medium mb-4">プレビュー:</h3>
      <div className="relative w-full max-w-md mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewUrl}
          alt="レシートプレビュー"
          className="rounded-lg shadow-md w-full h-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={onRemove}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-all"
        >
          ❌ 削除
        </button>
        <button
          onClick={onUpload}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
        >
          🤖 AI で解析開始
        </button>
      </div>
    </div>
  )
}