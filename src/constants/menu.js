const data = [
  {
    id: "sales",
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: "simple-icon-briefcase",
        label: "Sales Entry",
        to: "/sales/sales-entry",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-pie-chart",
        label: "Sales History",
        to: "/sales/sales-history",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "Sales Return",
        to: "/sales/sales-return",
        // roles: [UserRole.Editor],
      },
    ],
  },
  {
    id: "purchase",
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: "simple-icon-briefcase",
        label: "Purchase Entry",
        to: "/purchase/purchase-entry",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-pie-chart",
        label: "Purchase History",
        to: "/purchase/purchase-history",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "Purchase Return",
        to: "/purchase/purchase-return",
        // roles: [UserRole.Editor],
      },
    ],
  },
  {
    id: "products",
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: "simple-icon-briefcase",
        label: "Products Entry",
        to: "/products/products-entry",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-pie-chart",
        label: "Products History",
        to: "/products/products-history",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "Products To Buy",
        to: "/products/products-to-buy",
        // roles: [UserRole.Editor],
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "Stocks",
        to: "/products/Stocks",
        // roles: [UserRole.Editor],
      },
    ],
  },
  {
    id: "userprofile",
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: "simple-icon-briefcase",
        label: "Profile",
        to: "/userprofile/profile",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-pie-chart",
        label: "Settings",
        to: "/userprofile/settings",
        // roles: [UserRole.Admin],
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "Log Out",
        to: "/userprofile/logout",
        // roles: [UserRole.Editor],
      },
    ],
  },
];

export default data;
