import React from 'react'

export default function Footer  ()  {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300">Happy Waiting is a revolutionary software that enhances the waiting experience for foodies. We provide games, discounts, and excellent service to make your dining experience more enjoyable.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300">1234 Main Street</p>
            <p className="text-gray-300">City, State, ZIP</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-6" />
        <div className="flex justify-center space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <p className="text-center text-gray-300 mt-4">© 2023 Happy Waiting. All rights reserved.</p>
      </div>
    </footer>
  )
}
