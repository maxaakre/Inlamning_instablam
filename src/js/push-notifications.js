export default () => {
    let servicew;
    //Genereras på servern
    const publicKey = 'BBplhidqNPeLGzhIeXbQf736vi_WOJA3_b8mPS_0a1IWE77wQzojHmgLRw9ks4AQ3NpbSrSOgaD9Sqw4ghTlVfA';

    if ('serviceWorker' in navigator && 'PushManager' in window) {
        //Hämta våran service worker och sedan kolla om vi redan har en subscription
        navigator.serviceWorker.ready.then((sw) => {
            servicew = sw;
            sw.pushManager.getSubscription().then((subscription) => {
                console.log('Is subscribed: ', subscription);
            });
        });
    }

    const urlB64ToUint8Array = (base64String) => {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
        const rawData = atob(base64)
        const outputArray = new Uint8Array(rawData.length)

        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i)
        }

        return outputArray
    }

    //Skickar vår endpoint för att användas på servern
    async function saveSubscription(subscription) {
        const url = 'https://push-notifications-api.herokuapp.com/api/notifications/save';

        const response = await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(subscription), 
            headers: {
                'Content-Type': 'application/json',
            
            }
        });
        const data = await response.json();
        console.log(data)
    }
    // Lägga in en komponent och lyssna på click event
    // godkänner push notiser på sidan
        document.querySelector('#test').addEventListener('click', (event) => {
        event.srcElement.disabled = true;

        //Hämtar eventuell subscription och ifall vi har en så gör vi en unsubscribe
        //Ifall vi inte har subscription så börjar vi prenumerera på notiser och skickar till servern
        //Vår subscription
        servicew.pushManager.getSubscription().then(async (subscription) => {
            if (subscription) {
                subscription.unsubscribe(); //Sluta prenumerera på push notiser
                event.srcElement.disabled = false;
            } else {
                try {
                    //Börja prenumerera på push notiser och returnerar en subscription med en endpoint 
                    //som vi sparar på servern
                    const subscribed = await servicew.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlB64ToUint8Array(publicKey)
                    });
                    saveSubscription(subscribed);
                    console.log(subscribed);
                    event.srcElement.disabled = false;
                } catch (error) {
                    console.log(error)
                }
            }
        });
    });

}