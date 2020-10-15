var webPush = require("web-push");

const vapidKeys = {
  "publicKey": "BKfv2Le6xihdZfsXGnDRs_KZo71VhL8Z026iuFni3IHsQ1nNY7hUlJD7deyH1Fcdldv8TuhjMjz34J3RGsMCjZw",
  "privateKey": "WPoakOYcupMVa-jqJXiz4X8cwVuJkjXZP8STIBXw67I"
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

var pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/c9HfNT3jXRI:APA91bE5aEYsiWknBveewmw_34XQz0ERXRPwtysHgmEZ_OauYvY6OqVNfXlj9H2MXjaSupqpMwHBLfLZ3GlKfxDXG5SYD_Z0d4Wwq5WoQp6jzZt4mudd0w5_Y8OIGCrI3678J6zG22Sy",
  "keys": {
    "p256dh": "BLC8kKgDDJiemV5BTHzzqzT9KOyAOyBx6vAmIfDLuCDdMW7YCKWJXjxvNiaTQjJKznd6TAikFj0MqlJxwyGBq44=",
    "auth": "lt9b20dpM9KhohVpIoFWYA=="
  }
};

var payload = "Selamat ! Aplikasi anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "305103272492",
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
