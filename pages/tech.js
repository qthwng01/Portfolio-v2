import Link from 'next/link'

function Tech({ name, technologies, link }) {
  return (
    <div className="text-center">
      <h3 className="text-slate-200 text-xl font-bold mt-2">
        {link === null ? (
          <Link href="#" alt="link project">
            {name}
          </Link>
        ) : (
          <Link href={link} alt="link project" target="_blank">
            {name}
          </Link>
        )}
      </h3>
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
