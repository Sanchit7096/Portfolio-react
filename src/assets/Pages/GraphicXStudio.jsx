import { Link } from 'react-router-dom';
import GraphicXStudioImg from '../Images/GraphicXStudio.png';

const features = [
  'Production Business Website',
  'Responsive UI and Mobile-Friendly Layouts',
  'Interactive Sections and Animations',
  'Cloudinary-based Media Management',
];

const roles = [
  'Developed and deployed GraphicX Studio, a production business website using React.js, Tailwind CSS, JavaScript, and GSAP.',
  'Built responsive UI, reusable React components, animations, interactive sections, and mobile-friendly layouts.',
  'Integrated Cloudinary for image hosting and media management to support production website assets.',
  'Contributed to frontend development, debugging, bug fixing, responsiveness improvements, and feature enhancements.',
];

const GraphicXStudio = () => {
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
          <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">GraphicX Studio</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            GraphicX Studio is a production business website developed for Dexton Technology. The website features responsive layouts, reusable components, interactive sections, animations, and Cloudinary-based media management to deliver a professional and engaging user experience.
          </p>
          <a
            href="https://graphicxstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#8b5cf6] hover:bg-[#a78bfa] text-white rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            View Live Project
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={GraphicXStudioImg}
              alt="GraphicX Studio preview"
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
            to="/project/Skillnavigator"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Skill Navigator</span>
          </Link>
          <Link
            to="/project/DKComputer"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>DK Computer</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <section className="rounded-3xl flex flex-col justify-center items-center p-6 sm:p-8">
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

export default GraphicXStudio;
