var gulp = require('gulp'),
    webserver = require('gulp-webserver');
gulp.task('webserver',function(){
    gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:'8000',
        open:true,
        fallback:'index.html',
        livereload:true,
        middleware:function(req,res,next){
            console.log(req.url);
            if(req.url === "/user"){
                var date = {
                    'username':"chenyixun",
                    "password":"1111",
                    "yingwenmin":"eason",
                    "quzi":"aiqingzhuanyi"
                }
                res.writeHead(200, {
                    "Content-type": "text/json;charset=utf8",
                    "Access-Control-Allow-Origin": "*"
                });
                res.end(JSON.stringify(date));
            }
            next();
        }
    }));
})
gulp.task('news',function(){
     gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:'8888',
        open:true,
        fallback:'index.html',
        livereload:true,
    }));
})
gulp.task("default",function(){
    gulp.start('webserver');
})
