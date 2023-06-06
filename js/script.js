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
            alert('IP address copied!');
          })
          .catch((error) => {
            console.error('Failed to copy IP address:', error);
          });
      });

      