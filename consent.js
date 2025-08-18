function showCookieBanner() {
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #333; color: white; padding: 1rem; text-align: center; z-index: 1000;">
      <span>We use cookies for analytics and ads. Accept to help us improve.</span>
      <button onclick="acceptCookies()" style="margin-left: 1rem; padding: 0.5rem 1rem; background: #ff4d6d; color: white; border: none; border-radius: 4px; cursor: pointer;">Accept</button>
    </div>
  `;
  document.body.appendChild(banner);
}

function acceptCookies() {
  // Check if gtag is available before calling it
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
  }
  
  const banner = document.querySelector(".cookie-banner");
  if (banner) {
    banner.remove();
  }
  
  // Store consent in localStorage
  localStorage.setItem('cookieConsent', 'accepted');
}

// Only show banner if consent hasn't been given
window.addEventListener('load', () => {
  if (!localStorage.getItem('cookieConsent')) {
    showCookieBanner();
  }
});