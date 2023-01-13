import {motion} from 'framer-motion'
import LineGradient from '../components/LineGradient'


const container ={
    hidden:{},
    visible:{
        transition:{ staggerChidren : 0.2},
    },
};
const projectVariant ={
    hidden:{opacity:0,scale:0.8},
    visible:{opacity:1,scale:1}
}
const Projrct = ({title}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7'>Loolor sit amet consectetur adipisicing elim aliquam, asperiores enim distinctio alias atque?</p>
                <button className='text-2xl p-2 mt-4 rounded-xl bg-blue'>PROJECT</button>
            </div>
            <img
             alt={projectTitle}
             src={require(`../assets/${projectTitle}.jpeg`)}
             />
        </motion.div>
    )
}


const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
        {/* HEADINGS */}
        <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true , amont : 0.5}}
                transition={{duration : 0.5}}
                variants={{
                    hidden: {opacity:0,y:-50},
                    visible: { opacity:1,y:0}
                    
                }}
            >
                <div>
                    <p className='font-playfair font-semibold text-4xl'>
                        <span className='text-red'>PRO</span>JECTS
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='W-1/3'/>
                    </div>
                </div>
                <p className='mt-10 mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat repellat excepturi illo cum assumenda?
                </p>
            </motion.div>
            {/* PROJECTS */}
            <div className='flex justify-center'>
            <motion.div
                className='sm:grid sm:grid-cols-3'
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true , amont : 0.5}}
                variants={container}>
                    {/* ROW 1  */}
                    <div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px]
                    max-h-[400px] text-2xl font-playfair font-semibold'>
                        beautiful user interface
                    </div>
                    <Projrct title="Project 1"/>
                    <Projrct title="Project 2"/>

                    {/* ROW 2 */}
                    <Projrct title="Project 3"/>
                    <Projrct title="Project 4"/>
                    <Projrct title="Project 5"/>

                    {/* ROW 3 */}
                    <Projrct title="Project 6"/>
                    <Projrct title="Project 7"/>
                    <div className='flex justify-center  text-center items-center p-10 bg-blue max-w-[400px]
                    max-h-[400px] text-2xl font-playfair font-semibold'>
                        SMOOTH USER EXPERIENCE
                    </div>
            </motion.div>

            </div>
    </section>
  )
}

export default Projects