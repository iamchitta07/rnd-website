export function formatMyDate(date: Date) {
  // Extract date components
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  // Extract time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Determine am/pm and convert to 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const hh = String(hours).padStart(2, "0");

  return `${hh}:${minutes} ${ampm}, ${dd}.${mm}.${yyyy}`;
}
export function formatDateHr(date: Date) {
  // Extract date components
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  // Extract time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  // Determine am/pm and convert to 12-hour format
  hours = hours;
  const hh = String(hours).padStart(2, "0");

  return `${dd}.${mm}.${yyyy}, ${hh}:${minutes}:${sec}`;
}

export function isInvalidInput(text: string): boolean {
  return text.trim() === "";
}
