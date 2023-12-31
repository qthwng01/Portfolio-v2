import { useRef, useEffect } from 'react'
import Image from 'next/image'
import logo from '../public/mark.svg'
import avatar from '../public/me.png'
import js from '../public/js.svg'
import react from '../public/react.svg'
import redux from '../public/redux.svg'
import net from '../public/net.svg'
import csharp from '../public/csharp.svg'
import tailwindcss from '../public/tailwindcss.svg'
import sanity from '../public/sanity.svg'
import typescript from '../public/typeScript.svg'
// import heroLeft from '../public/hero-bg-square.svg'
// import heroRight from '../public/hero-bg-circle.svg'
import flashcard from '../public/flashcard-light.png'
import Tech from './tech'
import { createClient, groq } from 'next-sanity'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default function IndexPage({ projects }) {
  const projectRef = useRef(null)
  const techRef = useRef(null)
  const aboutRef = useRef(null)
  const handleScrollClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animate on scroll
  const AOS = () => {
    let items = document.querySelectorAll('.aos')
    document.addEventListener('scroll', (event) => {
      items.forEach((item) => {
        if (item.offsetTop - window.scrollY < 350) {
          item.classList.add('active_animation')
        } else if (item.offsetTop - window.scrollY > 650) {
          item.classList.remove('active_animation')
        }
      })
    })
    return items
  }

  useEffect(() => {
    window.addEventListener('scroll', AOS)
    return () => {
      window.removeEventListener('scroll', AOS)
    }
  }, [])

  return (
    <div className={'relative overflow-hidden bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'}>
      <main className="bg-[#0F1624] min-h-screen overflow-y-auto max-w-screen-xl px-6 pt-[2rem] pb-[2rem] md:overflow-y-auto md:min-h-screen md:max-w-full md:relative lg:min-h-screen lg:max-w-full lg:relative">
        {/* Section Navbar */}
        <header className="relative z-50">
          <nav className="lg:px-8" aria-label="Global">
            <div className="flex items-center justify-between lg:flex lg:flex-1 lg:mx-2 lg:items-center">
              <Image className="rounded-xl h-8 w-auto" src={logo} width={35} height={35} alt="logo" />
              <h2 className="text-white font-medium hidden md:block md:font-bold md:text-xl md:ml-2 md:text-slate-200 md:hover:text-slate-50 md:cursor-pointer lg:block lg:font-bold lg:pl-2 lg:text-xl">
                Portfolio
              </h2>
              <div className="flex flex-1 justify-end lg:flex lg:flex-1 lg:justify-end">
                <ul className="inline-flex items-center lg:inline-flex lg:items-center">
                  <li className="px-1 lg:px-2">
                    <a href="mailto:qthwng.01@gmail.com" rel="noopener noreferrer" target="_blank">
                      <svg
                        className="hover-svg lg:w-[36px] h-[36px]"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 2c-.438 0-.786.039-1.078.148-.292.11-.526.31-.664.561C-.019 3.211.01 3.823 0 4.662v6.676c.01.839-.019 1.451.258 1.953.138.251.372.45.664.56.292.11.64.149 1.078.149h12c.439 0 .786-.039 1.078-.148.293-.11.528-.31.666-.561.277-.502.246-1.114.256-1.953V4.662c-.01-.839.021-1.451-.256-1.953a1.258 1.258 0 0 0-.666-.56C14.786 2.039 14.438 2 14 2zm0 1h12c.38 0 .606.039.727.084.083.031.127.08.142.107.095.172.12.615.131 1.473v6.674c-.01.855-.036 1.299-.13 1.47a.27.27 0 0 1-.143.108c-.121.045-.347.084-.727.084H2c-.38 0-.606-.039-.726-.084a.257.257 0 0 1-.141-.107c-.096-.174-.123-.617-.133-1.471V4.664c.01-.856.037-1.299.133-1.473a.257.257 0 0 1 .14-.107C1.394 3.039 1.621 3 2 3zm.537 1.578l-.285.438 5.873 4.22L14 5l-.285-.422-5.59 3.373z" />
                      </svg>
                    </a>
                  </li>
                  <li className="px-1 lg:px-2">
                    <a href="https://github.com/qthwng01" rel="noopener noreferrer" target="_blank" className="text-2xl">
                      <svg
                        className="hover-svg lg:w-[36px] h-[36px]"
                        width="24"
                        height="24"
                        viewBox="0 -0.5 24 24"
                        id="meteor-icon-kit__regular-github"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 lg:mt-10 lg:flex lg:gap-x-12">
              <ul className="inline-flex items-center font-bold">
                <li className="mx-2 text-slate-200 text-[14px] lg:text-2xl lg:mx-20">
                  <a className="cursor-pointer" onClick={() => handleScrollClick(projectRef)}>
                    Projects
                  </a>
                </li>
                <li className="mx-2 text-slate-200 text-[14px] lg:text-2xl lg:mx-20">
                  <a className="cursor-pointer" onClick={() => handleScrollClick(techRef)}>
                    Technologies
                  </a>
                </li>
                <li className="mx-2 text-slate-200 text-[14px] lg:text-2xl lg:mx-20">
                  <a className="cursor-pointer" onClick={() => handleScrollClick(aboutRef)}>
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* Hero */}
        <section className="animate-fade-left">
          <div className="mt-[66px] font-bold text-center">
            <h3 className="text-3xl text-slate-200 lg:text-4xl lg:my-4">Xin Chào,</h3>
            <h3 className="text-slate-200 text-3xl lg:text-4xl lg:my-4">
              I'm <span className="text-3xl text-blue-400 lg:text-4xl">Ho Quoc Thang</span>
            </h3>
          </div>
          <div
            className="text-2xl mx-auto mt-3 text-slate-400 font-bold tracking-tight text-center md:text-20"
            style={{ opacity: 1, transform: 'none' }}
          >
            Frontend Developer
          </div>
          <div className="text-center mt-8">
            <button className="text-white text-sm bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] font-bold border border-none rounded-3xl p-3 hover:text-violet-800 focus:outline-none focus:ring focus:ring-violet-700 lg:text-xl">
              <a href="https://drive.google.com/file/d/167kO1B1gfvvOYRXdWOFf0QDNPUyOEmFA/view?usp=drive_link" rel="noopener noreferrer" target="_blank">
                My Resume
              </a>
            </button>
          </div>
          <Image src={flashcard} alt="decorator" className="absolute -z-50 top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2"></Image>
        </section>
        {/* Project */}
        <section
          className="mt-[88px] lg:mt-[88px] animate-fade-up animate-once animate-ease-linear relative md:relative lg:relative"
          ref={projectRef}
        >
          <div className="mx-auto max-w-2xl text-center md:max-w-full lg:mt-[122px] lg:max-w-6xl lg:flex lg:flex-col lg:items-center">
            <h2 className="flex items-center justify-center text-2xl font-bold text-slate-200 before:relative before:h-[2px] before:bg-[#233554] before:block before:mr-4 before:w-full before:max-w-[200px] after:relative after:bg-[#233554] after:block after:h-[2px] after:ml-4 after:w-full after:max-w-[200px]">
              Projects
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid md:grid-cols-2 md:gap-x-10 lg:grid lg:grid-cols-2 lg:max-w-4xl lg:gap-x-10">
              {projects?.map((item) => (
                <div
                  key={item._id}
                  className="border-2 border-slate-900 rounded-lg shadow-[0_10px_30px_15px_rgba(2,17,27,0.7)] lg:rounded-[4px] lg:bg-[#112240] lg:border-none lg:overflow-auto lg:transition-all lg:shadow-[0_10px_30px_15px_rgba(2,17,27,0.7)]"
                >
                  <div className="w-full max-h-[220px] p-2 overflow-hidden lg:mx-auto lg:max-w-full lg:max-h-[220px] lg:flex lg:flex-row lg:justify-center lg:mt-4">
                    <Image src={item?.imageURL} width={380} height={200} alt={'image'} className="lg:object-cover lg:border lg:rounded-md"></Image>
                  </div>
                  <Tech name={item?.name} technologies={item?.technologies} linkProject={item?.link} />
                  <div className="m-3 animate__backInUp">
                    <div className="text-slate-400 text-sm leading-normal text-justify tracking-tight">
                      <PortableText value={item?.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <button className="text-white text-sm bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] font-bold border border-none rounded-3xl p-3 hover:text-violet-800 focus:outline-none focus:ring focus:ring-violet-700 lg:text-xl">
                <a href="https://github.com/qthwng01" rel="noopener noreferrer" target="_blank">
                  See more via Github
                </a>
              </button>
            </div>
          </div>
          {/* <Image
            src={heroRight}
            alt="decoration"
            className="hidden md:absolute md:left-[-30%] md:top-[10%] md:-z-50 lg:block lg:absolute lg:left-[5%] lg:top-[10%] lg:-z-50"
          ></Image> */}
          {/* <Image
            src={drawing}
            alt="decoration"
            className="hidden md:absolute md:right-[-30%] md:bottom-[20px] md:-z-50 lg:block lg:absolute lg:right-[5%] lg:bottom-[-5%] lg:-z-50"
          ></Image> */}
        </section>
        {/* Tech */}
        <section ref={techRef} className="aos">
          <div className="py-24">
            <div className="mx-auto">
              <h2 className="text-2xl font-bold tracking-light text-slate-200 leading-8 relative flex items-center justify-center before:relative before:h-[2px] before:bg-[#233554] before:block before:mr-4 before:w-full before:max-w-[200px] after:relative after:bg-[#233554] after:block after:h-[2px] after:ml-4 after:w-full after:max-w-[200px]">
                Technologies
              </h2>
            </div>
            <p className="mt-4 text-center text-slate-200 opacity-80 transform-none leading-normal lg:text-2xl lg:leading-9 lg:max-w-full lg:mx-auto">
              There are many technologies that I really want to learn. Technologies that I have used recently
            </p>
            <div className="mx-auto mt-10 max-w-md grid grid-cols-4 gap-y-8 lg:grid-cols-4 lg:gap-x-1 lg:gap-y-10 lg:max-w-3xl lg:mx-auto">
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={js}
                alt="Javascript"
                title="Javascript"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={react}
                alt="React"
                title="React"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={redux}
                title="Redux"
                alt="Redux"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={tailwindcss}
                title="Tailwind CSS"
                alt="Tailwind CSS"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={csharp}
                alt="C#"
                title="C#"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={net}
                alt="ASP.NET CORE"
                title="ASP.NET CORE"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={typescript}
                alt="Typescript"
                title="Typescript"
                sizes="100vw"
              />
              <Image
                className="col-span-1 object-contain w-[40px] h-[44px] mx-auto lg:col-span-1 lg:w-[80px] lg:h-[80px]"
                src={sanity}
                alt="Sanity"
                title="Sanity"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
        {/* About me */}
        <section ref={aboutRef} className="aos">
          <div className="py-6">
            <div className="mx-auto text-center">
              <h2 className="text-slate-200 text-2xl font-bold relative flex items-center justify-center whitespace-nowrap before:relative before:h-[2px] before:bg-[#233554] before:block before:mr-4 before:w-full before:max-w-[200px] after:relative after:bg-[#233554] after:block after:h-[2px] after:ml-4 after:w-full after:max-w-[200px]">
                About me
              </h2>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div>
                <Image
                  src={avatar}
                  className="mx-auto mt-6 w-full max-w-[200px] h-40 border rounded-[50%] bg-white"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="avatar"
                ></Image>
              </div>
              <div className="mt-10 flex flex-row items-end justify-center">
                <div className="text-center text-sm leading-normal tracking-tight lg:text-2xl lg:leading-9">
                  <p>My name is Ho Quoc Thang, and I have graduated from Cao Thang Technical College.</p>
                  <br />
                  <p>
                    I have nearly 6 months of Frontend experience as well as Backend skills and knowledge. I hope to become a Full Stack Developer in
                    the future.
                  </p>
                  <br />
                  <p>
                    Besides learning programming and coding, I like listening to music, watching livestreams and playing sports like badminton,
                    shuttlecock, jogging, gym...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section>
          <div className="mx-auto mt-4">
            <h2 className="text-slate-200 text-2xl font-bold flex items-center justify-center before:relative before:h-[2px] before:bg-[#233554] before:block before:mr-4 before:w-full before:max-w-[200px] after:relative after:bg-[#233554] after:block after:h-[2px] after:ml-4 after:w-full after:max-w-[200px]">
              Contact
            </h2>
          </div>
          <div className="mx-auto mt-4 flex flex-row items-center justify-center">
            <a href="https://github.com/qthwng01" rel="noopener noreferrer" target="_blank" className="mx-2">
              <svg
                className="hover-svg lg:w-[36px] h-[36px]"
                width="24"
                height="24"
                viewBox="0 -0.5 24 24"
                id="meteor-icon-kit__regular-github"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                />
              </svg>
            </a>
            <a href="mailto:qthwng.01@gmail.com" rel="noopener noreferrer" target="_blank" className="mx-2">
              <svg
                className="hover-svg lg:w-[36px] h-[36px]"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2c-.438 0-.786.039-1.078.148-.292.11-.526.31-.664.561C-.019 3.211.01 3.823 0 4.662v6.676c.01.839-.019 1.451.258 1.953.138.251.372.45.664.56.292.11.64.149 1.078.149h12c.439 0 .786-.039 1.078-.148.293-.11.528-.31.666-.561.277-.502.246-1.114.256-1.953V4.662c-.01-.839.021-1.451-.256-1.953a1.258 1.258 0 0 0-.666-.56C14.786 2.039 14.438 2 14 2zm0 1h12c.38 0 .606.039.727.084.083.031.127.08.142.107.095.172.12.615.131 1.473v6.674c-.01.855-.036 1.299-.13 1.47a.27.27 0 0 1-.143.108c-.121.045-.347.084-.727.084H2c-.38 0-.606-.039-.726-.084a.257.257 0 0 1-.141-.107c-.096-.174-.123-.617-.133-1.471V4.664c.01-.856.037-1.299.133-1.473a.257.257 0 0 1 .14-.107C1.394 3.039 1.621 3 2 3zm.537 1.578l-.285.438 5.873 4.22L14 5l-.285-.422-5.59 3.373z" />
              </svg>
            </a>
          </div>
        </section>
        <footer>
          <div className="mx-auto my-4 text-center">
            <p className="text-sm lg:text-xl">
              Designed and made by{' '}
              <b>
                <Link href={'https://github.com/qthwng01'}>Quoc Thang</Link>
              </b>
              . Built with{' '}
              <Link href={''}>
                <b>NextJS</b>, <b>Tailwind CSS</b>
              </Link>
              , content by{' '}
              <Link href={''}>
                <b>Sanity</b>
              </Link>{' '}
              and deloy by{' '}
              <Link href={''}>
                <b>Vercel.</b>
              </Link>
            </p>
            <p></p>
          </div>
        </footer>
      </main>
    </div>
  )
}

const client = createClient({
  projectId: 'cjyi8mde',
  dataset: 'production',
  apiVersion: '2023-10-28',
  useCdn: false,
})

export async function getStaticProps() {
  const projects = await client.fetch(
    groq`*[_type == "project"] {
    _id,
    name,
    link,
    description,
    technologies,
    "imageURL": image.asset->url,
  }`,
    { cache: 'no-store' }
  )

  return {
    props: {
      projects,
    },
  }
}
