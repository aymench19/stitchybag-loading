const status = document.getElementById("status");

async function wakeSite() {

    try {

        status.innerText =
            "Connexion à la boutique...";

        const response = await fetch(
            "https://stitchybag.onrender.com",
            {
                mode: "no-cors"
            }
        );

        window.location.href =
            "https://stitchybag.onrender.com";

    }

    catch {

        status.innerText =
            "Réveil de la boutique StitchyBag...";

        setTimeout(
            wakeSite,
            5000
        );
    }
}

wakeSite();