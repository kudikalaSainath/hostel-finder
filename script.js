function findHostels() {
    const location = document.getElementById('locationInput').value;
    // Simulate fetching data - integrate with Google Maps API here
    const dummyData = [
        {
            name: "Hostel A",
            address: "Address A",
            contact: "1234567890",
            picture: "link_to_picture_A",
            route: "link_to_map_A"
        },
        {
            name: "Hostel B",
            address: "Address B",
            contact: "0987654321",
            picture: "link_to_picture_B",
            route: "link_to_map_B"
        }
    ];
    
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = ''; // Clear previous results
    
    dummyData.forEach(hostel => {
        const hostelDiv = document.createElement('div');
        hostelDiv.classList.add('hostel');
        hostelDiv.innerHTML = `
            <h2>${hostel.name}</h2>
            <p>Address: ${hostel.address}</p>
            <p>Contact: ${hostel.contact}</p>
            <img src="${hostel.picture}" alt="${hostel.name}" width="200">
            <a href="${hostel.route}" target="_blank">View on Map</a>
        `;
        resultsSection.appendChild(hostelDiv);
    });
}
