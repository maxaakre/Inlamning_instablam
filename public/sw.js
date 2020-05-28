const staticCacheName = "static-files";
const assets = ["/", "/index.html", "/offline.html"];

self.addEventListener("install", (evt) => {
  console.log(self);
  self.skipWaiting();
  console.log(evt);
  console.log("SW installed at: ", new Date().toLocaleTimeString());
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  self.skipWaiting();
  console.log("SW activated at: ", new Date().toLocaleTimeString());
});

self.addEventListener("fetch", (evt) => {
  console.log(evt.request.url);
  if (!navigator.onLine) {
    evt.respondWith(
      caches.match(evt.request).then((response) => {
        console.log("RESPONSE: ", response);
        if (response) {
          return response;
        } else {
          return caches.match(new Request("offline.html"));
        }
      })
    );
  } else {
    console.log("Online!");
    if (evt.request.method === "GET") {
      return updateCache(evt.request);
    } else {
      return fetch(evt.request);
    }
  }
});

//Lyssnar efter push notiser
self.addEventListener("push", (event) => {
  console.log("push");
  if (event.data) {
    createNotification(event.data.text());
  }
});

//Skapar en notifikation med Web notifications API
const createNotification = (text) => {
  self.registration.showNotification("Detta är en pushnotise", {
    body: text,
    icon: "./images/icons/icon192x192.png",
  });
};

function updateCache(request) {
  return fetch(request).then((response) => {
    if (response) {
      return caches.open(staticCacheName).then((cache) => {
        return cache.put(request, response.clone()).then(() => {
          return response;
        });
      });
    }
  });
}
