import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop",
    submenu: [
      {
        id: 50,
        title: "1-14 Mukhi Rudraksha",
        newTab: false,
        path: "/shop-filter/1-14-mukhi-rudraksha",
      },
      {
        id: 51,
        title: "Gemstones",
        newTab: false,
        path: "/shop-filter/gemstones",
      },
      {
        id: 51,
        title: "Special Rudraksha",
        newTab: false,
        path: "/shop-filter/special-rudraksha",
      },
    ]
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    path: "/aboutus",
  },

  // {
  //   id: 5,
  //   title: "pages",
  //   newTab: false,
  //   path: "/",
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "Shop With Sidebar",
  //       newTab: false,
  //       path: "/shop-with-sidebar",
  //     },
  //     {
  //       id: 62,
  //       title: "Shop Without Sidebar",
  //       newTab: false,
  //       path: "/shop-without-sidebar",
  //     },
  //     {
  //       id: 64,
  //       title: "Checkout",
  //       newTab: false,
  //       path: "/checkout",
  //     },
  //     {
  //       id: 65,
  //       title: "Cart",
  //       newTab: false,
  //       path: "/cart",
  //     },
  //     {
  //       id: 66,
  //       title: "Wishlist",
  //       newTab: false,
  //       path: "/wishlist",
  //     },
  //     {
  //       id: 67,
  //       title: "Sign in",
  //       newTab: false,
  //       path: "/signin",
  //     },
  //     {
  //       id: 68,
  //       title: "Sign up",
  //       newTab: false,
  //       path: "/signup",
  //     },
  //     {
  //       id: 69,
  //       title: "My Account",
  //       newTab: false,
  //       path: "/my-account",
  //     },
  //     {
  //       id: 70,
  //       title: "Contact",
  //       newTab: false,
  //       path: "/contact",
  //     },
  //     {
  //       id: 62,
  //       title: "Error",
  //       newTab: false,
  //       path: "/error",
  //     },
  //     {
  //       id: 63,
  //       title: "Mail Success",
  //       newTab: false,
  //       path: "/mail-success",
  //     },
  //   ],
  // },
];
