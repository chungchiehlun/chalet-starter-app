const loaderUtils = require("loader-utils");

/*
  Babel-plugin-react-css-modules have to generate the same local identity that css-loader did.
  This function refer to thf following source:
    - https://github.com/facebook/create-react-app/blob/v2.0.3/packages/react-dev-utils/getCSSModuleLocalIdent.js
    - https://github.com/css-modules/generic-names/blob/master/index.js
*/
module.exports = (localName, filepath) => {
  const loaderContext = {
    resourcePath: filepath
  };

  // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style.
  const fileNameOrFolder = loaderContext.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? "[folder]"
    : "[name]";

  // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
  const hash = loaderUtils.getHashDigest(
    loaderContext.resourcePath + localName,
    "md5",
    "base64",
    5
  );

  // loaderOptions reference
  // https://github.com/webpack-contrib/css-loader/blob/240db534fa5ee19cb5bde12570b0545af3082b5f/lib/processCss.js#L172
  const loaderOptions = {
    hashPrefix: "",
    context: process.cwd()
  };

  // function that interpolate a file name template from module loader-utils.
  // https://github.com/webpack/loader-utils#interpolatename
  const genericName = loaderUtils.interpolateName(
    loaderContext,
    fileNameOrFolder + "_" + localName + "__" + hash,
    loaderOptions
  );
  // remove the .module that appears in every classname when based on the file.
  return genericName.replace(".module_", "_");
};
