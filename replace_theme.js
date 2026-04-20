const fs = require('fs');
const path = require('path');

const directoriesToSearch = ['app', 'components'];
const searchRegex = /gold/g;
const replaceWith = 'teal';
const searchRegexCapitalized = /Gold/g;
const replaceWithCapitalized = 'Teal';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace 'gold' with 'teal'
  content = content.replace(searchRegex, replaceWith);
  
  // Also replace 'Gold' with 'Teal' for comments or Titles
  content = content.replace(searchRegexCapitalized, replaceWithCapitalized);
  
  // Custom fix for Lodha -> Island Cove theme mentioning if any
  content = content.replace(/Lodha/g, 'Island Cove');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

directoriesToSearch.forEach(dir => {
  const fullDirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullDirPath)) {
    traverseDirectory(fullDirPath);
  }
});

console.log('Replacement complete.');
