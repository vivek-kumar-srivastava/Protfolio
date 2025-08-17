import Image from "next/image";
import CircularGallery from "./circulargallery";
import Link from "next/link";

const Body = () => {
  return (
    <div id="about">
      <center>
        <Link
          href="https://www.linkedin.com/in/vivek-kumar-srivastava-1503b824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="inline-block"
          target="_blank"
        >
          <Image
            className="rounded-full flex border border-white/20 shadow-md hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1 "
            href="https://www.linkedin.com/in/vivek-kumar-srivastava-1503b824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            src="/pp.png"
            width={255}
            height={255}
            alt=" profile picture"
          />
        </Link>
        <br />

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mt-6 font-serif text-center">
          VIVEK KUMAR SRIVASTAVA
        </h1>
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-300 mt-1 text-center">
          (Software Engineer)
        </h2>

        {/* About Me Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mt-8 text-center">
          About Me
        </h2>
        <br />
      </center>
      <p className="ml-4 font-bold">
        Hey! I'm Vivek, a passionate coder, adventurous and a joyful person who
        never gives up. I'm a quick learner and love to try new things in my own
        creative ways. I believe that there's always room for improvement so I'm
        working on it unless I can say that the room is full of improvements and
        accomplishments, currently I'm enjoying React-Redux, nextjs, C++, HTML,
        CSS, JavaScript, git, GitHub, DSA and yes my college life too.
      </p>
      <br />
      <div className="flex flex-col md:flex-row justify-between gap-28 p-4 text-white">
        {/* EDUCATION SECTION */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3 border-b border-gray-500 pb-1">
            EDUCATION
          </h2>
          <p className="text-lg font-semibold">
            Chandigarh Group of Colleges (CGC), Landran
          </p>
          <p className="text-sm text-gray-300">
            B.Tech in Computer Science and Engineering
          </p>
          <p className="text-sm text-gray-300">
            Expected: July 2026 | Landran, Punjab
          </p>
          <p className="text-sm text-gray-300">
            Current SGPA:{" "}
            <span className="font-medium text-white">7.56 / 10.0</span>
          </p>
        </div>

        {/* ADDRESS & CONTACT SECTION */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3 border-b border-gray-500 pb-1">
            ADDRESS
          </h2>
          <p className="text-lg font-semibold mb-4">Prayagraj, Uttar Pradesh</p>

          <h2 className="text-3xl font-bold mb-2 border-b border-gray-500 pb-1">
            CONTACT
          </h2>
          <p className="text-sm text-gray-300 mb-1">+91-9984602681</p>
          <p className="text-sm">
            <a
              href="mailto:vivekisonline31@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              vivekisonline31@gmail.com
            </a>
          </p>
        </div>
      </div>
      {/* SKILLS */}
      <br />
      <center>
        <div id="skills" style={{ height: "600px", position: "relative" }}>
          <h2 className="text-5xl font-serif ml-10 mt-7">Skills</h2>
          <br />
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />

          <p className="text-white">
            (The above transition is way too smooth because of my skills and
            choices so kindly use only one finger to press and move images in
            suitable direction)
          </p>
        </div>
      </center>
      <br /> <br /> <br /> <br /> <br /> <br />
      <h2
        id="cerificates"
        className="p-2 text-3xl font-serif font-semibold text-grey-300 border-b text-center mt-10"
      >
        Certifications
      </h2>
      <div className="grid grid-cols-3 gap-4 mx-10 mt-10">
        <div>
          <Link
            href="https://verify.mygreatlearning.com/verify/HUIUKZVS "
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/reactjs.jpg"
              width={350}
              height={350}
              alt="profile picture"
            />
            ReactJS
          </Link>
        </div>
        <div>
          <Link
            href="https://simpli-web.app.link/e/R5ptvphetQb"
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/git.jpg"
              width={360}
              height={550}
              alt="profile picture"
            />
            Git
          </Link>
        </div>
        <div>
          <Link
            href="https://www.credly.com/badges/ce32803e-827f-4276-9d65-50f98726e7c1/linked_in_profile"
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/cloud foundations.jpg"
              width={250}
              height={250}
              alt="profile picture"
            />
            AWS Cloud Foundations
          </Link>
        </div>
        <div>
          <Link
            href="https://www.credly.com/badges/13263b2c-85a5-45ce-8360-fbeb7d17d0b4/linked_in?t=sejo5o"
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/cloud operations.jpg"
              width={250}
              height={250}
              alt="profile picture"
            />
            AWS Cloud Operations
          </Link>
        </div>
        <div>
          <Link
            href="https://www.mygreatlearning.com/certificate/XLOQLUAY"
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/html.jpg"
              width={350}
              height={350}
              alt="profile picture"
            />
            HTML
          </Link>
        </div>
        <div>
          <Link
            href="https://itronixsolutions.com/courses/certificate/372bb66e7d"
            target="_blank"
          >
            <Image
              className="hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300"
              src="/ai.jpg"
              width={350}
              height={350}
              alt="profile picture"
            />
            Artificial Intelligence
          </Link>
        </div>
      </div>
      {/* Experience and projects */}
      <div id="projects" className="mb-36 mt-24">
        <div>
          <center>
            <h2 className="text-3xl font-serif font-semibold text-grey-300 p-2 border-b-2">
              Experience & Projects
            </h2>
            <p className="mt-9 text-xl font-semibold">Makes360 || Trainee</p>
            <p className="text-lg text-gray-300">
              Jun 2024 - Jul 2024 || Mohali, Punjab
            </p>
            <br />
          </center>
          <div className="ml-28 font-medium text-gray-300">
            <p className="">
              {" "}
              • Worked on Search Engine Optimization and a map-based platform to
              suggest and filter near by shops based on specific criteria,
              enhancing user experience.
              <br />
              • Implemented interactive, responsive webpages using Bootstrap and
              integrated Firebase for secure user authentication and push
              notifications.
              <br />• Collaborated with cross-functional teams to build a
              real-time data collection and visualization system using RESTful
              APIs and cloud databases
            </p>
          </div>
        </div>
        <br />
        <br /> <br />
        <br />
        <div className="flex ml-12 mr-12 border-r ">
          <Link href="https://vs-hike.netlify.app" target="_blank">
            <Image src="/hike.png" alt="Health Hike" width="450" height="400" />
          </Link>
          <section className="ml-7 text-gray-400 ">
            <p className="font-semibold text-3xl items-center mb-2 text-gray-300 ">
              {" "}
              Health Hike{" "}
            </p>
            <p className="font-medium text-xl mb-1 ">Jul 2025 - Jul 2025</p>
            A simple and hustle free site for explorers who are fond of trekking
            and travelling, it offers certain collabartive <br />
            packages for trek through TrekUpIndia.
            <br /> <br />
            Frontend Using :- NextJs, Tailwind CSS, HTML.
            <br />
            Backend Using :- Clerk Auth.
            <br />
            Enviornment :- VS Code
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex ml-12 mr-12 border-l">
          <section className="ml-7 text-gray-400  ">
            <p className="font-semibold text-3xl items-center mt-1.5 mb-2 text-gray-300">
              {" "}
              User Dashboard{" "}
            </p>
            <p className="font-medium text-xl mb-1">Aug 2025 - Aug 2025</p>
            A backend based site which allows to create a visible database and
            also allows to perform CRUD
            <br />
            operations on it, it's a simple site that shows all the user entry
            along with their images.
            <br /> <br />
            Frontend Using :- EJS, Tailwind CSS, HTML.
            <br />
            Backend Using :- NodeJS, ExpressJS
            <br />
            Enviornment :- VS Code
          </section>
          <Link
            href="https://github.com/vivek-kumar-srivastava/CRUD-User-Backend"
            target="_blank"
          >
            <Image
              src="/crudBackend.png"
              alt="Health Hike"
              width="450"
              height="400"
              className="ml-10"
            />
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex ml-12 mr-12 border-r ">
          <Link href="https://shop-nextjs-b3f8a.web.app" target="_blank">
            <Image
              src="/shoplift.png"
              alt="Health Hike"
              width="450"
              height="400"
            />
          </Link>
          <section className="ml-7 text-gray-400 ">
            <p className="font-semibold text-3xl items-center mb-2 text-gray-300 ">
              {" "}
              Shoplift{" "}
            </p>
            <p className="font-medium text-xl mb-1 ">May 2024 - May 2024</p>
            It is just a dummy e-commerce site that I created where user can
            view things they want to buy, using
            <br /> a RESTful api here to fetch the data.
            <br /> <br />
            Frontend Using :- NextJs, Tailwind CSS, HTML.
            <br />
            Enviornment :- VS Code
          </section>
        </div>
      </div>
      {/* Hobbies  */}
      <center>
        <h2 id="hobbies" className="text-3xl font-serif font-semibold text-grey-300 border-b mb-12 p-2">
          Hobbies-Interest & Interpersonal skills
        </h2>
      </center>
      <div
        id="container grid"
        className="grid grid-cols-2 mb-14 border-b pb-24 "
      >
        <div
          className="bg-gray-800 rounded-3xl text-white min-h-52 m-2 "
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
          }}
        >
          <center>
            <h3 className="text-lg font-semibold text-gray-400 mt-3">
              Hobbies
            </h3>
            <ul className="text-gray-300 mt-4 text-lg font-medium">
              <li className="m-1 bg-indigo-900 hover:bg-indigo-950 ml-12 mr-12 rounded-lg pb-2 pt-2">
                Photography
              </li>
              <li className="m-1 bg-cyan-900 hover:bg-cyan-950 ml-12 mr-12 rounded-lg  pb-2 pt-2">
                Cooking
              </li>
              <li className="m-1 bg-emerald-900 hover:bg-emerald-950 ml-12 mr-12 rounded-lg  pb-2 pt-2">
                Watching web Series{" "}
              </li>
            </ul>
          </center>
        </div>
        <div
          className="bg-blue-950 rounded-3xl text-white min-h-52 m-2 "
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
          }}
        >
          <center>
            <div className="grid grid-cols-2 text-gray-300 ">
              <div>
                <h3 className="text-lg font-semibold text-gray-400 mt-3">
                  Interpersonal Skills
                </h3>

                <ul className="text-gray-300 mt-3 text-lg font-medium">
                  <li className="m-1 bg-slate-700 hover:bg-slate-800 ml-12 mr-12 rounded-lg pb-2 pt-2">
                    Leadership
                  </li>
                  <li className="m-1 bg-indigo-900 hover:bg-indigo-950 ml-12 mr-12 rounded-lg  pb-2 pt-2">
                    Communication
                  </li>
                  <li className="m-1 bg-blue-900 hover:bg-blue-950 ml-12 mr-12 rounded-lg  pb-2 pt-2">
                    Team Work{" "}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-400 mt-3">
                  Language Known
                </h3>
                <ul className="text-gray-300 mt-3 text-lg font-medium">
                  <li className="m-1 bg-blue-900 hover:bg-blue-950 ml-12 mr-12 rounded-lg pb-2 pt-2">
                    English
                  </li>
                  <li className="m-1 bg-violet-900 hover:bg-violet-950 ml-12 mr-12 rounded-lg  pb-2 pt-2">
                    Hindi
                  </li>
                </ul>
              </div>
            </div>
          </center>
        </div>
      </div>
      {/* EXTRACURRICULAR */}
      <div className="border-b mb-36 pb-36">
        <h3 className="text-lg text-center font-semibold text-gray-400 mt-3 mb-4">
          EXTRACURRICULAR ACTIVITIES
        </h3>

        <ul className="text-gray-300 mt-3 text-lg font-medium">
          <li className="m-1 bg-slate-700 hover:bg-slate-800 ml-12 mr-12 rounded-lg pb-2 pt-2 text-center">
            Volunteered in college fests and technical events.
          </li>
          <li className="m-1 bg-blue-900 hover:bg-blue-950 ml-12 mr-12 rounded-lg  pb-2 pt-2 text-center">
            Organized a trip to solan (2023).{" "}
          </li>
          <li className="m-1 bg-indigo-900 hover:bg-indigo-950 ml-12 mr-12 rounded-lg  pb-2 pt-2 text-center">
            Participated in National Athletic Meets for running
            events(2017,2018).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
