module.exports = (doc, formData, y) => {
  let total = 0;
  formData.packagePrice.forEach(el => total += el);

  doc.setFillColor(245).rect(10, y, 190, 8, 'F');
  doc.setDrawColor(200);
  doc.line(10, y + 8, 200, y + 8);

  doc.text("Total Amount", 15, y + 5);

  doc.text(`₹${total}`, 193, y + 5, { align: 'right' });

  doc.text("Discount", 15, y + 14);
  doc.text(`- ₹${formData.discount}`, 193, y + 14, { align: 'right' });

  doc.setFont(undefined, 'bold');
  doc.setFillColor(245).rect(10, y + 18, 190, 8, 'F');
  doc.line(10, y + 26, 200, y + 26);

  doc.text("Grand Total", 15, y + 23);
  doc.text(`₹${total - formData.discount}`, 193, y + 23, { align: 'right' });

  doc.setFont(undefined, 'normal');
  doc.text("Payment Mode Summary", 193, y+31, {align: 'right'});

  doc.setFillColor(245).rect(126, y+35, 70, 6, 'F');

  doc.text("Payment Date", 139, y+39, {align: 'center'});
  doc.text("Payment Mode", 164, y+39, {align: 'center'});
  doc.text("Amount", 186, y+39, {align: 'center'});

  doc.text(formData.paymentDate, 139, y+45, {align: 'center'});
  doc.text(formData.paymentMode, 164, y+45, {align: 'center'});
  doc.text(`₹${total - formData.discount}`, 186, y+45, {align: 'center'});

  doc.line(126, y+35, 196, y+35);
  doc.line(126, y+41, 196, y+41);
  doc.line(126, y+47, 196, y+47);

  doc.line(126, y+35, 126, y+47);
  doc.line(152, y+35, 152, y+47);
  doc.line(177, y+35, 177, y+47);
  doc.line(196, y+35, 196, y+47);
}