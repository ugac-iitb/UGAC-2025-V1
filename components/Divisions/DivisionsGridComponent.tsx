import DivisionCardsComponent from "./DivisionCardsComponent";

import DivisionData from '../../public/data/divisions.json';

const DivisionGridComponent = () => {
    return ( 
        <>
            <div className="flex flex-wrap justify-center gap-x-15 gap-y-3 md:gap-y-20 my-20 mb-60">
                {DivisionData.map((division, index) => (
                    <div
                        key={index}
                        className="
                            flex flex-col items-center 
                            justify-center p-5
                            w-full sm:w-1/2 md:w-1/4 
                            lg:w-1/5 transition-all"
                    >
                    <DivisionCardsComponent key={index} data={division} />
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default DivisionGridComponent;