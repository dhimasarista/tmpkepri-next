/** Fixed placeholder data for the demo screens. Replace with real queries. */

export const earningsByMonth = [
  { month: "Jan", earnings: 42 },
  { month: "Feb", earnings: 51 },
  { month: "Mar", earnings: 47 },
  { month: "Apr", earnings: 63 },
  { month: "May", earnings: 78 },
  { month: "Jun", earnings: 71 },
  { month: "Jul", earnings: 66 },
  { month: "Aug", earnings: 74 },
  { month: "Sep", earnings: 82 },
  { month: "Oct", earnings: 88 },
  { month: "Nov", earnings: 79 },
  { month: "Dec", earnings: 95 },
];

export const channels = [
  { name: "Online store", amount: 172, share: 58, delta: 3.9 },
  { name: "Marketplace", amount: 85, share: 29, delta: -0.7 },
  { name: "Social", amount: 36, share: 13, delta: 8.2 },
];

export const dailyVisits = Array.from({ length: 14 }, (_, index) => ({
  day: `D${index + 1}`,
  visits: [
    310, 280, 340, 360, 295, 410, 380, 350, 420, 445, 390, 430, 470, 455,
  ][index],
}));

export type OrderStatus = "Paid" | "Pending" | "Refunded";

export const orders: {
  id: string;
  product: string;
  date: string;
  status: OrderStatus;
  amount: number;
}[] = [
  {
    id: "0012",
    product: "Starter plan",
    date: "04 Nov 2026",
    status: "Paid",
    amount: 39,
  },
  {
    id: "0011",
    product: "Team plan",
    date: "03 Nov 2026",
    status: "Pending",
    amount: 129,
  },
  {
    id: "0010",
    product: "Starter plan",
    date: "03 Nov 2026",
    status: "Paid",
    amount: 39,
  },
  {
    id: "0009",
    product: "Studio plan",
    date: "02 Nov 2026",
    status: "Refunded",
    amount: 249,
  },
  {
    id: "0008",
    product: "Team plan",
    date: "01 Nov 2026",
    status: "Paid",
    amount: 129,
  },
  {
    id: "0007",
    product: "Starter plan",
    date: "31 Oct 2026",
    status: "Paid",
    amount: 39,
  },
  {
    id: "0006",
    product: "Studio plan",
    date: "30 Oct 2026",
    status: "Paid",
    amount: 249,
  },
  {
    id: "0005",
    product: "Team plan",
    date: "29 Oct 2026",
    status: "Pending",
    amount: 129,
  },
  {
    id: "0004",
    product: "Starter plan",
    date: "28 Oct 2026",
    status: "Paid",
    amount: 39,
  },
  {
    id: "0003",
    product: "Team plan",
    date: "27 Oct 2026",
    status: "Paid",
    amount: 129,
  },
  {
    id: "0002",
    product: "Starter plan",
    date: "26 Oct 2026",
    status: "Refunded",
    amount: 39,
  },
  {
    id: "0001",
    product: "Studio plan",
    date: "25 Oct 2026",
    status: "Paid",
    amount: 249,
  },
];

export const topPages = [
  { path: "/", views: 1840 },
  { path: "/home3", views: 960 },
  { path: "/app/dashboard", views: 720 },
  { path: "/about", views: 410 },
  { path: "/contact", views: 220 },
];
