export const departments: { label: string; value: string }[] = [
  { label: "Computer Science and Engineering", value: "cse" },
  { label: "Mathematics and Computing", value: "mc" },
  { label: "Electronics and Communication Engineering", value: "ece" },
  { label: "Electrical Engineering", value: "ee" },
  { label: "Civil Engineering", value: "ce" },
  { label: "Mechanical Engineering", value: "me" },
  { label: "Chemical Engineering", value: "ch" },
  { label: "Chemical Engineering Dual Degree", value: "chdd" },
  { label: "Biotechnology", value: "bt" },
  { label: "Biotechnology Dual Degree", value: "btdd" },
  { label: "Integrated Chemistry(M.Sc)", value: "intmsc" },
  { label: "Materials and Metalergical Engineering", value: "mm" },
] as const;

export const batchYear: { label: string; value: string }[] = [
  { label: "2023-27", value: "final" },
  { label: "2024-28", value: "pre-final" },
  { label: "2025-29", value: "second-year" },
  { label: "2026-30", value: "first-year" },
] as const;

export const interests: { label: string; value: string }[] = [
  { label: "AI/ML", value: "ai-ml" },
  { label: "Web Development", value: "web-development" },
  { label: "App Development", value: "app-development" },
  { label: "Data Science", value: "data-science" },
  { label: "Mechatronics", value: "mechatronics" },
  { label: "VLSI", value: "vlsi" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Blockchain", value: "blockchain" },
  { label: "IoT", value: "iot" },
  { label: "Robotics", value: "robotics" },
  { label: "AR/VR", value: "ar-vr" },
  { label: "Other", value: "other" },
] as const;
