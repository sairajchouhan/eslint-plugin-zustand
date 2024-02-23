/**
 * @fileoverview does not let you destructure values from zustand store
 * @author sairaj
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "does not let you destructure values from zustand store",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          hooks: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      }
    }, // Add a schema if the rule has options
    messages: {
      noDestructure:
        "Do not destructure values from zustand store, instead use store selector to access the value directly.",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      VariableDeclarator(node) {
        /** @type {string[]} */
        const hooksObj = context.options[0] || [];
        const hooks = hooksObj.hooks || [];

        if (hooks.length === 0) {
          return;
        }

        // Check if a `const` variable declaration
        if (node.parent.kind === "const" || node.parent.kind === "let") {
          if (
            node.id.type === "ObjectPattern" ||
            node.id.type === "ArrayPattern"
          ) {
            if (
              node.init &&
              node.init.type === "CallExpression" &&
              hooks.includes(node.init.callee.name)
            ) {
              context.report({
                node,
                messageId: "noDestructure",
                // data: {
                //   notBar: node.init.callee.name,
                // },
                // fix(fixer) {
                //   return fixer.replaceText(node.init, '"bar"');
                // },
              });
            }
          }
        }
      },
    };
  },
};
