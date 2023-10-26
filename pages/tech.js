function Tech({ name, technologies }) {
  return (
    <div className="text-center">
      <h3 className="text-slate-200 text-xl font-medium">{name}</h3>
     {technologies?.map((item, index) => (
      <span key={index} className="mt-4 mx-1 text-sm inline-flex items-center rounded-full bg-indigo-50 px-2 py-2 font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        <p className="text-xs font-bold">{item}</p>
      </span>
     ))}
    </div>
  )
}

export default Tech
