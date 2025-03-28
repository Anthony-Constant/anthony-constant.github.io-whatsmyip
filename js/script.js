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

     
     
     if (window.VANTA) window.VANTA.GLOBE({
  el: "#vanta-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3fddff,
  color2: 0xff8820,
  backgroundColor: 0x101820
});


      