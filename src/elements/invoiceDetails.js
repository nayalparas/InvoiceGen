module.exports = (doc, formData) => {
  doc.setDrawColor(220);
  doc.setLineWidth(0.3);
  doc.line(10, 42, 200, 42);
  doc.line(10, 57, 200, 57);
  doc.line(60, 42, 60, 57);
  doc.line(116, 42, 116, 57);
  // doc.line(105, 42, 105, 57);
  // doc.line(155, 42, 155, 57);

  doc.setFont(undefined, 'normal');
  doc.setFontSize(9);
  doc.text("INVOICE NO. :", 15, 50);
  doc.text("INVOICE DATE :", 67, 50);
  doc.text("SAMPLE COLLECTION DATE :", 124, 50);

  doc.setFont(undefined, 'bold');
  doc.setFontSize(10);
  doc.text(formData.invoiceNum, 37, 50);
  doc.text(formData.invoiceDate, 91, 50);
  doc.text(formData.sampleDate, 164, 50);

  doc.setFillColor(241, 253, 253);
  doc.rect(10, 57.15, 190, 45, 'F');

  doc.setFont(undefined, 'bold');
  doc.setTextColor(243,94,11);
  doc.text("BILL FROM", 15, 66);
  doc.text("CUSTOMER BILLING DETAILS", 110, 66);

  doc.setFontSize(9);
  doc.setTextColor(0);
  doc.setFont(undefined, 'normal');
  doc.text("CIN No. :", 15, 72);
  doc.text("39, 2nd Floor, DLF 39, Kirti Nagar, New Delhi-110015", 15, 83);
  doc.text("PAN No. :", 15, 90);
  doc.text("TAN No. :", 15, 95);
  doc.text(formData.custAddress, 110, 80, { maxWidth: 75, lineHeightFactor: 1.5 });

  doc.setFont(undefined, 'bold');
  doc.text("U74999DL2018PTC331806", 28, 72);
  doc.text("INDOCARE PATHOLOGY LABS PRIVATE LIMITED", 15, 78);
  doc.text("AAECI8236P", 29, 90);
  doc.text("DELI13240D", 29, 95);
  doc.text(`${formData.custTitle} ${formData.custName} ${formData.custAge}/${formData.custGender}`, 110, 74);

  doc.line(10, 102.3, 200, 102.3);
}