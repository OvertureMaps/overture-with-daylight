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
            "fill-color": "hsl(210, 10%, 17%)"
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
            "fill-color": "hsl(53, 10%, 17%)"
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
            "fill-color": "hsl(190, 26%, 18%)"
        }
    },
    "forest":{
        "id": "forest",
        "type": "fill",
        "source": 'land',
        "source-layer": 'land',
        "filter": ["match", ["get", "class"], ["forest", "grass", "scrub"], true, false],
        "minzoom": 0,
        "maxzoom": 24,
        "paint": {
            "fill-color": "hsl(189, 24%, 17%)"
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
            "fill-color": "hsl(221,39%,36%)"
        }
    }
}
