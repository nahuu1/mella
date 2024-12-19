"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("tasks");
  const [userLocation, setUserLocation] = React.useState(null);
  const [mapItems, setMapItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [showChat, setShowChat] = React.useState(false);
  const [chatMessages, setChatMessages] = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [language, setLanguage] = React.useState("en");
  const [showEmergencyPopup, setShowEmergencyPopup] = React.useState(false);
  const [showChatHistory, setShowChatHistory] = React.useState(false);
  const [workerLocation, setWorkerLocation] = React.useState({
    lat: 0,
    lng: 0,
  });
  const jobs = [
    {
      title: "Make injera",
      description:
        "Need someone to make fresh injera for the weekend. All supplies provided.",
      time: "10 min ago",
    },
    {
      title: "Paint house in Lalibela style",
      description:
        "Looking for a painter familiar with Lalibela architecture style. Negotiable pay.",
      time: "20 min ago",
    },
    {
      title: "Ethiopian coffee ceremony",
      description:
        "Host a traditional Ethiopian coffee ceremony for a family gathering. Supplies provided.",
      time: "30 min ago",
    },
    {
      title: "Weave Gabi",
      description:
        "Need skilled weaver to make a traditional Ethiopian Gabi. Pay per piece.",
      time: "45 min ago",
    },
    {
      title: "Rent house in Addis Ababa",
      description:
        "3-bedroom house available for rent in Addis Ababa. Contact for price details.",
      time: "1 hr ago",
    },
  ];
  const [emergencyWorkers, setEmergencyWorkers] = React.useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Emergency Doctor",
      distance: "1.2",
      phone: "123-456-7890",
      location: { lat: 9.0157, lng: 38.7577 },
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Paramedic",
      distance: "1.5",
      phone: "123-456-7891",
      location: { lat: 9.0158, lng: 38.7578 },
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "Emergency Nurse",
      distance: "1.8",
      phone: "123-456-7892",
      location: { lat: 9.0159, lng: 38.7579 },
    },
    {
      id: 4,
      name: "David Chen",
      role: "First Responder",
      distance: "2.0",
      phone: "123-456-7893",
      location: { lat: 9.016, lng: 38.758 },
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Crisis Counselor",
      distance: "2.2",
      phone: "123-456-7894",
      location: { lat: 9.0161, lng: 38.7581 },
    },
    {
      id: 6,
      name: "Michael Brown",
      role: "Emergency Technician",
      distance: "2.5",
      phone: "123-456-7895",
      location: { lat: 9.0162, lng: 38.7582 },
    },
    {
      id: 7,
      name: "Lisa Anderson",
      role: "Trauma Specialist",
      distance: "2.8",
      phone: "123-456-7896",
      location: { lat: 9.0163, lng: 38.7583 },
    },
  ]);
  const [showEmergencyList, setShowEmergencyList] = React.useState(false);
  const [activeCall, setActiveCall] = React.useState(null);
  const [voiceMessage, setVoiceMessage] = React.useState("");

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  React.useEffect(() => {
    if (userLocation) {
      const fetchNearbyItems = async () => {
        const simulatedItems = [
          {
            id: 1,
            type: "service",
            lat: userLocation.lat + 0.01,
            lng: userLocation.lng + 0.01,
            name: "House Cleaning",
            description: "Professional house cleaning service",
            image: "/images/house-cleaning.jpg",
            distance: "1.2",
            location: "Bole, Addis Ababa",
          },
          {
            id: 2,
            type: "product",
            lat: userLocation.lat - 0.01,
            lng: userLocation.lng - 0.01,
            name: "Fresh Injera",
            description: "Authentic Ethiopian injera, freshly made",
            image: "/images/injera.jpg",
            distance: "0.8",
            location: "Piassa, Addis Ababa",
          },
          {
            id: 3,
            type: "service",
            lat: userLocation.lat,
            lng: userLocation.lng + 0.02,
            name: "House Painting",
            description: "Expert house painting service",
            image: "/images/house-painting.jpg",
            distance: "2.5",
            location: "Kazanchis, Addis Ababa",
          },
          {
            id: 4,
            type: "product",
            lat: userLocation.lat + 0.015,
            lng: userLocation.lng - 0.015,
            name: "Ethiopian Coffee",
            description: "Premium Ethiopian coffee beans",
            image: "/images/coffee-beans.jpg",
            distance: "1.7",
            location: "Merkato, Addis Ababa",
          },
          {
            id: 5,
            type: "service",
            lat: userLocation.lat - 0.02,
            lng: userLocation.lng + 0.01,
            name: "Plumbing Service",
            description: "24/7 emergency plumbing service",
            image: "/images/plumbing.jpg",
            distance: "3.1",
            location: "Sarbet, Addis Ababa",
          },
          {
            id: 6,
            type: "product",
            lat: userLocation.lat + 0.005,
            lng: userLocation.lng - 0.005,
            name: "Traditional Gabi",
            description: "Handwoven Ethiopian Gabi",
            image: "/images/gabi.jpg",
            distance: "0.5",
            location: "Mexico, Addis Ababa",
          },
          {
            id: 7,
            type: "service",
            lat: userLocation.lat - 0.015,
            lng: userLocation.lng - 0.02,
            name: "Gardening Service",
            description: "Professional gardening and landscaping",
            image: "/images/gardening.jpg",
            distance: "2.8",
            location: "CMC, Addis Ababa",
          },
          {
            id: 8,
            type: "product",
            lat: userLocation.lat + 0.02,
            lng: userLocation.lng + 0.015,
            name: "Ethiopian Spices",
            description: "Authentic Ethiopian spice mix",
            image: "/images/spices.jpg",
            distance: "2.3",
            location: "Shola, Addis Ababa",
          },
          {
            id: 9,
            type: "service",
            lat: userLocation.lat - 0.005,
            lng: userLocation.lng + 0.005,
            name: "Electrical Repair",
            description: "Certified electrician for all repairs",
            image: "/images/electrical-repair.jpg",
            distance: "0.6",
            location: "Gerji, Addis Ababa",
          },
          {
            id: 10,
            type: "product",
            lat: userLocation.lat + 0.008,
            lng: userLocation.lng - 0.008,
            name: "Handmade Baskets",
            description: "Traditional Ethiopian woven baskets",
            image: "/images/baskets.jpg",
            distance: "1.0",
            location: "Megenagna, Addis Ababa",
          },
        ].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        setMapItems(simulatedItems);
      };
      fetchNearbyItems();
    }
  }, [userLocation]);

  React.useEffect(() => {
    if (showEmergencyPopup) {
      const interval = setInterval(() => {
        setWorkerLocation((prev) => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001,
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showEmergencyPopup]);

  const handleCallService = (item) => {
    setSelectedItem(item);
  };
  const handleConfirmCall = () => {
    alert(`Service called for ${selectedItem.name}`);
    setSelectedItem(null);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { text: currentMessage, sender: "user" },
      ]);
      setCurrentMessage("");
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message! How can I help you?",
            sender: "other",
          },
        ]);
      }, 1000);
    }
  };
  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const handleEmergencyCall = (service) => {
    setShowEmergencyPopup(true);
    setWorkerLocation(userLocation);
  };
  const handleEndCall = () => {
    setShowEmergencyPopup(false);
  };
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "am" : "en"));
  };
  const handleEmergencyWorkerCall = (worker) => {
    setActiveCall(worker);
    setShowEmergencyList(false);
    setShowEmergencyPopup(true);
    setWorkerLocation(userLocation);
    setVoiceMessage(
      "Emergency responder is on the way. Stay calm and stay on the line."
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-roboto">
      <header className="bg-[#22c55e] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="font-bold text-lg flex items-center">
            <i className="fa fa-arrow-left mr-2"></i>
            Mella
          </a>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              {language === "en" ? "Tasks" : "ስራዎች"}
            </a>
            <a href="#" className="hover:underline">
              {language === "en" ? "Workers" : "ሰራተኞች"}
            </a>
            <a href="#" className="hover:underline">
              {language === "en" ? "Add Listing" : "ማስታወቂያ ጨምር"}
            </a>
            <a href="#" className="hover:underline">
              {language === "en" ? "Marketplace" : "ገበያ"}
            </a>
            <button
              onClick={() => setShowEmergencyList(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
            >
              <i className="fa fa-exclamation-circle mr-2"></i>Emergency
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-green-600 rounded"
          >
            {language === "en" ? "አማርኛ" : "English"}
          </button>
          <div className="relative">
            <div className="absolute right-0 bg-red-600 text-white rounded-full text-xs px-2">
              3
            </div>
            <i className="fa fa-bell"></i>
          </div>
          <div className="hover:underline flex items-center space-x-2">
            <i className="fa fa-user"></i>
            <span>Nahusenay Zewud</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <button
            onClick={toggleChat}
            className="bg-green-500 text-white px-3 py-1 rounded-full"
          >
            <i className="fa fa-comment mr-1"></i>
            {language === "en" ? "Chat" : "መልእክት"}
          </button>
        </div>
      </header>
      <div className="container mx-auto p-4 flex space-x-6">
        <aside className="w-[300px] space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-center mb-4">
              <img
                src="https://ucarecdn.com/92c4daf2-9ea1-4a8b-af8a-62148b873ad9/-/format/auto/"
                alt="Profile photo of a person wearing a gray cap and blazer, sitting in front of a stone wall with pink flowering plants"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h2 className="font-bold text-lg">Nahusenay Zewud</h2>
              <div className="flex items-center justify-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Active</span>
              </div>
            </div>
            <p className="text-center">Rental Manager</p>
            <p className="text-center">0935344627</p>
            <p className="text-center">Addis Ababa, Ethiopia</p>
            <p className="text-center">April 1, 1988</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Emergency Services</h3>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleEmergencyCall("police")}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                <i className="fa fa-shield mr-2"></i>Police
              </button>
              <button
                onClick={() => handleEmergencyCall("ambulance")}
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
              >
                <i className="fa fa-ambulance mr-2"></i>Ambulance
              </button>
              <button
                onClick={() => handleEmergencyCall("fire")}
                className="bg-orange-500 text-white px-4 py-2 rounded w-full"
              >
                <i className="fa fa-fire-extinguisher mr-2"></i>Fire Truck
              </button>
              <button
                onClick={() => handleEmergencyCall("traffic")}
                className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
              >
                <i className="fa fa-car mr-2"></i>Traffic
              </button>
              <button
                onClick={() => handleEmergencyCall("tow")}
                className="bg-purple-500 text-white px-4 py-2 rounded w-full"
              >
                <i className="fa fa-truck mr-2"></i>Tow Truck
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="hover:bg-gray-200 p-2 rounded">
                <a href="#">My Listings</a>
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">
                <a href="#">My Tasks</a>
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">
                <a href="#">My Workers</a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">My Skills</h3>
            <div className="flex flex-wrap">
              <span className="m-1 px-2 py-1 bg-gray-200 rounded">
                House Cleaning
              </span>
              <span className="m-1 px-2 py-1 bg-gray-200 rounded">
                Gardening
              </span>
              <span className="m-1 px-2 py-1 bg-gray-200 rounded">
                Plumbing
              </span>
              <span className="m-1 px-2 py-1 bg-gray-200 rounded">
                Electrician
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Special Offer!</h3>
            <p>Featured listings get more views.</p>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <i className="fa fa-times"></i>
            </button>
          </div>
        </aside>
        <main className="flex-1 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "tasks"
                    ? "bg-[#22c55e] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("tasks")}
              >
                Tasks
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "marketplace"
                    ? "bg-[#22c55e] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("marketplace")}
              >
                Marketplace
              </button>
            </div>
            {activeTab === "tasks" && (
              <>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="flex-1 p-2 border rounded"
                  />
                  <button className="bg-[#22c55e] text-white px-4 py-2 rounded">
                    Search
                  </button>
                </div>
                {jobs.map((job, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h2 className="font-bold">{job.title}</h2>
                        <p>{job.description}</p>
                      </div>
                      <span className="text-gray-500">{job.time}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-[#22c55e] text-white px-4 py-2 rounded">
                        Interested
                      </button>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                        Comment
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {activeTab === "marketplace" && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search marketplace..."
                    className="flex-1 p-2 border rounded"
                  />
                  <button className="bg-[#22c55e] text-white px-4 py-2 rounded">
                    Search
                  </button>
                </div>
                <div className="h-[400px] relative">
                  {userLocation ? (
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${userLocation.lat},${userLocation.lng}&zoom=14`}
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      Loading map...
                    </div>
                  )}
                  {mapItems.map((item) => (
                    <div
                      key={item.id}
                      className="absolute w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs"
                      style={{
                        left: `${
                          ((item.lng - userLocation.lng) / 0.04) * 100 + 50
                        }%`,
                        top: `${
                          ((userLocation.lat - item.lat) / 0.04) * 100 + 50
                        }%`,
                      }}
                      title={`${item.name} (${item.type})`}
                    >
                      {item.type === "user"
                        ? "👤"
                        : item.type === "product"
                        ? "📦"
                        : "🛠️"}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mapItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-lg shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded mb-2"
                      />
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          <p>{item.location}</p>
                          <p>{item.distance} km away</p>
                        </div>
                        <button
                          className="bg-[#22c55e] text-white px-4 py-2 rounded text-sm"
                          onClick={() => handleCallService(item)}
                        >
                          {item.type === "service"
                            ? "Call Service"
                            : "Order Now"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        <aside className="w-[300px] space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Upcoming Events</h3>
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/event-image.jpg"
                alt="Forest Event"
                className="w-12 h-12 rounded"
              />
              <div>
                <p>Holiday</p>
                <p className="text-gray-500">Friday 15:00</p>
              </div>
            </div>
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded mt-2">
              Info
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">My Listings</h3>
            <div className="flex items-center space-x-2">
              <img
                src="/path/to/listing-image.jpg"
                alt="House in Addis Ababa"
                className="w-12 h-12 rounded"
              />
              <div>
                <p>House in Addis Ababa</p>
                <p className="text-sm text-gray-500">Bole, 2.5 km away</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button className="bg-green-600 text-white px-2 py-1 rounded">
                <i className="fa fa-eye"></i>
              </button>
              <button className="bg-red-600 text-white px-2 py-1 rounded">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">ADS</h3>
            <div className="flex justify-center">
              <i className="fa fa-bug fa-2x"></i>
            </div>
          </div>
        </aside>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Map of Listings</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12793.503439051618!2d38.7577607416911!3d9.015892276293078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fba8e14407%3A0x1ebc45b54b0bfa6b!2sAddis+Ababa%2C+Ethiopia!5e0!3m2!1sen!2s!4v1636049943847!5m2!1sen!2s"
            className="w-full h-[300px]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {showEmergencyList && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Emergency Workers Nearby</h2>
              <button
                onClick={() => setShowEmergencyList(false)}
                className="text-gray-500"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="space-y-4">
              {emergencyWorkers.map((worker) => (
                <div
                  key={worker.id}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-bold">{worker.name}</h3>
                    <p className="text-gray-600">{worker.role}</p>
                    <p className="text-sm text-gray-500">
                      {worker.distance} km away
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEmergencyWorkerCall(worker)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      <i className="fa fa-phone mr-2"></i>Call
                    </button>
                    <a
                      href={`tel:${worker.phone}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      <i className="fa fa-phone-square mr-2"></i>Direct
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showEmergencyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="font-bold text-xl mb-4">
              Emergency Worker En Route: {activeCall?.name}
            </h2>
            <div className="h-[300px] relative mb-4">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <i className="fa fa-ambulance text-4xl text-red-500 mb-2"></i>
                  <p>Live tracking enabled</p>
                  <p className="text-sm text-gray-600">
                    Worker is {activeCall?.distance} km away
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <p className="text-center text-gray-700">{voiceMessage}</p>
            </div>
            <div className="flex justify-between mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                <i className="fa fa-microphone mr-2"></i>Voice Chat
              </button>
              <button
                onClick={handleEndCall}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                End Call
              </button>
            </div>
            <p className="text-center text-gray-600">
              Estimated arrival:{" "}
              {Math.round(parseFloat(activeCall?.distance || 0) * 2)} minutes
            </p>
          </div>
        </div>
      )}

      {showChatHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] max-h-[600px] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Chat History</h2>
              <button
                onClick={() => setShowChatHistory(false)}
                className="text-gray-500"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            {chatMessages.map((msg, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-50 rounded">
                <div className="text-sm text-gray-500 mb-1">
                  {msg.sender === "user" ? "You" : "Support"}
                </div>
                <div className="text-gray-800">{msg.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Confirm Service Call</h2>
            <p>Are you sure you want to call for {selectedItem.name}?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                onClick={() => setSelectedItem(null)}
              >
                Cancel
              </button>
              <button
                className="bg-[#22c55e] text-white px-4 py-2 rounded"
                onClick={handleConfirmCall}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#22c55e] text-white p-2 rounded-t-lg flex justify-between items-center">
            <span>Chat</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowChatHistory(true)}
                className="text-white"
              >
                <i className="fa fa-history"></i>
              </button>
              <button onClick={() => setShowChat(false)} className="text-white">
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "user" ? "text-right" : ""}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-1 p-2 border rounded-l-lg"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="bg-[#22c55e] text-white px-4 py-2 rounded-r-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;