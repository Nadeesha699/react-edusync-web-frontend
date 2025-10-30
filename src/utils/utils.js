import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../images/logo.png";

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedDate;
}

export const appUrl = "http://127.0.0.1:5000/api";

export const setGrade = (marks) => {
  if (marks >= 75) {
    return "A";
  } else if (marks >= 65) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 35) {
    return "S";
  } else {
    return "F";
  }
};

export const exportAsCsv = ({ marksData }) => {
  const headers = ["Student Index", "Student Name", "Batch", "Marks", "Grade"];
  const rows = marksData.map((s) => [
    s.student_index,
    s.student_name,
    s.batch,
    s.marks,
    setGrade(s.marks),
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "student_marks.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportAsPdf = ({ marksData }) => {
  const doc = new jsPDF();

  doc.addImage(logo, "PNG", 14, 10, 40, 20);

  doc.setFontSize(18);
  doc.text("Student Marks Report", 60, 25);
  doc.setFontSize(12);
  doc.text(`Exported on: ${new Date().toLocaleString()}`, 14, 40);

  const tableColumn = [
    "Student Index",
    "Student Name",
    "Batch",
    "Marks",
    "Grade",
  ];
  const tableRows = marksData.map((s) => [
    s.student_index,
    s.student_name,
    s.batch,
    s.marks,
    setGrade(s.marks),
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 50,
    theme: "striped",
    headStyles: { fillColor: [30, 64, 175] },
  });

  doc.save("student_marks.pdf");
};
