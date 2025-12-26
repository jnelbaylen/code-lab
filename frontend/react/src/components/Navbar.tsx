import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"

export const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ scrolled, setScrolled ] = useState(false)

  useEffect(() => {
    const onHandleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onHandleScroll)
    return () => window.removeEventListener("scroll", onHandleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#", icon: User },
    { name: "Services", href: "#", icon: Briefcase },
    { name: "Contact", href: "#", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-green-500/10" : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center group">
            <div className="relative">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Johnnel Baylen
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-green-400 text-lg font-medium transition-all duration-300 relative py-2"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              )
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-green-400 focus:outline-none transition-colors duration-200"
            >
              <div className="relative">
                <Menu
                  className={`w-6 h-6 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-green-500/20">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center space-x-3 text-gray-300 hover:text-green-400 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-green-500/10 transform ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                  <div className="ml-auto w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-8 transition-all duration-300"></div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
