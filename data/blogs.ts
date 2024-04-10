import { CategoryModel, BlogModel } from "../types/shared";
export const BLOGS: BlogModel[] = [
  {
    id: 11,
    title: "Marketing title",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 1,
      title: "Marketing",
    },
  },
  {
    id: 22,
    title: "Education title",

    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 2,
      title: "Education",
    },
  },
  {
    id: 33,
    title: "Fitness title",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 3,
      title: "Fitness",
    },
  },
  {
    id: 44,
    title: "Fitness title2",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 3,
      title: "Fitness",
    },
  },
  {
    id: 55,
    title: "Marketing title2",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 1,
      title: "Marketing",
    },
  },
  {
    id: 66,
    title: "Technology title",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 5,
      title: "Technology",
    },
  },
  {
    id: 77,
    title: "Technology title2",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 5,
      title: "Technology",
    },
  },
  {
    id: 88,
    title: "Design title",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "blog author",
    date: "10/10/2020",
    category: {
      id: 4,
      title: "Design",
    },
  },
];

export const CATEGORY_DATA: CategoryModel[] = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Marketing",
  },
  {
    id: 2,
    title: "Education",
  },
  {
    id: 3,
    title: "Fitness",
  },
  {
    id: 4,
    title: "Design",
  },
  {
    id: 5,
    title: "Technology",
  },
];
