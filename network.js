// World cities with coordinates (lat, lon) - representative sample
const WORLD_CITIES = [
    // North America
    {name: 'US', city: 'New York', lat: 40.7128, lon: -74.0060},
    {name: 'US', city: 'Los Angeles', lat: 34.0522, lon: -118.2437},
    {name: 'US', city: 'Chicago', lat: 41.8781, lon: -87.6298},
    {name: 'US', city: 'Houston', lat: 29.7604, lon: -95.3698},
    {name: 'US', city: 'Phoenix', lat: 33.4484, lon: -112.0740},
    {name: 'US', city: 'Philadelphia', lat: 39.9526, lon: -75.1652},
    {name: 'US', city: 'San Antonio', lat: 29.4241, lon: -98.4936},
    {name: 'US', city: 'San Diego', lat: 32.7157, lon: -117.1611},
    {name: 'US', city: 'Dallas', lat: 32.7767, lon: -96.7970},
    {name: 'US', city: 'San Jose', lat: 37.3382, lon: -121.8863},
    {name: 'US', city: 'Austin', lat: 30.2672, lon: -97.7431},
    {name: 'US', city: 'Jacksonville', lat: 30.3322, lon: -81.6557},
    {name: 'US', city: 'San Francisco', lat: 37.7749, lon: -122.4194},
    {name: 'US', city: 'Columbus', lat: 39.9612, lon: -82.9988},
    {name: 'US', city: 'Charlotte', lat: 35.2271, lon: -80.8431},
    {name: 'CA', city: 'Toronto', lat: 43.6532, lon: -79.3832},
    {name: 'CA', city: 'Vancouver', lat: 49.2827, lon: -123.1207},
    {name: 'CA', city: 'Montreal', lat: 45.5017, lon: -73.5673},
    {name: 'MX', city: 'Mexico City', lat: 19.4326, lon: -99.1332},
    {name: 'MX', city: 'Guadalajara', lat: 20.6597, lon: -103.3496},
    
    // South America
    {name: 'BR', city: 'São Paulo', lat: -23.5505, lon: -46.6333},
    {name: 'BR', city: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729},
    {name: 'BR', city: 'Brasília', lat: -15.7942, lon: -47.8822},
    {name: 'AR', city: 'Buenos Aires', lat: -34.6037, lon: -58.3816},
    {name: 'CO', city: 'Bogotá', lat: 4.7110, lon: -74.0721},
    {name: 'CL', city: 'Santiago', lat: -33.4489, lon: -70.6693},
    {name: 'PE', city: 'Lima', lat: -12.0464, lon: -77.0428},
    
    // Europe
    {name: 'GB', city: 'London', lat: 51.5074, lon: -0.1278},
    {name: 'GB', city: 'Manchester', lat: 53.4808, lon: -2.2426},
    {name: 'GB', city: 'Birmingham', lat: 52.4862, lon: -1.8904},
    {name: 'FR', city: 'Paris', lat: 48.8566, lon: 2.3522},
    {name: 'FR', city: 'Lyon', lat: 45.7640, lon: 4.8357},
    {name: 'FR', city: 'Marseille', lat: 43.2965, lon: 5.3698},
    {name: 'DE', city: 'Berlin', lat: 52.5200, lon: 13.4050},
    {name: 'DE', city: 'Munich', lat: 48.1351, lon: 11.5820},
    {name: 'DE', city: 'Hamburg', lat: 53.5511, lon: 9.9937},
    {name: 'DE', city: 'Frankfurt', lat: 50.1109, lon: 8.6821},
    {name: 'IT', city: 'Rome', lat: 41.9028, lon: 12.4964},
    {name: 'IT', city: 'Milan', lat: 45.4642, lon: 9.1900},
    {name: 'ES', city: 'Madrid', lat: 40.4168, lon: -3.7038},
    {name: 'ES', city: 'Barcelona', lat: 41.3851, lon: 2.1734},
    {name: 'NL', city: 'Amsterdam', lat: 52.3676, lon: 4.9041},
    {name: 'BE', city: 'Brussels', lat: 50.8503, lon: 4.3517},
    {name: 'CH', city: 'Zurich', lat: 47.3769, lon: 8.5417},
    {name: 'AT', city: 'Vienna', lat: 48.2082, lon: 16.3738},
    {name: 'SE', city: 'Stockholm', lat: 59.3293, lon: 18.0686},
    {name: 'NO', city: 'Oslo', lat: 59.9139, lon: 10.7522},
    {name: 'DK', city: 'Copenhagen', lat: 55.6761, lon: 12.5683},
    {name: 'PL', city: 'Warsaw', lat: 52.2297, lon: 21.0122},
    {name: 'RU', city: 'Moscow', lat: 55.7558, lon: 37.6173},
    {name: 'RU', city: 'Saint Petersburg', lat: 59.9343, lon: 30.3351},
    {name: 'TR', city: 'Istanbul', lat: 41.0082, lon: 28.9784},
    
    // Asia
    {name: 'CN', city: 'Beijing', lat: 39.9042, lon: 116.4074},
    {name: 'CN', city: 'Shanghai', lat: 31.2304, lon: 121.4737},
    {name: 'CN', city: 'Guangzhou', lat: 23.1291, lon: 113.2644},
    {name: 'CN', city: 'Shenzhen', lat: 22.5431, lon: 114.0579},
    {name: 'CN', city: 'Chengdu', lat: 30.6624, lon: 104.0633},
    {name: 'CN', city: 'Hangzhou', lat: 30.2741, lon: 120.1551},
    {name: 'CN', city: 'Wuhan', lat: 30.5928, lon: 114.3055},
    {name: 'CN', city: 'Xi\'an', lat: 34.3416, lon: 108.9398},
    {name: 'JP', city: 'Tokyo', lat: 35.6762, lon: 139.6503},
    {name: 'JP', city: 'Osaka', lat: 34.6937, lon: 135.5023},
    {name: 'JP', city: 'Yokohama', lat: 35.4437, lon: 139.6380},
    {name: 'KR', city: 'Seoul', lat: 37.5665, lon: 126.9780},
    {name: 'KR', city: 'Busan', lat: 35.1796, lon: 129.0756},
    {name: 'IN', city: 'Mumbai', lat: 19.0760, lon: 72.8777},
    {name: 'IN', city: 'Delhi', lat: 28.6139, lon: 77.2090},
    {name: 'IN', city: 'Bangalore', lat: 12.9716, lon: 77.5946},
    {name: 'IN', city: 'Kolkata', lat: 22.5726, lon: 88.3639},
    {name: 'IN', city: 'Chennai', lat: 13.0827, lon: 80.2707},
    {name: 'SG', city: 'Singapore', lat: 1.3521, lon: 103.8198},
    {name: 'MY', city: 'Kuala Lumpur', lat: 3.1390, lon: 101.6869},
    {name: 'TH', city: 'Bangkok', lat: 13.7563, lon: 100.5018},
    {name: 'VN', city: 'Ho Chi Minh City', lat: 10.8231, lon: 106.6297},
    {name: 'PH', city: 'Manila', lat: 14.5995, lon: 120.9842},
    {name: 'ID', city: 'Jakarta', lat: -6.2088, lon: 106.8456},
    {name: 'AE', city: 'Dubai', lat: 25.2048, lon: 55.2708},
    {name: 'IL', city: 'Tel Aviv', lat: 32.0853, lon: 34.7818},
    
    // Africa
    {name: 'ZA', city: 'Johannesburg', lat: -26.2041, lon: 28.0473},
    {name: 'ZA', city: 'Cape Town', lat: -33.9249, lon: 18.4241},
    {name: 'EG', city: 'Cairo', lat: 30.0444, lon: 31.2357},
    {name: 'NG', city: 'Lagos', lat: 6.5244, lon: 3.3792},
    {name: 'KE', city: 'Nairobi', lat: -1.2921, lon: 36.8219},
    {name: 'MA', city: 'Casablanca', lat: 33.5731, lon: -7.5898},
    
    // Oceania
    {name: 'AU', city: 'Sydney', lat: -33.8688, lon: 151.2093},
    {name: 'AU', city: 'Melbourne', lat: -37.8136, lon: 144.9631},
    {name: 'AU', city: 'Brisbane', lat: -27.4698, lon: 153.0251},
    {name: 'AU', city: 'Perth', lat: -31.9505, lon: 115.8605},
    {name: 'NZ', city: 'Auckland', lat: -36.8485, lon: 174.7633},
];

