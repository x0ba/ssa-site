export interface event {
  name: string;
  upcoming: boolean;
  date: string;
  flyerUrl: string;
}

export const events: event[] = [
  {
    name: "SD Symphony Social",
    upcoming: true,
    date: "November 14, 2025",
    flyerUrl: "/assets/events/sdsfall.png",
  },
  {
    name: "SSA x Yogurt World Fundraiser",
    upcoming: false,
    date: "October 8, 2025",
    flyerUrl: "/assets/events/yyf.jpg",
  },
  {
    name: "Fall GBM",
    upcoming: false,
    date: "October 1, 2025",
    flyerUrl: "/assets/events/fallgbm.jpg",
  },
  {
    name: "Coffee & Classical at MOM's Cafe",
    upcoming: false,
    date: "April 18, 2025",
    flyerUrl: "/assets/events/ccm.jpg",
  },
  {
    name: "Violin Masterclass with Harold Reeves",
    upcoming: false,
    date: "April 8, 2025",
    flyerUrl: "/assets/events/harold.jpg",
  },
  {
    name: "Trip to the San Diego Symphony",
    upcoming: false,
    date: "February 15, 2025",
    flyerUrl: "/assets/events/oldsds.png",
  },
  {
    name: "Vitamin String Quartet at EFA",
    upcoming: false,
    date: "November 15, 2024",
    flyerUrl: "/assets/events/vitamin.jpg",
  },
  {
    name: "Trip to the San Diego Symphony",
    upcoming: false,
    date: "November 9, 2024",
    flyerUrl: "/assets/events/veryoldsds.jpg",
  },
  {
    name: "Beach Social at La Jolla Shores",
    upcoming: false,
    date: "October 19, 2024",
    flyerUrl: "/assets/events/oldbeachsocial.png",
  },
];
