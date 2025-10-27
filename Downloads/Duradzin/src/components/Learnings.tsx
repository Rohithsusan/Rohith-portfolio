import { ArrowRight } from 'lucide-react';

function Learnings() {
  const articles = [
    {
      title: 'The Future of Web Design',
      date: 'Oct 10, 2025',
      category: 'Design Trends'
    },
    {
      title: 'Building Scalable Design Systems',
      date: 'Oct 5, 2025',
      category: 'Development'
    },
    {
      title: 'User Research Best Practices',
      date: 'Sep 28, 2025',
      category: 'UX Research'
    }
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">Recipe for Success</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-[#1C1C1C] p-8 rounded-2xl border border-gray-800 hover:border-[#F8E71C] transition-all duration-500 cursor-pointer"
            >
              <span className="text-sm text-gray-500 uppercase tracking-wider">{article.category}</span>
              <h3 className="text-2xl font-bold my-4 group-hover:text-[#F8E71C] transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">{article.date}</span>
                <ArrowRight className="w-5 h-5 text-[#F8E71C] transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learnings;
