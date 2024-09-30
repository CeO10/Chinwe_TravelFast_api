import {connectToDatabase} from "../config/db.config.js";
import seeder from "../lib/seeder.js"

// initialise database connection
(async () => {
    connectToDatabase();

    if (seeder["super admins"].length !==0) {
        const users = await getUserByRole("super admins");

        if (users.length !==0) {
            console.info("Database already seeded");
        }

        if (users.length === 0) {
            for (const superAdmin of seeder ["super admins"] ) {
                await createTestScheduler(superAdmin);
            }
            console.log("Super admins seeded successfully")
        }
    }
})