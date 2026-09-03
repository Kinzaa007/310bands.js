import { mockBands } from "@/data/bands";
import BandCard from "@/components/BandCard"; // 🟢 ต้องไม่มีวงเล็บปีกกา { } ครอบ BandCard

export default function BandsPage() {
  return (
    <main className="page" style={{ padding: "20px" }}>
      <h1>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
      <section className="course-grid">
        {mockBands.map((band) => (
          <BandCard key={band.id} band={band} />
        
        ))}
      </section>
    </main>
  );
}