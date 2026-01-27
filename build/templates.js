const data = require('./data');

function cssPath(depth) {
    const prefix = depth === 0 ? '' : '../'.repeat(depth);
    return `${prefix}css/`;
}

function head({ title, description, url, depth, extraCss = [], ogType = 'article', structuredData = null }) {
    const css = cssPath(depth);
    const extraCssLinks = extraCss.map(f => `    <link rel="stylesheet" href="${css}${f}">`).join('\n');

    let structuredDataBlock = '';
    if (structuredData) {
        structuredDataBlock = `
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 8).split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n')}
    </script>`;
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="author" content="${data.site.author}">
${ogType === 'website' ? `    <meta name="keywords" content="INFO 340, Client-Side Development, UW, University of Washington, Web Development, HTML, CSS, JavaScript, React, Joel Ross, iSchool">
    <link rel="canonical" href="${data.site.baseUrl}/">
` : ''}
    <!-- Open Graph / Social Preview -->
    <meta property="og:type" content="${ogType}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${data.site.logo}">
    <meta property="og:url" content="${data.site.baseUrl}/${url}">
${ogType === 'website' ? `    <meta property="og:site_name" content="INFO 340 Work Bank">
` : ''}
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${data.site.logo}">

    <link rel="stylesheet" href="${css}style.css">
${extraCssLinks ? extraCssLinks + '\n' : ''}${ogType === 'website' ? `    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/Logo.png">
    <link rel="apple-touch-icon" href="/img/Logo.png">` : '    <link rel="icon" href="/img/favicon.ico">'}${structuredDataBlock}
</head>`;
}

function footer() {
    const links = data.footer.map(l => {
        const target = l.external ? ' target="_blank"' : '';
        return `        <a href="${l.url}"${target}>${l.text}</a>`;
    }).join('\n');
    return `    <footer>\n${links}\n    </footer>`;
}

function backLink(text, href) {
    return `    <p><a href="${href}" class="back-link">&larr; ${text}</a></p>`;
}

function landingPage() {
    const weekItems = data.weeks.map(w => {
        const desc = w.landingDesc || w.subtitle;
        return `                <li>
                    <a href="Week-${w.number}/">
                        <strong>Week ${w.number}</strong>
                        <span>${desc}</span>
                    </a>
                </li>`;
    }).join('\n');

    const skillTags = data.site.skills.map(s => `                <span class="skill-tag">${s}</span>`).join('\n');

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": data.site.title,
        "description": `Client-Side Web Development course at ${data.site.university} covering HTML, CSS, JavaScript, and React.`,
        "provider": {
            "@type": "Organization",
            "name": `${data.site.university} Information School`,
            "url": "https://ischool.uw.edu/"
        },
        "instructor": {
            "@type": "Person",
            "name": "Joel Ross",
            "url": data.site.professorUrl
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "courseWorkload": data.site.quarter
        }
    };

    const headHtml = head({
        title: `${data.site.title} | UW ${data.site.quarter}`,
        description: `INFO 340 Client-Side Web Development work bank at ${data.site.university}. Problem sets, projects, and in-class exercises for HTML, CSS, JavaScript, and React with ${data.site.professorName}.`,
        url: '',
        depth: 0,
        ogType: 'website',
        structuredData,
    });

    const socialLinks = data.footer.map(l => {
        const target = l.external ? ' target="_blank"' : '';
        return `                <a href="${l.url}"${target} class="social-link">${l.text}</a>`;
    }).join('\n');

    return `${headHtml}
<body class="landing">
    <main>
        <header class="hero">
            <h1>INFO 340</h1>
            <p class="subtitle">Client-Side Development</p>
            <p class="quarter">${data.site.quarter} &bull; ${data.site.university}</p>
        </header>

        <section class="intro">
            <p>This is my work bank for <strong>INFO 340</strong> with <a href="${data.site.professorUrl}" target="_blank">${data.site.professorName}</a>. Throughout this course, I'm learning to build accessible, interactive web applications using modern front-end technologies.</p>
        </section>

        <section class="skills">
            <h2>Technologies</h2>
            <div class="skill-tags">
${skillTags}
            </div>
        </section>

        <section class="weeks">
            <h2>Course Work</h2>
            <ul class="week-list">
${weekItems}
            </ul>
        </section>

        <section class="author">
            <h2>About Me</h2>
            <p><strong>${data.site.author}</strong></p>
            <p>Information School &bull; ${data.site.university}</p>
            <div class="social-links">
${socialLinks}
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 ${data.site.author}</p>
    </footer>
</body>
</html>
`;
}

function weekPage(week) {
    const headHtml = head({
        title: `Week ${week.number} - INFO 340`,
        description: `INFO 340 Week ${week.number} - ${week.description}`,
        url: `Week-${week.number}/`,
        depth: 1,
    });

    const activityItems = week.activities.map(a =>
        `            <li><a href="${a.path}"><strong>${a.label}</strong> <span>${a.title}</span></a></li>`
    ).join('\n');

    const conceptItems = week.concepts.map(c =>
        `            <li><strong>${c.term}:</strong> ${c.desc}</li>`
    ).join('\n');

    const resourcesNote = week.resourcesNote
        ? `\n        <p class="resources-note">${week.resourcesNote}</p>`
        : '';

    const resourceItems = week.resources.map(r =>
        `            <li><a href="${r.url}" target="_blank">${r.title}</a></li>`
    ).join('\n');

    return `${headHtml}
<body>
${backLink('Back to All Weeks', '../')}
    <h1>Week ${week.number}</h1>
    <p class="week-subtitle">${week.dateRange}: ${week.subtitle}</p>

    <section class="activities">
        <h2>Activities & Assignments</h2>
        <ul class="week-list">
${activityItems}
        </ul>
    </section>

    <section class="concepts">
        <h2>Key Concepts</h2>
        <ul>
${conceptItems}
        </ul>
    </section>

    <section class="resources">
        <h2>Resources</h2>${resourcesNote}
        <ul>
${resourceItems}
        </ul>
    </section>

${footer()}
</body>
</html>
`;
}

function contentPage({ title, subtitle, backText, backHref, depth, extraCss = [], pagePath = '' }) {
    const headHtml = head({
        title: `${title} - INFO 340`,
        description: `INFO 340 ${title} - ${subtitle}.`,
        url: pagePath ? pagePath + '/' : '',
        depth,
        extraCss,
    });

    return `${headHtml}
<body>
${backLink(backText, backHref)}
    <h1>${title}</h1>
    <p class="week-subtitle">${subtitle}</p>

    <section class="summary">
        <h2>Summary</h2>
        <!-- Add your content here -->
    </section>

    <section class="concepts">
        <h2>Key Concepts</h2>
        <ul>
            <li><strong>Concept:</strong> Description</li>
        </ul>
    </section>

    <section class="resources">
        <h2>Resources</h2>
        <ul>
            <li><a href="" target="_blank">Resource</a></li>
        </ul>
    </section>

${footer()}
</body>
</html>
`;
}

module.exports = { head, footer, backLink, landingPage, weekPage, contentPage };
