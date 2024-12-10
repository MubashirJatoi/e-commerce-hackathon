import Image from "next/image";
import Niekee from "../../../public/Images/niekeee.png"
import Link from "next/link";


function SignIn () {
    return(
        <div className="flex justify-center items-center mb-[100px] mt-[50px]">
            <div className="w-[325px]">
                <Image className="mb-[30px]" src={Niekee} alt="niekee"></Image>
                <div className="w-[170.5px] ml-[70px] h-[57px] text-center text-[18px] font-[700] leading-[26px]">
                    <h3>YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
                </div>
                <div className="mt-[50px] mb-[15px]">
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] mb-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="email" placeholder="Email address" />
                    <input className="w-[324px] h-[40px] rounded-[3px] pl-[20px] text-[14px] text-[#8D8D8D] border border-[#E5E5E5]" type="password" placeholder="Password" />
                </div>
                <div>
                    <div className="flex justify-between">
                    <div >
                        <input className="w-[16px] cursor-pointer h-[16px] rounded-[3px] border-[#BCBCBC]" type="checkbox" name="box"/>
                        <label className="ml-[10px] cursor-pointer text-[#8D8D8D] text-[12px]" htmlFor="box">Keep me signed in</label>
                    </div>
                    <p className="text-[12px] hover:underline cursor-pointer mt-[5px] text-[#BCBCBC]">Forgotten your password?</p>
                    </div>
                    <p className="text-center ml-[25px] mt-[20px] w-[270.31px] text-[12px] text-[#8D8D8D]">By logging in, you agree to Nike's <span className="text-[12px] underline hover:no-underline cursor-pointer">Privacy Policy</span> and <span className="text-[12px] underline hover:no-underline cursor-pointer">Terms of Use.</span></p>
                    <button className="w-[324px] mb-[20px] h-[40px] mt-[30px] bg-[#000000] rounded-[3px] text-[#FFFFFF] text-[11px] text-center  hover:relative hover:top-1 hover:pt-[3px]">SIGN IN</button>
                    <div>
                        <p className="text-[12px] text-[#8D8D8D]  text-center">Not a Member?<Link href={"/joinUs"}><span className="text-[black] underline hover:no-underline cursor-pointer">Join Us.</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;