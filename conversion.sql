LOAD spatial;

-- Places
-- COPY (
--     SELECT
--         name,
--         category,
--         confidence,
--         url,
--         social,
--         email,
--         tel,
--         address,
--         source,
--         ST_GeomFromText(wkt) as geometry
--     FROM 'csv/pnw_places.csv'
--     ) TO 'places.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');


-- Buildings
-- COPY (
--     SELECT
--         "name",
--         "level",
--         "height",
--         "numFloors",
--         "class",
--         "source",
--         ST_GeomFromText(wkt) as geometry
--     FROM read_csv('csv/pnw_buildings.csv', header=True,
--          COLUMNS={
--             'name':'VARCHAR',
--             'level':'INT',
--             'height':'DOUBLE',
--             'numFloors':'INT',
--             'class':'VARCHAR',
--             'source':'VARCHAR',
--             'wkt':'VARCHAR'}
--     )
--     ) TO 'buildings.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');

-- Roads
-- COPY (
--     SELECT
--         subtype,
--         class,
--         name,
--         level,
--         ST_GeomFromText(wkt) as geometry
--     FROM 'csv/pnw_segments.csv'
--     ) TO 'roads.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');


-- Land
-- COPY (
--     SELECT
--         class,
--         subclass,
--         metadata,
--         ST_GeomFromText(wkt) as geometry
--     FROM read_csv('pnw_land.csv', header=True,
--            COLUMNS={'class':'VARCHAR','subclass':'VARCHAR','metadata':'VARCHAR','wkt':'VARCHAR'}
--     )
--     WHERE class <> 'tree'
--     ) TO 'land.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');

-- Water Polygons
-- COPY (
--     SELECT
--         class,
--         subclass,
--         ST_GeomFromText(wkt) as geometry
--     FROM read_csv('pnw_water.csv', header=True,
--            COLUMNS={'class':'VARCHAR','subclass':'VARCHAR','metadata':'VARCHAR','wkt':'VARCHAR'}
--     )
--     WHERE class IN ('ocean','lake')
-- ) TO 'ocean_lake.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');

-- Placenames
-- COPY (
--     SELECT
--         class,
--         subclass,
--         name,
--         ST_GeomFromText(wkt) as geometry
--     FROM read_csv('csv/pnw_placenames.csv', header=True,
--            COLUMNS={'class':'VARCHAR',
--            'subclass':'VARCHAR',
--            'name':'VARCHAR',
--            'wkt':'VARCHAR'})
-- ) TO 'placenames.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');

-- Admins
-- COPY(
--     SELECT
--         common_local_name as name,
--         type,
--         adminLevel,
--         maritime,
--         subtype,
--         localityType,
--         isocountrycodealpha2,
--         isosubcountrycode,
--         defaultlanugage,
--         drivingside,
--         ST_GeomFromText(wkt) as geometry
--     FROM
--         read_csv('csv/pnw_admins.csv', auto_detect=true, max_line_size=10097152)
-- ) TO 'admins.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');


-- Rivers / Streams
COPY (
    SELECT
        class,
        subclass,
        name,
        ST_GeomFromText(wkt) as geometry
    FROM read_csv('csv/pnw_water_names.csv', header=True,
           COLUMNS={'class':'VARCHAR','subclass':'VARCHAR','name':'VARCHAR','wkt':'VARCHAR'}
    )
    WHERE class IN ('river','stream','canal')
) TO 'rivers_streams.geojsonseq'
WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');
