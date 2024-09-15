import ProjectsJson from '../assets/projects.json'
import ProjectCard from '../components/ProjectCard'

export default function Projecten() {
    return (
        <div className='w-full flex flex-wrap justify-between h-full pb-10 lg:h-[550px] gap-5 text-white p-5 overflow-y-auto'>
            {ProjectsJson.map((project, index) => (
                <div key={index} className='w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]'>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}