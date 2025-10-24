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

export const appUrl =  "http://127.0.0.1:5000/api"
