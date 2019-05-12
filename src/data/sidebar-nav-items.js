export default function (role) {
  if (role == "User") {
    return [
      {
        title: "Dashboard",
        htmlBefore: '<i class="material-icons">error</i>',
        to: "/user/dashboard",
      },
      {
        title: "Place Order",
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: "/user/place-order",
      },
      {
        title: "Order Status",
        htmlBefore: '<i class="material-icons">error</i>',
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
        htmlBefore: '<i class="material-icons">error</i>',
        to: "/admin/dashboard",
      },
      {
        title: "Order List",
        htmlBefore: '<i class="material-icons">error</i>',
        to: "/admin/orders",
      }
    ]
  }

}
