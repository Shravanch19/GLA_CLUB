import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">GLA Club</h1>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                        onClick={() => window.location.href = '/auth'}>
                        Login
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to GLA Club</h2>
                    <p className="text-xl md:text-2xl mb-8">Connecting Students, Building Future Leaders</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        onClick={() => window.location.href = '/auth'}>
                        Login
                    </button>
                </div>
            </section>

            {/* Website Details Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-12">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4">Community</h4>
                            <p className="text-gray-600">Join a vibrant community of students passionate about learning and growth.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4">Events</h4>
                            <p className="text-gray-600">Participate in exciting events, workshops, and networking opportunities.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4">Resources</h4>
                            <p className="text-gray-600">Access exclusive learning resources and development materials.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-auto">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
                            <p className="text-gray-300">Email: contact@glaclub.com</p>
                            <p className="text-gray-300">Phone: (123) 456-7890</p>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Resources</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8 pt-8 border-t border-gray-700">
                        <p className="text-gray-300">&copy; 2025 GLA Club. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home