export default function (role) {
  if (role == "User") {
    return [
      {
        title: "Dashboard",
        htmlBefore: '<i class="material-icons">home</i>',
        to: "/user/dashboard",
      },
      {
        title: "Place Order",
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: "/user/place-order",
      },
      {
        title: "Orders",
        htmlBefore: '<i class="material-icons">assignment</i>',
        to: "/user/order-status",
      },
      {
        title: "Forms & Components",
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: "/components-overview",
      }
    ];
  } else {
    return [
      {
        title: "Dashboard",
        htmlBefore: '<i class="material-icons">home</i>',
        to: "/admin/dashboard",
      },
      {
        title: "Orders",
        htmlBefore: '<i class="material-icons">assignment</i>',
        to: "/admin/orders",
      },
      {
        title: "Assets",
        htmlBefore: '<i class="material-icons">settings</i>',
        to: "/admin/assets",
      }
    ]
  }

}
