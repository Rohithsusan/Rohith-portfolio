import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    contact: '',
    website: '',
    message: '',
    services: [] as string[],
    investment: '',
    timeline: ''
  });

  const services = [
    'Logo Design',
    'Brand Identity Development',
    'Packaging Design',
    'Brand Consultation',
    'Design Consultation',
    'Others'
  ];

  const investmentOptions = [
    '25k–50k',
    '50k–1Lac',
    '1Lac–2Lac',
    '2Lac–3Lac',
    '+3Lac'
  ];

  const timelineOptions = [
    'Once',
    'Monthly',
    'Six Months',
    'Yearly'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleOptionChange = (field: 'investment' | 'timeline', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field] === value ? '' : value
    }));
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-none text-white">
              <div className="block">Want to build a</div>
              <div className="block">credible and</div>
              <div className="block">relatable brand</div>
              <div className="block">for your target</div>
              <div className="block">audience?</div>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#F8E71C]">
              Let's make it a reality!
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-8">
            <form className="space-y-6">
              {/* Input Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Your Organization's Name"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Your Contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="Website / Social Media Link"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us more…"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-[#F8E71C] transition-colors resize-none"
                />
              </div>

              {/* Service Options */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">What services are you interested in?</h2>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceChange(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.services.includes(service)
                          ? 'bg-[#F8E71C] text-black'
                          : 'bg-[#1C1C1C] text-white border border-gray-600 hover:border-[#F8E71C]'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Options */}
              { /*  <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Are you looking to invest in this project?</h2>
                <div className="flex flex-wrap gap-3">
                  {investmentOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionChange('investment', option)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.investment === option
                          ? 'bg-[#F8E71C] text-black'
                          : 'bg-[#1C1C1C] text-white border border-gray-600 hover:border-[#F8E71C]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Timeline Options */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Are you looking for something based on:</h2>
                <div className="flex flex-wrap gap-3">
                  {timelineOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionChange('timeline', option)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.timeline === option
                          ? 'bg-[#F8E71C] text-black'
                          : 'bg-[#1C1C1C] text-white border border-gray-600 hover:border-[#F8E71C]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-transparent border-2 border-[#F8E71C] text-[#F8E71C] py-4 px-6 rounded-full font-semibold text-lg hover:bg-[#F8E71C] hover:text-black transition-all duration-300"
              >
                Send →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
