import { BrandContainer } from "./BrandContainer"
import { SidebarLinks } from "./SidebarLInks"
import { CollapseContainer } from "./CollapseContainer"
export const Sidebar = () =>{
    return(
        <nav> 
            <div className="sidebarWrapper w-full h-[100vh] max-w-[162px] overflow-hidden relative border-l-[0.5px] border-[#31396a] border-r-[#646b93] border-r-[0.5px] shadow-[0px_2px_12px_0px_rgba(11,22,44,0.05)]">
                <div className="brandbar">
                    <BrandContainer/>
                    <SidebarLinks/>
                    <CollapseContainer/>
                </div>
            </div>
        </nav>
    )
}