const EARTH = {
    "land": {
        "id": "land",
        "type": "fill",
        "source": 'land',
        "source-layer": 'land',
        "filter": ["match", ["get", "class"], ["land"], true, false],
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": [
                "interpolate", ["linear"], ["zoom"],
                5, "hsl(216,20%,99%)",
                16, "hsl(216,20%,95%)"
            ]
        }
    },
    "sand": {
        "id": "sand",
        "type": "fill",
        "source": 'land',
        "source-layer": 'land',
        "filter": ["match", ["get", "class"], ["sand"], true, false],
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": "hsl(43, 69%, 95%)"
        }
    },
    "wetland": {
        "id": "wetland",
        "type": "fill",
        "source": 'land',
        "source-layer": 'land',
        "filter": ["match", ["get", "class"], ["wetland"], true, false],
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": "hsl(132, 36%, 89%)"
        }
    },
    "forest": {
        "id": "forest",
        "type": "fill",
        "source": 'land',
        "source-layer": 'land',
        "filter": ["match", ["get", "class"], ["forest", "grass", "scrub"], true, false],
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": "hsl(131, 35%, 90%)"
        }
    },
    "water": {
        "id": "water",
        "type": "fill",
        "source": "water",
        "source-layer": "water",
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": "hsl(204,88%,82%)"
        }
    }
}
