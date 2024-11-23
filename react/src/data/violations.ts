export interface Violation {
  id: number;
  type: string;
  description: string;
  date: string;
  image?: string;
}

export const violations: Violation[] = [
  {
    id: 1,
    type: "Speeding",
    description: "Over 100 km/h in 60 zone",
    date: "2024-01-15",
  },
  {
    id: 2,
    type: "Parking",
    description: "Illegal parking",
    date: "2024-01-20",
  },
  {
    id: 3,
    type: "Traffic light",
    description: "Red light violation",
    date: "2024-02-10",
  },
];
