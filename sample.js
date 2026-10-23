// ヘッダーとアイコンを見つける
const header = document.getElementById('page-header');
const icon   = document.querySelector('.sidebar-icon');

// Intersection Observerでヘッダーの表示を監視
const callback = (entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            icon.classList.add('white-icon');
        }
        else {
            icon.classList.remove('white-icon');
        }
    });
});
    const observer = new IntersectionObserver(callback, { threshold: 0.5 })
    observer.observe(header);
