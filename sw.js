self.addEventListener("push", function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "push message no payload";
  }
  var options = {
    body: body,
    icon: "images/logo.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrivel: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
