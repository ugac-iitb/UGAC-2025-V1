const DivisionPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const id = (await params).slug; 
    return ( 
        <>
            <div>
                <h1>Division Page</h1>
                <p>Division ID: {id}</p>
            </div>
        </>
    );
}
 
export default DivisionPage;