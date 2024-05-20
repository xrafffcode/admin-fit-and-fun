import coachRoutes from "./coach"
import permissionRoutes from "./permission"
import roleRoutes from "./role"

const appRoutes = [
  ...permissionRoutes,
  ...roleRoutes,
  ...coachRoutes,
]

export default appRoutes
