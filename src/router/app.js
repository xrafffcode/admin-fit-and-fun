import adminRoutes from "./admin"
import attendanceRoutes from "./attendance"
import coachRoutes from "./coach"
import goalRoutes from "./goal"
import memberRoutes from "./member"
import memberProgressRoutes from "./member-progress"
import membershipRoutes from "./membership"
import permissionRoutes from "./permission"
import programRoutes from "./program"
import roleRoutes from "./role"
import shakeRoutes from "./shake"
import testimonialRoutes from "./testimonial"
import trialApplicantRoutes from "./trial-applicant"
import webConfigurationRoutes from "./web-configuration"

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
  ...webConfigurationRoutes,
  ...memberProgressRoutes,
  ...trialApplicantRoutes
]

export default appRoutes
