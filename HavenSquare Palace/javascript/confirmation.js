// Booking Confirmation Logic

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const checkin = params.get("arrival") || "-";
    const checkout = params.get("departure") || "-";
    const pax = params.get("pax") || "-";
    const room = params.get("room") || "-";
  
    // Display the values in HTML
    document.getElementById("display-checkin").textContent = checkin;
    document.getElementById("display-checkout").textContent = checkout;
    document.getElementById("display-guests").textContent = pax;
    document.getElementById("display-room-type").textContent = room;
    
    // Determine room price per night
    let pricePerNight = 0;
      switch (room.toLowerCase()) {
        case "urban suite":
          pricePerNight = 200;
          break;
        case "garden villa":
          pricePerNight = 320;
          break;
        case "skyline penthouse":
          pricePerNight = 480;
          break;
        case "seaside retreat":
          pricePerNight = 550;
          break;
        case "heritage loft":
          pricePerNight = 600;
          break;
        default:
          pricePerNight = 200;
      }

    // Calculate total price
    if (checkin !== "-" && checkout !== "-") {
      const nights = calculateNights(checkin, checkout);
      const pricePerNight = 200;
      const totalPrice = nights * pricePerNight;
      document.getElementById("display-total-price").textContent = "RM " + totalPrice.toFixed(2);
    } else {
      document.getElementById("display-total-price").textContent = "RM 0.00";
    }
  
    // Function to calculate nights between check-in and check-out
    function calculateNights(start, end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      if (isNaN(startDate) || isNaN(endDate) || endDate <= startDate) {
        return 1;
      }
      const diffTime = endDate - startDate;
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    
  });
  