import Avatar from '../assets/images/ava.jpg'

import { projects, skills, targets } from '.';



const Section = () => {

  return (
    <div>
      <section
        id="home"
        className="bg-gray-950 text-white dark:bg-gray-900 dark:text-gray-200 flex flex-col py-20"
      >
        <section className="py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col text-left">
              <h2 className="text-5xl font-bold text-white-800 flex items-center">Hi, I'm Hang   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke-width="2" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
              </svg>
              </h2>
              <p className="mt-4 text-neutral-300 py-2	">
                I am Nguyen Thi Hang, born in 1999. Graduated from the Department of Computer Science, National Economics University.
                Currently, I am a Frontend developer implementing projects on websites, web apps and mainly use Reactjs. In addition, I also use Nextjs, Remix...
              </p>
              <p className='flex items-center py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Yen Hoa, Cau Giay, Ha Noi
              </p>
              <p className='flex items-center py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                hanggnguyenn0903@gmail.com
              </p>
              <p className='flex items-center py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                0385599390
              </p>
              {/* <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Learn More
              </button> */}

            </div>
            <div className="flex justify-center relative">
              <div
                className="absolute bg-white rounded-lg shadow-2xl"
                style={{ width: '250px', height: '400px', top: '20px', right: '220px' }}
              ></div>
              <img
                src={Avatar}
                alt="Profile"
                className="relative rounded-lg shadow-lg"
                style={{ width: '250px', height: '400px' }}
              />
            </div>
          </div>
        </section>
      </section>
      <section
        id="target"
        className="py-16 bg-gray-900 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
      >
        <div className="container mx-auto px-6  text-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-start">Target</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            {targets.map((target) => (
              <div
                key={target.id}
                className="bg-gray-950 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{target.title}</h3>
                <p className="mt-2">{target.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="skill"
        className="py-16 bg-gray-950 text-gray-100 dark:bg-gray-800 dark:text-gray-200"
      >
        <div className="container mx-auto px-6 text-start">
          <h2 className="text-3xl font-bold mb-3">Skill</h2>
          <p className="text-lg mb-6">
            Technology skills that I have
          </p>
          <div className='flex flex-1 py-2 justify-between items-cente'>
            {skills?.map((item) => (
              <img
                src={item?.logo}
                alt="Profile"
                className="relative rounded-lg shadow-lg"
                style={{ width: '50px', height: '50px' }}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="py-16 bg-gray-900 dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-start text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <h3 className="text-xl font-bold text-start">{project.title}</h3>
                  <p className="text-start">{project.description}</p>
                  <p>
                    <p className="mt-2">{project.time}</p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 text-center">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Section;
