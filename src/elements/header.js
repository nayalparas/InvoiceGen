const indocare = require('../logos/indocare');

module.exports = (doc) => {

  doc.addImage(indocare, 'JPG', 5, 10, 68, 25, '', 'SLOW');

  doc.setFont(undefined, 'bold');
  doc.setFontSize(9);
  doc.text("Preventive Health Checkup", 29, 15.5);

  // doc.setFillColor(243,94,11);
  // doc.rect(10, 10, 190, 2, 'F');

  doc.setFont(undefined, 'bold');
  doc.setFontSize(24);
  doc.text("INVOICE", 160, 27);
}