import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="courseCard">
      <img src={band.image} alt={band.name} />

      <h2>{band.name}</h2>
      <p>แนวเพลง: {band.genre}</p>

      <h3>สมาชิกในวง:</h3>

      {/* ส่วนที่แก้ไข: เปลี่ยนลิสต์เดิมเป็นแสดงรูปวงกลม + ชื่อ + หน้าที่ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "12px", textAlign: "center" }}>
        {band.members.map((member) => (
          <div key={member.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            {/* รูปภาพวงกลมเล็กๆ */}
            <img
              src={member.image || "https://via.placeholder.com/60"}
              alt={member.name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "6px",
                border: "1px solid #ddd"
              }}
            />
            
            <strong style={{ fontSize: "14px" }}>{member.name}</strong>
            <span style={{ fontSize: "12px", color: "#666" }}>{member.role}</span>
          </div>
        ))}
      </div>
    </article>
  );
}