let enter = document.getElementById("password");
enter.addEventListener("keypress", (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enter_button").click();
  }
});

const type_pass = () => {
  document.querySelector("#password").focus();
};

const check_pass = () => {
  const input = document.querySelector("#password").value;
  if (input === "hakeristop") {
    const message =
      "Dragi Deda,\nKao i svake do sad, ni ove godine nisam bio dobar... \nNisam slusao nikog, radio sam sve suprotno od ispravnog kasnio sam na posao itd, znas vec...\nUvek mi je jezik bio brzi od pameti, a narav kontra produktivna, i naravno, za to zelim da budem nagradjen. Logicno... :)\nRealno mislim da je to fer jer je svaki postupak bio iskren, bez imalo foliranja. Mozda se to nekom nije svidelo, ali ja drugacije ne umem..\nElem, da predjemo na stvar. Skoro sam shvatio da nema 'leba bez motike pa sam zapeo da radim malo prekovremeno da skupim neki kes za jednan auto sto mi se svidja. Nazalost, ovo sto sam skupio do sad ne zaleze za to..\nVidi ako mozes uleti neku kintu il baci neki jeftin oglas, al samo ja da vidim.\nMislim da nema potrebe da ti pricam posto znas i sam, pratis ti sve.. Ali, da ne bi bilo posle nekog nesporazuma, to je BMW e36 kupe, sestak normalno..\nZnam, preterao sam, no ako moze moze, ako ne, sta da se radi.. Radice se overtime pa ce da skupmo..\nAko ti je to mnogo, ja bih bio zadovoljan sa jednim setom volana i papucica za simulator.. Kad vec nemam uzivo e36 bar u igrici da ga vozim hehe.\nVidi ako moze, to pa mi javi sta i kako.\nU medjuvremenu, Srecna Nova Godina, praznici i to.\nPoy,\nBratanac24\nP.S. Zivela kuca Mebit.io";
    const split_message = message.split("\n");
    let letter = "<br>";
    for (i = 0; i < split_message.length; i++) {
      letter += `<span>${split_message[i]}<span/><br><br>`;
    }
    document.querySelector("#terminal_text").innerHTML += letter;
    document.querySelector("#password").remove();
  } else {
    document.querySelector("#password").remove();
    document.querySelector("#terminal_text").innerHTML +=
      '<span>deda@mebit> Pogresna sifra! Pogledaj naslov.</span><br><span>deda@mebit> Ukucaj sifru da vidis poruku: </span><input id="password" type="password"  autofocus><br>';
    enter = document.getElementById("password");
    enter.addEventListener("keypress", (event) => {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("enter_button").click();
      }
    });
    enter.focus();
  }
};
