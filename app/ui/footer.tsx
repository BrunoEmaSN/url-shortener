const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex items-center md:absolute inset-x-0 bottom-0 h-14">
      <div className="justify-start px-4 md:px-16 lg:px-32 opacity-25">
        Made by Bruno Sanchez <span>&copy; { year }</span>
      </div>
    </footer>
  )
}
