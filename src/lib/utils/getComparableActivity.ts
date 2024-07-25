const activities = [
  {
    title: "enjoyed a brisk walk through a local park",
    seconds: 2700, // 45 minutes
  },
  {
    title: "read a few chapters of a new book",
    seconds: 3600 * 2, // 2 hours
  },
  {
    title: "binge-watched a season of your favorite TV show",
    seconds: 3600 * 8, // 8 hours
  },
  {
    title: "took a short camping trip nearby",
    seconds: 3600 * 24 * 5, // 5 days
  },
  {
    title: "experimented with new recipes in the kitchen",
    seconds: 3600 * 24 * 7, // 1 week
  },
  {
    title: "redesigned and redecorated a room in your home",
    seconds: 3600 * 24 * 9, // 9 days
  },
  {
    title: "explored nearby tourist attractions you hadn’t visited before",
    seconds: 3600 * 24 * 14, // 2 weeks
  },
  {
    title: "attended a local music or arts festival",
    seconds: 3600 * 24 * 21, // 3 weeks
  },
  {
    title: "kept a daily journal, reflecting on life’s little moments",
    seconds: 3600 * 24 * 30, // 1 month
  },
  {
    title: "practiced mindfulness and meditation daily",
    seconds: 3600 * 24 * 40, // 40 days
  },
  {
    title: "learned the basics of gardening and started your own garden",
    seconds: 3600 * 24 * 30 * 2, // 2 months
  },
  {
    title: "trained for and completed a local 5k run",
    seconds: 3600 * 24 * 7 * 12, // 12 weeks
  },
  {
    title: "engaged in a creative project, like painting or knitting",
    seconds: 3600 * 24 * 100, // 100 days
  },
];

export default function getComparableActivity(seconds: number): string {
  const mostComparableActivity = activities.reduce((prev, curr) => {
    if (Math.abs(curr.seconds - seconds) < Math.abs(prev.seconds - seconds)) {
      return curr;
    }
    return prev;
  }, activities[0]);
  return mostComparableActivity.title;
}
