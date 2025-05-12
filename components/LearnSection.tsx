const LearnSection = () => {
  const resources = [
    { label: 'Docs\nabout succinct', url: 'https://docs.succinct.xyz' },
    { label: 'Blogs\nabout succinct', url: 'https://blog.succinct.xyz' },
  ]

  return (
    <section className="relative w-full flex flex-col items-center gap-6">
      <div className="text-lg font-bold bg-white/90 px-6 py-2 rounded shadow border border-pink-300">
        📚 Learn
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-center">
        {resources.map(({ label, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            className="bg-gradient-to-br from-white to-pink-50 border border-pink-200 rounded-xl shadow-md p-8 text-center text-xl font-semibold whitespace-pre-line hover:shadow-pink-300 transition"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default LearnSection
