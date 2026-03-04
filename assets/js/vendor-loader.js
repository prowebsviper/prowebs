window.loadScriptOnce = function(url, globalNameCheck) {
    return new Promise((resolve, reject) => {
        if (window[globalNameCheck]) {
            resolve(window[globalNameCheck]);
            return;
        }

        // Check if script tag already exists
        if (document.querySelector(`script[src="${url}"]`)) {
             // Wait for it to load
             const interval = setInterval(() => {
                 if (window[globalNameCheck]) {
                     clearInterval(interval);
                     resolve(window[globalNameCheck]);
                 }
             }, 100);
             return;
        }

        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = () => resolve(window[globalNameCheck]);
        script.onerror = reject;
        document.head.appendChild(script);
    });
};
