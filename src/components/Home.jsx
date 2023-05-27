import '../App.css'

const Home = () => {
	return(
		<>
			<div className="flex justify-around items-center h-screen" data-aos="zoom-out">
				<div className="mb-4 z-20">
					<h1 className="text-third mb-4 text-xl font-semibold ml-6">Hello i`m</h1>
					<img src="assets/panah.png" className="lg:absolute lg:left-12 fixed left-[99999px] duration-500 mt-2" alt=''/>
					<h1 className="md:text-6xl text-3xl font-bold text-third lg:grid gap-1 flex">Adam <span className="text-secondary">Ramdani</span></h1>
					<button className="bg-secondary hover:bg-primary px-4 py-2 lg:my-[4rem] my-2 text-third rounded-xl mx-4 font-semibold md:text-lg text-[0.6rem]">Hire Me!</button>
					<button className="bg-[#393E46BF] hover:bg-primary px-4 py-2 rounded-xl text-third font-semibold md:text-lg text-[0.6rem]">Download CV<i className="bi bi-download lg:text-lg ml-2"></i></button>
				</div>
				<div>
					<img src="/assets/home.png" />
				</div>

			</div>
		</>
	)
}

export default Home