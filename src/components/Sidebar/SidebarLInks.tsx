import { SidebarLink } from "./SidebarLink"
export const SidebarLinks = () =>{
    return (
        <div className="sidebarLinks">
            <div className="sidebarNavMenu">
                <div className="sidebarMenuWrapper pb-[40px] w-full ">
                    <div className="sidebarMenuContent relative">
                        <SidebarLink imgSrc="/assets/dashboardIcon.svg" text="Dashboard"/>
                        <SidebarLink imgSrc="/assets/favouritesIcon.svg" text="TBD"/>
                        <SidebarLink imgSrc="/assets/reportingIcon.svg" text="TBD"/>
                        <SidebarLink imgSrc="/assets/mapIcon.svg" text="TBD"/>
                        <SidebarLink imgSrc="/assets/calendarIcon.svg" text="TBD"/>
                        <SidebarLink imgSrc="/assets/settingsIcon.svg" text="TBD"/>
                    </div>
                </div>
                <div className="sidebarCollapsed">

                </div>
            </div>
            <div className="collapseIconContainer">
                
            </div>
        </div>
    )
}