const mailsList = [
  "kylianmbappe@gmail.com",
  "cristianoronaldo@gmail.com",
  "leomessi@gmail.com",
  "francescototti@gmail.com",
  "rafaleao@gmail.com",
  "robertlewa@gmail.com",
  "erlinghaaland@gmail.com",
  "nicobarella@gmail.com",
  "dusanvlao@gmail.com",
  "oliviergiroud@gmail.com",
  "judebellingham@gmail.com",
];

let mailUser = prompt("Fornire la propria mail");
console.log(mailUser);

let found = false;

for (let i = 0; i < mailsList.length; i++) {
  const curMail = mailsList[i];
  if (curMail === mailUser) {
    found = true;
    break;
  }

  console.log(curMail, mailUser, found);
}

if (found === true) {
  alert(`Bentornato ${mailUser}`);
} else {
  alert("Inserire una mail valida");
}
