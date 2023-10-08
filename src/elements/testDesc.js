module.exports = (doc, name, price, y) => {
  doc.setFont(undefined, 'normal');
  doc.text(name, 16, y);
  doc.text(`₹${price}`, 193, y, { align: 'right' });
  doc.line(13, y+3, 198, y+3);
}