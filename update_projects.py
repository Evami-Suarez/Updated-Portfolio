import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_project = """
                    <!-- Project 0 -->
                    <article class="project-card" data-category="web" itemscope=""
                        itemtype="https://schema.org/WebSite">
                        <span class="project-num">01</span>
                        <div class="project-img">
                            <img src="assets/img/osync.png" alt="ΩSYNC" loading="lazy" width="400" height="220">
                            <div class="project-img-overlay">
                                <a href="https://www.osync.space/" target="_blank" rel="noopener noreferrer">
                                    <i class="fas fa-external-link-alt" aria-hidden="true"></i> View Live
                                </a>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 itemprop="name">ΩSYNC</h3>
                            <p itemprop="description">Offline-First Payment Infrastructure enabling peer-to-peer fiat transactions without constant internet connectivity. Integrated with Formspree for efficient form handling.</p>
                            <ul class="features-list">
                                <li><i class="fas fa-wifi" aria-hidden="true"></i> <strong>Offline-First:</strong> Seamless transactions without constant internet connection.</li>
                                <li><i class="fas fa-envelope" aria-hidden="true"></i> <strong>Formspree:</strong> Reliable form integration and communications.</li>
                                <li><i class="fas fa-globe" aria-hidden="true"></i> <strong>Accessible:</strong> Built for millions of unbanked and underserved users.</li>
                            </ul>
                            <div class="project-tags"><span>React</span><span>Formspree</span><span>Web</span></div>
                            <a href="https://www.osync.space/" target="_blank" rel="noopener noreferrer" class="view-demo-btn">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i> View Live
                            </a>
                        </div>
                    </article>
"""

# Insert new project
content = content.replace('<div class="projects-grid" id="projectsGrid">', '<div class="projects-grid" id="projectsGrid">\n' + new_project)

# Update visibleCount from 10 to 11
content = content.replace('<span id="visibleCount">10</span> projects</p>', '<span id="visibleCount">11</span> projects</p>')

# Renumber project-num inside project-card
# We'll split by '<span class="project-num">' and increment numbers, but only for the first 11
parts = content.split('<span class="project-num">')
for i in range(1, 12): # There are now 11 numbered projects
    # Each part after split starts with '01</span>' or similar
    # We replace the first two characters with the new number
    parts[i] = f"{i:02d}" + parts[i][2:]

content = '<span class="project-num">'.join(parts)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
