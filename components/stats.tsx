import React from 'react'

const Stats = () => {
  const stats = [
    { value: '500+', label: 'مشروع مكتمل' },
    { value: '25+', label: 'سنة خبرة' },
    { value: '100%', label: 'رضا العملاء' },
    { value: '24/7', label: 'خدمة العملاء' },
  ]

  return (
    <section
      className="py-16"
      aria-labelledby="stats-title"
      id="stats"
    >
      <div className="container mx-auto px-4 text-center">
        
        {/* Hidden heading for accessibility */}
        <h2 id="stats-title" className="sr-only">
          إحصائيات الشركة
        </h2>

        {/* Stats List */}
        <dl className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <dt className="text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </dt>
              <dd className="text-gray-600">{stat.label}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}

export default Stats
