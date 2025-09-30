import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const WORLD = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const US_STATES = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const BRAND_GREEN = "#006D64";
const LAND_LIGHT = "#E9EDF0";
const LAND_HOVER = "#DCE3E7";
const VIRGINIA_PIN = "#E63F89";

const VA_COORDS = [-77.436, 37.540];
const EXCLUDE = new Set(["02","15","60","66","69","72","78"]); // no AK/HI/territories

export default function WhereWeWorkMap() {
  return (
    <div className="map-frame">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [-28, 12] }}

        
      >
        <ZoomableGroup center={[-20, 12]} zoom={1}>
          <Geographies geography={WORLD}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: LAND_LIGHT, stroke: "#cfd8dc", strokeWidth: 0.5, outline: "none" },
                    hover:   { fill: LAND_HOVER, stroke: "#cfd8dc", strokeWidth: 0.5 },
                    pressed: { fill: LAND_LIGHT },
                  }}
                />
              ))
            }
          </Geographies>

          <Geographies geography={US_STATES}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isContiguous = !EXCLUDE.has(String(geo.id));
                return (
                  <Geography
                    key={`state-${geo.rsmKey}`}
                    geography={geo}
                    style={{
                      default: {
                        fill: isContiguous ? BRAND_GREEN : "transparent",
                        stroke: isContiguous ? "#ffffff" : "transparent",
                        strokeWidth: isContiguous ? 0.6 : 0,
                        outline: "none",
                      },
                      hover:   { fill: isContiguous ? BRAND_GREEN : "transparent" },
                      pressed: { fill: isContiguous ? BRAND_GREEN : "transparent" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <Marker coordinates={VA_COORDS}>
            <circle r={6} fill={VIRGINIA_PIN} stroke="#fff" strokeWidth={2} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
