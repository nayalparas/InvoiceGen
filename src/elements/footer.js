const telephoneIcon = require('../logos/tele')
const mailIcon = require('../logos/mail')
const webIcon = require('../logos/web')

module.exports = (doc) => {
  const y = 220;
  doc.setFont('calibri', 'italic');
  doc.text("Important Notes :", 10, y);
  doc.text(`
1. Test results released are certain to the specimen submitted.
2. All test results depend on the quality of the sample received.
3. Laboratory investigation is only a tool to facilitate in arriving at a diagnosis and should be clinically correlated by the referring physician.
4. Test results may show inter laboratory variation.
5. These test results are not valid for medio-legal purpose.
6. For all queries related to test results contact our customer care number 9990-444-903/781 or e-mail us at care@indocarepathlab.com, info@indocarepathlab.com.
7. Indocare Pathology test facilities are ISO CERTIFIED and NABL compliant.
`, 12, y + 4, {lineHeightFactor: 1.5, maxWidth: 200});
  doc.text("* This is a computer generated receipt and does not require signature/stamp.", 105, y+52, {align: 'center'});

  doc.setFillColor(225);
  doc.rect(0, y+60, 210, 11, 'F');

  doc.setFont('calibri', 'normal');
  doc.setFontSize(10);
  doc.text("9990444-903 / 781 / 9990757268", 22, y+66);
  doc.text("care@indocarepathlab.com", 89, y+66);
  doc.text("www.indocarepathlab.com", 149, y+66);

  doc.addImage(telephoneIcon, 'PNG', 12, y+62.2, 6, 6, '', 'FAST');
  doc.addImage(mailIcon, 'PNG', 81, y+62.2, 5.8, 5.8, '', 'FAST');
  doc.addImage(webIcon, 'PNG', 141, y+62.2, 6.2, 6.2, '', 'FAST');
}
