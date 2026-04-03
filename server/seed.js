import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  // Read the residency data
  const rawData = readFileSync(
    join(__dirname, "data", "Residency.json"),
    "utf-8"
  );
  const residencies = JSON.parse(rawData);

  // Extract unique user emails from the residency data
  const uniqueEmails = [...new Set(residencies.map((r) => r.userEmail))];

  // Step 1: Create users first (Residency has a relation to User via userEmail)
  console.log(`📧 Creating ${uniqueEmails.length} users...`);
  for (const email of uniqueEmails) {
    try {
      await prisma.user.upsert({
        where: { email },
        update: {},
        create: { email },
      });
      console.log(`  ✅ User: ${email}`);
    } catch (err) {
      console.log(`  ⚠️  User ${email} - ${err.message}`);
    }
  }

  // Step 2: Seed residencies
  console.log(`\n🏠 Seeding ${residencies.length} residencies...`);
  let created = 0;
  let skipped = 0;

  for (const item of residencies) {
    try {
      await prisma.residency.create({
        data: {
          title: item.title,
          description: item.description,
          price: item.price,
          address: item.address,
          city: item.city.trim(), // trim whitespace (some entries have leading spaces)
          country: item.country,
          image: item.image,
          facilities: item.facilities,
          userEmail: item.userEmail,
        },
      });
      created++;
      console.log(`  ✅ ${item.title} (${item.city.trim()}, ${item.country})`);
    } catch (err) {
      skipped++;
      if (err.code === "P2002") {
        console.log(`  ⏭️  Skipped (duplicate): ${item.title}`);
      } else {
        console.log(`  ❌ Failed: ${item.title} - ${err.message}`);
      }
    }
  }

  console.log(`\n📊 Seed complete: ${created} created, ${skipped} skipped`);
}

main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
