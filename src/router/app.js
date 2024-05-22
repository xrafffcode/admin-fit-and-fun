import coachRoutes from "./coach"
import adminRoutes from "./admin"
import memberRoutes from "./member"
import permissionRoutes from "./permission"
import roleRoutes from "./role"
import goalRoutes from "./goal"

const appRoutes = [
  ...permissionRoutes,
  ...roleRoutes,
  ...coachRoutes,
  ...adminRoutes,
  ...memberRoutes,
  ...goalRoutes,
]

export default appRoutes
