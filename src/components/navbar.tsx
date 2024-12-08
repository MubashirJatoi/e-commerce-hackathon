import Image from "next/image";
import Nike from "../../public/Images/nike-logo.png"
import Like from "../../public/Images/like.png"
import Buy from "../../public/Images/buy.png"
import Search from "../../public/Images/search.png"

function Navbar() {
    return(
        <div className="flex w-[100%] h-[60px] items-center">
            <div className="flex items-center justify-around h-[60px] w-[95%] m-auto">
            <div>
                <Image className="cursor-pointer" src={Nike} alt="nike"></Image>
            </div>
            <div className="flex text-[15px] ml-[130px] font-[600] gap-6">
                <p className="cursor-pointer">New & Featured</p>
                <p className="cursor-pointer">Men</p>
                <p className="cursor-pointer">Women</p>
                <p className="cursor-pointer">Kids</p>
                <p className="cursor-pointer">Sale</p>
                <p className="cursor-pointer">SNKRS</p>
            </div>
            <div className="mt-[-10px] mr-[-120px]">
                <Image className="cursor-pointer relative top-[29px] left-[15px]" src={Search} alt="search"></Image>
                <input className="w-[180px] pl-[50px] bg-[#F5F5F5] h-[40px] rounded-[100px]" type="text" placeholder="Search"/>
            </div>
            <div className="flex gap-5">
            <Image className="cursor-pointer" src={Like} alt="like"></Image>
            <Image className="cursor-pointer" src={Buy} alt="buy"></Image>
            </div>
            </div>
        </div>
    );
};

export default Navbar;