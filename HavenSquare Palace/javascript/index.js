// Booking Form - Number of Pax

const numPaxInput = document.getElementById('numPax');

  if (numPaxInput) { 
      numPaxInput.addEventListener('change', function() {
          let currentValue = parseInt(this.value, 10); 

          // Validate against min attribute (or default to 1)
          const minAllowed = parseInt(this.min, 10) || 1;
          if (isNaN(currentValue) || currentValue < minAllowed) {
              this.value = minAllowed;
          }
          // Validate against max attribute (or default to 10)
          const maxAllowed = parseInt(this.max, 10) || 10; 
          if (currentValue > maxAllowed) {
              this.value = maxAllowed;
          }
      });

      // Maximum Number of Pax Allowed = 10
      numPaxInput.addEventListener('input', function() {
          const maxAllowed = parseInt(this.max, 10) || 10;
          let currentValue = parseInt(this.value, 10);

          if (currentValue > maxAllowed) {
              this.value = maxAllowed;
          }
          // If users type non-numeric characters and it's not an empty string, clear it or set to min
          if (isNaN(currentValue) && this.value !== '') {
          }
      });
  }