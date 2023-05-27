import '../App.css'


const Footer = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center h-66 mt-5'>
                <div className='flex gap-x-10'>
                    <a className="text-third hover:text-fourth text-xl" href="#home"><i className="bi bi-house-door"></i> Home</a>
                    <a className="text-third hover:text-fourth text-xl" href="#about"><i className="bi bi-person"></i> About me</a>
                    <a className="text-third hover:text-fourth text-xl" href="#contact"><i className="bi bi-telephone"></i> Contact</a>
                </div>
                <div className='flex gap-x-8 mt-10'>
                    <a className='text-third p-4 bg-fourth hover:bg-third hover:text-fourth rounded-[50%] text-lg' href=""><i className="bi bi-facebook"></i></a>
                    <a className='text-third p-4 bg-fourth hover:bg-third hover:text-fourth rounded-[50%] text-lg' href="https://www.instagram.com/adamramdaniyunus/"><i className="bi bi-instagram"></i></a>
                    <a className='text-third p-4 bg-fourth hover:bg-third hover:text-fourth rounded-[50%] text-lg' href=""><i className="bi bi-whatsapp"></i></a>
                    <a className='text-third p-4 bg-fourth hover:bg-third hover:text-fourth rounded-[50%] text-lg' href=""><i className="bi bi-youtube"></i></a>
                </div>
            </div>
            <div className='flex justify-end'>
                <h1 className='text-third'>Designed by Astiya</h1>
            </div>
        </>
    )
}

export default Footer