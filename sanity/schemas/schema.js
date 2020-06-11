/* eslint-disable import/no-unresolved */

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import ThicknessGauge from "./ThicknessGauge";
import Partner from "./Partner";
import CarForSale from "./CarForSale";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([ThicknessGauge, Partner, CarForSale]),
});
