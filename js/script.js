    // Fetch the user's IP address and IP location using an API
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        const ipAddressElement = document.getElementById('ip-address');
        ipAddressElement.textContent = ipAddress;

        // Fetch the IP information including location and ISP
        fetch(`https://ipapi.co/${ipAddress}/json/`)
          .then(response => response.json())
          .then(data => {
            const location = `${data.city}, ${data.region}, ${data.country_name}`;
            const locationElement = document.getElementById('location');
            locationElement.textContent = location;

            const isp = data.org;
            const ispElement = document.getElementById('isp');
            ispElement.textContent = isp;
          })
          .catch(error => console.log('Error:', error));
      })
      .catch(error => console.log('Error:', error));

// Copy IP Address Button Function
const copyIPButton = document.getElementById('copy-ip-button');
const ipAddressElement = document.getElementById('ip-address');

copyIPButton.addEventListener('click', () => {
  const ipAddress = ipAddressElement.innerText;

  navigator.clipboard.writeText(ipAddress)
    .then(() => {
      copyIPButton.textContent = 'Copied! ✅';
      copyIPButton.classList.add('copy-success');

      setTimeout(() => {
        copyIPButton.textContent = 'Copy IP Address';
        copyIPButton.classList.remove('copy-success');
      }, 1500);
    })
    .catch((error) => {
      console.error('Failed to copy IP address:', error);
    });
});

const copyAllButton = document.getElementById('copy-all-button');

copyAllButton.addEventListener('click', () => {
  const ip = document.getElementById('ip-address').innerText;
  const location = document.getElementById('location').innerText;
  const isp = document.getElementById('isp').innerText;

  const combinedInfo = `IP Address: ${ip}\nLocation: ${location}\nISP: ${isp}`;

  navigator.clipboard.writeText(combinedInfo)
    .then(() => {
      copyAllButton.textContent = 'Copied! ✅';
      copyAllButton.classList.add('copy-success');

      setTimeout(() => {
        copyAllButton.textContent = 'Copy All Info';
        copyAllButton.classList.remove('copy-success');
      }, 1500);
    })
    .catch(err => console.error('Copy All failed:', err));
});

const faqs = document.querySelectorAll('.faq-question');

faqs.forEach(faq => {
  faq.addEventListener('click', function () {
    const parent = faq.parentNode;
    parent.classList.toggle('active');
    
    const answer = parent.querySelector('.faq-answer');
    if (parent.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "We never store your IP address — client-side only.",
    "Instant IP address lookup, 100% private.",
    "Your location and ISP — no tracking, no storage.",
    "This tool runs entirely in your browser.",
    "Your IP, your data — not ours."
  ];

  const taglineElement = document.getElementById("tagline");
  let index = 0;

  function rotateTagline() {
    taglineElement.classList.add("fade");
    setTimeout(() => {
      index = (index + 1) % taglines.length;
      taglineElement.textContent = taglines[index];
      taglineElement.classList.remove("fade");
    }, 600);
  }

  setInterval(rotateTagline, 4000);
});

     



      