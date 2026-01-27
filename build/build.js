const fs = require('fs');
const path = require('path');
const data = require('./data');
const templates = require('./templates');

const ROOT = path.resolve(__dirname, '..');

function writeFile(relPath, content) {
    const fullPath = path.join(ROOT, relPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content);
    console.log(`  wrote ${relPath}`);
}

function buildAll() {
    console.log('Building site...\n');

    // Landing page
    writeFile('index.html', templates.landingPage());

    // Week summary pages
    for (const week of data.weeks) {
        writeFile(`Week-${week.number}/index.html`, templates.weekPage(week));
    }

    console.log('\nDone!');
}

function scaffoldPage(pagePath, title) {
    // pagePath like "Week-4/Jan-28-2026"
    const parts = pagePath.split('/');
    const weekMatch = parts[0].match(/Week-(\d+)/);
    if (!weekMatch) {
        console.error('Path must start with Week-N/');
        process.exit(1);
    }

    const weekNum = parseInt(weekMatch[1]);
    const depth = parts.length;
    const backText = depth === 1 ? 'Back to All Weeks' : `Back to Week ${weekNum}`;
    const backHref = '../';
    const subtitle = title || 'Topic';

    const filePath = `${pagePath}/index.html`;
    const fullPath = path.join(ROOT, filePath);

    if (fs.existsSync(fullPath)) {
        const existing = fs.readFileSync(fullPath, 'utf8').trim();
        if (existing.length > 0) {
            console.error(`File already exists and is not empty: ${filePath}`);
            console.error('Use --force to overwrite.');
            if (!process.argv.includes('--force')) {
                process.exit(1);
            }
        }
    }

    const content = templates.contentPage({
        title: title || pagePath.split('/').pop(),
        subtitle,
        backText,
        backHref,
        depth,
        pagePath,
    });

    writeFile(filePath, content);
    console.log(`\nScaffolded: ${filePath}`);
    console.log('Edit the file to add your content and update the og:url meta tag.');
}

// CLI
const args = process.argv.slice(2);

if (args.length === 0) {
    buildAll();
} else if (args[0] === 'new') {
    if (args.length < 2) {
        console.error('Usage: node build.js new "Week-N/Page-Name" "Page Title"');
        process.exit(1);
    }
    scaffoldPage(args[1], args[2]);
} else {
    console.error('Unknown command. Usage:');
    console.error('  node build.js          Build landing + week pages');
    console.error('  node build.js new ...  Scaffold a new content page');
    process.exit(1);
}
