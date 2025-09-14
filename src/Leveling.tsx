import "./App.css";

const LevelingSpots = () => {
  const spots = [
    { level: "1-37", monster: "Pova", location: "Lonogo Canyon" },
    { level: "37-56", monster: "Bone Dragonewt", location: "Ancient Empress Tomb" },
    { level: "56-68", monster: "Parasitized Dog", location: "Lost Town: Square" },
    { level: "68-75", monster: "Flare Volg Nightmare", location: "Fiery Volcano" },
    { level: "75-85", monster: "Masked Warrior Hard", location: "Land Under Cultivation" },
    { level: "85-95", monster: "Masked Warrior Nightmare", location: "Land Under Cultivation" },
    { level: "95-113", monster: "Don Yeti", location: "Polde Ice Valley" },
    { level: "113-125", monster: "Cerberus Nightmare", location: "Spring of Rebirth" },
    { level: "125-134", monster: "Lapin the Necromancer", location: "Trace of Dark River" },
    { level: "134-145", monster: "Cerberus Ultimate", location: "Spring of Rebirth" },
    { level: "145-155", monster: "Super Death Mushroom", location: "Monster's Forest: Animal Trail" },
    { level: "155-164", monster: "Commander Golem", location: "Lufenas Mansion: Entrance" },
    { level: "164-167", monster: "MQ Chapter 1-7", location: "Until Chaotic Truth" },
    { level: "167-179", monster: "Venena Nightmare", location: "Ultimea Palace: Throne" },
    { level: "179-184", monster: "Altoblepas", location: "Rokoko Plains" },
    { level: "184-200", monster: "Venena Ultimate", location: "Ultimea Palace: Throne" },
    { level: "200-212", monster: "Finstern The Dark Dragon", location: "Dark Dragon Shrine: Near the Top" },
    { level: "212-225", monster: "Kuzto", location: "Labilans Sector: Square" },
    { level: "225-230", monster: "Espectro", location: "Arche Valley: Area 1" },
    { level: "230-245", monster: "Arachnidemon Ultimate", location: "Arche Valley: Depths" },
    { level: "230-245", monster: "Bullamius", location: "Storage Yard: Area 2" },
    { level: "245-255", monster: "Ferzen the Rock Dragon", location: "Guardian Forest: Giant Tree" },
    { level: "245-255", monster: "Ignitrus", location: "Vulcani Crater Base" },
    { level: "255-265", monster: "Trickster Nightmare", location: "Operation Zone: Cockpit Area" },
    { level: "265-275", monster: "Trus", location: "Propulsion System Zone: Power Tank" },
    { level: "265-275", monster: "Red Ash Dragon Rudis Hard", location: "Espuma Dome: Entrance" },
    { level: "265-275", monster: "Excodus", location: "Stairway Vital Point" },
    { level: "275-285", monster: "Red Ash Dragon Rudis Nightmare", location: "Espuma Dome: Entrance" },
    { level: "275-285", monster: "Trickster Ultimate", location: "Operation Zone: Cockpit Area" },
    { level: "285-295", monster: "Mulgoon Hard", location: "Menabra Plains" },
    { level: "285-295", monster: "Capo Profundo", location: "Abandon District" },
    { level: "295-300", monster: "Mulgoon Nightmare", location: "Menabra Plains" },
    { level: "295-300", monster: "Red Ash Dragon Rudis Ultimate", location: "Espuma Dome: Entrance" },
    { level: "295-300", monster: "Dominaredor Ultimate", location: "Frozen Falls: Area Depth" },
  ];

  return (
    <section className="section">
      <h2 className="page-title">Leveling Spots</h2>
      <p className="page-description">
        Recommended monsters and locations for efficient leveling from Lv1 to Lv300.
      </p>

      <div className="spots-box">
        {spots.map((spot, index) => (
          <div key={index} className="spot-row">
            <span className="spot-level">{spot.level}</span>
            <span className="spot-monster">{spot.monster}</span>
            <span className="spot-location">{spot.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LevelingSpots;
