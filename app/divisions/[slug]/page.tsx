import HeroComponent from "@/components/general/HeroComponent";
import divisionData from "../../../public/data/clubs.json";
import DivisionMainComponent from "@/components/Division/DivisionMainComponent";


const DivisionPage = async ({params}:{params:Promise<{slug:string}>}) => {
    interface DivisionData {
        slug: string;
        name:string;
        logo:string;
        description:string;
        instagram?: string;
    }

    const slug = (await params).slug; 
    const data = divisionData.find((division) => division.club_id === slug);

    return ( 
        <>
            {data && (
                <div>
                    <HeroComponent data={{heading:'Division', subheading:data.club_name}} />
                    <DivisionMainComponent clubData={data} id={data.club_id}/>
                </div>
            )}
           
        </>
    );
}
 
export default DivisionPage;