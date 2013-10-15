var map = L.mapbox.map('map', 'caarloshugo1.map-vyysqu3h', {attributionControl: false, minZoom: 7, maxZoom:11}).setView([15.538375926292062, -90.08239746093749], 7);
	
/*Grupo 1*/
var g1_tileLayer1   = L.mapbox.tileLayer('caarloshugo1.real_ml_v1').addTo(map);
var g1_gridLayer1   = L.mapbox.gridLayer('caarloshugo1.real_ml_v1').addTo(map);
var g1_gridControl1 = L.mapbox.gridControl(g1_gridLayer1, {follow: true}).addTo(map);

var g1_tileLayer2   = L.mapbox.tileLayer('caarloshugo1.real_usd_v1');
var g1_gridLayer2   = L.mapbox.gridLayer('caarloshugo1.real_usd_v1');
var g1_gridControl2 = L.mapbox.gridControl(g1_gridLayer2, {follow: true});

var g1_tileLayer3   = L.mapbox.tileLayer('caarloshugo1.real_total_clientes_v1');
var g1_gridLayer3   = L.mapbox.gridLayer('caarloshugo1.real_total_clientes_v1');
var g1_gridControl3 = L.mapbox.gridControl(g1_gridLayer3, {follow: true});

$(document).ready(function() {
	//********* G1 ********
	$("#g1-layer1").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer1);
			map.removeLayer(g1_gridLayer1);
			map.removeControl(g1_gridControl1);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer1);
			map.addLayer(g1_gridLayer1);
			map.addControl(g1_gridControl1);
			this.className = 'active';
		}
	});
	
	$("#g1-layer2").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer2);
			map.removeLayer(g1_gridLayer2);
			map.removeControl(g1_gridControl2);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer2);
			map.addLayer(g1_gridLayer2);
			map.addControl(g1_gridControl2);
			this.className = 'active';
		}
	});
	
	$("#g1-layer3").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer3);
			map.removeLayer(g1_gridLayer3);
			map.removeControl(g1_gridControl3);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer3);
			map.addLayer(g1_gridLayer3);
			map.addControl(g1_gridControl3);
			this.className = 'active';
		}
	});
});

function removeLayersG1() {
	if(map.hasLayer(g1_tileLayer1)) {
		map.removeLayer(g1_tileLayer1);
		map.removeLayer(g1_gridLayer1);
		map.removeControl(g1_gridControl1);
		$("#g1-layer1").removeClass('active');
	}
	
	if(map.hasLayer(g1_tileLayer2)) {
		map.removeLayer(g1_tileLayer2);
		map.removeLayer(g1_gridLayer2);
		map.removeControl(g1_gridControl2);
		$("#g1-layer2").removeClass('active');
	}
	
	if(map.hasLayer(g1_tileLayer3)) {
		map.removeLayer(g1_tileLayer3);
		map.removeLayer(g1_gridLayer3);
		map.removeControl(g1_gridControl3);
		$("#g1-layer3").removeClass('active');
	}
}

function removeLayersG2() {
	
}
