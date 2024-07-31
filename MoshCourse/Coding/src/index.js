var sales = 123456789;
var course = "TypeScript";
var is_published = true;
var level; // "level" has type "any" which is implicit type that means compiler try to guess it
console.log(typeof sales, typeof course, typeof is_published, typeof level);
function render(documnet) {
    console.log(documnet);
}