let nodes = [];
let links = [];
let adjacencyMatrix = [];
let distanceMatrix = [];

// Haversine formula to calculate distance between two points on Earth
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Generate 100 nodes at random world cities
function generateNodes() {
    nodes = [];
    const usedCities = new Set();
    let nodeNum = 1;
    const countryCounts = {};
    
    while (nodes.length < 100) {
        const cityIndex = Math.floor(Math.random() * WORLD_CITIES.length);
        const city = WORLD_CITIES[cityIndex];
        
        // Avoid exact duplicates, but allow same city with different numbers
        const cityKey = `${city.name}-${city.city}`;
        if (usedCities.has(cityKey) && Math.random() > 0.3) continue; // 30% chance to allow duplicates
        
        const countryCode = city.name;
        if (!countryCounts[countryCode]) countryCounts[countryCode] = 0;
        countryCounts[countryCode]++;
        
        const nodeId = `${countryCode}${countryCounts[countryCode]}`;
        nodes.push({
            id: nodeId,
            name: nodeId,
            city: city.city,
            country: countryCode,
            lat: city.lat,
            lon: city.lon,
            x: 0,
            y: 0
        });
        
        usedCities.add(cityKey);
    }
    
    // Calculate distance matrix
    distanceMatrix = [];
    for (let i = 0; i < nodes.length; i++) {
        distanceMatrix[i] = [];
        for (let j = 0; j < nodes.length; j++) {
            if (i === j) {
                distanceMatrix[i][j] = 0;
            } else {
                distanceMatrix[i][j] = haversineDistance(
                    nodes[i].lat, nodes[i].lon,
                    nodes[j].lat, nodes[j].lon
                );
            }
        }
    }
}

// Initialize adjacency matrix
function initAdjacencyMatrix() {
    adjacencyMatrix = [];
    for (let i = 0; i < nodes.length; i++) {
        adjacencyMatrix[i] = new Array(nodes.length).fill(0);
    }
}

// Get peer count for a node
function getPeerCount(nodeIndex) {
    return adjacencyMatrix[nodeIndex].reduce((sum, val) => sum + val, 0);
}

// Check if two nodes are connected
function isConnected(nodeIndex1, nodeIndex2) {
    return adjacencyMatrix[nodeIndex1][nodeIndex2] === 1;
}

// Add connection between two nodes
function addConnection(nodeIndex1, nodeIndex2) {
    if (nodeIndex1 === nodeIndex2) return false;
    if (isConnected(nodeIndex1, nodeIndex2)) return false;
    
    const maxPeers = parseInt(document.getElementById('maxPeers').value);
    if (getPeerCount(nodeIndex1) >= maxPeers || getPeerCount(nodeIndex2) >= maxPeers) {
        return false;
    }
    
    adjacencyMatrix[nodeIndex1][nodeIndex2] = 1;
    adjacencyMatrix[nodeIndex2][nodeIndex1] = 1;
    return true;
}

// Calculate shortest paths using Floyd-Warshall
function calculateShortestPaths() {
    const n = nodes.length;
    const dist = [];
    
    // Initialize distance matrix
    for (let i = 0; i < n; i++) {
        dist[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (isConnected(i, j)) {
                dist[i][j] = distanceMatrix[i][j];
            } else {
                dist[i][j] = Infinity;
            }
        }
    }
    
    // Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}

// Calculate average path length
function calculateAveragePathLength() {
    const dist = calculateShortestPaths();
    let sum = 0;
    let count = 0;
    let maxPath = 0;
    
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (dist[i][j] !== Infinity && dist[i][j] > 0) {
                sum += dist[i][j];
                count++;
                maxPath = Math.max(maxPath, dist[i][j]);
            }
        }
    }
    
    return {
        average: count > 0 ? sum / count : 0,
        max: maxPath
    };
}

// Minimum Spanning Tree (Kruskal's algorithm)
function buildMST() {
    initAdjacencyMatrix();
    
    // Create edges with distances
    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            edges.push({
                from: i,
                to: j,
                distance: distanceMatrix[i][j]
            });
        }
    }
    
    // Sort edges by distance
    edges.sort((a, b) => a.distance - b.distance);
    
    // Union-Find data structure
    const parent = Array(nodes.length).fill(0).map((_, i) => i);
    
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
            return true;
        }
        return false;
    }
    
    // Build MST
    for (const edge of edges) {
        if (union(edge.from, edge.to)) {
            addConnection(edge.from, edge.to);
        }
    }
}

// Greedy algorithm to minimize average path length (optimized version)
async function buildGreedy() {
    initAdjacencyMatrix();
    const maxPeers = parseInt(document.getElementById('maxPeers').value);
    
    // Start with a connected base (MST)
    console.log('    - Building MST base...');
    buildMST();
    console.log('    - MST complete, initial links:', links.length);
    
    // Use a faster heuristic: add edges that connect geographically close nodes
    // that are far apart in the current graph
    const maxIterations = 50; // Reduced for performance
    const currentDist = calculateShortestPaths();
    
    // Create candidate edges: nodes that are close geographically but far in graph
    const candidates = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (!isConnected(i, j) && 
                getPeerCount(i) < maxPeers && 
                getPeerCount(j) < maxPeers) {
                const geoDist = distanceMatrix[i][j];
                const graphDist = currentDist[i][j];
                // Prefer edges that are geographically close but graph-distant
                if (graphDist > geoDist * 2) {
                    candidates.push({
                        from: i,
                        to: j,
                        score: graphDist / geoDist // Higher score = better candidate
                    });
                }
            }
        }
    }
    
    // Sort by score and add best ones
    candidates.sort((a, b) => b.score - a.score);
    console.log('    - Found', candidates.length, 'candidate edges');
    
    let added = 0;
    for (let i = 0; i < Math.min(candidates.length, maxIterations * 10); i++) {
        const candidate = candidates[i];
        if (getPeerCount(candidate.from) < maxPeers && 
            getPeerCount(candidate.to) < maxPeers) {
            addConnection(candidate.from, candidate.to);
            added++;
            if (added >= maxIterations) break;
        }
        
        // Yield to browser every 10 edges
        if (i % 10 === 0) {
            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }
    
    console.log('    - Added', added, 'additional edges via greedy selection');
}

// Hybrid algorithm: MST + Greedy (optimized)
async function buildHybrid() {
    console.log('    - Building MST base...');
    buildMST();
    console.log('    - MST complete, applying greedy improvements...');
    await buildGreedy(); // Reuse the optimized greedy function
}

// Build network topology based on selected algorithm
async function buildTopology() {
    const algorithm = document.getElementById('algorithm').value;
    console.log('    - Using algorithm:', algorithm);
    
    switch (algorithm) {
        case 'mst':
            buildMST();
            break;
        case 'greedy':
            await buildGreedy();
            break;
        case 'hybrid':
            await buildHybrid();
            break;
    }
    
    // Convert adjacency matrix to links
    links = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (isConnected(i, j)) {
                links.push({
                    source: nodes[i],
                    target: nodes[j],
                    distance: distanceMatrix[i][j]
                });
            }
        }
    }
    console.log('    - Topology complete, total links:', links.length);
}

// Global variables for 3D scene
let scene3d = null;
let camera3d = null;
let renderer3d = null;
let controls3d = null;
let globeMesh = null;
let nodeMeshes = [];
let linkMeshes = [];
let labelSprites = []; // Store label sprites for scaling
let raycaster = null;
let mouse = new THREE.Vector2();
let animationId = null;

// Convert lat/lon to 3D coordinates on a sphere
function latLonTo3D(lat, lon, radius = 100) {
    const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to radians (0 to π)
    const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to radians (0 to 2π)
    
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(x, y, z);
}

// Create a great circle arc between two points on a sphere
function createGreatCircleArc(start, end, radius = 100, segments = 50) {
    // Normalize vectors
    const v1 = start.clone().normalize();
    const v2 = end.clone().normalize();
    
    // Calculate angle between vectors
    const angle = Math.acos(Math.max(-1, Math.min(1, v1.dot(v2))));
    
    // Create points along the great circle
    const points = [];
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const theta = angle * t;
        
        // Interpolate along the great circle
        const sinTheta = Math.sin(theta);
        const sinAngle = Math.sin(angle);
        
        if (sinAngle === 0) {
            // Points are the same or opposite
            points.push(v1.clone().multiplyScalar(radius));
        } else {
            const a = Math.sin(angle - theta) / sinAngle;
            const b = sinTheta / sinAngle;
            const point = v1.clone().multiplyScalar(a).add(v2.clone().multiplyScalar(b));
            points.push(point.normalize().multiplyScalar(radius));
        }
    }
    
    // Create curve
    const curve = new THREE.CatmullRomCurve3(points);
    return curve;
}

// Visualize network in 3D
function visualize3D() {
    console.log('visualize3D() called, nodes:', nodes.length, 'links:', links.length);
    
    const canvas = document.getElementById('visualization3d');
    if (!canvas) {
        console.error('Canvas element #visualization3d not found!');
        return;
    }
    
    const width = 1200;
    const height = 800;
    
    // Clear previous scene if it exists
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (renderer3d) {
        renderer3d.dispose();
    }
    if (scene3d) {
        // Dispose of geometries and materials
        scene3d.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(m => m.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
    }
    
    // Create scene
    scene3d = new THREE.Scene();
    scene3d.background = new THREE.Color(0xffffff); // White background
    console.log('[3D] Scene created, background set to:', scene3d.background.getHexString());
    
    // Create camera
    camera3d = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera3d.position.set(0, 0, 400);
    
    // Create renderer
    renderer3d = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true,
        alpha: false, // No transparency
        powerPreference: "high-performance"
    });
    renderer3d.setSize(width, height);
    renderer3d.setPixelRatio(window.devicePixelRatio);
    renderer3d.setClearColor(0xffffff, 1.0); // Ensure white background with full opacity
    renderer3d.autoClear = true; // Auto clear with background color
    renderer3d.clear(); // Explicitly clear once
    const clearColor = new THREE.Color();
    renderer3d.getClearColor(clearColor);
    console.log('[3D] Renderer created, clearColor:', clearColor.getHexString(), 'alpha:', renderer3d.getClearAlpha());
    console.log('[3D] Canvas computed background:', window.getComputedStyle(canvas).backgroundColor);
    console.log('[3D] Canvas inline style background:', canvas.style.backgroundColor);
    
    // Also set canvas background via CSS as fallback
    canvas.style.backgroundColor = '#ffffff';
    
    // Add orbit controls
    try {
        if (typeof THREE.OrbitControls !== 'undefined') {
            controls3d = new THREE.OrbitControls(camera3d, renderer3d.domElement);
        } else if (typeof OrbitControls !== 'undefined') {
            controls3d = new OrbitControls(camera3d, renderer3d.domElement);
        } else {
            throw new Error('OrbitControls not found');
        }
        controls3d.enableDamping = true;
        controls3d.dampingFactor = 0.05;
        controls3d.minDistance = 150;
        controls3d.maxDistance = 800;
    } catch (e) {
        console.warn('OrbitControls not available, using manual controls:', e);
        // Simple manual rotation
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        
        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;
                
                const spherical = new THREE.Spherical();
                spherical.setFromVector3(camera3d.position);
                spherical.theta -= deltaX * 0.01;
                spherical.phi += deltaY * 0.01;
                spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
                
                camera3d.position.setFromSpherical(spherical);
                camera3d.lookAt(0, 0, 0);
                
                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        canvas.addEventListener('wheel', (e) => {
            const delta = e.deltaY * 0.01;
            const distance = camera3d.position.length();
            const newDistance = Math.max(150, Math.min(800, distance + delta));
            camera3d.position.normalize().multiplyScalar(newDistance);
        });
    }
    
    // Add lights - bright for good visibility
    const ambientLight = new THREE.AmbientLight(0x808080, 1.2); // Bright ambient
    scene3d.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5); // Bright main light
    directionalLight1.position.set(1, 1, 1);
    scene3d.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8); // Fill light
    directionalLight2.position.set(-1, -1, -1);
    scene3d.add(directionalLight2);
    
    // Add additional light from top for better visibility
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight3.position.set(0, 1, 0);
    scene3d.add(directionalLight3);
    
    // Create globe (sphere) with world map texture
    const globeGeometry = new THREE.SphereGeometry(100, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    // Create globe material - start with fallback, update when texture loads
    const globeMaterial = new THREE.MeshPhongMaterial({
        color: 0x7fb069, // Brighter green for better visibility on white
        transparent: false, // Not transparent - solid
        opacity: 1.0, // Fully opaque
        side: THREE.DoubleSide,
        shininess: 30,
        visible: true, // Ensure it's visible
        emissive: 0x000000, // No emissive initially
        emissiveIntensity: 0.0
    });
    console.log('[3D] Globe material created - color:', globeMaterial.color.getHexString(),
                'emissive:', globeMaterial.emissive ? globeMaterial.emissive.getHexString() : 'none',
                'emissiveIntensity:', globeMaterial.emissiveIntensity,
                'opacity:', globeMaterial.opacity,
                'transparent:', globeMaterial.transparent);
    globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    globeMesh.visible = true; // Explicitly set visible
    scene3d.add(globeMesh);
    console.log('[3D] Globe mesh created, color:', globeMaterial.color.getHexString(), 
                'emissive:', globeMaterial.emissive ? globeMaterial.emissive.getHexString() : 'none',
                'emissiveIntensity:', globeMaterial.emissiveIntensity,
                'map:', globeMaterial.map ? 'present' : 'none',
                'visible:', globeMesh.visible);
    
    // Load world map texture - using a reliable public world map
    const worldMapUrls = [
        'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg'
    ];
    
    // Try to load texture from first available source
    const tryLoadTexture = (urlIndex) => {
        if (urlIndex >= worldMapUrls.length) {
            console.warn('[3D] All world map texture sources failed, using colored globe');
            console.log('[3D] Scene background at fallback:', scene3d.background ? scene3d.background.getHexString() : 'null');
            // Ensure globe stays visible with fallback color
            globeMaterial.color.setHex(0x7fb069); // Bright green
            globeMaterial.visible = true;
            console.log('[3D] Globe material fallback set, color:', globeMaterial.color.getHexString());
            return;
        }
        
        textureLoader.load(
            worldMapUrls[urlIndex],
            function(texture) {
                console.log('[3D] World map texture loaded from source', urlIndex + 1);
                console.log('[3D] Scene background before texture load:', scene3d.background ? scene3d.background.getHexString() : 'null');
                globeMaterial.map = texture;
                globeMaterial.transparent = false; // Solid, not transparent
                globeMaterial.opacity = 1.0; // Fully opaque
                // Brighten the texture for visibility on white background
                globeMaterial.emissive = new THREE.Color(0x444444); // More glow to brighten
                globeMaterial.emissiveIntensity = 0.5; // Higher intensity
                // Use a lighter base color to brighten the texture
                globeMaterial.color.setHex(0xffffff); // White base to brighten texture
                globeMaterial.needsUpdate = true;
                console.log('[3D] Texture applied - ensuring scene background stays white');
                console.log('[3D] Globe material after texture - color:', globeMaterial.color.getHexString(),
                           'emissive:', globeMaterial.emissive.getHexString(),
                           'emissiveIntensity:', globeMaterial.emissiveIntensity,
                           'opacity:', globeMaterial.opacity,
                           'transparent:', globeMaterial.transparent,
                           'map:', globeMaterial.map ? 'present' : 'none');
                scene3d.background = new THREE.Color(0xffffff); // Re-ensure white background
                console.log('[3D] Globe material updated, color:', globeMaterial.color.getHexString());
                console.log('[3D] Scene background after texture load:', scene3d.background ? scene3d.background.getHexString() : 'null');
            },
            undefined,
            function(error) {
                console.warn('[3D] Failed to load texture from source', urlIndex + 1, ', trying next...', error);
                tryLoadTexture(urlIndex + 1);
            }
        );
    };
    
    // Start loading texture
    tryLoadTexture(0);
    
    // Add subtle wireframe for reference - darker for white background
    const wireframeGeometry = new THREE.SphereGeometry(100.1, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc, // Light gray for white background
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene3d.add(wireframe);
    
    // Clear previous meshes
    nodeMeshes = [];
    linkMeshes = [];
    labelSprites = [];
    
    // Create nodes - darker green for visibility on white background
    const nodeGeometry = new THREE.SphereGeometry(2, 16, 16);
    const nodeMaterial = new THREE.MeshPhongMaterial({ color: 0x2e7d32 }); // Darker green
    
    nodes.forEach((node, index) => {
        const position = latLonTo3D(node.lat, node.lon, 100);
        node.position3d = position;
        
        const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
        nodeMesh.position.copy(position);
        nodeMesh.userData = { node: node, index: index };
        scene3d.add(nodeMesh);
        nodeMeshes.push(nodeMesh);
        
        // Add label (using sprite or text) - text with outline, no background box
        const canvas2d = document.createElement('canvas');
        const context = canvas2d.getContext('2d');
        // Make canvas just big enough for text
        context.font = '12px Arial';
        const metrics = context.measureText(node.name);
        const textWidth = metrics.width;
        const textHeight = 12;
        canvas2d.width = textWidth + 8; // Add padding for outline
        canvas2d.height = textHeight + 8;
        
        // Clear canvas (transparent)
        context.clearRect(0, 0, canvas2d.width, canvas2d.height);
        
        // Draw text with outline (stroke)
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = '12px Arial';
        context.strokeStyle = '#ffffff'; // White outline
        context.lineWidth = 3;
        context.lineJoin = 'round';
        context.miterLimit = 2;
        context.strokeText(node.name, canvas2d.width / 2, canvas2d.height / 2);
        context.fillStyle = '#000000'; // Black text
        context.fillText(node.name, canvas2d.width / 2, canvas2d.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas2d);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.position.multiplyScalar(1.02); // Very close to the node surface
        sprite.userData = { node: node, baseScale: 20 }; // Store base scale for distance scaling
        scene3d.add(sprite);
        labelSprites.push(sprite); // Store sprite for scaling updates
    });
    
    // Create links as great circle arcs - use tubes for thicker, more visible lines
    const linkMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333, // Dark gray for better visibility
        opacity: 0.9, 
        transparent: true,
        side: THREE.DoubleSide
    });
    
    links.forEach((link) => {
        const start = latLonTo3D(link.source.lat, link.source.lon, 100);
        const end = latLonTo3D(link.target.lat, link.target.lon, 100);
        
        const curve = createGreatCircleArc(start, end, 100, 50);
        
        // Create a tube geometry for thicker, more visible lines
        const tubeGeometry = new THREE.TubeGeometry(curve, 50, 0.3, 8, false);
        const tube = new THREE.Mesh(tubeGeometry, linkMaterial.clone());
        tube.userData = { link: link };
        scene3d.add(tube);
        linkMeshes.push(tube);
    });
    
    // Raycaster for mouse interaction
    raycaster = new THREE.Raycaster();
    
    // Mouse move handler for tooltips
    let hoveredNode = null;
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera3d);
        const intersects = raycaster.intersectObjects(nodeMeshes);
        
        const tooltip = d3.select('#tooltip');
        
        if (intersects.length > 0) {
            const node = intersects[0].object.userData.node;
            if (hoveredNode !== node) {
                hoveredNode = node;
                // Highlight node
                nodeMeshes.forEach(m => {
                    if (m.userData.node === node) {
                        m.material.color.setHex(0xff6b6b); // Red for hover
                        m.scale.set(1.5, 1.5, 1.5);
                    } else {
                        m.material.color.setHex(0x2e7d32); // Darker green default
                        m.scale.set(1, 1, 1);
                    }
                });
                // Highlight connected links
                linkMeshes.forEach(m => {
                    const link = m.userData.link;
                    if (link.source === node || link.target === node) {
                        m.material.color.setHex(0xff6b6b); // Red for hover
                        m.material.opacity = 1;
                    } else {
                        m.material.color.setHex(0x333333); // Dark gray default
                        m.material.opacity = 0.9;
                    }
                });
                
                tooltip
                    .style('opacity', 1)
                    .html(`<strong>${node.name}</strong><br/>${node.city}, ${node.country}<br/>Peers: ${getPeerCount(nodes.indexOf(node))}`)
                    .style('left', (event.clientX + 10) + 'px')
                    .style('top', (event.clientY - 10) + 'px');
            }
        } else {
            if (hoveredNode) {
                hoveredNode = null;
                nodeMeshes.forEach(m => {
                    m.material.color.setHex(0x2e7d32); // Darker green default
                    m.scale.set(1, 1, 1);
                });
                linkMeshes.forEach(m => {
                    m.material.color.setHex(0x333333); // Dark gray default
                    m.material.opacity = 0.9;
                });
                tooltip.style('opacity', 0);
            }
        }
    });
    
    // Animation loop
    let frameCount = 0;
    function animate() {
        animationId = requestAnimationFrame(animate);
        
        if (controls3d && controls3d.update) {
            controls3d.update();
        }
        
        // Ensure background stays white
        if (scene3d.background) {
            const currentBg = scene3d.background.getHex();
            if (currentBg !== 0xffffff) {
                console.warn('[3D] Frame', frameCount, '- Background changed to', currentBg.toString(16), ', resetting to white');
                scene3d.background.setHex(0xffffff);
            }
        } else {
            console.warn('[3D] Frame', frameCount, '- Background is null, setting to white');
            scene3d.background = new THREE.Color(0xffffff);
        }
        
        // Log every 60 frames (about once per second at 60fps)
        if (frameCount % 60 === 0) {
            const clearColor = new THREE.Color();
            renderer3d.getClearColor(clearColor);
            const globeColor = globeMesh && globeMesh.material ? globeMesh.material.color.getHexString() : 'null';
            const globeEmissive = globeMesh && globeMesh.material && globeMesh.material.emissive ? 
                                 globeMesh.material.emissive.getHexString() : 'none';
            const globeEmissiveIntensity = globeMesh && globeMesh.material ? 
                                           globeMesh.material.emissiveIntensity : 'null';
            const globeMap = globeMesh && globeMesh.material && globeMesh.material.map ? 'present' : 'none';
            console.log('[3D] Frame', frameCount, '- Background:', scene3d.background ? scene3d.background.getHexString() : 'null', 
                       'ClearColor:', clearColor.getHexString(),
                       'Globe visible:', globeMesh ? globeMesh.visible : 'null',
                       'Globe color:', globeColor,
                       'Globe emissive:', globeEmissive,
                       'Globe emissiveIntensity:', globeEmissiveIntensity,
                       'Globe map:', globeMap,
                       'Globe opacity:', globeMesh && globeMesh.material ? globeMesh.material.opacity : 'null');
        }
        
        frameCount++;
        
        // Scale labels based on camera distance to prevent overlap when zooming
        // Labels should get smaller when zooming in (camera closer)
        const cameraDistance = camera3d.position.length();
        const baseDistance = 400; // Reference distance
        // Invert: when camera is closer (smaller distance), scale factor should be smaller
        const scaleFactor = Math.max(0.2, Math.min(1.5, cameraDistance / baseDistance)); // Scale between 0.2x and 1.5x
        
        labelSprites.forEach(sprite => {
            if (sprite.userData.baseScale) {
                const scaledSize = sprite.userData.baseScale * scaleFactor;
                sprite.scale.set(scaledSize, scaledSize * 0.5, 1); // Maintain aspect ratio
            }
        });
        
        // Force clear with white background before rendering
        renderer3d.setClearColor(0xffffff, 1.0);
        if (!scene3d.background) {
            scene3d.background = new THREE.Color(0xffffff);
        } else {
            scene3d.background.setHex(0xffffff);
        }
        
        // Explicitly clear before render
        renderer3d.clear();
        renderer3d.render(scene3d, camera3d);
    }
    
    animate();
    
    console.log('[3D] Visualization complete');
    console.log('[3D] Initial state - Scene background:', scene3d.background ? scene3d.background.getHexString() : 'null');
    const initClearColor = new THREE.Color();
    renderer3d.getClearColor(initClearColor);
    console.log('[3D] Initial state - Renderer clearColor:', initClearColor.getHexString());
    console.log('[3D] Initial state - Globe visible:', globeMesh.visible, 
                'Globe color:', globeMaterial.color.getHexString(),
                'Globe emissive:', globeMaterial.emissive ? globeMaterial.emissive.getHexString() : 'none',
                'Globe emissiveIntensity:', globeMaterial.emissiveIntensity,
                'Globe map:', globeMaterial.map ? 'present' : 'none',
                'Globe opacity:', globeMaterial.opacity);
    console.log('[3D] Canvas element style:', window.getComputedStyle(canvas).backgroundColor);
    console.log('[3D] Canvas element background:', canvas.style.backgroundColor);
}

// Switch between 2D and 3D views
function switchView() {
    const viewMode = document.getElementById('viewMode').value;
    const svg = document.getElementById('visualization');
    const canvas = document.getElementById('visualization3d');
    const viewControls = document.getElementById('viewControls');
    
    if (viewMode === '3d') {
        svg.style.display = 'none';
        canvas.style.display = 'block';
        viewControls.style.display = 'none'; // Hide zoom controls in 3D
        if (nodes.length > 0 && links.length > 0) {
            visualize3D();
        }
    } else {
        svg.style.display = 'block';
        canvas.style.display = 'none';
        viewControls.style.display = 'block';
        if (nodes.length > 0 && links.length > 0) {
            visualize();
        }
    }
}

// Make switchView globally accessible
window.switchView = switchView;

// Visualize network
function visualize() {
    const viewMode = document.getElementById('viewMode')?.value || '2d';
    
    if (viewMode === '3d') {
        visualize3D();
        return;
    }
    
    console.log('visualize() called, nodes:', nodes.length, 'links:', links.length);
    const svg = d3.select('#visualization');
    if (svg.empty()) {
        console.error('SVG element #visualization not found!');
        return;
    }
    svg.selectAll('*').remove();
    
    const width = 1200;
    const height = 800;
    svg.attr('width', width).attr('height', height);
    console.log('SVG dimensions set:', width, 'x', height);
    
    const tooltip = d3.select('#tooltip');
    
    // Create geographic projection (Equirectangular)
    // For equirectangular: x = lon * scale, y = -lat * scale (negative because SVG y increases downward)
    // Scale to fit: 360° longitude = width, 180° latitude = height
    // D3's geoEquirectangular uses scale = width / (2π) for longitude
    // But we need to ensure it fits the full height too
    const projection = d3.geoEquirectangular()
        .scale(Math.min(width, height * 2) / (2 * Math.PI)) // Scale to fit both width and height
        .translate([width / 2, height / 2]); // Center on SVG
    
    // Test the projection with known coordinates
    const testLondon = projection([-0.1278, 51.5074]); // London
    const testNYC = projection([-74.0060, 40.7128]); // New York  
    const testSaoPaulo = projection([-46.6333, -23.5505]); // São Paulo (BR2)
    const testSydney = projection([151.2093, -33.8688]); // Sydney, Australia
    console.log('Projection tests:');
    console.log('  London (0°E, 51°N):', testLondon, 'Expected: ~center-x, ~upper third');
    console.log('  NYC (74°W, 40°N):', testNYC, 'Expected: ~left, ~upper half');
    console.log('  São Paulo (46°W, 23°S):', testSaoPaulo, 'Expected: ~left-center, ~lower half');
    console.log('  Sydney (151°E, 33°S):', testSydney, 'Expected: ~right, ~lower half');
    
    // Create path generator for drawing map features
    const path = d3.geoPath().projection(projection);
    
    // Add world map background (SVG-based for perfect alignment)
    const mapGroup = svg.append('g')
        .attr('class', 'map-background');
    
    // Create a container group for zoom/pan (above the map)
    const container = svg.append('g')
        .attr('class', 'zoom-container');
    
    // Position nodes at their actual geographic coordinates
    // Using the same projection as the map ensures perfect alignment
    // D3 projection expects [longitude, latitude] in degrees
    nodes.forEach((node) => {
        // D3 geo projections expect [longitude, latitude]
        const coords = projection([node.lon, node.lat]);
        if (coords && !isNaN(coords[0]) && !isNaN(coords[1]) && isFinite(coords[0]) && isFinite(coords[1])) {
            node.x = coords[0];
            node.y = coords[1];
            
            // Debug for BR nodes to verify positioning
            if (node.country === 'BR') {
                console.log(`${node.name}: lat=${node.lat}, lon=${node.lon} -> x=${coords[0].toFixed(1)}, y=${coords[1].toFixed(1)}`);
            }
        } else {
            // Fallback to center if projection fails
            console.warn(`Projection failed for ${node.name} at lat=${node.lat}, lon=${node.lon}`);
            node.x = width / 2;
            node.y = height / 2;
        }
    });
    
    // Load and draw world map from TopoJSON
    // Using Natural Earth data for accurate world map
    // Note: Map and nodes use the SAME projection, so they will align perfectly
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(function(world) {
            // Convert TopoJSON to GeoJSON
            const countries = topojson.feature(world, world.objects.countries);
            
            // Draw countries using the same projection as nodes
            mapGroup.selectAll('path')
                .data(countries.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', '#e8f5e9')
                .attr('stroke', '#c8e6c9')
                .attr('stroke-width', 0.5)
                .attr('opacity', 0.4);
            
            console.log('World map loaded and drawn with', countries.features.length, 'countries');
        })
        .catch(function(error) {
            console.warn('Failed to load world map, using fallback:', error);
            // Fallback: draw a simple background
            mapGroup.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', width)
                .attr('height', height)
                .attr('fill', '#e8f4f8')
                .attr('opacity', 0.5);
        });
    
    // Disable force simulation - nodes stay exactly at their geographic positions
    // Create a minimal simulation just for the tick event to update positions
    // but with all forces disabled
    const simulation = d3.forceSimulation(nodes)
        .force('link', null) // Disable link force
        .force('charge', null) // Disable charge force
        .force('center', null) // Disable center force
        .force('collision', null) // Disable collision force
        .alpha(0) // No energy, simulation won't run
        .stop(); // Stop immediately
    
    // Pin all nodes to their geographic positions permanently
    nodes.forEach(node => {
        node.fx = node.x; // Fix x position permanently
        node.fy = node.y; // Fix y position permanently
    });
    
    // Draw links inside container
    const link = container.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('class', 'link')
        .attr('stroke-width', 1.5);
    
    // Draw nodes inside container
    const node = container.append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', 8)
        .attr('fill', '#4CAF50')
        .attr('stroke', '#2e7d32')
        .attr('stroke-width', 2)
        .call(d3.drag()
            .filter(function(event) {
                // Allow dragging only with left mouse button, not when zooming
                return event.button === 0 && !event.ctrlKey && !event.metaKey;
            })
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended))
        .on('mouseover', function(event, d) {
            d3.select(this).classed('selected', true);
            // Highlight connected links
            link.classed('selected-link', l => l.source === d || l.target === d);
            
            tooltip
                .style('opacity', 1)
                .html(`<strong>${d.name}</strong><br/>${d.city}, ${d.country}<br/>Peers: ${getPeerCount(nodes.indexOf(d))}`)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseout', function(event, d) {
            d3.select(this).classed('selected', false);
            link.classed('selected-link', false);
            tooltip.style('opacity', 0);
        })
        .on('click', function(event, d) {
            // Toggle selection
            const isSelected = d3.select(this).classed('selected');
            d3.selectAll('.node').classed('selected', false);
            d3.selectAll('.link').classed('selected-link', false);
            
            if (!isSelected) {
                d3.select(this).classed('selected', true);
                link.classed('selected-link', l => l.source === d || l.target === d);
            }
        });
    
    // Draw labels inside container
    const label = container.append('g')
        .attr('class', 'labels')
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .attr('class', 'node-label')
        .text(d => d.name)
        .attr('dx', 12)
        .attr('dy', 4);
    
    // Set up zoom behavior (after elements are created so they're accessible)
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10]) // Min and max zoom levels
        .on('zoom', function(event) {
            // Transform both map and container together
            mapGroup.attr('transform', event.transform);
            container.attr('transform', event.transform);
            
            // Adjust node sizes to remain visible when zoomed out
            // Scale nodes inversely with zoom (but with a minimum size)
            const scale = event.transform.k;
            const minScale = 0.3; // Don't scale below 30% of original
            const effectiveScale = Math.max(scale, minScale);
            const nodeScale = 1 / effectiveScale; // Inverse scaling
            
            // Update node sizes
            node.attr('r', 8 * nodeScale)
                .attr('stroke-width', 2 * nodeScale);
            
            // Update label font size
            label.attr('font-size', Math.max(10 * nodeScale, 8) + 'px');
            
            // Update link stroke width
            link.attr('stroke-width', 1.5 * nodeScale);
            
            // Update zoom level display
            const zoomLevel = document.getElementById('zoomLevel');
            if (zoomLevel) {
                zoomLevel.textContent = Math.round(event.transform.k * 100) + '%';
            }
        });
    
    // Apply zoom to SVG
    svg.call(zoom);
    
    // Store zoom for reset function
    window.currentZoom = zoom;
    window.currentSvg = svg;
    
    // Add double-click to reset zoom
    svg.on('dblclick.zoom', function() {
        resetZoom();
    });
    
    // Update positions - nodes are fixed, so we just need to set initial positions
    // and update links/labels once
    link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
    
    node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    
    label
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    
    // No tick handler needed since nodes are fixed
    // But keep simulation object for drag functionality
    
    function dragstarted(event, d) {
        // Temporarily release the fixed position for dragging
        d.fx = null;
        d.fy = null;
    }
    
    function dragged(event, d) {
        // Update position while dragging
        d.x = event.x;
        d.y = event.y;
        // Update visual position immediately
        d3.select(this).attr('cx', d.x).attr('cy', d.y);
        // Update connected links
        link.filter(l => l.source === d || l.target === d)
            .attr('x1', l => l.source.x)
            .attr('y1', l => l.source.y)
            .attr('x2', l => l.target.x)
            .attr('y2', l => l.target.y);
        // Update label (label data is the node itself)
        label.filter(function(l) { return l === d; })
            .attr('x', d.x)
            .attr('y', d.y);
    }
    
    function dragended(event, d) {
        // Fix the node at its new dragged position
        d.fx = d.x;
        d.fy = d.y;
    }
}

