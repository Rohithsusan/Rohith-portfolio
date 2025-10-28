function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DesignCo</h3>
            <p className="text-gray-400">Creating digital experiences that matter</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">UX/UI Design</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Brand & Consulting</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">About</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Work</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Instagram</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2025 DesignCo. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#E6ff2b] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
