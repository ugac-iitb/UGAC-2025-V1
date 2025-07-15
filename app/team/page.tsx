import HeroComponent from "@/components/Team/HeroComponent";
import teamData from '../../public/data/team.json';
import TeamCardsComponent from "@/components/Team/TeamCardsComponent";
import TeamGridComponent from "@/components/Team/TeamGridComponent";

const Team = () => {
    return ( 
        <div className="bg-[#14213d]">
            <HeroComponent/>
            <TeamGridComponent teamData={teamData}/>
        </div>
    );
}
 
export default Team;