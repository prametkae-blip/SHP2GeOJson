# SHP2GeoJSON

Convert Shapefile (SHP) to GeoJSON format with ease.

## Overview

This project provides a simple Node.js script to convert ESRI Shapefiles to GeoJSON format, which is more widely supported by web mapping libraries and GIS applications.

## Requirements

- Node.js v14+
- npm

## Installation

```bash
npm install
```

## Usage

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

## Example

```bash
# Install dependencies
npm install

# Run conversion
npm run convert
```

## File Structure

```
SHP2GeOJson/
├── convert.js           # Main conversion script
├── package.json         # Node.js dependencies
├── README.md           # This file
├── data/               # Input shapefile directory
│   ├── Thailand.shp    # Shapefile
│   ├── Thailand.dbf    # Attribute file
│   ├── Thailand.shx    # Index file
│   └── Thailand.prj    # Projection file
└── output/             # Output directory
    └── Thailand_Pramet.geojson  # Output GeoJSON
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

## License

MIT

## Author

Pramet
