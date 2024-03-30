import Counter from '@/components/counter'

interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {

  const stats: StatProps[] = [
    {
      number: 37,
      suffix: 'K',
      text: 'Median dollars spent on litigation discovery.',
    },
    {
      number: 57,
      suffix: '%',
      text: 'Average human recall rate for documents reviewed in discovery.',
    },
    {
      number: 73,
      suffix: '%',
      text: 'of lawyers believe AI will be a game-changer in the legal industry.',
    },
    {
      number: 20,
      suffix: 'K',
      text: 'Average number of documents reviewed in a single case.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">

        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight text-2xl md:text-3xl font-bold tabular-nums mb-2">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-sm text-zinc-500">{stat.text}</p>
          </div>
        ))}

      </div>
    </div>
  )
}