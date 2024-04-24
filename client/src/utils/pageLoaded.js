export function pageLoaded(cb) {
    const onPageLoad = () => {
        cb();
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
        onPageLoad();
    } else {
        window.addEventListener('load', onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
    }
}