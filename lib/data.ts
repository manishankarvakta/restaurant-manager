import {
  Archive,
  BookOpen,
  Calculator,
  ChefHat,
  Cog,
  Container,
  LineChart,
  Menu,
  Settings,
  ShoppingCart,
  Soup,
  Table,
  User,
} from "lucide-react";

const { LayoutDashboard } = require("lucide-react");

export const navigationRoute = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "red",
  },

  {
    label: "Procurements",
    icon: ShoppingCart,
    href: "/dashboard",
    color: "red",
  },
  {
    label: "Menu & Orders",
    icon: Soup,
    href: "/dashboard",
    color: "red",
  },
  {
    label: "Table & Booking",
    icon: Container,
    href: "/dashboard",
    color: "red",
  },
  {
    label: "Accounts",
    icon: Calculator,
    href: "/dashboard",
    color: "red",
  },
  {
    label: "Inventory",
    icon: Archive,
    href: "/dashboard",
    color: "red",
  },
  { label: "Reports", icon: LineChart, href: "/dashboard", color: "red" },
  { label: "User", icon: User, href: "/dashboard", color: "red" },
  { label: "Setting", icon: Settings, href: "/dashboard", color: "red" },
];
