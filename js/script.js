if('serviceWorker' in navigator){
    window.addEventListener('load', function () {
        navigator.serviceWorker
        .register('service-worker.js')
        .then(function () {
        console.log('Service Worker Registered! 🎉'); 
        })
    })
}