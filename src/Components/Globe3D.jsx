import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

// GeoJSON URL for world map
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Virginia coordinates
const virginiaCoords = {
  name: 'Virginia, USA',
  coordinates: [-78.5, 37.5]
};

export default function WorldMap() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 200,
          center: [-90, 30], // Center on North America
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      >
        <ZoomableGroup zoom={1} center={[-90, 30]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isUSA = geo.properties.name === 'United States';
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isUSA ? '#006D64' : '#E5E7EB',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                        opacity: isUSA && hovered ? 0.8 : 1,
                        transition: 'all 0.3s ease-out'
                      },
                      hover: {
                        fill: isUSA ? '#00A99D' : '#D1D5DB',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#00A99D',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
          
          {/* Virginia Marker */}
          <Marker coordinates={virginiaCoords.coordinates}>
            <g
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                r={hovered ? 8 : 6}
                fill="#E63F89"
                stroke="#FFFFFF"
                strokeWidth={2}
                style={{
                  transition: 'all 0.3s ease-out',
                  filter: hovered ? 'drop-shadow(0 0 8px rgba(230, 63, 137, 0.8))' : 'none'
                }}
              />
              {hovered && (
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#374151',
                    fontSize: 12,
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    textShadow: '0 1px 2px rgba(255,255,255,0.7)'
                  }}
                >
                  {virginiaCoords.name}
                </text>
              )}
            </g>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
