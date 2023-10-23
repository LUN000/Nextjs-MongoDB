import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Resume = () => {
  return (  
    <div className="scroll-smooth bg-gradient-to-r from-gray-600">
      <Head>
        <title>My Homepage</title>
      </Head>

      <header className="container min-h-screen mx-auto py-12 px-4">
        <h1 className="text-9xl font-bold text-white-600 mb-1">Allen TSOU</h1>
        <p className="text-4xl text-white-600 mb-6">Web Developer, Image Quality Engineer</p>
        <p className="text-white-600 mb-36">
              I am a web developer with experience in <b>backend</b> technologies such as <b>Django & Next.js</b><br/>
              Also, I&apos;m passionate about <b>Image Quality, Color Science and Computer Vision</b>.<br/>
              If you&apos;d like to learn more or collaborate, please don&apos;t hesitate to reach out to me.<br/>
              I look forward to new challenges and opportunities to create impactful products.
        </p>
        <div className='text-end mb-3'>
          <a
            href="https://www.linkedin.com/in/lun0000/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl font-bold text-white-600 transition duration-800 hover:bg-gradient-to-r from-gray-900"
          >
            LinkedIn |
          </a>
        </div>
        <div className='text-end mb-3'>
          <a
            href="https://github.com/LUN000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl font-bold text-white-600 mb-12 transition duration-800 hover:bg-gradient-to-r from-gray-900"
          >
            GitHub |
          </a>
        </div>
        <div className='text-end mb-3'>
          <a
            href="https://medium.com/@lun_0000/color-difference-calculation-in-iq-analyzer-imatest-15d027d7d1fa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl font-bold text-white-600 mb-6 transition duration-800 hover:bg-gradient-to-r from-gray-900"
          >
            Medium |
          </a>
        </div>
        {/* <h1 className="text-end text-9xl font-bold text-white-600 mb-1">test</h1> */}
      </header>

      <main className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <section className="mb-4">
          <h2 className="text-2xl text-blue-600 font-semibold">Work Experience</h2>
          <div className="mt-4">
            <h3 className="text-lg text-gray-600 font-semibold">Image Quality Intern</h3>
            <p className="text-gray-600">Robert Bosch</p>
            <p className="text-gray-600">March 2023 - Present</p>
            <p className="text-gray-600">
              - Developed and Maintained Image Quality Assessment Tool<br />
              - Create Automation Testing Tools with Lab Devices<br />
              - Apply Camera Image Quality Testing
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-gray-600 font-semibold">AI Engineer Intern</h3>
            <p className="text-gray-600">GliaCloud</p>
            <p className="text-gray-600">Feb 2022 - Feb 2023</p>
            <p className="text-gray-600">
              - Developed Auto Color Template Algorithm Web Service<br />
              - Create Artical Trend Tag Service<br />
              - Research on Youtube Data Projects<br />
              - Research on Text to 3D Motion Model 
            </p>
          </div>
        </section>
      </main>

      <main className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <section className="mb-6">
          <h5 className="mb-10 text-gray-600 text-center text-xl font-semibold">Leave a reply</h5>

          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90" placeholder="Name" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-600 dark:peer-focus:text-primary"
                htmlFor="exampleInput90">Name
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="Email" placeholder="Email address" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-600 dark:peer-focus:text-primary"
                htmlFor="Email">Email address
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="Message" rows={3} placeholder="Message"></textarea>
              <label htmlFor="Message"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-600 dark:peer-focus:text-primary">Message
              </label>
            </div>
            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input type="checkbox"
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-gray-600 checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                id="copy" />
              <label className="text-gray-600 inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="copy">Confirm to send this
                message</label>
            </div>
            <button type="button" data-te-ripple-init data-te-ripple-color="light"
              className="mb-6 inline-block w-full rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Publish
            </button>
          </form>
        </section>

      </main>

      <footer className="text-center mt-4">
        <Link href="/">Back to top</Link>
      </footer>
    </div>
  );
};

export default Resume;
