# Saito Blockchain Network Peering Design

## Goal

Derive the optimal network design for a Saito blockchain network. Specifically, how to arrange nodes to minimize propagation delay with the least amount of peering possible.

## Output

An HTML page with:
- SVG diagram showing nodes and their peerings (force-directed layout)
- Interactive visualization (hover, click interactions)
- Table listing each node and its peerings
- Controls to tweak constraints and regenerate the topology

## Requirements & Assumptions

### 1. Input Data

**1.1** Assume 100 nodes total.

**1.2** Nodes are spread across the world in each continent. Latency can be inferred by distance (not accurate, but sufficient for this example).

**1.3** Node list will be created programmatically - 100 nodes at random cities across the world.

**1.4** Node naming convention: `<country code><num>` (e.g., US1, US2, GB1, JP1, etc.)

### 2. Optimization

**2.1** Generate an optimal topology (not just visualization of existing data).

**2.2** Algorithm selection is open to exploration - should explore all possibilities to find the best approach.

**2.3** Constraint: No more than 10 peers per node.

### 3. Network Model

**3.1** Propagation delay is measured using latency (inferred from geographic distance).

**3.2** Use equal latency for all connections initially (can be extended later).

**3.3** Optimization goal: Minimize average propagation delay across all node pairs.

### 4. Visualization

**4.1** Use force-directed graph layout for node positioning.

**4.2** Each node should have a label showing its name.

**4.3** Interactive features (hover, click) are desired.

### 5. Output Format

**5.1** Should be tweakable - ability to adjust constraints and generate new output dynamically.

**5.2** Technology choice: D3.js is acceptable, but implementation details are flexible.

## Implementation Notes

- Nodes are generated at random world cities with geographic coordinates
- Latency is calculated using great circle distance (Haversine formula)
- Topology optimization algorithm will explore various graph algorithms to minimize average propagation delay
- Maximum peers per node: 10 (configurable)
- Interactive controls allow tweaking constraints and regenerating the network topology
- Supports both 2D map view and 3D globe view with rotation controls

## Running the Application

This application requires a local HTTP server to run properly (due to CORS restrictions when loading external resources). Here are several ways to run it:

### Option 1: Python HTTP Server (Recommended)

If you have Python 3 installed:

```bash
# Python 3
python3 -m http.server 8000
```

Or with Python 2:

```bash
# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Node.js HTTP Server

If you have Node.js installed, you can use `http-server`:

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run the server
http-server -p 8000
```

Or use `npx` without installing:

```bash
npx http-server -p 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 3: PHP Built-in Server

If you have PHP installed:

```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 4: VS Code Live Server

If you're using VS Code, you can install the "Live Server" extension and use it to serve the files.

## Usage

1. Open `index.html` in your browser via one of the HTTP server methods above
2. Click "Generate Network" to create a network topology
3. Use the "View Mode" dropdown to switch between:
   - **2D Map**: Traditional map view with zoom/pan controls
   - **3D Globe**: Interactive 3D globe that can be rotated and zoomed
4. Adjust "Max Peers per Node" and "Optimization Algorithm" settings as needed
5. Hover over nodes to see details and highlight connections
6. In 3D mode, drag to rotate the globe and use mouse wheel to zoom

## Features

- **2D Map View**: Geographic map with nodes positioned at their actual locations
- **3D Globe View**: Rotatable 3D globe showing connections as great circle arcs (shortest paths)
- **Interactive Controls**: Adjust network parameters and regenerate topology
- **Multiple Algorithms**: Choose from MST, Greedy, or Hybrid optimization algorithms
- **Node Details**: Hover to see node information and connected peers

# saito-peering-design-sim
