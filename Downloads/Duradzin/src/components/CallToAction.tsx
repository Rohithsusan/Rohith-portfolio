import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="py-32 px-6 border-t border-gray-800 bg-[#121212]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-6xl md:text-7xl font-bold">
          Shall we get<br />started?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. Drop us a message and we'll get back to you within 24 hours.
        </p>

        <div className="pt-8">
          <Link
            to="/contact"
            className="inline-block bg-[#E6ff2b] text-black font-bold py-4 px-12 rounded-full hover:glow-yellow-strong transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
