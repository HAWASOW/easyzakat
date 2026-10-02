import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import campaigns from "./Campaigns";
import CampaignCard from "./CampaignCard";

function EmergencySection() {
  return (
    <section className="mt-8 md:mt-10 lg:mt-14">

      <div className="grid px-5 gap-3 md:grid-cols-3 lg:gap-5">

        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
          />
        ))}

      </div>

    </section>
  );
}

export default EmergencySection;