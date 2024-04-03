#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { Level3Stack } from "../lib/level-3-stack";

const app = new cdk.App();
const teamName = process.env.TEAMNAME;
new Level3Stack(app, "Level3Stack", {
  env: { account: "534968039550", region: "us-east-1" },
  stackName: `${teamName}-level3`,
});
