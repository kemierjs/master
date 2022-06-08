const {open, readdir,unlink} = require('fs/promises')
let path = require('path')
// let filename = path.resolve(__dirname, './test')
          let filename='C:\\Users\\v_choczhang\\Downloads\\CSS'
function eachDir(filename) {
	open(filename).then(async (fileHandle) => {
		let stats = await fileHandle.stat()
		if (stats.isDirectory()) {
			let list = await readdir(filename)
			list.forEach((childFilename) => {
				eachDir(path.resolve(filename,`./${childFilename}`))
			})
		} else {
			let isMatch = /\.ass$/g.test(filename)
			if (isMatch) {
				unlink(filename)
			}
		}
	})
}





eachDir(filename)
