// Marc Cobler Cosmen - November 2016
// Logo Power Animation. Visit https://github.com/kitusmark/Logo-Power-Animator
// Tests with SVG, jQuery and Velocity.js

// Javascript animations using jQuery for DOM
// manipulation and Velocity.js for animations

var $logo = $("#logo");

console.log("Starting animation...");

$logo.velocity(
    "fadeIn",
    {duration: 500, loop: 2},
    { complete: function(elements) {
        console.log(elements);
    }}
);
