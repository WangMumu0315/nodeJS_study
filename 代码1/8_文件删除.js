const fs = require('fs')

// fs.unlink('./笨蛋文本0号.txt',err => {
//     if(err){
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })

fs.rm('./论语.txt',err => {
    if(err){
        console.log('删除失败');
        return
    }
    console.log("删除成功");
})