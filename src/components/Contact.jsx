import '../App.css'

const Contact = () => {
    return (
        <section  className='lg:mt-[10rem] mt-[30rem]'>
            <div className='flex flex-col lg:flex-row justify-center gap-x-10'>
                <div className='flex-1 lg:flex-col flex gap-y-10 p-5'>
                    <div className='lg:ml-[5rem] flex-col flex justify-center'>
                        <h2 className='text-third text-6xl font-semibold'>Got a project in</h2>
                        <span className='text-secondary text-6xl font-semibold'>mind?</span>
                    </div>

                    <div className='flex flex-col gap-y-10'>
                        <div className='flex justify-center'>
                            {/* <img className='absolute' src="assets/arah.png" alt="" /> */}
                            <img src="assets/mailman.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-y-10 h-96'>
                    <div>
                        <img className="lg:block hidden" src="assets/keyboard.png" alt="" />
                    </div>
                    <div className='flex gap-x-10 px-4 justify-center lg:justify-normal'>
                        <div>
                            <label className='text-third font-semibold' htmlFor="">Your Name</label>
                            <input type="text" className='bg-fourth p-2 rounded-xl font-semibold text-third w-full' placeholder='Name' />
                        </div>
                        <div>
                            <label className='text-third font-semibold' htmlFor="">Your Email</label>
                            <input type="text" className='bg-fourth p-2 rounded-xl font-semibold text-third w-full' placeholder='Email' />
                        </div>
                    </div>
                    <div className='flex justify-center flex-col h-full items-center lg:items-start'>
                        <textarea className="h-full bg-fourth font-semibold text-third w-[90%] p-4 rounded-xl" name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <div className=''>
                            <button className='bg-secondary px-4 py-1 mt-4 flex justify-start font-semibold text-third rounded-xl hover:bg-secondary/80'>Send Message <i class="ml-2 bi bi-telegram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact