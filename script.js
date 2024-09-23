// Example array of video objects
const videos = [
    { name: "Introduction to JavaScript", description: 'Learn the basics of JavaScript.', type: "Tutorial", url: 'uploads/js_intro.mp4' },
    { name: "Advanced CSS Techniques", description: 'Explore advanced CSS techniques.', type: "Tutorial", url: 'uploads/css_advanced.mp4' },
    { name: "HTML Basics", description: 'Understand the basics of HTML.', type: "Tutorial", url: 'uploads/html_basics.mp4' },
    { name: "React for Beginners", description: 'Get started with React.', type: "Tutorial", url: 'uploads/react_beginners.mp4' },
    { name: "Node.js Crash Course", description: 'Learn Node.js from scratch.', type: "Tutorial", url: 'uploads/nodejs_crash.mp4' }
];

// Function to display videos in an ordered list
function displayVideos(videosToDisplay) {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = ''; // Clear existing content
    videosToDisplay.forEach(video => {
        const listItem = document.createElement('li');
        const nameLink = document.createElement('a');
        nameLink.href = `videoPlayer.html?video=${encodeURIComponent(video.url)}`; // Link to video player with video URL
        nameLink.innerText = video.name; // Set the link text to the video name
        nameLink.target = '_blank'; // Open the video in a new tab
        listItem.appendChild(nameLink); // Append the link to the list item
        listItem.append(` - ${video.description} (${video.type})`); // Append description and type
        videoList.appendChild(listItem); // Append the list item to the ordered list
    });
}

// Function to search videos
function searchVideos() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.name.toLowerCase().includes(query));
    displayVideos(filteredVideos);
}

// Call the function to display all videos initially
displayVideos(videos);
