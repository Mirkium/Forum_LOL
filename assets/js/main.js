//======================Header==========================\\

var header = document.querySelector('header');

header.innerHTML = `
    <div class="header">
        <a href="Accueil.html" class="img"><img src="/assets/img/LoL-Symbol.png"></a>
        <a href="Ranked.html">RANKED</a>
        <p>|</p>
        <a href="Draft.html">DRAFT</a>
        <p>|</p>
        <a href="Patch.html">PATCH</a>
        <p>|</p>
        <a href="TempMode.html">TEMPORAL MODE</a>
        <a href="Compte.html" class="compte"><img src="/assets/img/icon_perso.png"></a>
    </div>
`;

//======================================================\\



//======================Footer==========================\\

var footer = document.querySelector('footer');

footer.innerHTML = `
    <div class="footer">
        <a href="https://www.leagueoflegends.com/fr-fr/"><img src="../assets/img/riot-games.png"></a>
        
        <div class="team">
            <p>Equipe :</p>
            <p>Fabio Vincentelli</p>
            <p>Hugo Bisserier</p>
            <p>Alexandre Petitfrère</p>
        </div>
    </div>
`;

//======================================================\\