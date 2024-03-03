interface SidebarLinkProps {
    imgSrc?: string;
    text: string;
  }



export const SidebarLink: React.FC<SidebarLinkProps> = ({imgSrc, text}) => {
    return (
    <a href="" className="navLink flex items-center gap-[10px] py-[16px] pl-[10px] w-full border-b-[0.5px] border-r-[0.5px] border-[#646b93]">
        <img src={imgSrc} alt="linkIcon" className="max-w-full"/>
        <span className="text-[13px] text-white">{text}</span>
    </a>
    )
}