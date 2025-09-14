import "./App.css";

const Members = () => {
  const guildLeader = ["「Ａｃｅ＿０１」"];

  const viceLeaders = [
    "V3zh",
    "Jin Durian",
    "Aster Durian",
    "XxGRIMxX",
    "Mi♥haela LVL999",
    "宇宙BlueFox™",
    "Void♤",
    "Arther Elf",
    "MANGIT!",
    "Kirara♡",
  ];

  const members = [
    "Velphegorah",
    "{YamiPH}™",
    "FireEmbleM",
    "Nazumid@",
    "益Hysteria",
    "Velphegor",
    "ＭＡＲＫＯ",
    "Sir G",
    "blaze028",
    "神kio.",
    "+Athena+",
    "『CLOUD",
    "Rentaro100",
    "Nishiki食欲",
    "Ai Hayasaka.",
    "bonjcheney",
    "ＣＬＡＵＤＩＡＮ",
    "Nymphaea",
    "lilica",
    "<ＭＩＤＯＲＩ>",
    "juuichi",
    "@Mars",
    "Jack_101",
    "Yaruchi Aoki",
    "lelouch19",
    "Ｑｕ３ｚｔツ",
    "Celeste™",
    "📜Pioneer!",
    "Quintella",
    "Hwaran.",
    "Rø.",
    "J3f",
    "Sae itoshiアチ",
    "Ernasis28",
    "Purot",
    "AcPlays3",
    "宇宙BlueFox™",
    "Min★",
    "Warcry",
    "nobody",
    "pampam",
    "RoCks.Ｄ.XeBec",
    "BSE | Menn",
    "GerroXD",
    "Kazama168",
    "--Sam--",
    "Saint_Izumi",
    "PITCH",
    "Ha-ru",
    "Stella",
    "Ci",
    "Serene",
    "Agatha♡",
    "sen",
    "JinnyJin",
    "tsukimiya",
    "Azeusac",
    "～♡Fuukachi♡～",
    "Spid",
    "Lucielツ",
    "UnHARMED",
    "雨を愛する人",
    "📜KORUSO™",
    "Shinji_27",
    "Adrian_Tepes",
    "Byncent",
    "jstreet",
    "zafkhiel",
    "📜VenTus",
    "ZPortgas",
    "☆Frosch☆",
    "LikE",
  ];
  
  // 🆕 Old members (just example, replace with real ones)
  const oldMembers = [
    "No one yet"
  ];

  return (
    <section className="section">
      <h2 className="page-title">Guild Members</h2>
      <p className="page-description">
        List of all guild members, organized by role.
      </p>

      <div className="table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {guildLeader.map((name, i) => (
              <tr key={`leader-${i}`} className="guild-leader">
                <td>{name}</td>
                <td>Guild Leader 👑</td>
              </tr>
            ))}

            {viceLeaders.map((name, i) => (
              <tr key={`vice-${i}`} className="vice-leader">
                <td>{name}</td>
                <td>Vice Guild Leader 👑 (Silver)</td>
              </tr>
            ))}

            {members.map((name, i) => {
              const isNoticeChanger = name.includes("📜");
              const isTreasurer = name === "Aster Durian";

              let role = "Member";
              if (isNoticeChanger) role = "Member (can change Guild Notice)";

              return (
                <tr
                  key={`member-${i}`}
                  className={
                    isTreasurer
                      ? "treasurer"
                      : isNoticeChanger
                      ? "notice-changer"
                      : "member"
                  }
                >
                  <td>{name}</td>
                  <td>{role}</td>
                </tr>
              );
            })}

            {/* Old members section */}
            {oldMembers.map((name, i) => (
              <tr key={`old-${i}`} className="old-member">
                <td>{name}</td>
                <td>Past Member</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Members;
