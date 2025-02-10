interface Resource {
  name: string;
  link: string;
}

export const ext_resources: Resource[] = [
  { name: "pasta", link: "https://pasta.example.com" },
  { name: "storage", link: "https://storage.example.com" },
];

export const in_resources: Resource[] = [
  { name: "Мои курсы", link: "https://localhost:6379/courses" },
  { name: "Магазин", link: "https://localhost:6379/shop" },
];
