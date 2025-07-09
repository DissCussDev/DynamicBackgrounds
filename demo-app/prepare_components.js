
const fs = require('fs');
const path = require('path');

const backgroundsDir = path.join(__dirname, 'src/components/backgrounds');

fs.readdir(backgroundsDir, (err, files) => {
  if (err) {
    console.error('Error reading backgrounds directory:', err);
    return;
  }

  files.forEach(file => {
    const componentDir = path.join(backgroundsDir, file);
    if (fs.statSync(componentDir).isDirectory()) {
      const componentName = file;
      const jsFilePath = path.join(componentDir, `${componentName}.js`);
      const cssFilePath = path.join(componentDir, `${componentName}.css`);

      if (fs.existsSync(jsFilePath) && fs.existsSync(cssFilePath)) {
        const newComponentContent = `
import React from 'react';
import './${componentName}.css';
import OriginalComponent from './${componentName}.original.js';

const ${componentName} = () => {
  return <OriginalComponent />;
};

export default ${componentName};
`;

        fs.renameSync(jsFilePath, path.join(componentDir, `${componentName}.original.js`));
        fs.writeFileSync(jsFilePath, newComponentContent);
      }
    }
  });
});
