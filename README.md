# SHP2GeoJSON

Convert Shapefile (SHP) to GeoJSON format with ease and visualize on Google Maps.

## Overview

This project provides a simple Node.js script to convert ESRI Shapefiles to GeoJSON format, which is more widely supported by web mapping libraries and GIS applications. Includes an interactive web viewer for visualizing the converted GeoJSON data on Google Maps.

## 🗺️ Features

- **Shapefile to GeoJSON Conversion**: Batch convert SHP files to standard GeoJSON format
- **Web Viewer**: Interactive Google Maps visualization with side panel statistics
- **Responsive Design**: Works on desktop and mobile devices
- **Feature Support**: Handles Polygons, MultiPolygons, LineStrings, Points, and MultiPoints
- **Property Preservation**: All shapefile attributes preserved in GeoJSON properties

## Requirements

- Node.js v14+
- npm

## Installation

```bash
npm install
```

## Usage

### 1️⃣ Convert Shapefile to GeoJSON

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

### 2️⃣ View GeoJSON on Google Maps

Open `index.html` in a web browser to visualize the converted GeoJSON data.

**Important:** You need to add your Google Maps API key to the `index.html` file:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script>
```

Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key from [Google Cloud Console](https://console.cloud.google.com/).

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
# Open index.html in your web browser
# Add your Google Maps API key first!
```

## File Structure

```
SHP2GeOJson/
├── index.html                    # Interactive web viewer
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

## Output

The conversion creates a GeoJSON FeatureCollection containing:
- All features from the original shapefile
- All attributes preserved as properties
- Standard GeoJSON coordinate system (WGS84 / EPSG:4326)

## Supported Shapefile Types

- Points
- Polylines (LineStrings)
- Polygons
- MultiPoint, MultiLineString, MultiPolygon

## Web Viewer Demo

The included `index.html` provides an interactive web-based viewer for your GeoJSON data:

### Viewer Components:
- **Map Panel**: Google Maps displaying your GeoJSON features with color-coded visualization
- **Info Sidebar**: 
  - Feature count
  - Geographic bounds (latitude/longitude)
  - Source file information
  - File size and statistics
- **Header**: Project branding and quick information
- **Footer**: Links to GitHub repository

### How to Use the Viewer:
1. Ensure you have a valid Google Maps API key
2. Update the API key in `index.html`
3. Place your GeoJSON file in the `output/` directory
4. Open `index.html` in any modern web browser
5. Interact with the map: zoom, pan, and explore your data

### Browser Requirements:
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Google Maps API)
- JavaScript enabled

## Tips for Conversion

- **Large Shapefiles**: The conversion script handles large shapefiles efficiently
- **Coordinate System**: The output is in WGS84 (EPSG:4326), standard for web mapping
- **Performance**: GeoJSON files can be large; consider simplifying for web use
- **Data Validation**: Always verify the output GeoJSON validity using tools like [geojsonlint.com](https://geojsonlint.com)

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
