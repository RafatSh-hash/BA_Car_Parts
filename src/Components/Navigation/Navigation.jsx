import Logo from "../../assets/BALogo.png";
import rightArrow from "../../assets/icons/right.png"

const Navigation = () => {
    return (
       
            <div className="flex justify-between items-center px-5 py-1">
            <div>
            <div className="w-36 md:w-40 lg:w-72 h-18">
            <img src={Logo} className="w-full h-full" alt="" />
</div>
            </div>
            <div>

                <button className="border-2 border-red-500 py-2 px-2 bg-transparent appointment">
            <div className="flex justify-between items-center"> 
                <p className="text-sm px-2 font-semibold">যোগাযোগ</p>
                <div className=" flex w-5 overflow-hidden">
                    <img src={rightArrow} className="w-4 h-4 me-2 transition-all duration-200 arrow" alt="" />
                    <img src={rightArrow} className="w-4 h-4 ms-2 transition-all duration-200 arrow1" alt="" />
                </div>
            </div>
          </button>

            </div>
        </div>
       
    );
};

export default Navigation;
