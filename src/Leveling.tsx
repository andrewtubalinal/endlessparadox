import "./App.css";

const LevelingSpots = () => {
  const mqSpots = [
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
  ];

  const mqVenenaSpots = [
    { level: "164-179", monster: "Venena Nightmare", location: "Ultimea Palace: Throne" },
    { level: "179-184", monster: "Altoblepas", location: "Rokoko Plains" },
    { level: "184-200", monster: "Venena Ultimate", location: "Ultimea Palace: Throne" },
  ];

  const mqFinsternSpots = [
    { level: "200-212", monster: "Finstern The Dark Dragon", location: "Dark Dragon Shrine: Near the Top" },
    { level: "212-225", monster: "Kuzto", location: "Labilans Sector: Square" },
  ];

  const mqArachnidemonSpots = [
    { level: "225-230", monster: "Espectro", location: "Arche Valley: Area 1" },
    { level: "230-245", monster: "Arachnidemon Ultimate", location: "Arche Valley: Depths" },
    { level: "230-245", monster: "Bullamius", location: "Storage Yard: Area 2" },
  ];

  const mqFerzenSpots = [
    { level: "245-255", monster: "Ferzen the Rock Dragon", location: "Guardian Forest: Giant Tree" },
    { level: "245-255", monster: "Ignitrus", location: "Vulcani Crater Base" },
  ];

  const mqTricksterSpots = [
    { level: "255-265", monster: "Trickster Nightmare", location: "Operation Zone: Cockpit Area" },
    { level: "265-275", monster: "Trus", location: "Propulsion System Zone: Power Tank" },
    { level: "265-275", monster: "Red Ash Dragon Rudis Hard", location: "Espuma Dome: Entrance" },
    { level: "265-275", monster: "Excodus", location: "Stairway Vital Point" },
    { level: "275-285", monster: "Red Ash Dragon Rudis Nightmare", location: "Espuma Dome: Entrance" },
    { level: "275-285", monster: "Trickster Ultimate", location: "Operation Zone: Cockpit Area" },
  ];

  const mqMulgoonSpots = [
    { level: "285-295", monster: "Mulgoon Hard", location: "Menabra Plains" },
    { level: "285-295", monster: "Capo Profundo", location: "Abandon District" },
    { level: "295-300", monster: "Mulgoon Nightmare", location: "Menabra Plains" },
    { level: "295-300", monster: "Red Ash Dragon Rudis Ultimate", location: "Espuma Dome: Entrance" },
    { level: "295-300", monster: "Dominaredor Ultimate", location: "Frozen Falls: Area Depth" },
    { level: "300-305", monster: "Wiltileaf", location: "Eumano Village Ruins" },
  ];

  const lukSpots = [
    { level: "10-28", monster: "Lavarca", location: "Rakau Plains" },
    { level: "28-40", monster: "Pova", location: "Lonogo Canyon" },
    { level: "40-55", monster: "Bone Dragonewt", location: "Ancient Empress's Tomb" },
    { level: "55-65", monster: "Parasitized Dog", location: "Lost Town Square" },
    { level: "65-75", monster: "Mewte", location: "Gravel Terrace" },
    { level: "75-85", monster: "Hangged Mummy", location: "Lunagent Mountain" },
    { level: "85-100", monster: "Controlled knight+fighter", location: "Dark Castle" },
    { level: "100-115", monster: "Underground Nemico", location: "Ultimea Sewer: Southeast" },
    { level: "115-125", monster: "Lyark Specialist", location: "Brahe Laboratory" },
    { level: "125-140", monster: "Meditating Potum", location: "Heresy Corridor" },
    { level: "140-150", monster: "Blue Bubble", location: "Shrine of Blessing Gods" },
    { level: "150-158", monster: "Ivy", location: "Dark Dragon Shrine" },
    { level: "158-163", monster: "Toretta", location: "Labilans Sector" },
    { level: "163-165", monster: "Coofer", location: "Rokoko City Ruins" },
    { level: "165-175", monster: "Weltacle", location: "Recetacula Sector" },
    { level: "175-195", monster: "Bo Peep", location: "Country Road" },
    { level: "195-208", monster: "Octoceras", location: "Vulcani Underground Passage" },
    { level: "208-218", monster: "Laduro", location: "Tunnel of Trials" },
    { level: "218-228", monster: "Lattecia", location: "Boma Konda: Entrance" },
    { level: "228-235", monster: "Breppa", location: "Algid Passage" },
    { level: "235-245", monster: "Bullamius", location: "Storage Yard: Area 2" },
    { level: "245-256", monster: "Ignitrus", location: "Vulcani Crater Base" },
  ];

  const renderSpots = (spots: { level: string; monster: string; location: string }[]) =>
    spots.map((spot, idx) => (
      <div key={idx} className="spot-row">
        <span className="spot-level">{spot.level}</span>
        <span className="spot-monster">{spot.monster}</span>
        <span className="spot-location">{spot.location}</span>
      </div>
    ));

  return (
    <section className="section">
      <div className="spots-box">
        <h2 className="page-title">Toram Online Leveling Guide: Levels 1-300 (MQ & Non-MQ Paths)</h2>

      <p className="page-description">
        Recommended monsters and locations for efficient leveling from Lv1 to Lv300.
      </p>

      {/* Main Quest Initial */}
      {renderSpots(mqSpots)}

      {/* MQ Unlock Venena */}
      <h3 className="section-subtitle">
        CHAP 1 TO 7 MQ UNLOCK VENENA
        <br />
        <small>(Complete Main Quest up to Chapter 7: Chaotic Truth to unlock Venena)</small>
      </h3>
      {renderSpots(mqVenenaSpots)}

      {/* MQ Unlock Finstern */}
      <h3 className="section-subtitle">
        CHAP 7 TO 8 MQ UNLOCK FINSTERN
        <br />
        <small>(Complete Main Quest up to Chapter 8 to unlock Finstern)</small>
      </h3>
      {renderSpots(mqFinsternSpots)}

      {/* MQ Unlock Arachnidemon */}
      <h3 className="section-subtitle">
        CHAP 8 TO 10 MQ UNLOCK ARACHNIDEMON
        <br />
        <small>(Complete Main Quest up to Chapter 10 to unlock Arachnidemon)</small>
      </h3>
      {renderSpots(mqArachnidemonSpots)}

      {/* MQ Unlock Ferzen */}
      <h3 className="section-subtitle">
        CHAP 10 TO 11 MQ UNLOCK FERZEN THE ROCK DRAGON
        <br />
        <small>(Complete Main Quest up to Chapter 11 to unlock Ferzen)</small>
      </h3>
      {renderSpots(mqFerzenSpots)}

      {/* MQ Unlock Trickster */}
      <h3 className="section-subtitle">
        CHAP 11 TO 12 MQ UNLOCK TRICKSTER DRAGON MIMYUGON
        <br />
        <small>(Complete Main Quest up to Chapter 12 to unlock Trickster)</small>
      </h3>
      {renderSpots(mqTricksterSpots)}

      {/* MQ Unlock Mulgoon */}
      <h3 className="section-subtitle">
        CHAP 12 TO 14 MQ UNLOCK MULGOON
        <br />
        <small>(Complete Main Quest up to Chapter 14 to unlock Mulgoon)</small>
      </h3>
      {renderSpots(mqMulgoonSpots)}

      {/* LUK Characters Spots */}
      <h2 className="page-title" style={{ marginTop: "2rem" }}>
        Leveling/Farming Spots Optimized for LUK Characters (Non-MQ Focused)
      </h2>
      {renderSpots(lukSpots)}
      </div>
    </section>
  );
};

export default LevelingSpots;
