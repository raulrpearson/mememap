var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => requireAuth_default,
  schema: () => schema
});
var import_graphql_server = __toModule(require("@redwoodjs/graphql-server"));
var import_auth = __toModule(require("../../lib/auth"));
const schema = {
  "kind": "Document",
  "definitions": [{
    "kind": "DirectiveDefinition",
    "description": {
      "kind": "StringValue",
      "value": "Use to check whether or not a user is authenticated and is associated\nwith an optional set of roles.",
      "block": true
    },
    "name": {
      "kind": "Name",
      "value": "requireAuth"
    },
    "arguments": [{
      "kind": "InputValueDefinition",
      "name": {
        "kind": "Name",
        "value": "roles"
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }],
    "repeatable": false,
    "locations": [{
      "kind": "Name",
      "value": "FIELD_DEFINITION"
    }]
  }],
  "loc": {
    "start": 0,
    "end": 180,
    "source": {
      "body": '\n  """\n  Use to check whether or not a user is authenticated and is associated\n  with an optional set of roles.\n  """\n  directive @requireAuth(roles: [String]) on FIELD_DEFINITION\n',
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const validate = ({
  directiveArgs
}) => {
  const {
    roles
  } = directiveArgs;
  (0, import_auth.requireAuth)({
    roles
  });
};
const requireAuth = (0, import_graphql_server.createValidatorDirective)(schema, validate);
var requireAuth_default = requireAuth;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=requireAuth.js.map
