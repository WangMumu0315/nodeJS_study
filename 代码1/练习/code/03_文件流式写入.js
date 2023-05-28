const fs = require('fs')

const ws = fs.createWriteStream('./笨蛋文本0号.txt')

ws.write('你是\n')
ws.write('笨蛋\n')
ws.write('啊\n')


ws.close