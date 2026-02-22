export type Reel = {
  id: string;
  username: string;
  caption: string;
  likes: string;
  comments: string;
};

export const REELS: Reel[] = [
  {
    id: "1",
    username: "travelwithme",
    caption: "Sunset in Banff 🌄",
    likes: "128K",
    comments: "1,204",
  },
  {
    id: "2",
    username: "foodie_daily",
    caption: "Quick pasta recipe 🍝",
    likes: "89K",
    comments: "842",
  },
  {
    id: "3",
    username: "gym_life",
    caption: "Leg day pain 😭",
    likes: "56K",
    comments: "410",
  },
];
