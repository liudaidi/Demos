var gulp=require("gulp"),
    cleanCss=require("gulp-clean-css"),
    sass=require("gulp-sass"),
    webserver=require("gulp-webserver");
    // console.log(sass)

gulp.task("sass",function(){
    return gulp.src("scss/style.sass")
                .pipe(sass())
                .pipe(gulp.dest("css"))
})

gulp.task("webserver",function(){
    gulp.watch("scss/*.sass",["sass"])
    return gulp.src("./")
                .pipe(webserver({
                    livereload:true,
                    directoryListing:true,
                    open:"index.html"
                }))
})