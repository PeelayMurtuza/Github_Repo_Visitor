import React from 'react';

function About() {
  return (
    <div className="max-w-3xl p-4 mx-auto flex flex-col justify-start">
      <section className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-purple-400">GitHub API Web Application</h1>
        <p className="text-lg text-gray-700">
          Welcome to my GitHub Repo Visitor ! This project is crafted with love using React and Tailwind CSS. It's a user-friendly interface that connects seamlessly with the GitHub API, empowering users to explore GitHub effortlessly. From searching users to diving into repositories, it's a gateway to the world of GitHub.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-purple-400">About Me</h2>
        <p className="text-lg text-gray-700">
          Hey there! I'm <b className='text-[#C084FC]'> MURTUZA AFSAR PEELAY </b> , a passionate front-end developer. My journey involves turning ideas into interactive and visually appealing web experiences. Check out my <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Portfolio</a> to witness some of my creations. Feel free to connect with me on <a href="www.linkedin.com/in/murtuza-peelay-580b18165" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or explore my coding adventures on <a href="https://github.com/PeelayMurtuza" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-purple-400">Key Features</h2>
        <ul className="pl-6 list-disc">
          <li className="mb-2">Effortless search for users by username</li>
          <li className="mb-2">Detailed insights into a user's profile</li>
          <li className="mb-2">Seamless browsing of user repositories</li>
        </ul>
      </section>
    </div>
  );
}

export default About;