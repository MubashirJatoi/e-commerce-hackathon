import Image from "next/image";
import Twitter from "../../public/Images/twitter.png"
import Facebook from "../../public/Images/facebook.png"
import Youtube from "../../public/Images/youtube.png"
import Instagram from "../../public/Images/instagram.png"
import Location from "../../public/Images/location.png"


function Footer() {
    return(
        <div className="bg-[#111111] h-[331px]">
            <div>
                <div className="flex pt-[30px] pl-[30px]">
                    <div className="text-[11px] text-[#FFFFFF] font-[500] leading-[32.67px]">
                        <p className="cursor-pointer">Find A Store</p>
                        <p className="cursor-pointer">Become A Member</p>
                        <p className="cursor-pointer">Sign Up for Email</p>
                        <p className="cursor-pointer">Send Us Feedback</p>
                        <p className="cursor-pointer">Student Discounts</p>
                    </div>
                    <div className="text-[11px] ml-[200px] font-[400] text-[#7E7E7E] leading-[28px]">
                        <p className="text-[#FFFFFF] cursor-pointer text-[11px] font-[500]">Get Help</p>
                        <p className="cursor-pointer">Order Status</p>
                        <p className="cursor-pointer">Delivery</p>
                        <p className="cursor-pointer">Returns</p>
                        <p className="cursor-pointer">Payment Options</p>
                        <p className="cursor-pointer">Contact Us On Nike.com Inquiries</p>
                        <p className="cursor-pointer">Contact Us On All Other Inquiries</p>
                    </div>
                    <div className="text-[#7E7E7E] ml-[100px] text-[12px] leading-[28px]">
                        <p className="text-[#FFFFFF] cursor-pointer text-[11px] font-[500]">About Nike</p>
                        <p className="cursor-pointer">News</p>
                        <p className="cursor-pointer">Careers</p>
                        <p className="cursor-pointer">Investors</p>
                        <p className="cursor-pointer">Sustainability</p>
                    </div>
                </div>
                <div className="flex gap-3 justify-end relative bottom-[190px] right-[30px]">
                    <Image className="cursor-pointer" src={Twitter} alt="twitter"></Image>
                    <Image className="cursor-pointer" src={Facebook} alt="facebook"></Image>
                    <Image className="cursor-pointer" src={Youtube} alt="youtube"></Image>
                    <Image className="cursor-pointer" src={Instagram} alt="instagram"></Image>
                </div>
            </div>
            <div>
                <div className="flex gap-3 pl-[30px] mt-[40px]">
                <Image className="w-[9.38px] cursor-pointer h-[13.12px] mt-[3px]" src={Location} alt="location"></Image>
                <p className="text-[#FFFFFF] ml-[-2px] cursor-pointer text-[12px]">India</p>
                <p className="text-[#7E7E7E] ml-[20px] text-[11px] ">© 2023 Nike, Inc. All Rights Reserved</p>
                <div className="flex ml-[650px] gap-5 text-[12px] text-[#7E7E7E] text-center">
                    <p className="cursor-pointer">Guides</p>
                    <p className="cursor-pointer">Terms of Sale</p>
                    <p className="cursor-pointer">Terms of Use</p>
                    <p className="cursor-pointer">Nike Privacy Policy</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;