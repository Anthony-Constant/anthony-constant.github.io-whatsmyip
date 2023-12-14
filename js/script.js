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
           copyIPButton.textContent = 'Copied';
           copyIPButton.disabled = true;
           copyIPButton.className = 'btn btn-success';
     
           setTimeout(() => {
             copyIPButton.textContent = 'Copy IP Address';
             copyIPButton.disabled = false;
             copyIPButton.className = 'btn btn-primary';
           }, 2000); // Reset to original state after 2000 milliseconds (2 seconds)
         })
         .catch((error) => {
           console.error('Failed to copy IP address:', error);
         });
     });
     
     
     if (window.VANTA) window.VANTA.DOTS({
      el: "html",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      showLines: false,
      color: 0x3fddff,
      color2: 0xff8820,
      backgroundColor: 0x101820
    })
    
    _strk.push(function() {
      setVanta()
      window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
    })

      