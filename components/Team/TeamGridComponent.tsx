'use client';
import TeamCardsComponent from './TeamCardsComponent';
const basePath = process.env.NODE_ENV === 'production' ? '/UGAC-IITB' : '';
// const image = `${basePath}/images/team/${trimmedName}.png`;


const fallbackImage = '/images/temp.png';

const TeamGridComponent = ({ teamData }: { teamData: any[] }) => {
  if (!teamData || teamData.length === 0) return null;

  // Preprocess and clean the data
  const cleanedData = teamData
    .filter(person => person?.name && person?.position) // skip empty
    .map(person => ({
      ...person,
      name: person.name.trim(),
      position: person.position.trim(),
    }));

  if (cleanedData.length === 0) return null;

  const firstPerson = cleanedData[0];
  const nextFour = cleanedData.slice(1, 5);
  const remaining = cleanedData.slice(5);

  const transformData = (person: any) => {
  const trimmedName = person.name.trim();


  // console.log(`${basePath}/images/team/${trimmedName}.png`,);
  return {
    name: trimmedName,
    image: `${basePath}/images/team/${trimmedName}.png`,
    role: person.position.trim(),
    linkedin: person.linkedin?.trim() || '',
    email: person.email?.trim() || '',
    contact:person.contact?.trim() || ''
  };
};


  return (
    <div className="space-y-24 px-4 sm:px-6 lg:px-20 py-16">
      {/* First Person Section */}
      <div className="space-y-10">
        {/* <h2 className="text-white text-4xl font-bold text-center">Head</h2> */}
        <div className="flex justify-center">
          <TeamCardsComponent data={transformData(firstPerson)} />
        </div>
      </div>

      {/* Next Four Section */}
      {nextFour.length > 0 && (
        <div className="space-y-10">
          {/* <h2 className="text-white text-4xl font-bold text-center border-t-2 pt-6 border-[#fca311]">Core Team</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-12 justify-items-center">
            {nextFour.map((person, idx) => (
              <TeamCardsComponent key={idx} data={transformData(person)} />
            ))}
          </div>
        </div>
      )}

      {/* Remaining Section */}
      {remaining.length > 0 && (
        <div className="space-y-10">
          {/* <h2 className="text-white text-4xl font-bold text-center border-t-2 pt-6 border-[#fca311]">Team Members</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
            {remaining.map((person, idx) => (
              <TeamCardsComponent key={idx} data={transformData(person)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamGridComponent;
