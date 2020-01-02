//Filter
//function(element, index, array)

const { childrenAge, mailList } = require("../data");

/**-- 1 --**/
//1.Crianças entre 2 - 11 anos

const childrenFiltered = childrenAge.filter(
  element => element >= 2 && element <= 11
);
console.table(childrenFiltered);

/**-- 2 --**/
//2.Filtrar E-mails da rocketseat
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));
console.table(filteredMails);
