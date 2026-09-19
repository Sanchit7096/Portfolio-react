import { Link } from 'react-router-dom';
import DKComputerImg from '../Images/DKComputer.png';

const features = [
  'E-commerce Platform for Pre-built PCs',
  'Product Browsing and Catalog',
  'Add to Cart Functionality',
  'WhatsApp-based Checkout System',
];

const roles = [
  'Developed DK Computer, an e-commerce platform for pre-built PCs under mentorship of Dexton Technology.',
  'Built responsive frontend using React.js and Tailwind CSS for seamless user experience.',
  'Implemented backend with Node.js, Express.js, and MongoDB for product and order management.',
  'Integrated Cloudinary for image storage and media management.',
  'Deployed frontend on Vercel and backend on Render for production.',
];

const DKComputer = () => {
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
          <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">DK Computer</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            DK Computer is an e-commerce platform specializing in pre-built PCs. Users can browse products, add items to cart, and complete checkout via WhatsApp. Built under mentorship of Dexton Technology with a focus on seamless user experience and efficient order management.
          </p>
          <a
            href="https://frontend-swart-six-46.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#8b5cf6] hover:bg-[#a78bfa] text-white rounded-lg transition-colors"
          >
            View Live Project
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={DKComputerImg}
              alt="DK Computer preview"
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

        <section className="rounded-3xl flex flex-col justify-center items-center p-6 sm:p-8">
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

export default DKComputer;
