import DivisionGridComponent from "@/components/Divisions/DivisionsGridComponent";
import HeroComponent from "@/components/general/HeroComponent";

const Divisions = () => {
    return ( 
        <>
            <HeroComponent data={{heading:"Divisions"}}/>
            <DivisionGridComponent />
        </>

    );
}
 
export default Divisions;