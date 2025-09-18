import { useEffect, useState } from "react";
import "./App.css";

interface Member {
  name: string;
  role: string;
}

const parseNotepad = (notepadData: string): Member[] => {
  const lines = notepadData.trim().split("\n");

  return lines
    .map((line) => {
      // Extract name and role tag like <gm>, <vgm>, <mem>, <old>
      const regex = /^(.*?)(<[^>]*>)$/;
      const match = line.trim().match(regex);

      if (match) {
        const name = match[1].trim();
        const roleTag = match[2].replace(/<|>/g, "").trim();

        if (!roleTag) {
          // role tag is empty -> ignore this line
          return null;
        }

        let role = "Member";
        if (roleTag === "gm") role = "Guild Leader 👑";
        else if (roleTag === "vgm") role = "Vice Guild Leader 👑 (Silver)";
        else if (roleTag === "mem") role = "Member";
        else if (roleTag === "old") role = "Past Member";
        else {
          // Unknown role tag - ignore line
          return null;
        }

        return { name, role };
      }
      // No role tag -> ignore this line
      return null;
    })
    .filter((member): member is Member => member !== null); // filter out nulls
};

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/members.txt")
      .then((res) => res.text())
      .then((data) => {
        const parsed = parseNotepad(data);
        setMembers(parsed);
      })
      .catch((err) => {
        console.error("Failed to load members.txt:", err);
      });
  }, []);

  return (
    <section className="section">
      <h2 className="page-title">Guild Members</h2>
      <p className="page-description">List of all guild members, organized by role.</p>

      <div className="table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {members.map(({ name, role }, i) => {
              const isNoticeChanger = name.includes("📜");
              const isTreasurer = name === "Aster Durian";

              let rowClass = "member";
              if (role === "Guild Leader 👑") rowClass = "guild-leader";
              else if (role === "Vice Guild Leader 👑 (Silver)") rowClass = "vice-leader";
              else if (role === "Past Member") rowClass = "old-member";

              if (isTreasurer) rowClass = "treasurer";
              else if (isNoticeChanger) rowClass = "notice-changer";

              let displayRole = role;
              if (isNoticeChanger) displayRole = "Member (can change Guild Notice)";
              if (isTreasurer) displayRole = "Treasurer";

              return (
                <tr key={`member-${i}`} className={rowClass}>
                  <td>{name}</td>
                  <td>{displayRole}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Members;
