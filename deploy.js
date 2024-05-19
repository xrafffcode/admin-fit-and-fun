const { execSync } = require("child_process")
const fs = require("fs")

try {
  execSync("git checkout --orphan production")
  console.log("Building...")
  execSync("npm run build")

  // Understand if it's dist or build folder
  const folderName = fs.existsSync("dist") ? "dist" : "build"

  execSync(`git --work-tree ${folderName} add --all`)
  execSync(`git --work-tree ${folderName} commit -m "production"`)
  console.log("Pushing to production...")
  execSync("git push origin HEAD:production --force")
  execSync(`rm -r ${folderName}`)
  execSync("git checkout -f main")
  execSync("git branch -D production")
  console.log("Successfully deployed")
} catch (e) {
  console.log(e.message)
  process.exit(1)
}
