const { Menu, shell } = require("electron");

module.exports = (appWin) => {
  let template = [
    {
      label: "Items",
      submenu: [
        {
          label: "Add new",
          accelerator: "CmdOrCtrl+O",
          click: () => {
            appWin.send("menu-show-modal");
          },
        },
        {
          label: "Read Item",
          accelerator: "CmdOrCtrl+Enter",
          click: () => {
            appWin.send("menu-open-item");
          },
        },
        {
          label: "Delete Item",
          accelerator: "CmdOrCtrl+Backspace",
          click: () => {
            appWin.send("menu-delete-item");
          },
        },
        {
          label: "Open in Browser",
          accelerator: "CmdOrCtrl+Shift+Enter",
          click: () => {
            appWin.send("menu-open-item-native");
          },
        },
        {
          label: "Search Items",
          accelerator: "CmdOrCtrl+S",
          click: () => {
            appWin.send("menu-focus-search");
          },
        },
      ],
    },
    {
      role: "editMenu",
    },
    {
      role: "windowMenu",
    },
    {
      role: "help",
      submenu: [
        {
          label: "Learn More",
          click: () => {
            shell.openExternal(
              "https://github.com/stackacademytv/master-electron"
            );
          },
        },
      ],
    },
  ];

  if (process.platform === "darwin") {
    template.unshift({ role: "appMenu" });
  }

  let menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);
};
