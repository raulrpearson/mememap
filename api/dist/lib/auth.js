var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  hasRole: () => hasRole,
  isAuthenticated: () => isAuthenticated,
  requireAuth: () => requireAuth
});
const isAuthenticated = () => {
  return true;
};
const hasRole = ({
  roles
}) => {
  return roles !== void 0;
};
const requireAuth = ({
  roles
}) => {
  return isAuthenticated();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hasRole,
  isAuthenticated,
  requireAuth
});
//# sourceMappingURL=auth.js.map
