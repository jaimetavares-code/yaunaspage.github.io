// ======================
// PAGE LOADER
// ======================

(function () {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    document.body.classList.add('loading');
    const inner = loader.querySelector('.loader-inner');

    const mediaType = loader.dataset.media || 'video'; // "video" or "gif"
    const src = loader.dataset.src || '';
    const gifDuration = parseInt(loader.dataset.gifDuration || '2000', 10);
    const maxFallback = 7000; // max time to force-hide loader

    let hideTimer;

    function hideLoader() {
        if (!loader) return;
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        applyRandomCursor(); // Apply custom cursor after loader hides
        inner.innerHTML = '';
        clearTimeout(hideTimer);
    }

    function forceHideAfter(ms) {
        hideTimer = setTimeout(hideLoader, ms);
    }

    if (mediaType === 'video' && src) {
        const vid = document.createElement('video');
        vid.src = src;
        vid.autoplay = true;
        vid.muted = true;
        vid.playsInline = true;
        vid.preload = 'auto';
        vid.style.maxWidth = '100%';
        vid.style.height = 'auto';
        inner.appendChild(vid);

        vid.addEventListener('canplaythrough', () => {
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {});
            }
        }, { once: true });

        vid.addEventListener('ended', hideLoader, { once: true });
        vid.addEventListener('error', () => forceHideAfter(2000), { once: true });

        forceHideAfter(maxFallback);

    } else if (mediaType === 'gif' && src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Loading';
        inner.appendChild(img);

        img.addEventListener('load', () => {
            forceHideAfter(Math.max(300, gifDuration));
        }, { once: true });

        img.addEventListener('error', () => forceHideAfter(1200), { once: true });
        forceHideAfter(maxFallback);
    } else {
        forceHideAfter(800);
    }

    window.addEventListener('load', () => forceHideAfter(1200));
})();

// ======================
// MEME GENERATOR
// ======================

const images = [
    "img/memes/1.jpg","img/memes/2.png","img/memes/3.jpg",
    "img/memes/4.jpg","img/memes/5.jpg","img/memes/6.jpg",
    "img/memes/7.jpg","img/memes/8.png","img/memes/9.jpg",
    "img/memes/10.webp","img/memes/11.png","img/memes/12.png",
    "img/memes/13.jpg","img/memes/14.jpg","img/memes/15.jpg",
    "img/memes/16.jpg"
];

const videos = [
    "vid/memes/1.mp4","vid/memes/2.mp4","vid/memes/3.mp4",
    "vid/memes/4.mp4","vid/memes/5.mp4","vid/memes/6.mp4",
    "vid/memes/7.mp4","vid/memes/8.mp4","vid/memes/9.mp4"
];

const memeButton = document.getElementById("generateBtn");
const memeContainer = document.getElementById("memeContainer");

memeButton.addEventListener("click", () => {
    memeContainer.innerHTML = ""; // clear previous

    const isVideo = Math.random() < 0.5;

    if (isVideo) {
        const video = document.createElement("video");
        video.src = videos[Math.floor(Math.random() * videos.length)];
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.style.maxWidth = "100%";
        video.style.maxHeight = "400px";
        memeContainer.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.style.maxWidth = "100%";
        img.style.maxHeight = "400px";
        memeContainer.appendChild(img);
    }
});

// ======================
// CUSTOM CURSOR
// ======================

const normalCursors = [
    "cursors/1.png","cursors/2.png","cursors/3.png",
    "cursors/4.png","cursors/5.png","cursors/6.png",
    "cursors/7.png"
];

function applyRandomCursor() {
    const cursor = normalCursors[Math.floor(Math.random() * normalCursors.length)];
    const loader = document.getElementById('page-loader');

    // only apply cursor if loader is hidden
    if (!loader || loader.classList.contains('hidden')) {
        const img = new Image();
        img.src = cursor;
        img.onload = () => {
            document.documentElement.style.cursor = `url("${cursor}") 0 0, auto`;
        };
    }
}

// Hook the "Randomize Cursor" button
const cursorButton = document.getElementById("cursorBtn");
if (cursorButton) cursorButton.addEventListener("click", applyRandomCursor);
