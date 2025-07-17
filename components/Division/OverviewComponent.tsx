const OverviewComponent = ({overview}) => {
    return ( 
        <>
            <div className="flex flex-col gap-4 p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                    Overview
                </h3>
                <p className="text-lg text-gray-300">
                    {overview}
                </p>
            </div>
        </>
    );
}
 
export default OverviewComponent;