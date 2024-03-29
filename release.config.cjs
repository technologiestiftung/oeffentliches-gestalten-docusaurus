module.exports = {
  extends: "@technologiestiftung/semantic-release-config",
  branches: [{ name: "main" }, { name: "staging", channel: "pre/rc", prerelease: "rc" }],
  plugins: [
    [
      "@saithodev/semantic-release-backmerge",
      {
        branch: [{ from: "main", to: "staging" }],
        backmergeStrategy: "merge",
      },
    ],
  ],
};
