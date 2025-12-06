function openPopup(type) {
    var popup = window.open("", "popup", "width=889px,height=898px");
    if (type === "image") {
      popup.document.write("<img src='img/cake.webp' alt='Image'>");
    } else if (type === "video") {
      popup.document.write("<video width='800px' height='600px' controls><source src='vid/rko.mp4' type='video/mp4'></video>");
    } else if (type === "text") {
      popup.document.write("<p style='background-color:purple;color:pink;font-size:25px;'>You me the gas station. what meal are we having? Gas station sushi. Hell yes. Uh oh there was a roofy in our gas station sushi. We wake up in a sewer full of fish. Horny fish. What does that mean? Fish orgy. The stench draws in a bear. Bear fight? Bare fists? Bare… Naked? I think so! We befriend the bear after beating it into a brawl. We ride it into a chucky cheese. Dance dance revolution! Revolution? Over throw the government? I think so! I black out again. I wake up and do a line. I white out, which i didnt even know could happen. I reincarnate as jesus. I turn into a jet and fly into the sun. I wake up and smoke a joint. I green out?? I wake up and i am the sun?? Oh no! Looks like the meth is kicking ijsjnjðommsooskauaajs rge snAAA AAAAAA AAAAAA.</p>");
    } else if (type === "meme") {
      popup.document.write("<a href='https://www.google.com/search?sca_esv=594589735&sxsrf=AM9HkKkF2a1Wl2tgi_iI9iRklCo4mcpJmA:1703939477922&q=randy+orton+memes&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjembOalbeDAxVUUqQEHfjqDMgQ0pQJegQICxAB&biw=1482&bih=958'> <p style='font-size:35px;'>what's this? :o</p> </a>");
    }
    popup.document.write("<button style='color:pink;background-color: purple;border: none;width: 120px;height: 70px; text-decoration:none' onclick='window.close()'>Close</button>");
  }

  (function () {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  // Make page start in loading state
  document.documentElement.classList.add('js-loading');
  document.body.classList.add('loading');

  const inner = loader.querySelector('.loader-inner');
  const mediaType = loader.dataset.media || 'video'; // "video" or "gif"
  const src = loader.dataset.src || '';
  const gifDuration = parseInt(loader.dataset.gifDuration || '2000', 10); // ms
  const maxFallback = 7000; // max time to force-hide loader (ms)

  let hideTimer;

  function hideLoader() {
    if (!loader) return;
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
    document.documentElement.classList.remove('js-loading');
    // remove media to free memory
    inner.innerHTML = '';
    clearTimeout(hideTimer);
  }

  function forceHideAfter(ms) {
    hideTimer = setTimeout(() => {
      hideLoader();
    }, ms);
  }

  // Create media element dynamically to avoid unnecessary downloads
  if (mediaType === 'video' && src) {
    const vid = document.createElement('video');
    vid.id = 'loader-media';
    vid.src = src;
    vid.autoplay = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = 'auto';
    vid.setAttribute('playsinline', '');
    vid.style.maxWidth = '100%';
    vid.style.height = 'auto';
    inner.appendChild(vid);

    // Ensure it will start; show until it ends or fallback
    vid.addEventListener('canplaythrough', () => {
      // Some browsers require a short play call
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => { /* autoplay blocked? still keep showing then fallback */ });
      }
    }, { once: true });

    vid.addEventListener('ended', hideLoader, { once: true });
    vid.addEventListener('error', () => {
      // fallback to a short display so user is not stuck
      forceHideAfter(2000);
    }, { once: true });

    // safety: hide after maxFallback
    forceHideAfter(maxFallback);

  } else if (mediaType === 'gif' && src) {
    const img = document.createElement('img');
    img.id = 'loader-gif';
    img.src = src;
    img.alt = 'Loading';
    inner.appendChild(img);

    img.addEventListener('load', () => {
      // keep GIF visible for data-gif-duration ms (so single-loop GIFs can be fully seen)
      const duration = Math.max(300, gifDuration);
      forceHideAfter(duration);
    }, { once: true });

    img.addEventListener('error', () => {
      // fallback
      forceHideAfter(1200);
    }, { once: true });

    // safety fallback
    forceHideAfter(maxFallback);
  } else {
    // no valid media configured: brief generic loader then hide
    forceHideAfter(800);
  }

  // Hide loader if user navigates away quickly or after page load + short delay
  window.addEventListener('load', () => {
    // If media is still playing, let its events handle hide. Otherwise enforce small delay.
    forceHideAfter(1200);
  });
})();