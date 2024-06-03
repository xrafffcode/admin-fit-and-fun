import adminRoutes from "./admin"
import attendanceRoutes from "./attendance"
import coachRoutes from "./coach"
import goalRoutes from "./goal"
import memberRoutes from "./member"
import membershipRoutes from "./membership"
import permissionRoutes from "./permission"
import programRoutes from "./program"
import roleRoutes from "./role"
import shakeRoutes from "./shake"
import testimonialRoutes from "./testimonial"

const appRoutes = [
  ...adminRoutes,
  ...attendanceRoutes,
  ...coachRoutes,
  ...goalRoutes,
  ...memberRoutes,
  ...membershipRoutes,
  ...permissionRoutes,
  ...programRoutes,
  ...roleRoutes,
  ...shakeRoutes,
  ...testimonialRoutes,
]

export default appRoutes
