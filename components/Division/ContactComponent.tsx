'use client';
import TeamCardsComponent from "./TeamCardsComponent";

const ContactComponent = ({ clubHeads, clubConveners }: { clubHeads: any; clubConveners: any }) => {
  const managerCards = [];
  clubHeads = clubHeads[0];
  const basePath = process.env.NODE_ENV === 'production' ? '/UGAC-IITB' : '';

  if (clubHeads?.manager_1_name) {
    const name = clubHeads.manager_1_name.trim();
    managerCards.push({
      name,
      image: `${basePath}/images/managers/${name}.png`,
      role: clubHeads.manager_1_position,
      linkedin: clubHeads.manager_1_linkedin,
      email: clubHeads.manager_1_email,
    });
  }

  if (clubHeads?.manager_2_name) {
    const name = clubHeads.manager_2_name.trim();
    managerCards.push({
      name,
      image: `${basePath}/images/managers/${name}.png`,
      role: clubHeads.manager_2_position,
      linkedin: clubHeads.manager_2_linkedin,
      email: clubHeads.manager_2_email,
    });
  }

  const convenerCards = clubConveners?.map((convener: any) => {
    const name = convener.convener_name.trim();
    return {
      name,
      image: `${basePath}/images/conveners/${name}.png`,
      role: convener.designation,
      linkedin: convener.convener_linkedin,
      email: convener.convener_email,
    };
  }) || [];

  return (
    <div className="space-y-20 px-4 sm:px-6 lg:px-20 py-16">
      {/* Managers Section */}
      <div className="space-y-10">
        {/* <h2 className="text-white text-4xl font-bold text-center">Managers</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
          {managerCards.map((person, index) => (
            <TeamCardsComponent key={index} data={person} />
          ))}
        </div>
      </div>

      {/* Conveners Section */}
      {convenerCards.length > 0 && (
        <div className="space-y-10">
          {/* <h2 className="text-white text-4xl font-bold text-center pt-6 border-t-2 border-[#fca311]">
            Conveners
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
            {convenerCards.map((person:any, index:any) => (
              <TeamCardsComponent key={index} data={person} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactComponent;
