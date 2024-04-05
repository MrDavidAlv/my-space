import React from 'react'
import profile from './../Assets/img/mrdavidalv/DavidAlvarez.png'

const Home = () => {
  return (
    <div className='bg-hero-homee hero bg-center bg-cover  m-0 justify-center items-center w-full h-full  lg:h-auto 2xl:h-screen  p-2'>
      <div className="md:flex w-full justify-center items-center md:items-start">

        <div id='data' className="flex flex-col justify-center items-center  w-12/12 md:w-4/12 lg:w-3/12 m-4 md:mt-20 lg:mt-40">
          <div id='profile' className='w-full border rounded-lg p-4'>
            <div className='flex justify-center  w-full '>
              <img src={profile} class="rounded-full h-32 md:h-40" alt="mario alvarez" title='mario alvarez' />
            </div>
            <div className='justify-center mt-2'>
              <p className='text-center font-bold text-white text-2xl md:text-3xl lg:text-5xl'>
                DAVID ALVAREZ
              </p>

              <div className='bg-white h-[2.6px] mx-8 md:mx-4 lg:mx-10 my-1'></div>
           
              <p className='text-center font-bold text-white text-2xl md:text-3xl lg:text-5xl'>
                AUTOMATION ENGINEER
              </p>
            
            </div>
          </div>

          <div id='stack' className='w-full border rounded-lg mt-4'>
            <p>ESD</p>
          </div>


        </div>




        <div className="w-12/12 md:w-7/12 lg:w-8/12 p-4 md:ml-5 mt-6 md:mt-0">
          <div id="title" className='border rounded-lg'>
            <p className='font-bold text-white text-3xl md:text-5xl lg:text-8xl'>Hacking the Life</p>
          </div>

          <div id="content" className='  py-2 px-5 mt-5'>
            {/* 
            <div id="content" className='border rounded-lg bg-white bg-opacity-40 py-2 px-5 mt-5'>
            <p className='font-bold text-black text-justify'>¡Hola! Soy Mario David Alvarez Vallejo, un ingeniero en automatización graduado de la Universidad Jorge Tadeo Lozano. Me considero un apasionado de la tecnología y disfruto explorando diferentes campos, desde el desarrollo de software web hasta la robótica.

                Como desarrollador de software web y robótica, tengo habilidades en una amplia gama de tecnologías y lenguajes de programación. He participado activamente en concursos de robótica y ferias de ingeniería, donde he presentado proyectos innovadores que destacan mi experiencia en el desarrollo de aplicaciones web tanto en el frontend como en el backend. Estoy familiarizado con tecnologías como HTML, CSS, JavaScript, React, C#, Python (Django) y Java. Además, tengo experiencia en bases de datos SQL con PostgreSQL y SQL Server, así como en el control de versiones utilizando Git (GitHub/GitLab).

                Mi participación en el Semillero de Investigación Robótica (SIRO) de Utadeo me ha permitido continuar explorando y profundizando mis conocimientos en robótica. Soy proactivo, curioso y tengo habilidades tanto para aprender como para enseñar. Me apasiona mantenerme al día con las últimas tendencias y avances en el campo de la ingeniería y la ciencia.

                En GitHub, me presento como un desarrollador de aplicaciones web, creador de múltiples robots móviles y circuitos electrónicos. Soy un entusiasta y promotor del trabajo comunitario, y participo activamente en la comunidad tecnológica a través de hackathons y eventos de tecnología. Mi experiencia abarca desde el desarrollo web hasta la modelación 3D, la robótica, la electrónica y los sistemas. Me apasionan temas como la conducción autónoma, la exploración espacial, la inteligencia artificial y la ciencia en general. Además, mi amor por el café me convierte en un verdadero "coffee lover", convirtiendo cada taza en líneas de código. ¡Espero poder compartir más sobre mis proyectos y conocimientos contigo!</p>
            */}

            <p className='text-1xl md:text-2xl text-white text-justify'>
              ¡Hola! Soy Mario David Alvarez Vallejo, un ingeniero en automatización graduado de la Universidad Jorge Tadeo Lozano. Me encanta la tecnología y tengo experiencia en desarrollo de software web y robótica. He participado en concursos de robótica y ferias de ingeniería, presentando proyectos innovadores. Mis habilidades incluyen desarrollo web en HTML, CSS, JavaScript, React, C#, Python (Django) y Java, y bases de datos SQL con PostgreSQL y SQL Server. También estoy familiarizado con Git (GitHub/GitLab) y el sistema operativo de robots ROS2. Soy miembro activo del Semillero de Investigación Robótica (SIRO) de Utadeo y disfruto enseñando y aprendiendo. En GitHub, me presento como desarrollador de aplicaciones web, creador de robots móviles y circuitos electrónicos. Soy un entusiasta del trabajo en equipo y participo en hackathons y eventos tecnológicos. Me apasionan temas como la conducción autónoma, la exploración espacial y la inteligencia artificial.
              <br />
              ¡Y no puedo resistirme a una buena taza de café mientras programo!
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home