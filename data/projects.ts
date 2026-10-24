export type Project = {
  name: string;
  description: string;
  tools: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Permainan Ular Sederhana",
    description: "Permainan ular sederhana yang dibuat menggunakan Tkinter.",
    tools: ["VS Code", "Python", "Tkinter"],
    link: "https://github.com/yudhist0170-ctrl/Ular",
  },
  {
    name: "Kalkulator Sederhana",
    description: "Kalkulator sederhana yang dibuat menggunakan HTML.",
    tools: ["VS Code", "HTML"],
    link: "https://github.com/yudhist0170-ctrl/Kalkulator-Sederhana",
  },
];
