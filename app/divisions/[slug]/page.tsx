import HeroComponent from "@/components/general/HeroComponent";
import divisionData from "../../../public/data/divisions.json";
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
    const data = divisionData.find((division: DivisionData) => division.slug === slug) as DivisionData;

    return ( 
        <>
            {data && (
                <div>
                    <HeroComponent data={{heading:'Division', subheading:data.name}} />
                    <DivisionMainComponent clubData={data}/>
                </div>
            )}
           
        </>
    );
}
 
export default DivisionPage;