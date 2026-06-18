// Regenerate src/data/github.ts from the GitHub GraphQL API.
// Requires the `gh` CLI to be installed and authenticated.
// Run: npm run refresh:github
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const USER = "gabrielbryk";

const query = `
query {
  user(login:"${USER}") {
    followers { totalCount }
    repositories(privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { contributionCount date } }
      }
    }
  }
}`;

const raw = execFileSync("gh", ["api", "graphql", "-f", `query=${query}`], {
  encoding: "utf8",
});
const u = JSON.parse(raw).data.user;
const cal = u.contributionsCollection.contributionCalendar;
const weeks = cal.weeks.map((w) =>
  w.contributionDays.map((d) => d.contributionCount),
);

const weeksStr =
  "[\n" +
  weeks.map((w) => "    [" + w.join(",") + "]").join(",\n") +
  "\n  ]";

const content = `// GitHub activity snapshot for the "GitHub Pulse" section.
// Generated from the GitHub GraphQL API (contributions = last 12 months).
// Refresh with: npm run refresh:github  (see scripts/refresh-github.mjs)
// Last refreshed snapshot — update by re-running the script.

export const github = {
  user: "${USER}",
  followers: ${u.followers.totalCount},
  publicRepos: ${u.repositories.totalCount},
  totalContributions: ${cal.totalContributions},
  // 53 weeks x 7 days of contribution counts (Sun..Sat).
  weeks: ${weeksStr} as number[][],
};
`;

writeFileSync(new URL("../src/data/github.ts", import.meta.url), content);
console.log(
  `Updated src/data/github.ts — ${u.followers.totalCount} followers, ${u.repositories.totalCount} repos, ${cal.totalContributions} contributions, ${weeks.length} weeks.`,
);
