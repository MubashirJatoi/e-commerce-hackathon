import Image from "next/image";
import Logo from "../../public/Images/logo.png"

function Header() {
    return(
        <div className="w-[100%] h-[36px] items-center bg-[#F5F5F5] flex justify-between pl-[48px] pr-[48px]">
            <div className="cursor-pointer">
                <Image src={Logo} alt="logo"></Image>
            </div>
            <div>
                <p className="text-[13px] cursor-pointer flex items-center pb-[3px] justify-center hover:rounded-[8px] w-[146.86px] h-[26px] hover:bg-black text-center hover:text-[#FFFFFF] bg-[#FFFFFF] ml-[400px] font-[500] text-[#111111]">Skip to main content</p>
            </div>
            <div className="flex gap-5">
                <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Find a Store</p>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Help</p>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Join Us</p>
                <p className="w-[3px] h-[14px] text-[#111111] font-[400] text-[12px] ml-[-2px] mt-[-2px]">|</p>
                <p className="text-[11px] font-[500] text-[#111111] cursor-pointer hover:underline">Sign In</p>
            </div>
        </div>
    );
};

export default Header;