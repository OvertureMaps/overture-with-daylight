const buildingOffset = {
    "paint": {
        "fill-color": ["match",
            ["get", "class"],
            ["commercial"], "hsl(213, 26%, 68%)",
            "hsl(218, 20%, 72%)"]
    },
    "fill-translate": ["interpolate", ["linear"], ["zoom"],
        12, ["literal", [0.5, 0.5]],
        16, ["literal", [1, 1]],
        20, ["literal", [2, 2]]
    ]
}

const buildingLabel = {
    "layout": {
        "text-field": ["get", "name"],
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 5, "text-size": 9.3,
        "text-line-height": 1,
        "icon-image": "building",
        "text-justify": "auto",
        "text-variable-anchor": ["literal", ["right", "left"]],
        "text-radial-offset": 0.5
    },
    "paint": {
        "text-color": "hsl(0, 0%, 40%)",
        "text-halo-color": "hsl(0,0%,100%)",
        "text-halo-width": 1
    }
}

var BUILDINGS_2D = {
    "buildingOffset_osm": {
        "id": 'buildingOffset_osm',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "paint": buildingOffset.paint,
        "fill-translate": buildingOffset["fill-translate"],
        "filter": ["in", "OpenStreetMap", ["get", "source"]]
    },
    "buildingOffset_esri": {
        "id": 'buildingOffset_esri',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "paint": buildingOffset.paint,
        "fill-translate": buildingOffset["fill-translate"],
        "filter": ["in", "Esri", ["get", "source"]]
    },
    "buildingOffset_msft": {
        "id": 'buildingOffset_msft',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "paint": buildingOffset.paint,
        "fill-translate": buildingOffset["fill-translate"],
        "filter": ["in", "Microsoft", ["get", "source"]]
    },
    "building_osm": {
        "id": 'building_osm',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "filter": ["in", "OpenStreetMap", ["get", "source"]],
        "paint": {
            "fill-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 88%)",
                "hsl(218, 20%, 92%)"],
            "fill-outline-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(213, 26%, 78%)",
                "hsl(213, 20%, 82%)"]
        }
    },
    "building_msft": {
        "id": 'building_msft',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "filter": ["in", "Microsoft", ["get", "source"]],
        "paint": {
            "fill-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 88%)",
                "hsl(218, 20%, 92%)"],
            "fill-outline-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(213, 26%, 78%)",
                "hsl(213, 20%, 82%)"]
        }
    },
    "building_esri": {
        "id": 'building_esri',
        "type": "fill",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "filter": ["in", "Esri", ["get", "source"]],
        "paint": {
            "fill-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 88%)",
                "hsl(218, 20%, 92%)"],
            "fill-outline-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(213, 26%, 78%)",
                "hsl(213, 20%, 82%)"]
        }
    },
    "buildingLabel_osm": {
        "id": "buildingLabel_osm",
        "type": "symbol",
        "source": "buildings", "source-layer": "bulidings",
        "filter": ["all",
            ["has", "name"],
            ["in", "OpenStreetMap", ["get", "source"]]
        ],
        "minzoom": 15,
        "layout": buildingLabel.layout,
        "paint": buildingLabel.paint
    },
    "buildingLabel_esri": {
        "id": "buildingLabel_esri",
        "type": "symbol",
        "source": "buildings", "source-layer": "bulidings",
        "filter": ["all",
            ["has", "name"],
            ["in", "Esri", ["get", "source"]]
        ],
        "minzoom": 15,
        "layout": buildingLabel.layout,
        "paint": buildingLabel.paint
    },
    "buildingLabel_msft": {
        "id": "buildingLabel_msft",
        "type": "symbol",
        "source": "buildings", "source-layer": "bulidings",
        "filter": ["all",
            ["has", "name"],
            ["in", "Microsoft", ["get", "source"]]
        ],
        "minzoom": 15,
        "layout": buildingLabel.layout,
        "paint": buildingLabel.paint
    },
}

var BUILDINGS_3D = {
    "buildingExtruded_osm": {
        "id": 'buildingExtruded_osm',
        "type": "fill-extrusion",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "layout": {
            "visibility": "none"
        },
        "filter": ["in", "OpenStreetMap", ["get", "source"]],
        "paint": {
            "fill-extrusion-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 82%)",
                "hsl(218, 20%, 88%)"
            ],
            "fill-extrusion-base": 0,
            "fill-extrusion-height": ["case",
                ["has", "height"],
                ["to-number", ["get", "height"]], 3.2
            ]
        }
    },
    "buildingExtruded_esri": {
        "id": 'buildingExtruded_esri',
        "type": "fill-extrusion",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "layout": {
            "visibility": "none"
        },
        "filter": ["in", "Esri", ["get", "source"]],
        "paint": {
            "fill-extrusion-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 82%)",
                "hsl(218, 20%, 88%)"
            ],
            "fill-extrusion-base": 0,
            "fill-extrusion-height": ["case",
                ["has", "height"],
                ["to-number", ["get", "height"]], 3.2
            ]
        }
    },
    "buildingExtruded_msft": {
        "id": 'buildingExtruded_msft',
        "type": "fill-extrusion",
        "source": 'buildings',
        "source-layer": 'bulidings',
        "layout": {
            "visibility": "none"
        },
        "filter": ["in", "Microsoft", ["get", "source"]],
        "paint": {
            "fill-extrusion-color": ["match",
                ["get", "class"],
                ["commercial"], "hsl(218, 26%, 82%)",
                "hsl(218, 20%, 88%)"
            ],
            "fill-extrusion-base": 0,
            "fill-extrusion-height": ["case",
                ["has", "height"],
                ["to-number", ["get", "height"]], 3.2
            ]
        }
    }
}
