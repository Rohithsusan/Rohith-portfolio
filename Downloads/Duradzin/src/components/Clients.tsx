function Clients() {
  const clients = [
    'TechCorp', 'DesignHub', 'StartupX', 'BrandCo', 'InnovateLab', 'CreativeLLC'
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-800 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-12">
          Trusted by industry leaders
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-xl font-bold text-gray-400">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
