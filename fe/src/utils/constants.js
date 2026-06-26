// Import Lucide Icons
import {
  Ghost,
  UserSearch,
  Gamepad2,
  TriangleAlert,
  Skull,
  MessageSquareX,
  Users,
  Cigarette,
  Dice5,
} from "lucide-react";

// Content Classification Icons
export const contentClassificationIcons = {
  Horor: Ghost,
  InteraksiDaring: UserSearch,
  PenampilanTokoh: Gamepad2,
  SeksualitasPornografi: TriangleAlert,
  Kekerasan: Skull,
  BahasaKasar: MessageSquareX,
  SimulasiSosial: Users,
  ZatAdiktifAlkohol: Cigarette,
  Perjudian: Dice5,
};

// Filter by category options
export const RATING_OPTIONS = [
  { label: "Semua Kategori", value: "" },
  { label: "Age Rating 3+", value: 1 },
  { label: "Age Rating 7+", value: 2 },
  { label: "Age Rating 13+", value: 3 },
  { label: "Age Rating 15+", value: 4 },
  { label: "Age Rating 18+", value: 5 },
];
