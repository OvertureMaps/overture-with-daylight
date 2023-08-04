Building a basemap by complementing Overture data with OpenStreetMap features from the Daylight.
===

![Screenshot of Map of Seattle](screenshot.png)

Overture data themes include `transportation`, `buildings`, `places`, and `admins`. A complete basemap, however, will need additional context layers, such as land and water.

For these _context layers_, we can look to the [Daylight Earth Table](https://daylightmap.org/earth/). This dataset is published alongside the [Daylight Map Distribution](https://daylightmap.org), and is created by extracting relevant features from Daylight and organizing them into `theme`, `class`, and `subclass`. If, for example, you are looking for all of the water in the world, you can query the `water` theme. If you only want oceans, there is an `ocean` class. Similarly, there is a `land` theme that includes natural landcover and a `landuse` theme with features relating to land developed by humans.


[Watch our Daylight Earth Table presentation at NACIS 2022](https://www.youtube.com/watch?v=7ea3KZni0AQ).

## Creating the Tilesets

### Obtain the Data

First, determine a bounding box:

```sql
WHERE bbox.minx > -126.7952
    AND bbox.maxx < -118.5453
    AND bbox.miny > 43.5453
    AND bbox.maxy < 50.4344
```

`POLYGON((-126.7952 50.4344, -118.5453 50.4344, -118.5453 43.5453, -126.7952 43.5453, -126.7952 50.4344))`


#### Building the tilesets

Step 1: Use Athena to download a CSV with WKT geometries for the desired area using the bbox filters above.

Step 2: Use DuckDB to convert the CSV to GeoJSONSeq and perform any additional filtering, extraction, etc.

Step 3: Use tippecanoe to create `.pmtiles` archives from the geojson.


### Running Locally
This demo uses `[pmtiles](https://github.com/protomaps/PMTiles)`, so you will need a local http server that can support byte range requests with cors.

On a mac, you can run `http-server --cors .` from the `docs` directory after installing http-server:
`brew install http-server`). Then open http://127.0.0.1
