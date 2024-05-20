import permissionRoutes from "./permission"
import roleRoutes from "./role"

const appRoutes = [
  ...permissionRoutes,
  ...roleRoutes,
]

export default appRoutes
