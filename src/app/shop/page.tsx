import Image from "next/image";
import Filter from "../../../public/Images/filter.png"
import Sort from "../../../public/Images/sort.png"
import Select from "../../../public/Images/select.png"
import Scroller from "../../../public/Images/scroller.png"
import Product1 from "../../../public/Images/product1.png"
import Product2 from "../../../public/Images/product2.png"
import Product3 from "../../../public/Images/product3.png"
import Product4 from "../../../public/Images/product4.png"
import Product5 from "../../../public/Images/product5.png"
import Product6 from "../../../public/Images/product6.png"
import Product7 from "../../../public/Images/Rectangle.png"
import Product8 from "../../../public/Images/Rectangle(1).png"
import Product9 from "../../../public/Images/Rectangle(2).png"
import Product10 from "../../../public/Images/Rectangle(3).png"
import Product11 from "../../../public/Images/Rectangle(4).png"
import Product12 from "../../../public/Images/Rectangle(5).png"
import Product13 from "../../../public/Images/Rectangle(6).png"
import Product14 from "../../../public/Images/Rectangle(7).png"
import Product15 from "../../../public/Images/Rectangle(8).png"
import Product16 from "../../../public/Images/Rectangle(9).png"
import Product17 from "../../../public/Images/Rectangle(10).png"
import Product18 from "../../../public/Images/Rectangle(11).png"
import Product19 from "../../../public/Images/Rectangle(12).png"
import Product20 from "../../../public/Images/Rectangle(13).png"
import Product21 from "../../../public/Images/Rectangle(14).png"
import Product22 from "../../../public/Images/Rectangle(15).png"
import Product23 from "../../../public/Images/Rectangle(16).png"
import Product24 from "../../../public/Images/Rectangle(17).png"
import Product25 from "../../../public/Images/Rectangle(18).png"
import Product26 from "../../../public/Images/Rectangle(19).png"
import Product27 from "../../../public/Images/Rectangle(20).png"
import Product28 from "../../../public/Images/Rectangle(21).png"
import Product29 from "../../../public/Images/Rectangle(22).png"
import Product30 from "../../../public/Images/Rectangle(23).png"
import Product31 from "../../../public/Images/Rectangle(24).png"
import Product32 from "../../../public/Images/Rectangle(25).png"
import Product33 from "../../../public/Images/Rectangle(26).png"
import Product34 from "../../../public/Images/Rectangle(27).png"
import Product35 from "../../../public/Images/Rectangle(28).png"
import Product36 from "../../../public/Images/Rectangle(29).png"
import Product37 from "../../../public/Images/Rectangle(30).png"
import Product38 from "../../../public/Images/Rectangle(31).png"
import Product39 from "../../../public/Images/Rectangle(32).png"
import Product40 from "../../../public/Images/Rectangle(33).png"
import Product41 from "../../../public/Images/Rectangle(34).png"
import Product42 from "../../../public/Images/Rectangle(35).png"
import Product43 from "../../../public/Images/Rectangle(36).png"
import Product44 from "../../../public/Images/Rectangle(37).png"
import Product45 from "../../../public/Images/Rectangle(38).png"
import Product46 from "../../../public/Images/Rectangle(39).png"
import Product47 from "../../../public/Images/Rectangle(40).png"
import Product48 from "../../../public/Images/Rectangle(41).png"
import Product49 from "../../../public/Images/Rectangle(42).png"
import Product50 from "../../../public/Images/Rectangle(43).png"
import Product51 from "../../../public/Images/Rectangle(44).png"
import Product52 from "../../../public/Images/Rectangle(45).png"
import Product53 from "../../../public/Images/Rectangle(46).png"
import Product54 from "../../../public/Images/Rectangle(47).png"
import Product55 from "../../../public/Images/Rectangle(48).png"
import Product56 from "../../../public/Images/Rectangle(49).png"
import Product57 from "../../../public/Images/Rectangle(50).png"
import Product58 from "../../../public/Images/Rectangle(51).png"
import Product59 from "../../../public/Images/Rectangle(52).png"
import Product60 from "../../../public/Images/Rectangle(53).png"
import Product61 from "../../../public/Images/Rectangle(54).png"
import Product62 from "../../../public/Images/Rectangle(55).png"
import Product63 from "../../../public/Images/Rectangle(56).png"
import Circlee from "../../../public/Images/circlee.png"



