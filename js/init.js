

REF_TITLE_MAINPAGE.innerHTML = server_name;
REF_TITLE_NAVBAR.innerHTML = server_name;
REF_TITLE_PAGE.innerHTML = server_name;
REF_SLOGAN_MAINPAGE.innerHTML = server_slogan;
REF_NAV_CONNECT_BTN.href = "fivem://connect/"+server_address;
REF_CONNECT_BTN.href = "fivem://connect/"+server_address;
REF_NAV_DISCORD_BTN.href = discord_link;
REF_GAME_NAME.innerHTML = prefix_game+" "+game;
REF_GAME_SOUS_TITRE.innerHTML = game_sous_titre;
REF_SERVER_LOGO_GAME.src = "assets/images/"+serveur_logo;
REF_GAME_DESCRIPTION.innerHTML = game_description;

game_cards.forEach(
    (card, index) => {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        var i = document.createElement('i');
        i.className = card.logo;
        h3.appendChild(i);
        h3.innerHTML += card.title;
        var p = document.createElement('p');
        p.innerHTML = card.text;
        article.appendChild(h3);
        article.appendChild(p);
        REF_GAME_CARDS_CONTAINER.appendChild(article);
    }
);

REF_SCRIPT_TITRE.innerHTML = script_titre;
REF_SCRIPT_SOUS_TITRE.innerHTML = script_sous_titre;
REF_SCRIPT_DESCRIPTION.innerHTML = script_description;
script_accordions.forEach(
    (accordion, index) => {
        var details = document.createElement('details');
        var summary = document.createElement('summary');
        summary.innerHTML = accordion.title;
        var p = document.createElement('p');
        p.innerHTML = accordion.text;
        details.appendChild(summary);
        details.appendChild(p);
        REF_SCRIPT_CONTAINER.appendChild(details);
    }
);

REF_FA_TITRE.innerHTML = fa_titre;
REF_FA_SOUS_TITRE.innerHTML = fa_sous_titre;
REF_FA_DESCRIPTION.innerHTML = fa_description;
fa_carousel_images.forEach(
    (image, index) => {
        var div = document.createElement('div');
        div.className = "carousel-item";
        var img = document.createElement('img');
        img.src = "assets/images/carousel/"+image;
        div.appendChild(img);
        REF_FA_CONTAINER.querySelector('.carousel').appendChild(div);
    }
);
REF_FA_CAROUSEL_SCREEN.src = "assets/images/carousel/"+fa_carousel_images[0];
REF_STAFF_TITRE.innerHTML = staff_titre;
REF_STAFF_SOUS_TITRE.innerHTML = staff_sous_titre;
REF_STAFF_DESCRIPTION.innerHTML = staff_description;
staff_members.forEach(
    (member, index) => {
            var li = document.createElement('li');
            var img = document.createElement('img');
            img.src = member.photo === "" ? "assets/images/blank-person.png" : "assets/images/staff/"+member.photo;
            var h3 = document.createElement('h3');
            h3.innerHTML = member.name;
            var p = document.createElement('p');
            p.innerHTML = member.job;
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            REF_STAFF_CONTAINER.querySelector('ul').appendChild(li);
    }
);

REF_DISCORD_TITRE.innerHTML = discord_titre;
REF_DISCORD_SOUS_TITRE.innerHTML = discord_sous_titre;
REF_DISCORD_JOIN.href = discord_link;