import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Backery Terminal",
  name: "nenti:b2g-terminal",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    {
      route: "/terminal",
      name: "terminal",
      template: "bt_orders"
    }
  ]
});