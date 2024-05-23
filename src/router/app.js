import coachRoutes from "./coach"
import adminRoutes from "./admin"
import memberRoutes from "./member"
import permissionRoutes from "./permission"
import roleRoutes from "./role"
import goalRoutes from "./goal"
import shakeRoutes from "./shake"
import programRoutes from "./program"

const appRoutes = [
  ...permissionRoutes,
  ...roleRoutes,
  ...coachRoutes,
  ...adminRoutes,
  ...memberRoutes,
  ...goalRoutes,
  ...shakeRoutes,
  ...programRoutes,
]

export default appRoutes
