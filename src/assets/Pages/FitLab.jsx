
import { Link } from 'react-router-dom';
import FitLabImg from '../Images/FitLab.png';

const features = [
  'Gym Showcase and Information',
  'Gym area and equipment details',
  'Gym facility and amenities information',
  'Gym location and contact details',
];

const roles = [
 ' Designed and built the frontend of the website using React.js',
 'Used components and props to create reusable sections.',
 'Made the design responsive so it works on all devices.',
 'Focused on layout and styling for a modern and clean look.',
];

const FitLab = () => {
  return (
    <div className="min-h-screen bg-[#120F17] text-white px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Link
          to="/#projects"
          className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-400 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>

        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Project • 2026</p>
          <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">FitLab</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            FitLab is a modern fitness platform that provides users with comprehensive information about gyms, their facilities, and equipment. Users can explore different gym locations, view detailed information about each facility, and connect with trainers to achieve their fitness goals.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={FitLabImg}
              alt="FitLab preview"
              className="h-full w-full object-cover"
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

        <section className=" flex flex-col justify-center items-center p-6 sm:p-8">
          <h2 className="mb-3 text-2xl font-light">Have a project in mind?</h2>
          <a
            href="mailto:Sanchitchaurasiya90@gmail.com"
            className="text-lg text-[#8b5cf6] transition hover:text-[#a78bfa]"
          >
            Sanchitchaurasiya90@gmail.com
          </a>
          <p className="mt-4 text-sm text-gray-400">Design and build by Sanchit.</p>
        </section>
      </div>
    </div>
  );
};

export default FitLab;