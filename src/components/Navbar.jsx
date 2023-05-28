import '../App.css'

const Navbar = () => {

	function Open() {
		document.querySelector('#navbar2').classList.toggle('show')
	}

	return (
		<>
			<div>
				<a href="#home" className="text-third font-semibold">Ada<span className="text-secondary">M</span>r.</a>
			</div>
			<i className=" menu bi bi-filter-right text-third text-2xl lg:hidden" id="menu" onClick={Open}></i>
			<div className="navbar lg:relative lg:right-0 right-[-300px] z-50 fixed" id="navbar">
				<nav className="nav text-third lg:flex inline-block z-50">
					<i className="bi bi-arrow-right lg:hidden" onClick={Open}></i>
					<a href="#home" className="hover:text-[#393E46BF]">Home</a>
					<a href="#about" className="hover:text-[#393E46BF]">About</a>
					<a href="#project" className="hover:text-[#393E46BF]">Project</a>
					<a href="#contact" className="hover:text-[#393E46BF]">Contact</a>
				</nav>
			</div>
			<div className="navbar lg:hidden lg:right-0 fixed z-50" id="navbar2">
				<nav className="nav text-third lg:hidden inline-block z-50 flex-col absolute text-left p-4 bg-primary h-screen top-full w-[10rem]">
					<i className="bi bi-arrow-right lg:hidden" onClick={Open}></i>
					<a href="#home" className="hover:text-[#393E46BF]">Home</a>
					<a href="#about" className="hover:text-[#393E46BF]">About</a>
					<a href="#project" className="hover:text-[#393E46BF]">Project</a>
					<a href="#contact" className="hover:text-[#393E46BF]">Contact</a>
				</nav>
			</div>
		</>
	)
}

export default Navbar