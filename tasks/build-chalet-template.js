const fs = require("fs-extra");
const path = require("path");
const ownPath = path.join(__dirname, "..", "packages", "chalet");
const templatePath = path.join(
  __dirname,
  "..",
  "packages",
  "create-starter-app",
  "template",
  "chalet"
);

fs.ensureDirSync(templatePath);
fs.emptyDirSync(templatePath);

// copy public/ ,src/, gitignore to template folder
["public", "src", "gitignore"].forEach(folderName => {
  fs.copySync(
    path.join(ownPath, folderName),
    path.join(templatePath, folderName)
  );
});

// create .template.dependencies.json from package.json
const ownPackage = require(path.join(ownPath, "package.json")).dependencies;
const necessaryPackage = Object.keys(ownPackage)
  .filter(
    pkgName => !["react", "react-dom", "starter-scripts"].includes(pkgName)
  )
  .reduce((result, pkgName) => {
    result[pkgName] = ownPackage[pkgName];
    return result;
  }, {});

fs.writeFileSync(
  path.join(templatePath, ".template.dependencies.json"),
  JSON.stringify(
    {
      dependencies: necessaryPackage
    },
    null,
    2
  )
);
