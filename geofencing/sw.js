this.version = 1.0;

this.oninstalled = function(e) {
  console.log("installed ", e);
};

this.ongeofenceenter = function(e) {
  console.log("geofence enter ", e);
};

this.ongeofencelaeve = function(e) {
  console.log("geofence leave ", e);
};

this.onactivate = function(e) {
  console.log("activate ", e);
};
