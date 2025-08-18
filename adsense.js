// Create a new file called adsense.js with this content:

function loadAdSense() {
  // Only load if not already loaded
  if (window.adsbygoogle) {
    return;
  }

  try {
    // Create and append the AdSense script
    const adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4111921185596699';
    adsenseScript.crossOrigin = 'anonymous';
    
    // Add error handling
    adsenseScript.onerror = function() {
      console.warn('AdSense script failed to load');
    };
    
    adsenseScript.onload = function() {
      console.log('AdSense script loaded successfully');
      // Initialize ads after script loads
      initializeAds();
    };
    
    document.head.appendChild(adsenseScript);
  } catch (error) {
    console.error('Error loading AdSense:', error);
  }
}

function initializeAds() {
  // Initialize all ads on the page
  try {
    const ads = document.querySelectorAll('.adsbygoogle');
    ads.forEach(ad => {
      if (!ad.dataset.adsbygoogleStatus) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    });
  } catch (error) {
    console.error('Error initializing ads:', error);
  }
}

// Load AdSense after the page is fully loaded
window.addEventListener('load', function() {
  // Add a small delay to ensure everything else is ready
  setTimeout(loadAdSense, 1000);
});