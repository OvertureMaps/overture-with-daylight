const PLACENAMES = {
    "placeHighZoom": {
        "id": "placeHighZoom",
        "type": "symbol",
        "source": "placenames",
        "source-layer": "placenames",
        "minzoom": 9,
        "maxzoom": 24,
        "filter": ["all", ["has", "name"], ["==", "class", "local"]],
        "layout": {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Bold"],
            "text-size": [
                "step",
                ["zoom"],
                14,
                10,
                ["match", ["get", "subclass"], ["borough"], 14, ["suburb"], 12, 0],
                12,
                ["match", ["get", "subclass"], ["borough"], 16, ["suburb"], 14, ["neighborhood"], 10, 0],
                14,
                ["match", ["get", "subclass"], ["borough"], 18, ["suburb"], 16, ["neighborhood"], 12, 0],
                15,
                ["match", ["get", "subclass"], ["borough"], 20, ["suburb"], 18, ["neighborhood"], 14, 0],
                16,
                ["match", ["get", "subclass"], ["borough"], 20, ["suburb"], 18, ["neighborhood"], 14, ["block"], 12, 0]
            ],
            "text-transform": ["step", ["zoom"], "none", 11, "uppercase"],
            "text-max-width": 6,
            "symbol-avoid-edges": true,
            "symbol-sort-key": ["get", "sort_key"],
            "text-padding": 10,
            "text-justify": "auto"
        },
        "paint": {
            "text-color": [
                "interpolate",
                ["linear"],
                ["zoom"],
                9,
                "hsl(0, 0%, 70%)",
                10,
                ["match", ["get", "subclass"], ["borough"], "hsl(0, 0%, 70%)", ["suburb"], "hsl(0, 0%, 70%)", "hsl(0, 0%, 70%)"],
                11,
                ["match", ["get", "subclass"], ["borough"], "hsl(0, 0%, 70%)", ["suburb", "neighborhood"], "hsl(0, 0%, 70%)", "hsl(0, 0%, 70%)"],
                12,
                "hsl(0, 0%, 70%)",
                14,
                ["match", ["get", "subclass"], ["borough", "suburb"], "hsl(0, 0%, 70%)", ["neighborhood"], "hsl(0, 0%, 80%)", "hsl(0, 0%, 70%)"],
                16,
                ["match", ["get", "subclass"], ["borough", "block"], "hsl(0, 0%, 70%)", ["suburb", "neighborhood"], "hsl(0, 0%, 70%)", "hsl(0, 0%, 70%)"]
            ],
            "text-halo-color": "hsl(210,10%,12%)",
            "text-halo-width": ["match", ["get", "subclass"], ["megacity", "metropolis"], 1, ["city", "municipality"], 1, 1]
        }
    },
    "label-place-midzoom": {
        "id": "label-place-midzoom",
        "type": "symbol",
        "source": "placenames",
        "source-layer": "placenames",
        "minzoom": 8,
        "maxzoom": 24,
        "filter": [
            "all",
            ["has", "name"],
            [
                "step",
                ["zoom"],
                ["==", "$type", "Point"],
                8,
                ["match", ["get", "class"], ["settlement"], true, false],
                9,
                ["match", ["get", "class"], ["urban", "settlement"], true, false]
            ]
        ],
        "layout": {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Bold"],
            "text-size": [
                "step",
                ["zoom"],
                10,
                9,
                ["match", ["get", "subclass"], ["megacity"], 20, ["metropolis"], 18, ["city"], 16, ["municipality"], 14, ["town"], 10, 0],
                10,
                ["match", ["get", "subclass"], ["megacity"], 22, ["metropolis"], 20, ["city"], 18, ["municipality"], 16, ["town"], 12, 0],
                12,
                [
                    "match",
                    ["get", "subclass"],
                    ["megacity"],
                    22,
                    ["metropolis"],
                    20,
                    ["city"],
                    18,
                    ["municipality"],
                    16,
                    ["town"],
                    12,
                    ["village"],
                    10,
                    0
                ],
                14,
                ["match", ["get", "subclass"], ["megacity"], 22, ["metropolis"], 20, ["city"], 18, ["municipality"], 16, ["town"], 14, ["village", "hamlet"], 12, 0],
                15,
                ["match", ["get", "subclass"], ["megacity"], 22, ["metropolis"], 20, ["city"], 18, ["municipality"], 16, ["town"], 14, ["village", "hamlet"], 14, 0],
                16,
                ["match", ["get", "subclass"], ["village", "hamlet"], 16, 0]
            ],
            "text-transform": ["step", ["zoom"], "none", 11, "uppercase"],
            "text-padding": ["step", ["zoom"], 10, 9, 8, 10, 5, 12, 3],
            "text-max-width": 6,
            "symbol-avoid-edges": true,
            "symbol-sort-key": ["get", "sort_key"],
            "text-justify": "auto"
        },
        "paint": {
            "text-color": [
                "interpolate",
                ["linear"],
                ["zoom"],
                8,
                ["match", ["get", "subclass"], ["town"], "hsl(0, 0%, 70%)", "hsl(0, 0%, 70%)"],
                9,
                [
                    "match",
                    ["get", "subclass"],
                    ["megacity", "metropolis", "city"],
                    "hsl(0, 0%, 80%)",
                    ["town", "municipality"],
                    "hsl(0, 0%, 70%)",
                    "hsl(0, 0%, 70%)"
                ],
                10,
                [
                    "match",
                    ["get", "subclass"],
                    ["megacity", "metropolis"],
                    "hsl(0, 0%, 80%)",
                    ["town", "city", "municipality"],
                    "hsl(0, 0%, 70%)",
                    "hsl(0, 0%, 70%)"
                ],
                11,
                [
                    "match",
                    ["get", "subclass"],
                    ["megacity", "metropolis"],
                    "hsl(0, 0%, 80%)",
                    ["town", "village", "city", "municipality"],
                    "hsl(0, 0%, 70%)",
                    "hsl(0, 0%, 70%)"
                ],
                12,
                [
                    "match",
                    ["get", "subclass"],
                    ["megacity", "metropolis"],
                    "hsl(0, 0%, 80%)",
                    ["town", "village", "city", "municipality"],
                    "hsl(0, 0%, 70%)",
                    "hsl(0, 0%, 70%)"
                ],
                14,
                "hsl(0, 0%, 70%)"
            ],
            "text-halo-color": "hsl(210,10%,12%)",
            "text-halo-width": ["match", ["get", "subclass"], ["megacity", "metropolis"], 1, ["city", "municipality"], 1, 1]
        }
    }
}