function Shop () {
    return(
        <div className="mt-[80px]">
            <div className="flex justify-between items-start mb-[30px]">
                <h3 className="text-[24px] ml-[30px] font-[600px] ">New (500)</h3>
                <div className="flex mr-[30px] gap-6 items-center">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <p className="text-[16px] text-center">Hide Filters</p>
                        <Image className="mb-[-5px]" src={Filter} alt="filter"></Image>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <p className="text-[15px] text-right">Sort By</p>
                        <Image className="mb-[-2px]" src={Sort} alt="sort"></Image>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div>
                <div className="flex">
                <div className="w-[260px] text-[15px] mb-[50px] ml-[30px] leading-[35px]">
                    <p className="cursor-pointer">Shoes</p>
                    <p className="cursor-pointer">Sports Bras</p>
                    <p className="cursor-pointer">Tops & T-Shirts</p>
                    <p className="cursor-pointer">Hoodies & Sweatshirts</p>
                    <p className="cursor-pointer">Jackets</p>
                    <p className="cursor-pointer">Trousers & Tights</p>
                    <p className="cursor-pointer">Shorts</p>
                    <p className="cursor-pointer">Tracksuits</p>
                    <p className="cursor-pointer">Jumpsuits & Rompers</p>
                    <p className="cursor-pointer">Skirts & Dresses</p>
                    <p className="cursor-pointer">Socks</p>
                    <p className="w-[95.57px] leading-[17px] text-[16px] cursor-pointer">Accessories & Equipment</p>
                </div>
                    <Image className="ml-[-50px] cursor-pointer" src={Scroller} alt="sroller"></Image>
                </div>
                <div className="ml-[30px] w-[192px]">
                    <div className="flex justify-between mb-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                        <p className="text-[16px]">Gender</p>
                        <Image className="w-[14px] h-[14px]" src={Select} alt="select"></Image>
                    </div>
                </div>
                <div className="grid grid-cols-1 ml-[30px]">
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Men</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Women</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Unisex</label>
                    </div>
                    <div className="flex justify-between mb-[20px] w-[192px] mr-[5px] mt-[20px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                        <p className="text-[16px]">Kids</p>
                        <Image className="w-[14px] h-[14px]" src={Select} alt="select"></Image>
                    </div>
                </div>
                <div className="grid grid-cols-1 ml-[30px]">
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Boys</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Girls</label>
                    </div>
                    <div className="flex justify-between mb-[20px] w-[192px] mt-[20px] mr-[5px] pt-[10px] border-t-2 border-solid border-[#CCCCCC]">
                        <p className="text-[16px]">Shop by Price</p>
                        <Image className="w-[14px] h-[14px]" src={Select} alt="select"></Image>
                    </div>
                </div>
                <div className="grid grid-cols-1 ml-[30px]">
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">Under ₹ 2 500.00</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label className="ml-[2px] text-[15px]" htmlFor="checkbox">₹ 2 501.00 - ₹ 7 500.00</label>
                    </div>
                </div>
                </div>
                <div className="w-[1092px]">
                    <div className="grid grid-cols-3">
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product1} alt="product1"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Force 1 Mid '07</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 10 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product2} alt="product2"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Court Vision Low Next Nature</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 4 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product3} alt="product3"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Force 1 PLT.AF.ORM</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product4} alt="product4"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Force 1 React</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 13 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product5} alt="product5"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Air Jordan 1 Elevate Low</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 11 895.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product6} alt="product6"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Standard Issue</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Basketball Jersey</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 895.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product7} alt="product7"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dunk Low Retro SE</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 9 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product8} alt="product8"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Sustainable Materials</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT UV Hyverse</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Short-Sleeve Graphic Fitness Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product9} alt="product9"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Court Vision Low</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product10} alt="product10"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Ready</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Short-Sleeve Fitness Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">3 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product11} alt="product11"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike One Leak Protection: Period</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 395.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product12} alt="product12"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Force 1 LV8 3</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Older Kids' Shoe</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 7 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product13} alt="product13"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Blazer Low Platform</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 195.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product14} alt="product14"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Force 1 '07</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoe</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 195.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product15} alt="product15"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Pro Dri-FIT</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Tight-Fit Sleeveless Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product16} alt="product16"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dunk Low Retro</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product17} alt="product17"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max SC</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product18} alt="product18"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT UV Miler</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Short-Sleeve Running Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product19} alt="product19"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max SYSTM</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Older Kids' Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 6 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product20} alt="product20"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Alate All U</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Light-Support Lightly Lined U- <br />Neck Printed Sports Bra</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 195.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product21} alt="product21"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Court Legacy Lift</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 7 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product22} alt="product22"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Swoosh</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Medium-support Padded Sports <br /> Bra Tank</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 095.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product23} alt="product23"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike SB Zoom Janoski OG+</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 595.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product24} alt="product24"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Run Division Rise 365</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Running Tank</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product25} alt="product25"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Challenger</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product26} alt="product26"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Jordan Series ES</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 7 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product27} alt="product27"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Outdoor Play</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Older Kids' Oversized Woven Jacket</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 895.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product28} alt="product28"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Sportswear Trend</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Older Kids' (Girls') High-waisted Woven Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product29} alt="product29"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Blazer Low '77 Jumbo</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 595.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product30} alt="product30"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike SB Force 58</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Skate Shoe</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product31} alt="product31"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Run Division Challenger</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's 13cm (approx.) Brief-Lined <br /> Running Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product32} alt="product32"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Legend Essential 3 Next Nature</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Training Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 4 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product33} alt="product33"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max SYSTM</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 595.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product34} alt="product34"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Totality</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's 23cm (approx.) Unlined Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product35} alt="product35"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Serena Williams Design Crew</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Full-zip Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product36} alt="product36"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Jordan Why Not .6 PF</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 13 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product37} alt="product37"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Air Jordan 1 Low</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product38} alt="product38"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT ADV TechKnit Ultra</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Short-Sleeve Running Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 895.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product39} alt="product39"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Form</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's 18cm (approx.) Unlined Versatile Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 395.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product40} alt="product40"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Air Jordan 1 Mid</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 11 495.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product41} alt="product41"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT ADV Run Division</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Long-Sleeve Running Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product42} alt="product42"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Yoga</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's High-Waisted 7/8 Leggings</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product43} alt="product43"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT Totality</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's 18cm (approx.) Unlined Shorts</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">3 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product44} alt="product44"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Dri-FIT ADV Tour</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Short-sleeve Golf Polo</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product45} alt="product45"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Tanjun</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 4 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product46} alt="product46"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Sustainable Materials</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Go</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Firm-Support High-Waisted <br /> Leggings with Pockets</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 5 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product47} alt="product47"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">NikeCourt Victory</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Tennis Tank</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product48} alt="product48"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Alpha</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's High-Support Padded Sports Bra</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 3 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product49} alt="product49"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Air Jordan 1 Mid SE</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 12 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product50} alt="product50"></Image>
                            <div>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max 270 GO</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Baby/Toddler Easy On/Off Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 6 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product51} alt="product51"></Image>
                            <div>
                            <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Invincible 3 By You</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Custom Men's Road Running Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">6 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 19 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product52} alt="product52"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Sustainable Materials</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max TW SE</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 15 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product53} alt="product53"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Invincible 3 By You</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Custom Women's Road Running Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">6 Colourr</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 19 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product54} alt="product54"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max 90 Futura By You</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Custom Women's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">6 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 17 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product55} alt="product55"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike React Infinity 3 By You</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Custom Men's Road Running Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">5 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 16 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product56} alt="product56"></Image>
                            <div>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Air Max 90 SE</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 12 795.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product57} alt="product57"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Blazer Mid '77 Unlocked By You</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Custom Men's Shoes</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">9 Colours</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 13 295.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product58} alt="product58"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike SB Kearny</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Skate Cargo Trousers</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 4 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product59} alt="product59"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Promo Exclusion</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Jordan x A Ma Maniére</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Men's Jacquard Hoodie</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 8 995.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product60} alt="product60"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Heritage Waistpack</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 395.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product61} alt="product61"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Indy</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Bra Tank Top</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 895.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product62} alt="product62"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Jordan 23 Engineered Classic99</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Cap</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">1 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 1 695.00</p>
                            </div>
                        </div>
                        <div className="w-[348px] h-[533px] transition-transform duration-[0.3s] cursor-pointer ease-in-out hover:transform hover:scale-105">
                            <Image src={Product63} alt="product3"></Image>
                            <div>
                                <p className="text-[#9E3500] text-[15px] font-[600] leading-28px">Just In</p>
                                <p className="text-[15px] leading-[24px] font-[600]">Nike Victori One</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">Women's Slides</p>
                                <p className="text-[#757575] text-[15px] leading-[24px]">2 Colour</p>
                                <p className="text-[15px] leading-[28px] font-[600]">MRP : ₹ 2 095.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1000px] h-[64px] flex justify-center pt-[32px] mb-[100px]">
                        <Image src={Circlee} alt="circlee"></Image>
                    </div>
                    <div className="mb-[100px]">
                        <h3 className="text-[19px] mb-[20px] leading-[24px] font-[600]">Related Categories</h3>
                        <div>
                            <div className="flex mb-[10px] gap-1">
                            <div className="w-[160.83px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">Best Selling Products</p>
                            </div>
                            <div className="w-[104.36px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">Best Shoes</p>
                            </div>
                            <div className="w-[165.31px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">New Basketball Shoes</p>
                            </div>
                            <div className="w-[151.56px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">New Football Shoes</p>
                            </div>
                            <div className="w-[139.83px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">New Men's Shoes</p>
                            </div>
                            <div className="w-[153.08px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">New Running Shoes</p>
                            </div>
                            <div className="w-[140.92px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">Best Men's Shoes</p>
                            </div>
                            </div>
                            <div className="flex gap-1">
                            <div className="w-[145.64px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">New Jordan Shoes</p>
                            </div>
                            <div className="w-[159.11px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">Best Women's Shoes</p>
                            </div>
                            <div className="w-[155.47px] cursor-pointer h-[34px] rounded-[20px] flex justify-center items-center border border-gray-300 hover:bg-gray-300">
                                <p className="text-[12px]">Best Training & Gym</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Shop;
