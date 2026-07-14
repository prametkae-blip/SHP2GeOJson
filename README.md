# SHP2GeoJSON

Convert Shapefile (SHP) to GeoJSON format with ease and visualize on interactive map.

**✨ Project Status: ✅ COMPLETE & WORKING**

**Latest Updates:**
- 🚀 GeoJSON optimized: **27.59 MB → 0.21 MB** (99% reduction)
- 🌍 Hosted on GitHub Pages - ultra-fast loading
- 🗺️ Interactive Leaflet map with OpenStreetMap tiles
- ✅ All bugs fixed - Thailand boundary displays perfectly
- 💚 100% Free & Open Source (Leaflet + OpenStreetMap)

## 🚀 Quick Links

### 🌍 **RECOMMENDED - GitHub Pages (Best)**
**[📍 Open Thailand Map Viewer NOW!](https://prametkae-blip.github.io/SHP2GeOJson/Thailand_Pramet.html)**
- ✅ **Ultra-fast loading** (0.21 MB optimized)
- ✅ No CORS issues
- ✅ No API keys required
- ✅ 100% Free & Open Source

### Alternative Links
| Link | Status |
|------|--------|
| [GitHub Pages](https://prametkae-blip.github.io/SHP2GeOJson/Thailand_Pramet.html) | ✅ **WORKING** |
| [jsDelivr CDN](https://cdn.jsdelivr.net/gh/prametkae-blip/SHP2GeOJson@master/Thailand_Pramet.html) | ⚠️ May show HTML code |
| [HTML Preview](https://htmlpreview.github.io/?https://raw.githubusercontent.com/prametkae-blip/SHP2GeOJson/master/Thailand_Pramet.html) | ⚠️ CORS issues |
| [Local File](output/Thailand_Pramet.html) | ✅ Works if cloned |

> **✅ NO API KEY REQUIRED!** Using Leaflet + OpenStreetMap (100% Free & Open Source)

## Overview

This project provides a simple Node.js script to convert ESRI Shapefiles to GeoJSON format, which is more widely supported by web mapping libraries and GIS applications. Includes an interactive web viewer for visualizing the converted GeoJSON data on Google Maps.

## 🗺️ Features

- **Shapefile to GeoJSON Conversion**: Batch convert SHP files to standard GeoJSON format
- **Web Viewer**: Interactive Leaflet map visualization with side panel statistics
- **Optimized GeoJSON**: 99% file size reduction using mapshaper (27.59 MB → 0.21 MB)
- **Ultra-Fast Loading**: GitHub Pages deployment for instant access
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Feature Support**: Handles Polygons, MultiPolygons, LineStrings, Points, and MultiPoints
- **100% Free & Open Source**: Leaflet + OpenStreetMap, no API keys needed
- **Property Preservation**: All shapefile attributes preserved in GeoJSON properties

## Requirements

- Node.js v14+
- npm

## Installation

```bash
npm install
```

## ⚡ Quick Start (2 Seconds)

**Just want to view the map?**

🌍 **[Open Thailand Map Viewer](https://prametkae-blip.github.io/SHP2GeOJson/Thailand_Pramet.html)** ← Click here!

No installation, no setup, 100% free.

---

## Usage

### 1️⃣ View the Interactive Map

**Online (No Installation Needed):**
- 🌍 **[Open Map Viewer](https://prametkae-blip.github.io/SHP2GeOJson/Thailand_Pramet.html)**
- Works instantly in any browser
- No software installation required

**Local (If You Cloned the Repo):**
- Open `Thailand_Pramet.html` in your web browser
- Or double-click the file

### 2️⃣ Convert Your Own Shapefile to GeoJSON

Place your shapefile files in the `data/` directory:
- `*.shp` - The main shapefile
- `*.dbf` - Attribute database file (required)
- `*.shx` - Shape index file (required)
- `*.prj` - Projection file (optional but recommended)

Then run the conversion:

```bash
npm run convert
```

The output GeoJSON file will be saved to `output/Thailand_Pramet.geojson`

### 2️⃣ View GeoJSON on Interactive Map

Open `Thailand_Pramet.html` in a web browser to visualize the converted GeoJSON data.

**No setup required!** The viewer uses:
- ✅ **Leaflet** - Free, open-source JavaScript mapping library
- ✅ **OpenStreetMap** - Free tile layer
- ✅ **No API keys** - Everything is 100% free!

#### Features of the Web Viewer:
- 🗺️ Interactive map with zoom and pan controls
- 📊 Real-time statistics panel showing feature count and bounds
- 🎨 Color-coded features for easy visualization
- 📱 Responsive design for mobile and desktop
- 🔗 Direct GitHub link for easy access to source code

## Example Workflow

```bash
# 1. Clone the repository
git clone https://github.com/prametkae-blip/SHP2GeOJson.git
cd SHP2GeOJson

# 2. Install dependencies
npm install

# 3. Run conversion (if using your own shapefiles)
npm run convert

# 4. Open in browser to view
# Open Thailand_Pramet.html in your web browser
# Add your Google Maps API key first!
```

## File Structure

```
SHP2GeOJson/
├── Thailand_Pramet.html          # Interactive web viewer
├── convert.js                    # Main conversion script
├── package.json                  # Node.js dependencies
├── package-lock.json             # Dependency lock file
├── README.md                     # This file
├── .gitignore                    # Git configuration
├── data/                         # Input shapefile directory
│   ├── Thailand.shp              # Shapefile (4.5 MB)
│   ├── Thailand.dbf              # Attribute database file
│   ├── Thailand.shx              # Shape index file
│   ├── Thailand.prj              # Projection file
│   └── Thailand.cpg              # Code page file
└── output/                       # Output directory
    └── Thailand_Pramet.geojson   # Output GeoJSON (28.3 MB)
```

## 🎯 GeoJSON Optimization

### File Size Reduction
The project includes optimized GeoJSON using **mapshaper**:

| Version | Size | Status |
|---------|------|--------|
| Original | 27.59 MB | Archived as `.large` |
| Optimized | 0.21 MB | **Active ⚡** |
| Reduction | **99%** | ✅ Maintains quality |

### How It Works
```bash
mapshaper Thailand_Pramet.geojson -simplify 2% keep-shapes -o format=geojson
```

- 2% simplification keeps Thailand boundary recognizable
- Dramatically faster web loading
- GitHub Pages friendly
- Same features & properties preserved

## Output

The conversion creates a GeoJSON FeatureCollection containing:
- All features from the original shapefile
- All attributes preserved as properties
- Standard GeoJSON coordinate system (WGS84 / EPSG:4326)
- **Optimized for web delivery** (0.21 MB)

## Supported Shapefile Types

- Points
- Polylines (LineStrings)
- Polygons
- MultiPoint, MultiLineString, MultiPolygon

## 🎨 Web Viewer Demo (Thailand_Pramet.html) - Powered by Leaflet

The included `Thailand_Pramet.html` provides an interactive web-based viewer for your GeoJSON data using **Leaflet** and **OpenStreetMap**:

**Technology Stack:**
- 🔴 **Leaflet** - Lightweight, open-source mapping library
- 🌍 **OpenStreetMap** - Free, community-driven map tiles
- 💚 **100% Free** - No API keys, no costs, no restrictions

### Viewer Components:
- **Map Panel**: Google Maps displaying your GeoJSON features with color-coded visualization
- **Info Sidebar**: 
  - Feature count
  - Geographic bounds (latitude/longitude)
  - Source file information
  - File size and statistics
- **Header**: Project branding and quick information
- **Footer**: Links to GitHub repository

### Viewer Interactions:

#### 🗺️ Map Controls
```
- Zoom In/Out: Use mouse wheel or +/- buttons
- Pan: Click and drag to move around the map
- Double-Click: Zoom in to a location
- Full Screen: Toggle full screen mode
```

#### 📊 Real-time Statistics
```
- Feature Count: Display number of features loaded
- Geographic Bounds: Show min/max latitude and longitude
- Auto-Update: Statistics update as map loads data
```

#### 🎯 Feature Visualization
```
- Color-Coded Features: Each feature has distinct color (#FF6B6B, #4ECDC4, etc.)
- Polygon Display: Shows boundaries with semi-transparent fill
- Interactive Hover: Features respond to user interaction
- Automatic Bounds: Map centers on loaded features
```

#### 📱 Responsive Features
```
Desktop View:
- Map takes 70% of screen width
- Sidebar displays on right side (300px wide)
- Full statistics panel visible

Mobile View:
- Map takes full width
- Sidebar appears below map
- Touch-friendly controls
- Simplified layout for small screens
```

### Setup Instructions

#### ⚡ Super Simple - Just Click & Open!

No configuration needed. Just pick your preferred method:

**Option 1: Online (Easiest)**
- Click: [📍 Open Viewer (jsDelivr)](https://cdn.jsdelivr.net/gh/prametkae-blip/SHP2GeOJson@master/output/Thailand_Pramet.html)
- Everything loads from CDN - no installation required!

**Option 2: Local Installation**
```bash
# 1. Clone the repository
git clone https://github.com/prametkae-blip/SHP2GeOJson.git
cd SHP2GeOJson

# 2. Open in browser
# Windows: start output/Thailand_Pramet.html
# Mac: open output/Thailand_Pramet.html
# Linux: xdg-open output/Thailand_Pramet.html
```

**Option 3: Web Server**
- Upload `output/` folder to your web server
- Access via: `https://yourserver.com/Thailand_Pramet.html`

#### How to Use the Viewer:
1. ✅ Click the link or open HTML file
2. 🗺️ Interact with the map: zoom, pan, click features
3. 📊 Check sidebar for statistics and bounds
4. 🌍 Powered by OpenStreetMap (free tiles)
5. 🎯 No API keys, no subscriptions, 100% free!

### Browser Requirements:
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Google Maps API)
- JavaScript enabled

### Code Example - Custom Styling:
```javascript
// In Thailand_Pramet.html, you can customize:

// Colors for features
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

// Map initial zoom and center
map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: { lat: 15.8700, lng: 100.9925 }, // Thailand center
});

// Polygon styling
new google.maps.Polygon({
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,  // Adjust transparency
    map: map
});
```

## 🔧 Tips for Conversion

- **Large Shapefiles**: The conversion script handles large shapefiles efficiently
- **Coordinate System**: The output is in WGS84 (EPSG:4326), standard for web mapping
- **Performance**: Use mapshaper to optimize GeoJSON for web use (99% size reduction!)
- **Data Validation**: Always verify the output GeoJSON validity using tools like [geojsonlint.com](https://geojsonlint.com)

## 🐛 Troubleshooting

### Map doesn't load
- ✅ **Solution:** Hard refresh with `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- ✅ Clear browser cache if still issues
- ✅ Check F12 Console for error messages

### GeoJSON file not loading
- ✅ **Cause:** Browser cache showing old version
- ✅ **Fix:** Use Incognito mode or clear cache
- ✅ GitHub Pages may take 30-60 seconds to rebuild

### Slow loading
- ✅ **Cause:** Large GeoJSON file
- ✅ **Fix:** Use mapshaper to simplify (see GeoJSON Optimization section)
- ✅ Project GeoJSON is already optimized (0.21 MB)

### Features don't show on map
- ✅ Zoom out or use map controls
- ✅ Check F12 Console for errors
- ✅ Ensure GeoJSON loaded (check Network tab)

## Troubleshooting

### GeoJSON not loading on map
- Check browser console (F12) for errors
- Ensure Google Maps API key is valid
- Verify GeoJSON file path and format
- Check CORS settings if loading from different domain

### Conversion fails
- Ensure all required shapefile components are present (.shp, .dbf, .shx)
- Check file permissions
- Verify shapefile is not corrupted
- Check Node.js console for error details

## License

MIT

## Author

Pramet

## Links

- **GitHub Repository**: https://github.com/prametkae-blip/SHP2GeOJson
- **GeoJSON Specification**: https://geojson.org/
- **Google Maps API**: https://developers.google.com/maps
- **Shapefile Format**: https://en.wikipedia.org/wiki/Shapefile
