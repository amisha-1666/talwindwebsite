import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-16">
        {/* Home Section */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center items-center bg-blue-400 text-center text-white"
        >
          <div className="relative z-10">
            <h1 className="text-6xl font-bold">Welcome to Our Professional Site of Talwind CSS</h1>
            <p className="mt-4 text-xl">Discover exceptional services and solutions</p>
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-900 text-white py-3 px-6 rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-green-100 py-16"
        >
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-lg text-gray-700">
              We are a passionate team providing exceptional services that help businesses thrive.
              With years of experience, we specialize in innovative solutions tailored to meet your unique needs.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-4">✓</span>
                Professional & Experienced Team
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-4">✓</span>
                Customized Solutions for Every Client
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-4">✓</span>
                Dedicated Customer Support
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to create a future where businesses can seamlessly integrate with modern technology to improve efficiency, reach, and sustainability.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="min-h-screen flex flex-col justify-center items-center bg-yellow-100 py-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Team</h2>
          <div className="flex space-x-8">
            <div className="text-center">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-gray-700">Project Manager</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg italic">"This company provided top-notch service. Highly recommend!"</p>
              <p className="mt-4 text-right">– Sarah Lee</p>
            </div>
            <div className="w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg italic">"Exceptional work from start to finish. Couldn't be happier."</p>
              <p className="mt-4 text-right">– Tom Baker</p>
            </div>
            <div className="w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg italic">"Professional, reliable, and great customer service!"</p>
              <p className="mt-4 text-right">– Emily Davis</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-pink-300 p-8"
        >
          <h2 className="text-5xl font-bold text-white mb-8">Contact Us</h2>
          <p className="text-xl text-white mb-8">
            We would love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-pink-500 focus:outline-none transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
