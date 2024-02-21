import { LightningElement, api } from "lwc";
import "./myCounter";

export default class ComponentBundleJavascriptFile extends LightningElement {
  @api label = "Click Count";
}
