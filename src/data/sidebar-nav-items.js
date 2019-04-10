export default function() {
  return [
    {
      title: "Dashboard",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/dashboard",
    },
    {
      title: "Place Order",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/place-order",
    },
    {
      title: "Order Status",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/order-status",
    },{
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    }
  ];
}
