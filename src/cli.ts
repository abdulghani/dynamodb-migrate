#!/usr/bin/env node

import lodash from "lodash";
import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";
import Command from "./constants/commands";

function validateCommand(args: Arguments) {
  const command: Command = (Command as any)?.[
    lodash.kebabCase(args["_"].join(" "))?.toLowerCase?.()
  ];

  if (!command) {
    console.log(`INVALID COMMAND (${args["_"]?.join(" ")})`);
    process.exit(1);
  }
}

async function dynamoMigrate() {
  const args = yargs(hideBin(process.argv)).argv;

  validateCommand(args);

  console.log("ARGS", args);
}

dynamoMigrate();
