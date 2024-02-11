import jsPDF from "jspdf";

export default function createPDF(formData) {
  const doc = new jsPDF();

  const header = require("./elements/header");
  const invoiceDetails = require("./elements/invoiceDetails");
  const footer = require('./elements/footer');
  const testDesc = require("./elements/testDesc");
  const finalPayment = require("./elements/finalPayment");

  const calibri = require("./fonts/calibri");
  const calibri_bold = require("./fonts/calibri_bold");
  const calibri_italic = require("./fonts/calibri_italic");
  doc.addFileToVFS("calibri.ttf", calibri);
  doc.addFileToVFS("calibri_bold.ttf", calibri_bold);
  doc.addFileToVFS("calibri_italic.ttf", calibri_italic);
  doc.addFont("calibri.ttf", "calibri", "normal");
  doc.addFont("calibri_bold.ttf", "calibri", "bold");
  doc.addFont("calibri_italic.ttf", "calibri", "italic");

  doc.setFont('calibri');

  header(doc);

  invoiceDetails(doc, formData);

  doc.setFillColor(245);
  doc.rect(10, 106, 190, 8, 'F');

  doc.text("TEST DESCRIPTION", 13, 111);
  doc.text("AMOUNT", 180, 111);

  let y = 120;
  for (let i = 0; i < formData.packageName.length; i++) {
    testDesc(doc, formData.packageName[i], formData.packagePrice[i], y);
    y += 9;
  }
  // testDesc(doc, 126);
  // testDesc(doc, 135);
  // testDesc(doc, 144);
  // testDesc(doc, 153);
  // testDesc(doc, 162);
  // testDesc(doc, 171);

  finalPayment(doc, formData, 178);

  footer(doc);

  doc.save(`${(formData.custName).trim().split(' ').join('_')}_${formData.invoiceNum}`);
}
