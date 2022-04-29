export default () => {
  function extractHwp () {
    const spawn = require('child_process').spawn

    const hwpData = spawn('python', ['hwpExtractor.py'])
    hwpData.stdout.on('data', function (data) {
      console.log(data.toString())
    })
    hwpData.stderr.on('data', function (data) {
      console.log(data.toString())
    })
  }
}
