import { Link } from 'react-router-dom';
import AichatbotImg from '../Images/Chatbot.png';

const features = [
  'AI-powered chatbot for real-time conversational responses',
  'User can ask queries and get instant intelligent responses',
  'Integration with Gemini API for intelligent query processing',
];

const roles = [
  'Developed an AI-powered chatbot capable of generating real-time conversational responses.',
  'Integrated Gemini API to process user queries and return intelligent responses.',
  'Built reusable React components and managed application state using React Hooks.',
  'Designed and built the frontend using React.js and Tailwind CSS.',
];

const AiChatBot = () => {
  return (
    <div className="min-h-screen bg-[#120F17] text-white px-4 py-8 sm:px-6 md:px-10 lg:px-16 animate-fadeIn">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Link
          to="/#projects"
          className="group inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-400 transition-all duration-300 hover:text-white hover:-translate-x-1"
        >
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Back to Projects
        </Link>

        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Project • 2026</p>
          <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">AI Chat Assistant</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            AI Chat Assistant is an AI-powered chatbot that generates real-time conversational responses. Users can interact with the chatbot to get intelligent responses to their queries using Gemini API integration.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={AichatbotImg}
              alt="Ai ChatBot preview"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div>
              <h2 className="mb-3 text-2xl font-light">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-[#8b5cf6]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-light">My Role</h2>
              <ul className="space-y-2 text-gray-300">
                {roles.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="mt-1 text-[#8b5cf6]">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="flex items-center justify-between border-t border-b border-white/10 py-6 text-sm">
          <Link
            to="/project/DKComputer"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>DK Computer</span>
          </Link>
          <Link
            to="/project/Skillnavigator"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Skill Navigator</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <section className=" flex flex-col justify-center items-center p-6 sm:p-8">
          <h2 className="mb-3 text-2xl font-light">Have a project in mind?</h2>
          <a
            href="mailto:Sanchitchaurasiya90@gmail.com"
            className="text-lg text-[#8b5cf6] transition-colors duration-200 hover:text-[#a78bfa]"
          >
            Sanchitchaurasiya90@gmail.com
          </a>
          <p className="mt-4 text-sm text-gray-400">Design and build by Sanchit.</p>
        </section>
      </div>
    </div>
  );
};

export default AiChatBot;
