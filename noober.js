window.addEventListener("DOMContentLoaded", async function () {
  let response = await fetch("https://kiei451.com/api/rides.json");
  let json = await response.json();

  // writes the returned JSON to the console
  console.dir(json);

  // creating rides variable
  let rides = document.querySelector(`.rides`);
  rides.innerHTML = ``

  // 🔥 start here: write the recipe (algorithm), then write the code
  // loop through the json
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);

    // create variable from data
    let currentRide = json[i];

    // add conditionals
    let rideType;
    let borderColor;

    if (currentRide.purpleRequested == true) {
      // If Noober Purple is requested
      rideType = `Noober Purple`;
      borderColor = `border-purple-900`;
    } else if (
      currentRide.purpleRequested == false &&
      currentRide.numberOfPassengers > 3
    ) {
      // If Noober Purples is not requested and Noober XL is required
      rideType = `Noober XL`;
      borderColor = `border-red-900`;
    } else if (
      currentRide.purpleRequested == false &&
      currentRide.numberOfPassengers <= 3
    ) {
      // If Noober Purples is not requested and Noober XL is not required
      rideType = `Noober X`;
      borderColor = `border-green-900`;
    }

    // edit HTML
    let htmlRides = ` 
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${rideType}</span>
    </h1>

    <div class="border-4 ${borderColor} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${currentRide.passengerDetails.first} ${currentRide.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${currentRide.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${currentRide.numberOfPassengers} Passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${currentRide.pickupLocation.address}</p>
          <p>${currentRide.pickupLocation.city}, ${currentRide.pickupLocation.state} ${currentRide.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${currentRide.dropoffLocation.address}</p>
          <p>${currentRide.dropoffLocation.city}, ${currentRide.dropoffLocation.state} ${currentRide.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`;

    rides.innerHTML = rides.innerHTML + htmlRides;

  
  }
});
