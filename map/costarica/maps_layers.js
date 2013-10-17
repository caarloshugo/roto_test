var map = L.mapbox.map('map', 'caarloshugo1.map-w2a9k33v', {attributionControl: false, minZoom: 7, maxZoom:11}).setView([9.714471509337628, -83.77349853515625], 7);
	
/*Grupo 1*/
var g1_tileLayer1   = L.mapbox.tileLayer('caarloshugo1.cr_real_ml_v1').addTo(map);
var g1_gridLayer1   = L.mapbox.gridLayer('caarloshugo1.cr_real_ml_v1').addTo(map);
var g1_gridControl1 = L.mapbox.gridControl(g1_gridLayer1, {follow: true}).addTo(map);

var g1_tileLayer2   = L.mapbox.tileLayer('caarloshugo1.cr_real_usd_v1');
var g1_gridLayer2   = L.mapbox.gridLayer('caarloshugo1.cr_real_usd_v1');
var g1_gridControl2 = L.mapbox.gridControl(g1_gridLayer2, {follow: true});

var g1_tileLayer3   = L.mapbox.tileLayer('caarloshugo1.cr_real_total_clientes_v1');
var g1_gridLayer3   = L.mapbox.gridLayer('caarloshugo1.cr_real_total_clientes_v1');
var g1_gridControl3 = L.mapbox.gridControl(g1_gridLayer3, {follow: true});

var g1_tileLayer4   = L.mapbox.tileLayer('caarloshugo1.cr_promesas_ml_v1');
var g1_gridLayer4   = L.mapbox.gridLayer('caarloshugo1.cr_promesas_ml_v1');
var g1_gridControl4 = L.mapbox.gridControl(g1_gridLayer4, {follow: true});

var g1_tileLayer5   = L.mapbox.tileLayer('caarloshugo1.cr_promesas_usd_v1');
var g1_gridLayer5   = L.mapbox.gridLayer('caarloshugo1.cr_promesas_usd_v1');
var g1_gridControl5 = L.mapbox.gridControl(g1_gridLayer5, {follow: true});

var g1_tileLayer6   = L.mapbox.tileLayer('caarloshugo1.cr_promesas_total_clientes_v1');
var g1_gridLayer6   = L.mapbox.gridLayer('caarloshugo1.cr_promesas_total_clientes_v1');
var g1_gridControl6 = L.mapbox.gridControl(g1_gridLayer6, {follow: true});

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
	
	$("#g1-layer4").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer4);
			map.removeLayer(g1_gridLayer4);
			map.removeControl(g1_gridControl4);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer4);
			map.addLayer(g1_gridLayer4);
			map.addControl(g1_gridControl4);
			this.className = 'active';
		}
	});
	
	$("#g1-layer5").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer5);
			map.removeLayer(g1_gridLayer5);
			map.removeControl(g1_gridControl5);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer5);
			map.addLayer(g1_gridLayer5);
			map.addControl(g1_gridControl5);
			this.className = 'active';
		}
	});
	
	$("#g1-layer6").click( function () {
		removeLayersG1();
		
		if(this.className === 'active') {
			map.removeLayer(g1_tileLayer6);
			map.removeLayer(g1_gridLayer6);
			map.removeControl(g1_gridControl6);
			this.className = '';
		} else {
			map.addLayer(g1_tileLayer6);
			map.addLayer(g1_gridLayer6);
			map.addControl(g1_gridControl6);
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
	
	if(map.hasLayer(g1_tileLayer4)) {
		map.removeLayer(g1_tileLayer4);
		map.removeLayer(g1_gridLayer4);
		map.removeControl(g1_gridControl4);
		$("#g1-layer4").removeClass('active');
	}
	
	if(map.hasLayer(g1_tileLayer5)) {
		map.removeLayer(g1_tileLayer5);
		map.removeLayer(g1_gridLayer5);
		map.removeControl(g1_gridControl5);
		$("#g1-layer5").removeClass('active');
	}
	
	if(map.hasLayer(g1_tileLayer6)) {
		map.removeLayer(g1_tileLayer6);
		map.removeLayer(g1_gridLayer6);
		map.removeControl(g1_gridControl6);
		$("#g1-layer6").removeClass('active');
	}
}

function removeLayersG2() {
	
}
