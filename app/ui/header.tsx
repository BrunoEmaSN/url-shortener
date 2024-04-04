interface HeaderProps {
  centered?: boolean
  description?: string
  title?: string
}

export default function Header({ title, description, centered = false }: HeaderProps) {
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </div>
      {/* Description */}
      {description && (
        <div className="mt-4 font-bold text-xl text-gray-600">
          {description}
        </div>
      )}
    </div>
  )
}
