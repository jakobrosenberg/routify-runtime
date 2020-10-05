
const { createLambda, download, getNodeVersion, getSpawnOptions, FileBlob } = require('@vercel/build-utils')
const path = require('path')
exports.config = {
  maxLambdaSize: '10mb'
}

module.exports = {

  /**     * 
   * @param {import('@vercel/build-utils/dist').BuildOptions} options 
   */
  async build(options) {


    const lambda = createLambda({
      runtime: 'nodejs12.x',
      handler: 'index.main',
      files: {
        'index.js': new FileBlob({ data: 'exports.main = () => {}' }),
      },
    });
    return {
      output: lambda,
      routes: [
        // If your Runtime needs to define additional routing, define it here…
      ],
      // return build result
    }
  }
}