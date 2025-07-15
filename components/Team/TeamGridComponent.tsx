import TeamCardsComponent from "./TeamCardsComponent";

const TeamGridComponent = ({ teamData }) => {
  return (
    <div className="space-y-10 mt-40">
      {/* First Row: 1 card */}
      <div className="grid grid-cols-1 place-items-center gap-6">
        {teamData.slice(0, 1).map((member, index) => (
          <TeamCardsComponent key={index} data={member} />
        ))}
      </div>

      {/* Second Row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamData.slice(1, 4).map((member, index) => (
          <TeamCardsComponent key={index + 1} data={member} />
        ))}
      </div>

      {/* Third Row: 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {teamData.slice(4, 8).map((member, index) => (
          <TeamCardsComponent key={index + 4} data={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamGridComponent;
