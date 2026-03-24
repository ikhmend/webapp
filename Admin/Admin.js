// Static UI selectors
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const userProfileBtn = document.getElementById('userProfileBtn');
const userDropdown = document.getElementById('userDropdown');

// JSON config path and page metadata
const PAGE_CONFIG_DIR = './pages/';
const PAGE_CONFIG_FILES = [
    'dashboard.json',
    'users.json',
    'restaurants.json',
    'disputes.json',
    'not-implemented.json'
];
let pageConfigs = {};
let pageMap = {};

async function loadPageConfigs() {
    const configPromises = PAGE_CONFIG_FILES.map(file =>
        fetch(`${PAGE_CONFIG_DIR}${file}`).then(resp => {
            if (!resp.ok) throw new Error(`Cannot load ${file}`);
            return resp.json();
        })
    );

    const configs = await Promise.all(configPromises);

    configs.forEach(config => {
        if (config.id) {
            pageConfigs[config.id] = config;
        }
    });

    pageMap = Object.fromEntries(
        configs
            .filter(c => c.id)
            .map(c => [c.id, `${c.id}-page`])
    );

    // Update nav anchors from config tags and routes
    navItems.forEach(item => {
        const pageType = item.dataset.page;
        const config = pageConfigs[pageType];
        if (config) {
            item.href = config.route || `#${pageType}`;
        }
    });
}

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    navItems.forEach(item => item.classList.remove('active'));
    const activeNav = [...navItems].find(item => {
        const pageType = item.dataset.page;
        return pageMap[pageType] === pageId;
    });
    if (activeNav) activeNav.classList.add('active');
}

function initGrowthChart() {
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded, growth chart cannot be rendered.');
        return;
    }

    const ctx = document.getElementById('growthChart');
    if (!ctx) {
        console.warn('growthChart canvas not found.');
        return;
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Revenue ($)',
                    backgroundColor: '#ff6b35',
                    data: [4000, 3000, 4500, 2000, 3500, 2500],
                    yAxisID: 'y',
                },
                {
                    label: 'Users',
                    backgroundColor: '#4a90e2',
                    data: [1000, 600, 800, 4000, 2000, 2500],
                    yAxisID: 'y1',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Revenue ($)'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Users'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

function handleNavClick(e) {
    e.preventDefault();
    const pageType = this.dataset.page;
    const targetPageId = pageMap[pageType];

    if (targetPageId) {
        showPage(targetPageId);
        location.hash = pageType;

        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
}

async function init() {
    await loadPageConfigs();

    navItems.forEach(item => item.addEventListener('click', handleNavClick));

    const hashPage = location.hash.replace('#', '') || 'dashboard';
    const initialPageId = pageMap[hashPage] || pageMap.dashboard;
    showPage(initialPageId);

    initGrowthChart();

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    userProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userProfileBtn.classList.toggle('active');
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!userProfileBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userProfileBtn.classList.remove('active');
            userDropdown.classList.remove('active');
        }
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const href = item.getAttribute('href');

            if (href === '#logout') {
                if (confirm('Are you sure you want to log out?')) {
                    alert('Logging out...');
                }
            } else if (href === '#settings') {
                alert('Settings page - This feature is not implemented yet.');
            }

            userProfileBtn.classList.remove('active');
            userDropdown.classList.remove('active');
        });
    });
}

init().catch(err => {
    console.error('Error initializing admin page config:', err);
});