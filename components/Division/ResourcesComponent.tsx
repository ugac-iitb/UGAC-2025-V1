'use client'

const ResourcesComponent = ({filteredResources}:{filteredResources:any}) => {

    return ( 
        <div className="py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {filteredResources.map((resource: any, idx: number) => (
                    <div
                        key={idx}
                        className="bg-white/10 rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center hover:shadow-lg transition-shadow"
                    >
                        {/* Image on left (or top on mobile) */}
                        <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
                            <img
                                src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(resource.resource_link)}`}
                                alt="Resource preview"
                                className="w-16 h-16 rounded object-cover bg-white"
                            />
                        </div>
                        {/* Text on right (or below on mobile) */}
                        <div className="flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2">{resource.resource_name}</h3>
                            <p className="text-sm text-gray-300 mb-4">{resource.club_name}</p>
                            <a
                                href={resource.resource_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block text-[#fca311] hover:underline font-medium"
                            >
                                View Resource
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
}
 
export default ResourcesComponent;

