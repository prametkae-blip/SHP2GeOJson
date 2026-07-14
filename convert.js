const shapefile = require('shapefile');
const fs = require('fs');
const path = require('path');

async function shp2geojson(shpPath, outputPath) {
  try {
    console.log(`Reading shapefile: ${shpPath}`);

    const source = await shapefile.open(shpPath);
    const collection = { type: 'FeatureCollection', features: [] };

    let result = await source.read();
    while (!result.done) {
      collection.features.push(result.value);
      result = await source.read();
    }

    console.log(`Converting... Found ${collection.features.length} features`);

    fs.writeFileSync(outputPath, JSON.stringify(collection, null, 2));

    console.log(`✓ Successfully converted to: ${outputPath}`);
    console.log(`  File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('Error during conversion:', error.message);
    process.exit(1);
  }
}

// Configuration
const shapefilePath = path.join(__dirname, 'data', 'Thailand.shp');
const outputPath = path.join(__dirname, 'output', 'Thailand_Pramet.geojson');

// Create output directory if it doesn't exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Run conversion
shp2geojson(shapefilePath, outputPath);
