interface StepProps {
  counter?: number
  title?: string
}

export default function Step({counter, title}: StepProps) {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="bg-slate-800 px-4 py-2 rounded-full">
        {counter}
      </div>
      {title}
    </div>
  )
}
