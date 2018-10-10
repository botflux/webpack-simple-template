import '../css/app.css'
if (window.innerWidth >= 768) {
    import('../css/app-desktop.css')
}

/**
 * Exemple avec Lazy loading
 */
document.querySelector('[button]').addEventListener('click', _ => {
    import('./alert.js').then(a => {
        a.default()
    })
})