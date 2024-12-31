import { faComments, faCreditCardAlt, faRotateBack, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Support = () =>{
    return(
        <div className="bg-primary mx-2 md:mx-4 rounded-lg overflow-hidden">
            <div className="container flex flex-wrap items-center justify-center m-auto pt-20 pb-36 gap-10 ">
                <div className="group flex flex-row items-center gap-4">
                    <div className="relative flex items-center justify-center">
                        <div className='absolute group-hover:scale-150 group-hover:h-[45px] group-hover:bg-transparent group-hover:w-[45px] duration-300 offset-0 m-auto bg-[#8B4513] rounded-full border border-2 border-[#8B4513] z-0'></div>
                        <FontAwesomeIcon icon={faTruckFast} className="text-secondary2 text-4xl"/>
                    </div>
                    <div className="flex flex-col z-10">
                        <h1 className="text-black text-xl font-semibold">Free Delivery</h1>
                        <h2 className="text-gray-500 text-md">Free Devilery All Over Bhaktapur</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="group flex flex-row items-center gap-4">
                    <div className="relative flex items-center justify-center">
                        <div className='absolute group-hover:scale-150 group-hover:h-[40px] group-hover:bg-transparent group-hover:w-[40px] duration-300 offset-0 m-auto bg-[#8B4513] rounded-full border border-2 border-[#8B4513] z-0'></div>
                        <FontAwesomeIcon icon={faRotateBack} className="text-secondary2 text-4xl"/>
                    </div>
                    <div className="flex flex-col z-10">
                        <h1 className="text-black text-xl font-semibold">Easy Return</h1>
                        <h2 className="text-gray-500 text-base">Easy Return Within 20 Days</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="group flex flex-row items-center gap-4">
                    <div className="relative flex items-center justify-center">
                        <div className='absolute group-hover:scale-150 group-hover:h-[45px] group-hover:bg-transparent group-hover:w-[45px] duration-300 offset-0 m-auto bg-[#8B4513] rounded-full border border-2 border-[#8B4513] z-0'></div>
                        <FontAwesomeIcon icon={faCreditCardAlt} className="text-secondary2 text-4xl"/>
                    </div>
                    <div className="flex flex-col z-10">
                        <h1 className="text-black text-xl font-semibold">Secure Payment</h1>
                        <h2 className="text-gray-500 text-base">100% Secure Payment</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="group flex flex-row items-center gap-4">
                    <div className="relative flex items-center justify-center">
                        <div className='absolute group-hover:scale-150 group-hover:h-[45px] group-hover:bg-transparent group-hover:w-[45px] duration-300 offset-0 m-auto bg-[#8B4513] rounded-full border border-2 border-[#8B4513] z-0'></div>
                        <FontAwesomeIcon icon={faComments} className="text-secondary2 text-4xl"/>
                    </div>
                    <div className="flex flex-col z-10">
                        <h1 className="text-black text-xl font-semibold">24/7 Support</h1>
                        <h2 className="text-gray-500 text-base">24/7 Support Available</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;