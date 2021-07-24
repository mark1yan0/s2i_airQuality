Argomentare tutti i settaggi di webapck
leaflet

<h1>Air Quality | Progetto JavaScript Advanced Start2Impact</h1>

<h5>Table of Contents</h5>
<ol>
    <li><a href="#about">About The Project</a>
        <ul>
            <li><a href="#built">Built With</a></li>
        </ul>
    </li>
    <li><a href="#started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
</ol>

<h3 id="about">About The Project</h3>
<p>Come da richiesta l'applicazione richiede inizialmente la posizione dell'utente e se viene rifiutata ricade su una posizione arbitraria.</p>
<p>In seguito l'app richiede le informazioni all'api e ritorna dati sulla qualità dell'aria e posizione del luogo che è anche visualizzata sulla mappa.</p>

<p>In base alla qualità dell'aria i colori degli sfondi cambiano, e cambia anche il testo delle informazioni in basso.</p>

<p>Grazie a WebPack ho avuto un approccio modulare, cercando di separare in categorie le varie parti dello script. Inoltre ho nascoso la chiave dell'API di Aqicn poichè è una enviroment variable.
Inoltre ho separato lo sviluppo in develpment e production.</p>

<h4 id="built">Built With</h4>
<p>L'applicazione è stata costruita con HTML, CSS, vanilla JavaScript, l'API di <a href="https://aqicn.org/">Aqicn</a>, libreria <a href="https://leafletjs.com/">LeafletJS</a> e <a href="https://webpack.js.org/">WebPack</a>.</p>

<h3 id="usage">Usage</h3>
<p>Per iniziare basta accettare di condividere la posizione, e anche se non lo si fa, la barra di ricerca permette di cercare le città di tutto il mondo.</p>

<p>Se la città scritta non è disponibile, comparirà un popup che esorta a riprovare con un'altra ricerca.</p>

<h3 id="contact">Contact</h3>
<p>Markiyan Kmit - business.kmit@gmail.com</p>

<p>Project Link: https://nervous-bhabha-b42b4b.netlify.app/</p>

<h3 id="acknowledgements">Acknowledgements</h3>

<ul> 
    <li><a href="https://webpack.js.org/">WebPack</a></li>
    <li><a href="https://aqicn.org/">Aqicn</a></li>
    <li><a href="https://leafletjs.com/">LeafletJS</a></li>
    <li><a href="https://fontawesome.com/">Font Awesome</a></li>
</ul>
