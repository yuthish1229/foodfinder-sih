document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const mobileNoInput = document.getElementById('mobileNo');
        const messageDiv = document.getElementById('message');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const mobileNumber = mobileNoInput.value;

            if (mobileNumber.length === 10 && !isNaN(mobileNumber) && mobileNumber.trim() !== '') {
                window.location.href = 'index.html';
            } else {
                messageDiv.textContent = 'Please enter a valid 10-digit mobile number.';
                messageDiv.style.color = 'red';
            }
        });
        return;
    }

    const foodData = [{
        id: 1,
        name: "Masala Dosa",
        restaurant: "Vidyarthi Bhavan",
        state: "Karnataka",
        city: "Bangalore",
        dishType: "South Indian",
        price: "₹100",
        description: "A popular South Indian crepe made from fermented rice and lentil batter, filled with a spiced potato mixture.",
        image: "https://th.bing.com/th/id/OIP.Q5vy3i2Sojv9sZE9SSsiOQHaE4?w=279&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 12.9716, lng: 77.5946 },
        ordering: "https://example.com/order/masala-dosa",
        address: "123 Dosa Lane, Bangalore, Karnataka",
        status: "Opened",
        rating: "4.5 / 5",
        website: "https://www.vidyarthibhavan.com"
    },
    {
        id: 2,
        name: "Chole Bhature",
        restaurant: "Kesar Da Dhaba",
        state: "Punjab",
        city: "Amritsar",
        dishType: "North Indian",
        price: "₹150",
        description: "A combination of spicy chickpeas (chole) and fried bread (bhature), a staple of North Indian cuisine.",
        image: "https://th.bing.com/th/id/OIP.itRAIt_63G9kJbZRB3XiLgHaE7?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        location: { lat: 31.6340, lng: 74.8723 },
        ordering: "https://example.com/order/chole-bhature",
        address: "456 Bhature Street, Amritsar, Punjab",
        status: "Closed",
        rating: "4.8 / 5",
        website: "https://www.kesardadhaba.com"
    },
    {
        id: 3,
        name: "Litti Chokha",
        restaurant: "The Litti House",
        state: "Bihar",
        city: "Patna",
        dishType: "Bihari",
        price: "₹70",
        description: "A traditional dish from Bihar, consisting of roasted wheat balls (litti) and a mash of roasted vegetables (chokha).",
        image: "https://th.bing.com/th/id/OIP.nDvbukJSgRVkMcHEKZqtjAHaHI?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 25.5941, lng: 85.1376 },
        ordering: "https://example.com/order/litti-chokha",
        address: "789 Litti Road, Patna, Bihar",
        status: "Opened",
        rating: "4.2 / 5",
        website: "https://www.littichokha.com"
    },
    {
        id: 4,
        name: "Rogan Josh",
        restaurant: "Mughal Darbar",
        state: "Jammu and Kashmir",
        city: "Srinagar",
        dishType: "Kashmiri",
        price: "₹350",
        description: "An aromatic curried meat dish, a staple of Kashmiri cuisine. It is slow-cooked with a blend of spices.",
        image: "https://tse4.mm.bing.net/th/id/R.438adee7682e56785577603c6b9ed2e5?rik=4%2b8NQJCI%2fPymzQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f2313%2f8987%2farticles%2fRogan_Josh_01_copy_1200x1200.jpg%3fv%3d1625548245&ehk=KohMza3cOs1j61hfZDU1htJZ9EIHS245HTE%2f5GUtQ2U%3d&risl=&pid=ImgRaw&r=0",
        location: { lat: 34.0837, lng: 74.7973 },
        ordering: "https://example.com/order/rogan-josh",
        address: "10 Rogan Street, Srinagar, J&K",
        status: "Opened",
        rating: "4.7 / 5",
        website: "https://www.mughaldarbar.com"
    },
    {
        id: 5,
        name: "Hyderabadi Biryani",
        restaurant: "Paradise Biryani",
        state: "Telangana",
        city: "Hyderabad",
        dishType: "Mughlai",
        price: "₹250",
        description: "A flavorful rice dish with meat or vegetables, prepared with a mix of spices and aromatic basmati rice.",
        image: "https://www.bing.com/th/id/OIP.VQSf0GuP2KOhHVE1xQuFwwHaFj?w=255&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        location: { lat: 17.3850, lng: 78.4867 },
        ordering: "https://example.com/order/hyderabadi-biryani",
        address: "20 Biryani Road, Hyderabad, Telangana",
        status: "Opened",
        rating: "4.9 / 5",
        website: "https://www.paradisebiryani.com"
    },
    {
        id: 6,
        name: "Pani Puri",
        restaurant: "Elco Pani Puri Centre",
        state: "Maharashtra",
        city: "Mumbai",
        dishType: "Street Food",
        price: "₹50",
        description: "A popular street food from India, consisting of a hollow, crisp-fried puri, filled with spiced water, tamarind chutney, potato, and chickpeas.",
        image: "https://th.bing.com/th/id/OIP.2lv7-0Uz9Kr6M43RFQTJdQHaFl?w=208&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 19.0760, lng: 72.8777 },
        ordering: "https://example.com/order/pani-puri",
        address: "30 Puri Lane, Mumbai, Maharashtra",
        status: "Opened",
        rating: "4.6 / 5",
        website: "https://www.elcopanipuri.com"
    },
    {
        id: 7,
        name: "Vada Pav",
        restaurant: "Ashok Vada Pav",
        state: "Maharashtra",
        city: "Mumbai",
        dishType: "Street Food",
        price: "₹30",
        description: "A vegetarian fast food dish native to Maharashtra, consisting of a deep-fried potato patty (vada) inside a bun (pav).",
        image: "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
        location: { lat: 19.0760, lng: 72.8777 },
        ordering: "https://example.com/order/vada-pav",
        address: "40 Vada Road, Mumbai, Maharashtra",
        status: "Opened",
        rating: "4.4 / 5",
        website: "https://www.ashokvadapav.com"
    },
    {
        id: 8,
        name: "Dhokla",
        restaurant: "Das Khaman House",
        state: "Gujarat",
        city: "Ahmedabad",
        dishType: "Gujarati",
        price: "₹80",
        description: "A savory steamed cake from Gujarat, made with fermented batter of rice and split chickpeas.",
        image: "https://th.bing.com/th/id/OIP.KVA4jYb5LT49eW-ViBGzrgHaE8?w=277&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 23.0225, lng: 72.5714 },
        ordering: "https://example.com/order/dhokla",
        address: "50 Dhokla Street, Ahmedabad, Gujarat",
        status: "Opened",
        rating: "4.1 / 5",
        website: "https://www.daskhamanhouse.com"
    },
    {
        id: 9,
        name: "Dal Bati Churma",
        restaurant: "Dal Bati Churma Restaurant",
        state: "Rajasthan",
        city: "Jaipur",
        dishType: "Rajasthani",
        price: "₹200",
        description: "A three-part dish from Rajasthan, consisting of spicy lentils (dal), baked wheat balls (bati), and a sweet crumble (churma).",
        image: "https://th.bing.com/th/id/OIP.UOwHoYE0a0_flQldS6ckcQHaGX?w=212&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 26.9124, lng: 75.7873 },
        ordering: "https://example.com/order/dal-bati-churma",
        address: "60 Bati Road, Jaipur, Rajasthan",
        status: "Opened",
        rating: "4.8 / 5",
        website: "https://www.dalbatichurma.com"
    },
    {
        id: 10,
        name: "Poha",
        restaurant: "Poha Wala",
        state: "Madhya Pradesh",
        city: "Indore",
        dishType: "Breakfast",
        price: "₹60",
        description: "A popular Indian breakfast dish made from flattened rice, seasoned with spices and often served with a garnish of onions and sev.",
        image: "https://th.bing.com/th/id/OIP.MTIOXOem8xth8X0rtSaOPQHaEM?w=276&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 22.7196, lng: 75.8577 },
        ordering: "https://example.com/order/poha",
        address: "70 Poha Avenue, Indore, Madhya Pradesh",
        status: "Opened",
        rating: "4.3 / 5",
        website: "https://www.poha.com"
    },
    {
        id: 11,
        name: "Tunde Ke Kebabs",
        restaurant: "Tunday Kababi",
        state: "Uttar Pradesh",
        city: "Lucknow",
        dishType: "Awadhi",
        price: "₹200",
        description: "A melt-in-the-mouth kebab made from minced meat and a secret blend of spices, a specialty of Lucknow.",
        image: "https://tse4.mm.bing.net/th/id/OIP.PpXbQMnnKfMgN9cdJ-rocwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        location: { lat: 26.8467, lng: 80.9462 },
        ordering: "https://example.com/order/tunde-ke-kebabs",
        address: "80 Kebab Gali, Lucknow, Uttar Pradesh",
        status: "Opened",
        rating: "4.9 / 5",
        website: "https://www.tundaykababi.com"
    },
    {
        id: 12,
        name: "Misal Pav",
        restaurant: "Katkirr Misal",
        state: "Maharashtra",
        city: "Pune",
        dishType: "Maharashtrian",
        price: "₹120",
        description: "A spicy curry made with sprouted beans, topped with farsan, onions, and coriander, served with pav.",
        image: " https://th.bing.com/th/id/OIP.X5vU1AOzIL6f36HV-vqi9QHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
        location: { lat: 18.5204, lng: 73.8567 },
        ordering: "https://example.com/order/misal-pav",
        address: "90 Misal Road, Pune, Maharashtra",
        status: "Closed",
        rating: "4.6 / 5",
        website: "https://www.kirrkirr.com"
    },
    {
        id: 13,
        name: "Dabeli",
        restaurant: "Kutchi King Dabeli",
        state: "Gujarat",
        city: "Kutch",
        dishType: "Gujarati",
        price: "₹50",
        description: "A popular snack from Gujarat, similar to Vada Pav, but with a spicy potato filling topped with chutneys and sev.",
        image: "https://th.bing.com/th/id/OIP.0Ky_VZgPQPhfvQ9CufmcfwHaE6?w=277&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        location: { lat: 23.2162, lng: 69.6601 },
        ordering: "https://example.com/order/dabeli",
        address: "100 Dabeli Street, Kutch, Gujarat",
        status: "Opened",
        rating: "4.5 / 5",
        website: "https://www.kutchikingdabeli.com"
    },
    {
        id: 14,
        name: "Appam with Stew",
        restaurant: "Dhe Puttu",
        state: "Kerala",
        city: "Kochi",
        dishType: "Kerala",
        price: "₹180",
        description: "A soft, fluffy pancake with a crispy, lacy edge, served with a mild, coconut milk-based vegetable or chicken stew.",
        image: "https://th.bing.com/th/id/OIP.ytlH3k6Jd7h59XbOvUdWjwHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 9.9312, lng: 76.2673 },
        ordering: "https://example.com/order/appam-stew",
        address: "110 Appam Lane, Kochi, Kerala",
        status: "Opened",
        rating: "4.7 / 5",
        website: "https://www.dheputtu.com"
    },
    {
        id: 15,
        name: "Thukpa",
        restaurant: "The Tibetan Kitchen",
        state: "Sikkim",
        city: "Gangtok",
        dishType: "Tibetan",
        price: "₹150",
        description: "A hearty noodle soup with vegetables or meat, a popular dish in the Himalayan region.",
        image: "https://th.bing.com/th/id/OIP.Qxty-pPVBYDsXJ_wlyK6MgHaHa?w=177&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 27.3389, lng: 88.6065 },
        ordering: "https://example.com/order/thukpa",
        address: "120 Thukpa Point, Gangtok, Sikkim",
        status: "Opened",
        rating: "4.4 / 5",
        website: "https://www.thetibetankitchen.com"
    },
    {
        id: 16,
        name: "Ghevar",
        restaurant: "Laxmi Mishtan Bhandar",
        state: "Rajasthan",
        city: "Jaipur",
        dishType: "Dessert",
        price: "₹100",
        description: "A traditional Rajasthani sweet made from flour, shaped like a disc, and soaked in sugar syrup.",
        image: "https://th.bing.com/th/id/OIP.VGmYgDqtPtUlV6bxdTmJJwHaG2?w=185&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 26.9124, lng: 75.7873 },
        ordering: "https://example.com/order/ghevar",
        address: "130 Ghevar Sweets, Jaipur, Rajasthan",
        status: "Closed",
        rating: "4.7 / 5",
        website: "https://www.laxmimistandbhandar.com"
    },
    {
        id: 17,
        name: "Bisi Bele Bath",
        restaurant: "Vasudev Adiga's",
        state: "Karnataka",
        city: "Mysore",
        dishType: "South Indian",
        price: "₹110",
        description: "A spicy, rice-based dish with a mix of lentils and vegetables, flavored with a special spice powder.",
        image: "https://th.bing.com/th/id/OIP.AooEfP_JWs-ZDyNVsmnA3AHaE8?w=235&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3",
        location: { lat: 12.2958, lng: 76.6394 },
        ordering: "https://example.com/order/bisi-bele-bath",
        address: "140 Bath Street, Mysore, Karnataka",
        status: "Opened",
        rating: "4.1 / 5",
        website: "https://www.adigas.com"
    },
    {
        id: 18,
        name: "Makke di Roti, Sarson da Saag",
        restaurant: "Sardarji's Dhaba",
        state: "Punjab",
        city: "Ludhiana",
        dishType: "North Indian",
        price: "₹200",
        description: "A classic Punjabi combo of unleavened maize flour bread (Makke di Roti) and a spiced mustard greens curry (Sarson da Saag).",
        image: "https://th.bing.com/th/id/R.bc327b1d8f9270bd63dcbd0e9e40287b?rik=68mu%2fHDRzfsPFg&riu=http%3a%2f%2fcreativelyyours.creative.travel%2fwp-content%2fuploads%2f2019%2f10%2fRECIPE.jpg&ehk=9yYzmSekbEuCmyLkVzyKEDrK3xK9qmXaU67t5tYODVQ%3d&risl=&pid=ImgRaw&r=0",
        location: { lat: 30.9010, lng: 75.8533 },
        ordering: "https://example.com/order/makke-di-roti-sarson-da-saag",
        address: "150 Saag House, Ludhiana, Punjab",
        status: "Opened",
        rating: "4.8 / 5",
        website: "https://www.sardarjidhaba.com"
    },
    {
        id: 19,
        name: "Puran Poli",
        restaurant: "Prakash Shakahari Upahar Kendra",
        state: "Maharashtra",
        city: "Mumbai",
        dishType: "Maharashtrian",
        price: "₹80",
        description: "A sweet flatbread stuffed with a filling of chana dal and jaggery, often served with ghee.",
        image: "https://th.bing.com/th/id/OIP.9W3lg2sCcDFaXCXooQCSkgHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        location: { lat: 19.0760, lng: 72.8777 },
        ordering: "https://example.com/order/puran-poli",
        address: "160 Poli Sweets, Mumbai, Maharashtra",
        status: "Opened",
        rating: "4.5 / 5",
        website: "https://www.prakashupahar.com"
    },
    {
        id: 20,
        name: "Fish Curry",
        restaurant: "Fisherman's Wharf",
        state: "Goa",
        city: "Panaji",
        dishType: "Goan",
        price: "₹400",
        description: "A tangy and spicy fish curry made with coconut milk, kokum, and a blend of local spices.",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/01/DSC08247-1024x576.jpg?v=1674579624",
        location: { lat: 15.4989, lng: 73.8278 },
        ordering: "https://example.com/order/goan-fish-curry",
        address: "170 Fish Market, Panaji, Goa",
        status: "Opened",
        rating: "4.9 / 5",
        website: "https://www.fishmanswharf.com"
    }];

    const foodListDiv = document.getElementById('food-list');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const stateFilter = document.getElementById('state-filter');
    const cityFilter = document.getElementById('city-filter');
    const dishFilter = document.getElementById('dish-filter');
    const dishDetailsDiv = document.getElementById('dish-details');
    const detailsContentDiv = document.getElementById('details-content');
    const backButton = document.getElementById('back-button');
    const mapContainer = document.getElementById('map-container');
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    const getAndDisplayRegionalDishes = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const location = await reverseGeocode(lat, lng);

                    // Separate regional and other dishes
                    const regionalDishes = foodData.filter(item =>
                        item.city === location.city || item.state === location.state
                    );
                    const otherDishes = foodData.filter(item =>
                        !(item.city === location.city || item.state === location.state)
                    );

                    foodListDiv.innerHTML = '';

                    // Display "FIND YOUR FOOD" heading
                    const findFoodHeading = document.createElement('h2');
                    findFoodHeading.className = 'regional-heading';
                    findFoodHeading.textContent = 'FIND YOUR FOOD';
                    foodListDiv.appendChild(findFoodHeading);

                    // Create and append the container for all food cards
                    const cardContainer = document.createElement('div');
                    cardContainer.className = 'food-card-container';
                    
                    // Add all regional dishes to the container
                    regionalDishes.forEach(item => {
                        cardContainer.appendChild(createFoodCard(item));
                    });

                    // Add all other dishes to the container
                    otherDishes.forEach(item => {
                        cardContainer.appendChild(createFoodCard(item));
                    });

                    foodListDiv.appendChild(cardContainer);
                    
                    if (foodListDiv.children.length === 0) {
                        foodListDiv.innerHTML = '<p>No results found. Try a different search or filter.</p>';
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    renderFoodCards(foodData);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
            renderFoodCards(foodData);
        }
    };

    const reverseGeocode = async (lat, lng) => {
        return { city: 'Bangalore', state: 'Karnataka' };
    };

    const initApp = () => {
        populateFilters();
        getAndDisplayRegionalDishes();
    };

    const createFoodCard = (item) => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <h2>${item.name}</h2>
                <p><strong>Restaurant:</strong> ${item.restaurant}</p>
                <p><strong>City:</strong> ${item.city}</p>
            </div>
        `;
        card.addEventListener('click', () => showDishDetails(item));
        return card;
    };

    const renderFoodCards = (data) => {
        foodListDiv.innerHTML = '';
        const findFoodHeading = document.createElement('h2');
        findFoodHeading.className = 'regional-heading';
        findFoodHeading.textContent = 'FIND YOUR FOOD';
        foodListDiv.appendChild(findFoodHeading);

        if (data.length === 0) {
            foodListDiv.innerHTML += '<p>No results found. Try a different search or filter.</p>';
            return;
        }
        
        const cardContainer = document.createElement('div');
        cardContainer.className = 'food-card-container';
        data.forEach(item => {
            cardContainer.appendChild(createFoodCard(item));
        });
        foodListDiv.appendChild(cardContainer);
    };

    const showDishDetails = (item) => {
        foodListDiv.classList.add('hidden');
        dishDetailsDiv.classList.remove('hidden');

        detailsContentDiv.innerHTML = `
            <div class="details-card">
                <img src="${item.image}" alt="${item.name}">
                <h1>${item.name}</h1>
                <p><strong>Restaurant:</strong> ${item.restaurant}</p>
                <p><strong>State:</strong> ${item.state}</p>
                <p><strong>City:</strong> ${item.city}</p>
                <p><strong>Dish Type:</strong> ${item.dishType}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p class="status"><strong>Status:</strong> <span class="${item.status.toLowerCase()}">${item.status}</span></p>
                <p><strong>Rating:</strong> ${item.rating} ⭐</p>
                <p><strong>Address:</strong> ${item.address}</p>
                <h3>About the Dish:</h3>
                <p>${item.description}</p>
                <a href="${item.ordering}" target="_blank" class="order-button">Order Now</a>
                <a href="${item.website}" target="_blank" class="website-button">Visit Website</a>
                <div id="mini-map" class="map-placeholder"></div>
            </div>
        `;
        initMiniMap(item.location, item.name);
    };

    backButton.addEventListener('click', () => {
        dishDetailsDiv.classList.add('hidden');
        foodListDiv.classList.remove('hidden');
        getAndDisplayRegionalDishes();
    });

    const populateFilters = () => {
        const states = [...new Set(foodData.map(item => item.state))];
        states.sort();
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateFilter.appendChild(option);
        });

        const cities = [...new Set(foodData.map(item => item.city))];
        cities.sort();
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });

        const dishTypes = [...new Set(foodData.map(item => item.dishType))];
        dishTypes.sort();
        dishTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            dishFilter.appendChild(option);
        });
    };

    const filterAndRender = () => {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedState = stateFilter.value;
        const selectedCity = cityFilter.value;
        const selectedDishType = dishFilter.value;

        const filteredData = foodData.filter(item => {
            const matchesSearch = searchTerm === '' ||
                item.name.toLowerCase().includes(searchTerm) ||
                item.restaurant.toLowerCase().includes(searchTerm) ||
                item.city.toLowerCase().includes(searchTerm) ||
                item.state.toLowerCase().includes(searchTerm) ||
                item.dishType.toLowerCase().includes(searchTerm);

            const matchesState = selectedState === 'all' || item.state === selectedState;
            const matchesCity = selectedCity === 'all' || item.city === selectedCity;
            const matchesDishType = selectedDishType === 'all' || item.dishType === selectedDishType;

            return matchesSearch && matchesState && matchesCity && matchesDishType;
        });

        renderFoodCards(filteredData);
    };

    searchButton.addEventListener('click', filterAndRender);
    searchBar.addEventListener('input', filterAndRender);
    stateFilter.addEventListener('change', filterAndRender);
    cityFilter.addEventListener('change', filterAndRender);
    dishFilter.addEventListener('change', filterAndRender);

    const initMiniMap = (location, name) => {
        const mapElement = document.getElementById('mini-map');
        if (mapElement && mapElement._leaflet_id) {
            mapElement._leaflet_id = null;
        }

        const map = L.map('mini-map').setView([location.lat, location.lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`<b>${name}</b>`).openPopup();
    };

    initApp();
});