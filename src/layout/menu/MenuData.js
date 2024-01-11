const menu = [
  {
    text: "Overview",
    subMenu: [
      {
        text: "Default Dashboard",
        link: "/",
      },


    ],
  },

  {
    text: "App",
    subMenu: [
      {
        text: "Pagesample",
        link: "/pagesample",
      },


    ],
  },






  {
    text: "Support",
    subMenu: [
      {
        text: "Projects",
        active: false,
        subMenu: [
          {
            text: "Project Cards",
            link: "/project-card",
          },
          {
            text: "Project List",
            link: "/project-list",
          },
        ],
      },

    ],
  },

  {
    text: "Claims",

    subMenu: [
      {
        text: "Claims",
        link: "/claim-dashboard",
      },
      {
        text: "Vehicle",
        link: "/vehicle",
      },


    ],
  },
];
export default menu;
