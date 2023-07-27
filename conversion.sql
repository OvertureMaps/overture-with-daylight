LOAD spatial;

-- Places
-- COPY (
--     SELECT
--         common_name,
--         category,
--         url,
--         social,
--         email,
--         tel,
--         address,
--         sources,
--         ST_GeomFromText(wkt) as geometry
--     FROM 'pnw_places.csv'
--     ) TO 'places.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');


-- Buildings
-- COPY (
--     SELECT
--         "common_name",
--         "level",
--         "height",
--         "numFloors",
--         "class",
--         "sources",
--         ST_GeomFromText(wkt) as geometry
--     FROM 'pnw_buildings.csv'
--     ) TO 'buildings.geojsonseq'
-- WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');

-- Roads
COPY (
    SELECT
        subtype,
        road_class,
        json_extract(json_extract(common_name,'$[0]'),'value') as common_name,
        sources,
        ST_GeomFromText(wkt) as geometry
    FROM read_csv('pnw_segments.csv', header=True,
         COLUMNS={'subtype':'VARCHAR','road_class':'VARCHAR','common_name':'VARCHAR','sources':'VARCHAR','wkt':'VARCHAR'}
    )
    ) TO 'segments.geojsonseq'
WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');
