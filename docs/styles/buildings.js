var extruded_view = false;

const OSM_BUILDING_LAYERS = [
    'buildingLabel_osm', 'buildingOffset_osm', 'building_osm'
]
const ESRI_BUILDING_LAYERS = [
    'buildingLabel_esri', 'buildingOffset_esri', 'building_esri'
]

const MSFT_BUILDING_LAYERS = [
    'buildingLabel_msft', 'buildingOffset_msft','building_msft'
]

var ALL_BUILDING_LAYERS = OSM_BUILDING_LAYERS.concat(ESRI_BUILDING_LAYERS).concat(MSFT_BUILDING_LAYERS)

const buildingOffset = {
    "paint": {
        "fill-color": ["match",
            ["get", "class"],
            ["commercial"], "hsl(193,14%,19%)",
            "hsl(193,8%,15%)"]
    },
    "fill-translate": ["interpolate", ["linear"], ["zoom"],
        12, ["literal", [0.5, 0.5]],
        16, ["literal", [1, 1]],
        20, ["literal", [2, 2]]
    ]
}

const buildings = {
    "paint": {
        "fill-color": ["match",
            ["get", "class"],
            ["commercial"], "hsl(193,14%,24%)",
            "hsl(193,8%,20%)"],
        "fill-outline-color": ["match",
            ["get", "class"],
            ["commercial"], "hsl(193,14%,28%)",
            "hsl(193,8%,25%)"]
    }
}

const buildingExtruded = {
    "paint":{
        "fill-extrusion-color": ["match",
            ["get", "class"],
            ["commercial"], "hsl(193,14%,24%)",
            "hsl(193,8%,20%)"
        ],
        "fill-extrusion-base": 0,
        "fill-extrusion-height": ["case",
            ["has", "height"],
            ["to-number", ["get", "height"]], 3.2
        ]
    }

}

const buildingLabel = {
    "source": "buildings", "source-layer": "bulidings",
    "filter": ["has", "name"],
    "minzoom": 15,
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
        "text-color": "hsl(193, 8%, 63%)",
        "text-halo-color": "hsl(193,8%,13%)",
        "text-halo-width": 1
    }
}
