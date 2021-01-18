const { exec } = require('child_process');

module.exports = {
  onPostBuild: () => {
    console.log('About to run shell script');
    exec("sh ../../build.sh", (e, out, err) => {
      if (e) { console.log(e) }
      if (err) { console.log(err) }
      console.log(`out: ${out}`);
    });
    console.log('Finished running shell script');
  },
}
