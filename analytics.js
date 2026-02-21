// Load Google Analytics properly
var gtagScript = document.createElement("script");
gtagScript.async = true;
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6WGWECFCHR";
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtagScript.onload = function() {
  gtag('js', new Date());
  gtag('config', 'G-6WGWECFCHR');
};
