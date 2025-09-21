import FeatureCard from './FeatureCard'

const features = [
  {
    icon: '🔍',
    title: '高精度OCR',
    description: 'Google Cloud Vision APIで正確な文字認識'
  },
  {
    icon: '🔗',
    title: '自動照合',
    description: 'クレカ履歴と自動でマッチング'
  },
  {
    icon: '📊',
    title: '支出分析',
    description: 'カテゴリ別の詳細な支出レポート'
  }
]

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}