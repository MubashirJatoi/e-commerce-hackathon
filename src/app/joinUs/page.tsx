import Image from "next/image";
import Niekee from "../../../public/Images/niekeee.png"
import Link from "next/link";

function JoinUs () {
    return(
        <div>
            <div className="flex justify-center items-center mb-[100px] mt-[50px]">
                <div className="w-[325px]">
                    <Image className="mb-[30px]" src={Niekee} alt="niekee"></Image>
                    <div className="w-[220.5px] ml-[50px] h-[57px] text-center text-[18px] font-[700] leading-[26px]">
                        <h3>BECOME A NIKE MEMBER</h3>
                    </div>
                    <p className="text-[#8D8D8D] ml-[30px] w-[260.08px] text-[14px] leading-[22px] text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                    <div className="mt-[20px]">
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="email" placeholder="Email address" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="password" placeholder="Password" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="text" placeholder="First Name" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="text" placeholder="Last Name" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] pr-[10px] mb-[5px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="date" placeholder="Date of Birth" />
                    <p className="text-[#8D8D8D] mb-[10px] text-[11px] text-center">Get a Nike Member Reward every year on your Birthday.</p>
                    <select className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] bg-transparent border border-[#E5E5E5]" id="dropdown" name="dropdown">
                        <option value="" disabled selected>Country</option>
                        <option value="option1">Pakistan</option>
                        <option value="option2">India</option>
                        <option value="option3">USA</option>
                        <option value="option3">China</option>
                        <option value="option3">Russia</option>
                        <option value="option3">Japan</option>
                        <option value="option3">UK</option>
                    </select>
                    <div className="flex w-[324] gap-4 h-[40px]">
                        <button className="w-[153.89px] text-[#8D8D8D] text-[13px] text-center focus:bg-[#8D8D8D] focus:text-[white] h-[40px] rounded-[3px] border border-[#E5E5E5]">Male</button>
                        <button className="w-[153.89px] text-[#8D8D8D] text-[13px] text-center focus:bg-[#8D8D8D] focus:text-[white] h-[40px] rounded-[3px] border border-[#E5E5E5]">Female</button>
                    </div>
                    <div className="flex mt-[15px]">
                        <input className="w-[18px] cursor-pointer h-[18px] rounded-[3px] border-[#BCBCBC]" type="checkbox" name="box"/>
                        <p className="ml-[10px] mt-[-5px] leading-[14px] w-[247px] cursor-pointer text-[#8D8D8D] text-[12px]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                    </div>
                    <p className="text-center ml-[25px] mt-[20px] w-[270.31px] text-[12px] text-[#8D8D8D]">By creating an account, you agree to Nike's <span className="text-[12px] underline hover:no-underline cursor-pointer">Privacy Policy</span> and <span className="text-[12px] underline hover:no-underline cursor-pointer">Terms of Use.</span></p>
                    <button className="w-[324px] mb-[20px] h-[40px] mt-[30px] bg-[#000000] rounded-[3px] text-[#FFFFFF] text-[11px] text-center  hover:relative hover:top-1 hover:pt-[3px]">JOIN US</button>
                    <div>
                        <p className="text-[12px] text-[#8D8D8D]  text-center">Already a Member? <Link href={"/signIn"}><span className="text-[black] underline hover:no-underline cursor-pointer">Sign In.</span></Link> </p>
                    </div>
                    </div>
                </div>
            </div>       
        </div>
    );
};

export default JoinUs;