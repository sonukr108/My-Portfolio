import React from 'react'
import QuickQuizImg from '../assets/quickquiz-project.png'
import WeatherForecatImg from '../assets/weather-project.png'
import StudyNestImg from '../assets/studynest-project.png'

const Projects = () => {

  const ProjectCard = ({ image, name, description, githubLink, liveLink }) => {
    return (
      <div className="project-card max-w-85 bg-[url(/projectcardbg.svg)] bg-no-repeat p-4 rounded-lg flex flex-col gap-4 text-wrap border border-gray-600 shadow-md hover:shadow-gray-400 transition-all duration-500">
        <img src={image} alt={name} className="w-80 border-1 border-gray-600" />
        <p className="text-lg font-semibold">{name}</p>
        <p>{description}</p>
        <div className="buttons flex flex-wrap gap-5 font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={githubLink}
          >
            <button className="px-3 py-2 bg-white text-black cursor-pointer hover:rounded-lg transition-all duration-400">
              View Code
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={liveLink}
          >
            <button className="px-3 py-2 text-white border border-white cursor-pointer hover:rounded-lg transition-all duration-400">
              Live Preview
            </button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id='projects' className='px-[10%] py-10 w-full min-h-[140vh] md:min-h-[100vh]'>
      <div className=' flex flex-col gap-3 items-center justify-center'>
        <p className='font-bold text-xl lg:text-2xl text-gray-500'>PROJECTS</p>
        <p className='text-xl lg:text-2xl font-semibold pb-3'>My <span className='text-blue-400'>Completed Projects</span></p>
        <div className="card-container flex flex-wrap gap-5">

          <ProjectCard
            image={QuickQuizImg}
            name="Quick Quiz"
            description="QuickQuiz is a modern and interactive web application built with React for playing quizzes."
            githubLink="https://github.com/sonukr108/QuickQuiz"
            liveLink="https://quick-quiz-by-sonu.vercel.app/"
          />

          <ProjectCard
            image={WeatherForecatImg}
            name="Sonu's Weather App"
            description="Sonu's Weather App is a simple and efficient. It provides real-time weather updates with a fast and seamless user experience."
            githubLink="https://github.com/sonukr108/React-Assignment-and-Projects/tree/main/Weather%20Forecast%20App/weather-forecast"
            liveLink="https://weather-forecast-by-sonu.vercel.app/"
          />

          <ProjectCard
            image={StudyNestImg}
            name="Study Nest"
            description="Study Nest perfect for BCA Sem 4 students who want to learn html, css and js, practice, and master web development fundamentals!"
            githubLink="https://github.com/sonukr108/Study-Nest---HTML-CSS-JS"
            liveLink="https://study-nest-html-css-js.vercel.app/"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
