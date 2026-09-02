export function beginPlayVideo(className = ".js-autoplay", threshold = 0.5) {
    const videos = document.querySelectorAll(className);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Tente de lire la vidéo (renvoie une promesse pour éviter les erreurs de navigateur)
                video.play().catch(error => {
                    console.warn("L'autoplay a été bloqué. Assurez-vous que la vidéo possède l'attribut 'muted'.", error);
                });
            } else {
                video.pause();
            }
        });
    }, { threshold: threshold });

    videos.forEach(video => observer.observe(video))
}