import React from 'react'

const Footer = () => {
  return (
    <div className="bg-dark-1 text-white py-6 px-6 lg:px-10">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="mb-4 lg:mb-0 lg:order-1">
        <p className="text-sm">&copy; {new Date().getFullYear()} Karim. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-8 lg:order-2">
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
        <a href="https://karimmoataz.com/" target='-blank' className="text-sm hover:text-gray-400 transition-colors">Contact Us</a>
      </div>
    </div>
  </div>
  )
}

export default Footer