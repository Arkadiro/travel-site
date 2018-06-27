const gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

const config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}
gulp.task('updateSvg', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['updateSvg'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('cleanTmp', ['copySpriteGraphic', 'copySpriteCss'], () => {
    return del('./app/temp/sprite');
});

gulp.task('icons', ['updateSvg','createSprite', 'copySpriteGraphic', 'copySpriteCss', 'cleanTmp']);