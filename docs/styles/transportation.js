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
            "line-color": "hsl(214, 26%, 85%)"
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
            "line-color": "hsl(214, 36%, 97%)"
        }
    },
    "parkingAisleUnknownCasing": {
        "id": "parkingAisleUnknownCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 14, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["parkingAisle", "unknown"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.25, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.5, 16, 3.5, 22, 75],
            "line-color": ["step", ["zoom"],
                "hsl(216,26%,89%)",
                16, "hsl(214, 26%, 80%)"
            ]
        }
    },
    "residentialCasing": {
        "id": "residentialCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 12, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["residential"], true, false],
        "layout": { "line-cap": "round", "line-join": "round" },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 0.75, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 16, 6, 22, 125],
            "line-color": ["step", ["zoom"],
                "hsl(216,26%,89%)",
                16, "hsl(214, 26%, 80%)"
            ]
        }
    },
    "secondaryTertiaryCasing": {
        "id": "secondaryTertiaryCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 11, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 20, 1.3], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 10, 0.5, 12, 2.2, 16, 6.6, 22, 160],
            "line-color": ["step",["zoom"],
            "hsl(0, 0%, 100%)",
            12,"hsl(216,26%,89%)",
            16,"hsl(214, 26%, 80%)"
        ]
        }
    },
    "primaryCasing": {
        "id": "primaryCasing",
        "type": "line",
        "source": "roads", "source-layer": "roads",
        "minzoom": 8, "maxzoom": 24,
        "filter": ["match", ["get", "class"], ["primary"], true, false],
        "layout": { "line-cap": ["step", ["zoom"], "butt", 16, "round"], "line-join": ["step", ["zoom"], "miter", 16, "round"] },
        "paint": {
            "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 12, 1, 20, 1.4], "line-gap-width": ["interpolate", ["exponential", 1.5], ["zoom"], 8, 0.5, 12, 3.1, 16, 9.3, 22, 175],
            "line-color": ["step",["zoom"],
            "hsl(0, 0%, 100%)",
            10,"hsl(0, 0%, 100%)",
            11,"hsl(0, 0%, 100%)",
            12,"hsl(216,26%,89%)",
            16,"hsl(214, 26%, 80%)"
        ]
        }
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
            "line-color": "hsl(0, 0%, 100%)"
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
            "line-color": "hsl(0, 0%, 100%)"
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
            "line-color": ["step", ["zoom"], "hsl(214, 26%, 80%)",
                11,
                "hsl(214, 26%, 85%)",
                12,
                "hsl(0, 0%, 100%)",
                16,
                "hsl(0, 0%, 100%)"]
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
            "line-color": ["step", ["zoom"],
                "hsl(214, 26%, 69%)",
                10,
                "hsl(214, 26%, 79%)",
                11,
                "hsl(214, 26%, 85%)",
                12,
                "hsl(0, 0%, 100%)",
                16,
                "hsl(0, 0%, 100%)"]
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
            "line-color": [
                "step",
                [
                    "zoom"
                ],
                "hsl(0, 0%, 100%)",
                8,
                "hsl(0, 0%, 100%)",
                10,
                "hsl(0, 0%, 100%)",
                11,
                "hsl(0, 0%, 100%)",
                12,
                "hsl(214, 26%, 77%)",
                16,
                "hsl(214, 26%, 70%)"
            ]
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
            "line-color": ["step", ["zoom"],
                "hsl(214, 26%, 67%)",
                8,
                "hsl(214, 26%, 70%)",
                10,
                "hsl(214, 26%, 75%)",
                11,
                "hsl(214, 26%, 77%)",
                12,
                "hsl(214, 26%, 87%)",
                16,
                "hsl(214, 21%, 85%)"]
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
            "text-color": "hsl(214, 16%, 55%)",
            "text-halo-color": "hsl(0,0%,100%)",
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
            "text-color": "hsl(214, 16%, 45%)",
            "text-halo-color": "hsl(0,0%,100%)",
            "text-halo-width": 1
        }
    }
}
