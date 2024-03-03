

export const BrandContainer = () => {
    return (
        <div className="brandContainer flex flex-row items-center gap-[10px] pl-[10px] h-[100px] border-[#646b93] border-r-[0.5px] border-b-[0.5px]">
            <img src="/assets/logo.svg" alt="logo" className="max-w-full"/>
            <div className="logoWrapper font-medium text-[16px] mr-[24px] max-w-[170px] relative bg-gradient-to-b from-white to-[#ffffff66] bg-clip-text">
                <span className="font-medium text-[16px] text-transparent">WeatherApp</span>
            </div>
        </div>
    )
}