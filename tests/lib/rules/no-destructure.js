/**
 * @fileoverview does not let you destructure values from zustand store
 * @author sairaj
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-destructure"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  }
});

ruleTester.run("no-destructure", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: `const branch = useGlobalStore((state) => state.cms.branch)`,
      options: [
        {
          hooks: ["useGlobalStore"],
        },
      ],
    },
  ],

  invalid: [
    {
      code: `const { branch } = useGlobalStore((store) => store.cms)`,
      errors: [
        {
          messageId: "noDestructure",
        },
      ],
      options: [
        {
          hooks: ["useGlobalStore"],
        },
      ],
    },
  ],
});
