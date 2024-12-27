import { faBoxArchive, faComments, faCreditCardAlt, faMoneyBillTransfer, faRotateBack, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Support = () =>{
    return(
        <div className="bg-[#f4e6d5] overflow-hidden shadow-xl">
            <div className="container flex flex-wrap items-center justify-center m-auto py-20 gap-10 ">
                <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faTruckFast} className="text-[#8B4513] text-4xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-black text-xl font-semibold">Free Delivery</h1>
                        <h2 className="text-gray-500 text-md">Free Devilery All Over Bhaktapur</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faRotateBack} className="text-[#8B4513] text-4xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-black text-xl font-semibold">Easy Return</h1>
                        <h2 className="text-gray-500 text-md">Easy Return Within 20 Days</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faCreditCardAlt} className="text-[#8B4513] text-4xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-black text-xl font-semibold">Secure Payment</h1>
                        <h2 className="text-gray-500 text-md">100% Secure Payment</h2>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-transparent via-black to-transparent h-[100px] w-[2px] mr-2'></div>
                <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon icon={faComments} className="text-[#8B4513] text-4xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-black text-xl font-semibold">24/7 Support</h1>
                        <h2 className="text-gray-500 text-md">24/7 Support Available</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;