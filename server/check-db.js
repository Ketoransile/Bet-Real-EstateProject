import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function check() {
  const userCount = await prisma.user.count();
  const residencyCount = await prisma.residency.count();
  console.log(`Users: ${userCount}`);
  console.log(`Residencies: ${residencyCount}`);
  
  if (residencyCount > 0) {
    const sample = await prisma.residency.findMany({ take: 3 });
    sample.forEach(r => console.log(`  - ${r.title} | ${r.city}, ${r.country}`));
  }
  
  await prisma.$disconnect();
}

check().catch(e => { console.error(e); process.exit(1); });
