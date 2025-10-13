import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const US_STATES = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// State FIPS codes
const VIRGINIA = "51";
const TEXAS = "48";
const OHIO = "39";

// Colors
const HIGHLIGHT_COLOR = "#3BAFA3"; // same for VA, TX, OH
const LAND_COLOR = "#D6DBDF";
const BORDER_COLOR = "#FFFFFF";
// const STAR_COLOR = "#E63F89"; // pink star  ❌ commented out (unused)

// const EXCLUDE = new Set(["02", "15", "60", "66", "69", "72", "78"]); // AK, HI, territories ❌ commented out (unused)

// Coordinates for the Virginia star
const VIRGINIA_COORDS = [-78.6569, 37.4316];

export default function WhereWeWorkMap() {
  return (
    <div className="map-frame">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          zoom={1}
          minZoom={1}
          maxZoom={4}
          zoomStep={0.5}
          enableZoom={true}
          enablePan={true}
        >
          <Geographies geography={US_STATES}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = String(geo.id);

                let fillColor = LAND_COLOR;
                if (id === VIRGINIA || id === TEXAS || id === OHIO) {
                  fillColor = HIGHLIGHT_COLOR;
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: fillColor,
                        stroke: BORDER_COLOR,
                        strokeWidth: 0.6,
                        outline: "none",
                        transition: "fill 0.3s ease",
                      },
                      hover: {
                        fill: fillColor,
                        opacity: 0.9,
                      },
                      pressed: {
                        fill: fillColor,
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* ⭐ Pink star for Virginia */}
          <Marker coordinates={VIRGINIA_COORDS}>
            <text
              textAnchor="middle"
              alignmentBaseline="middle"
              className="virginia-star"
            >
              ★
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
