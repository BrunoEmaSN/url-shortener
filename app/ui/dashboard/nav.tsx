import NavLinks from "./nav-links";

export default function Nav() {
  return (
      <nav className="bg-slate-800 backdrop-blur-sm">
          <div className="flex space-x-5 py-4 md:px-16 lg:px-32 justify-end">
            <NavLinks />
          </div>
      </nav>
  )
}
