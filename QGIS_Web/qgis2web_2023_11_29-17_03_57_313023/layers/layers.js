var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WhiteDonkeyMiningSite_3 = new ol.format.GeoJSON();
var features_WhiteDonkeyMiningSite_3 = format_WhiteDonkeyMiningSite_3.readFeatures(json_WhiteDonkeyMiningSite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WhiteDonkeyMiningSite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WhiteDonkeyMiningSite_3.addFeatures(features_WhiteDonkeyMiningSite_3);
var lyr_WhiteDonkeyMiningSite_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WhiteDonkeyMiningSite_3, 
                style: style_WhiteDonkeyMiningSite_3,
                interactive: true,
                title: '<img src="styles/legend/WhiteDonkeyMiningSite_3.png" /> White Donkey Mining Site'
            });
var format_FARIN_POINTS_4 = new ol.format.GeoJSON();
var features_FARIN_POINTS_4 = format_FARIN_POINTS_4.readFeatures(json_FARIN_POINTS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FARIN_POINTS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FARIN_POINTS_4.addFeatures(features_FARIN_POINTS_4);
var lyr_FARIN_POINTS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FARIN_POINTS_4, 
                style: style_FARIN_POINTS_4,
                interactive: true,
                title: '<img src="styles/legend/FARIN_POINTS_4.png" /> FARIN_POINTS'
            });
var format_Galadimaminesite_5 = new ol.format.GeoJSON();
var features_Galadimaminesite_5 = format_Galadimaminesite_5.readFeatures(json_Galadimaminesite_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galadimaminesite_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galadimaminesite_5.addFeatures(features_Galadimaminesite_5);
var lyr_Galadimaminesite_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Galadimaminesite_5, 
                style: style_Galadimaminesite_5,
                interactive: true,
                title: '<img src="styles/legend/Galadimaminesite_5.png" /> Galadima mine site '
            });
var format_GALADIMA_POINTS_6 = new ol.format.GeoJSON();
var features_GALADIMA_POINTS_6 = format_GALADIMA_POINTS_6.readFeatures(json_GALADIMA_POINTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GALADIMA_POINTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GALADIMA_POINTS_6.addFeatures(features_GALADIMA_POINTS_6);
var lyr_GALADIMA_POINTS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GALADIMA_POINTS_6, 
                style: style_GALADIMA_POINTS_6,
                interactive: true,
                title: '<img src="styles/legend/GALADIMA_POINTS_6.png" /> GALADIMA_POINTS'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_WhiteDonkeyMiningSite_3.setVisible(true);lyr_FARIN_POINTS_4.setVisible(true);lyr_Galadimaminesite_5.setVisible(true);lyr_GALADIMA_POINTS_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_YandexSatellite_1,lyr_GoogleSatellite_2,lyr_WhiteDonkeyMiningSite_3,lyr_FARIN_POINTS_4,lyr_Galadimaminesite_5,lyr_GALADIMA_POINTS_6];
lyr_WhiteDonkeyMiningSite_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FARIN_POINTS_4.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_Galadimaminesite_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_GALADIMA_POINTS_6.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_WhiteDonkeyMiningSite_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FARIN_POINTS_4.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Galadimaminesite_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_GALADIMA_POINTS_6.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_WhiteDonkeyMiningSite_3.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_FARIN_POINTS_4.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Galadimaminesite_5.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_GALADIMA_POINTS_6.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_GALADIMA_POINTS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});