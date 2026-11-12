import Head from 'next/head';
import Link from 'next/link';

const Resume = () => {
  return (  
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Head>
        <title>Allen TSOU | Image Quality & Camera Test Engineer</title>
        <meta name="description" content="Personal portfolio and resume of Allen Tsou, specializing in Image Quality, ISP Tuning, and Automated Testing Frameworks." />
      </Head>

      {/* Header Section */}
      <header className="container mx-auto max-w-5xl py-20 px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
          Allen TSOU
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-cyan-400 mb-8">
          Camera Image Quality & Video Test Engineer
        </p>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-12">
          Specializing in <b>Camera Image Quality (IQ) Testing</b>, <b>ISP Signal Processing Tuning</b>, and <b>Automated Testing Frameworks</b>. Experienced with standard measurement environments including <b>Imatest, IQ Analyzer, DxO</b>, and <b>VCX specifications</b>.<br /><br />
          Passionate about bridge-building between hardware-software integration, Computer Vision, and Web Services (Django / Next.js).
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 text-lg font-semibold">
          <a
            href="https://www.linkedin.com/in/lun0000/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 transition duration-300"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/LUN000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 transition duration-300"
          >
            GitHub ↗
          </a>
          <a
            href="https://medium.com/@lun_0000/color-difference-calculation-in-iq-analyzer-imatest-15d027d7d1fa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 transition duration-300"
          >
            Medium Tech Blog ↗
          </a>
        </div>
      </header>

      {/* Main Experience Section */}
      <main className="container mx-auto max-w-5xl px-6 pb-16 space-y-12">
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* Bell Acoustics */}
            <div className="border-l-2 border-cyan-500 pl-6 space-y-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">Video & Image Quality Test Engineer</h3>
                <span className="text-sm text-cyan-400 font-mono">Aug 2026 – Present</span>
              </div>
              <p className="text-slate-400 font-medium">Bell Acoustics Technology (貝爾聲學)</p>
              <ul className="text-slate-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Manage video test pipeline setup, camera objective/subjective testing, and laboratory maintenance.</li>
                <li>Implement automated IQ measurement frameworks following VCX standards.</li>
              </ul>
            </div>

            {/* Billion Electric */}
            <div className="border-l-2 border-slate-700 pl-6 space-y-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">Image Engineer</h3>
                <span className="text-sm text-slate-400 font-mono">Until Aug 2026</span>
              </div>
              <p className="text-slate-400 font-medium">Billion Electric (勝品電通)</p>
              <ul className="text-slate-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Executed ISP parameter tuning and camera performance optimization across various lighting environments.</li>
                <li>Developed custom python automation scripts for fast IQ metric analysis and image reporting.</li>
              </ul>
            </div>

            {/* Bosch */}
            <div className="border-l-2 border-slate-700 pl-6 space-y-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">Image Quality Intern</h3>
                <span className="text-sm text-slate-400 font-mono">March 2023 – Feb 2024</span>
              </div>
              <p className="text-slate-400 font-medium">Robert Bosch</p>
              <ul className="text-slate-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Developed and maintained Image Quality Assessment automation tools in laboratory environments.</li>
                <li>Calibrated lab devices and performed camera optical benchmark testing.</li>
              </ul>
            </div>

            {/* GliaCloud */}
            <div className="border-l-2 border-slate-700 pl-6 space-y-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">AI Engineer Intern</h3>
                <span className="text-sm text-slate-400 font-mono">Feb 2022 – Feb 2023</span>
              </div>
              <p className="text-slate-400 font-medium">GliaCloud</p>
              <ul className="text-slate-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
                <li>Developed auto color template algorithm web services and trend tag discovery services.</li>
                <li>Researched Text-to-3D Motion Models and video asset parsing automation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Leave a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        <Link href="#" className="hover:text-slate-300 transition">Back to top ↑</Link>
      </footer>
    </div>
  );
};

export default Resume;
