Building a (Complete) Map by complementing Overture Data with Daylight OSM
===

## Creating the Tilesets

### Obtain the Data

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
