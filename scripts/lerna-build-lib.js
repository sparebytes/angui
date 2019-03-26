const { execSync } = require("child_process");

const angularJson = require("../angular.json");

console.log("Awaiting Input.");
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function(data) {
  process.stdin.pause();
  const packages = JSON.parse(data);
  console.log("Build List:");
  console.log("  " + packages.map(p => p.name).join("\n  "));
  const built = [];
  const skipped = [];

  for (const package of packages) {
    const angularName = /([^/]+)$/.exec(package.name)[1];
    console.log("Build", package.name, " - ", angularName);
    if (angularJson.projects[angularName] == null) {
      console.log(`Cannot Build "${angularName}" since it isn't in angular.json"`);
      skipped.push(angularName)
      continue;
    }
    execSync(`ng build ${angularName}`, { stdio: "inherit" });
    built.push(angularName)
  }

  if (skipped.length) console.log("Skipped:", skipped.join(", "));
  console.log("Built:", built.join(", "));
});

