import '../App.css'


const About = () => {
	return(
		<>

			<div className="lg:flex justify-around grid mb-[10rem]">
				<div className="lg:w-96 w-full px-4">
					<img src="assets/headphone.png" className="" />

					<h1 className="text-third mt-6 font-bold text-5xl flex items-center">About <span className="text-secondary">Me</span><img src="assets/lampu.png" /></h1>
					<p className="text-xl font-thin text-third"> I am a frontend developer, I graduated from the Wikrama Bogor vocational high school in 2024, I use several programming languages such as python,
						javascript, I can also use frameworks such as react js, 'next js', laravel, 'express', and 'django'.
					</p>

					<div className="flex justify-end lg:right-0 lg:relative fixed right-[-100%] py-6">
						<img src="assets/panah2.png" className="" width="100"/>
					</div>
				</div>
				<div className="p-6 flex justify-center">
					<img src="assets/dua.png" />
				</div>
			</div>
		</>
	)
}

export default About