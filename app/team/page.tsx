import HeroComponent from "@/components/general/HeroComponent";
import teamData from '../../public/data/team.json';
import TeamGridComponent from "@/components/Team/TeamGridComponent";

const Team = () => {
    return ( 
        <div className="bg-[#14213d]">
            <HeroComponent data={{heading:"Our Team"}}/>
            <TeamGridComponent teamData={teamData}/>
        </div>
    );
}
 
export default Team;