import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center  left-0  top-0 ">
                    <div className='text-white rounded-xl   space-y-7 w-1/3 pl-20 pt-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        <p className='text-2xl font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn mx-5 bg-orange-500 text-white'>Discover More </button>
                            <button className='btn text-orange-500'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center  left-0  top-0 ">
                    <div className='text-white rounded-xl   space-y-7 w-1/3 pl-20 pt-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        <p className='text-2xl font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn mx-5 bg-orange-500 text-white'>Discover More </button>
                            <button className='btn text-orange-500'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center  left-0  top-0 ">
                    <div className='text-white rounded-xl   space-y-7 w-1/3 pl-20 pt-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        <p className='text-2xl font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn mx-5 bg-orange-500 text-white'>Discover More </button>
                            <button className='btn text-orange-500'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center  left-0  top-0 ">
                    <div className='text-white rounded-xl   space-y-7 w-1/3 pl-20 pt-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                        <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        <p className='text-2xl font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn mx-5 bg-orange-500 text-white'>Discover More </button>
                            <button className='btn text-orange-500'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;