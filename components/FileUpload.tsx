'use client'

import { ChangeEvent } from 'react'

interface FileUploadProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FileUpload({ onFileChange }: FileUploadProps) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <div className="text-6xl mb-4">📁</div>
        <p className="text-lg text-gray-600 mb-2">ファイルを選択またはドラッグ&ドロップ</p>
        <p className="text-sm text-gray-400">JPG, PNG, HEIC対応</p>
      </label>
    </div>
  )
}