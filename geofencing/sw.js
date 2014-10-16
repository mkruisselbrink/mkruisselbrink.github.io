this.version = 1.0;

this.oninstalled = function(e) {
  console.log("installed ", e);
};

this.ongeofenceenter = function(e) {
  console.log("geofence enter ", e);
  //var n = new Notification("Geofence entered");
};

this.ongeofencelaeve = function(e) {
  console.log("geofence leave ", e);
  //var n = new Notification("Geofence left");
};

this.onactivate = function(e) {
  console.log("activate ", e);
  //var n = new Notification("SW activated");
};
