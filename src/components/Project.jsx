import '../App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    return (
        <section  className="section mt-[12rem] lg:mt-0 p-6">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div className='p-4 ml-3'>
                            <h2 className='text-secondary text-3xl font-semibold'>My Project</h2>
                            <p className='max-w-sm mb-16 text-xl text-third'>These are some of the projects I've made</p>
                        </div>
                        <div className='flex flex-col gap-y-10' data-aos="flip-up">
                            <div className='group relative overflow-hidden border-2 border-third/50 rounded-xl mx-5 z-40'>
                                <div className='group-hover:bg-primary/70 w-full h-full absolute z-30 transition-all duration-300'></div>

                                <img className='group-hover:scale-125 transition-all duration-500' src="assets/project.png" alt="" />
                                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-400 z-40'><span className='text-third text-3xl font-semibold'>Project PKL</span></div>
                                <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40'>
                                    <a href="#" className='text-secondary text-xl'>Wanna See?<span className='text-third'>(Coming soon)</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-y-10' data-aos="flip-right">
                        <div className='group relative overflow-hidden border-2 border-third/50 rounded-xl mx-5 z-40'>
                            <div className='group-hover:bg-primary/70 w-full h-full absolute z-30 transition-all duration-300'></div>

                            <img className='group-hover:scale-125 transition-all duration-500' src="assets/project2.png" alt="" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-400 z-40'><span className='text-third text-3xl font-semibold'>Portfolio</span></div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40'>
                                <a href="#" className='text-secondary text-xl'>Wanna See?<span className='text-third'>(Coming soon)</span></a>
                            </div>
                        </div>
                        
                        <div className='group relative overflow-hidden border-2 border-third/50 rounded-xl mx-5 z-40'>
                            <div className='group-hover:bg-primary/70 w-full h-full absolute z-30 transition-all duration-300'></div>

                            <img className='group-hover:scale-125 transition-all duration-500' src="assets/projects3.png" alt="" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-400 z-40'><span className='text-third text-3xl font-semibold'>MiniGame</span></div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-40'>
                                <a href="#" className='text-secondary text-xl'>Wanna See?<span className='text-third'>(Coming soon)</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>

        </section>
    )
}

export default Project