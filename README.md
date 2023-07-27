# Building a Map

## Creating the Tilesets

### Obtain the Data
Using this bbox for

```sql
WHERE bbox.minx > -126.7952
    AND bbox.maxx < -118.5453
    AND bbox.miny > 43.5453
    AND bbox.maxy < 50.4344
```

`POLYGON((-126.7952 50.4344, -118.5453 50.4344, -118.5453 43.5453, -126.7952 43.5453, -126.7952 50.4344))`


#### Building the tilesets
`tippecanoe -fo buildings.mbtiles -Z13 -z16 --layer-name=buildings buildings.geojsonseq`