// Update table
function updateTable() {
    const tbody = d3.select('#tableBody');
    tbody.selectAll('*').remove();
    
    const rows = tbody.selectAll('tr')
        .data(nodes)
        .enter().append('tr');
    
    rows.append('td').text(d => d.name);
    rows.append('td').text(d => `${d.city}, ${d.country}`);
    rows.append('td').text(d => {
        const nodeIndex = nodes.indexOf(d);
        const peers = [];
        for (let i = 0; i < nodes.length; i++) {
            if (isConnected(nodeIndex, i)) {
                peers.push(nodes[i].name);
            }
        }
        return peers.join(', ') || 'None';
    });
    rows.append('td').text(d => {
        const nodeIndex = nodes.indexOf(d);
        return getPeerCount(nodeIndex);
    });
}

// Update statistics
function updateStats() {
    const stats = calculateAveragePathLength();
    document.getElementById('totalNodes').textContent = nodes.length;
    document.getElementById('totalConnections').textContent = links.length;
    document.getElementById('avgPathLength').textContent = stats.average.toFixed(2) + ' km';
    document.getElementById('maxPathLength').textContent = stats.max.toFixed(2) + ' km';
}

// Main function to generate network
async function generateNetwork() {
    console.log('generateNetwork() called');
    const btn = document.getElementById('generateBtn');
    const loading = document.getElementById('loading');
    if (btn) btn.disabled = true;
    if (loading) loading.style.display = 'inline';
    
    try {
        console.log('Starting network generation...');
        console.log('  - Generating nodes...');
        generateNodes();
        console.log('  - Nodes generated:', nodes.length);
        
        console.log('  - Building topology...');
        await buildTopology(); // Now async
        console.log('  - Topology built, links:', links.length);
        
        console.log('  - Visualizing...');
        visualize();
        console.log('  - Visualization complete');
        
        console.log('  - Updating table...');
        updateTable();
        console.log('  - Updating stats...');
        updateStats();
        console.log('✓ Network generation complete!');
    } catch (error) {
        console.error('Error generating network:', error);
        console.error('Stack:', error.stack);
    } finally {
        if (btn) btn.disabled = false;
        if (loading) loading.style.display = 'none';
    }
}

// Reset zoom function
function resetZoom() {
    if (window.currentSvg && window.currentZoom) {
        window.currentSvg.transition()
            .duration(750)
            .call(window.currentZoom.transform, d3.zoomIdentity);
    }
}

// Make functions globally accessible for inline event handlers
window.generateNetwork = generateNetwork;
window.resetZoom = resetZoom;

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Initializing network on DOMContentLoaded');
        generateNetwork();
    });
} else {
    // DOM already loaded
    console.log('Initializing network immediately (DOM already loaded)');
    generateNetwork();
}

