const { exec } = require("child_process");

module.exports = {
  onPostBuild: ({ utils: {run} }) => {
    exec("../../build.sh", (error, stdout, stderr) => {
      if (error) {
        console.error(error.message);
        return;
      }
      if (stderr) {
        console.error(stderr);
        return;
      }
    });
  },
}
