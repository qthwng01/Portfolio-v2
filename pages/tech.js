import Link from 'next/link'

function Tech(props) {
  const { name, technologies, linkProject } = props

  return (
    <div className="text-center">
      {!linkProject ? (
        <h3 className="text-slate-200 text-xl font-bold mt-2">{name}</h3>
      ) : (
        <Link href={linkProject} alt="link project" target="_blank">
          <h3 className="text-slate-200 text-xl font-bold mt-2">{name}</h3>
        </Link>
      )}
      {technologies?.map((tech, index) => (
        <span
          key={index}
          className="mt-4 mx-1 text-sm inline-flex items-center rounded-full bg-indigo-50 px-2 py-2 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
        >
          <p className="text-xs font-bold">{tech}</p>
        </span>
      ))}
    </div>
  )
}

export default Tech
