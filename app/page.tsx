'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import FileUpload from '@/components/FileUpload'
import ImagePreview from '@/components/ImagePreview'
import Features from '@/components/Features'

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUpload = () => {
    alert('OCR機能は開発中です！')
  }

  const handleRemove = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">📸 レシートをアップロード</h2>

          <div className="space-y-6">
            <FileUpload onFileChange={handleFileChange} />

            {previewUrl && (
              <ImagePreview previewUrl={previewUrl} onUpload={handleUpload} onRemove={handleRemove} />
            )}
          </div>
        </div>

        <Features />
      </div>
    </main>
  )
}
