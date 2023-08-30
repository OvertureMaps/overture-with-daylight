const TRANSPORTATION = {
    "footwayCasing": {
        "id": "footwayCasing",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["footway"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.25, 20, 1.3],
            "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 16, 3, 22, 25],
            "line-color": "hsl(219,12%,15%)"
        }
    },
    "footway": {
        "id": "footway",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 15,
        "maxzoom": 24,
        "filter":
            ["match", ["get", "class"], ["footway"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 16, 3, 22, 25],
            "line-color": ["step", ["zoom"], "hsl(219,8%,27%)", 17, "hsl(219,8%,23%)"]
        }
    },
    "parkingAisleUnknownCasing": {
        "id": "parkingAisleUnknownCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 14, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["parkingAisle", "unknown"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.25, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 16, 3.5, 22, 75], "line-color": ["step", ["zoom"], "hsl(219,8%,15%)", 10, "hsl(219,10%,15%)", 11, "hsl(219,12%,15%)", 12, "hsl(219,12%,20%)", 16, "hsl(219,12%,20%)"] }
    },
    "residentialCasing" : {
        "id": "residentialCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 12, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["residential"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 16, 6, 22, 125], "line-color": ["step", ["zoom"], "hsl(219,8%,15%)", 10, "hsl(219,10%,15%)", 11, "hsl(219,12%,15%)", 12, "hsl(219,12%,20%)", 16, "hsl(219,12%,20%)"] }
    },
    "secondaryTertiaryCasing": {
        "id": "secondaryTertiaryCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 11, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 0.5, 12, 2.2, 16, 6.6, 22, 160], "line-color": ["step", ["zoom"], "hsl(219,10%,15%)", 11, "hsl(219,12%,15%)", 12, "hsl(219,12%,15%)", 13, "hsl(219,12%,15%)"] }
    },
    "primaryCasing": {
        "id": "primaryCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 8, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["primary"], true, false],
        "layout": { "line-cap": ["step", ["zoom"], "butt", 16, "round"], "line-join": ["step", ["zoom"], "miter", 16, "round"] },
        "paint": { "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 20, 1.4], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 8, 0.5, 12, 3.1, 16, 9.3, 22, 175], "line-color": ["step", ["zoom"], "hsl(219,10%,15%)", 10, "hsl(219,10%,15%)", 11, "hsl(219,12%,15%)", 12, "hsl(219,8%,15%)", 16, "hsl(219,12%,15%)"] }
    },
    "parkingAisleUnknown": {
        "id": "parkingAisleUnknown",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 14,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["parkingAisle", "unknown"], true, false],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": [
                "interpolate",
                [
                    "exponential",
                    1.5
                ],
                [
                    "zoom"
                ],
                12,
                0.5,
                16,
                3.5,
                22,
                75
            ],
            "line-color": [
                "step",
                [
                    "zoom"
                ],
                "hsl(219,10%,35%)",
                10,
                "hsl(219,10%,30%)",
                11,
                "hsl(219,11%,25%)",
                12,
                "hsl(219,11%,30%)",
                16,
                "hsl(219,12%,30%)"
            ]
        }
    },
    "residential": {
        "id": "residential",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["residential"], true, false],
        "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 16, 6, 22, 125],
            "line-color": ["step", ["zoom"], "hsl(219,10%,35%)", 10, "hsl(219,10%,30%)", 11, "hsl(219,11%,25%)", 12, "hsl(219,11%,30%)", 16, "hsl(219,12%,30%)"]
        }
    },
    "secondaryTertiary": {
        "id": "secondaryTertiary",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        "layout": { "line-cap": ["step", ["zoom"], "butt", 13, "round"], "line-join": ["step", ["zoom"], "miter", 13, "round"] },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 0.5, 12, 2.2, 16, 6.6, 22, 160],
            "line-color": ["step", ["zoom"], "hsl(219,10%,30%)", 11, "hsl(219,11%,25%)", 12, "hsl(219,11%,25%)", 16, "hsl(219,12%,30%)"]
        }
    },
    "primary": {
        "id": "primary",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 8,
        "maxzoom": 24,
        "filter":
            ["match", ["get", "class"], ["primary"], true, false],
        "layout": {
            "line-cap": ["step", ["zoom"], "butt", 13, "round"],
            "line-join": ["step", ["zoom"], "miter", 13, "round"]
        },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 8, 0.5, 12, 3.1, 16, 9.3, 22, 175],
            "line-color": ["step", ["zoom"], "hsl(219,10%,45%)", 10, "hsl(219,10%,40%)", 11, "hsl(219,11%,35%)", 12, "hsl(219,11%,35%)", 16, "hsl(219,12%,30%)"]
        }
    },
    "motorwayCasing": {
        "id": "motorwayCasing",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 6,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["motorway"], true, false],
        "layout": {
            "line-cap": ["step", ["zoom"], "butt", 13, "round"],
            "line-join": ["step", ["zoom"], "miter", 13, "round"]
        },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 20, 1.4],
            "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 6, 0.5, 12, 3.3, 16, 9.9, 22, 175],
            "line-color": "hsl(219,8%,15%)"
        }
    },
    "motorway": {
        "id": "motorway",
        "type": "line",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 6,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["motorway"], true, false],
        "layout": {
            "line-cap": ["step", ["zoom"], "butt", 12, "round"],
            "line-join": ["step", ["zoom"], "miter", 12, "round"]
        },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 6, 0.5, 12, 3.3, 16, 9.9, 22, 175],
            "line-color": ["step", ["zoom"], "hsl(219,12%,50%)", 8, "hsl(219,12%,50%)", 10, "hsl(219,10%,45%)", 11, "hsl(219,10%,45%)", 12, "hsl(219,10%,45%)", 16, "hsl(219,8%,38%)"]
        }
    },

    // Road Labels
    "residentialLabel": {
        "id": "residentialLabel",
        "type": "symbol",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["residential", "unknown"], true, false],
        "layout": {
            "text-size": ["interpolate", ["linear"], ["zoom"],
                13, 9,
                18, ["match", ["get", "class"], ["access", "path"], 12, 14]],
            "text-max-angle": 30,
            "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 13, 200, 16, 400],
            "text-field": ["to-string", ["get", "commoname"]],
            "text-font": ["Noto Sans Regular"],
            "symbol-placement": "line", "text-padding": 5
        },
        "paint": {
            "text-color": "hsl(0, 0%, 70%)",
            "text-halo-color": "hsl(210,10%,12%)",
            "text-halo-width": 1
        }
    },
    "highwayLabel": {
        "id": "highwayLabel",
        "type": "symbol",
        "source": "roads",
        "source-layer": "roads",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["motorway", "primary", "secondary", "tertiary"], true, false],
        "layout": {
            "text-size": ["interpolate", ["linear"], ["zoom"],
                13, 11,
                18, ["match", ["get", "class"], ["access", "path"], 12, 14]],
            "text-max-angle": 30,
            "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 13, 200, 16, 400],
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Bold"],
            "symbol-placement": "line", "text-padding": 5
        },
        "paint": {
            "text-color": "hsl(0, 0%, 80%)",
            "text-halo-color": "hsl(210,10%,12%)",
            "text-halo-width": 1
        }
    }
}
