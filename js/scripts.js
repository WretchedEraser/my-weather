// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

//activate tabs
$('.menu .item').tab();

//get cheney weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {

        // Display Data
        $('#cheney .temp').text(" " + weather.temp + "\u00B0");
        $('#cheney .city').text(weather.city);
        $('#cheney i').addClass('icon-' + weather.code);

        // Entire weather object
        console.log(weather);
    },
    error: function(error) {
        // Show if weather cannot be retreived
    }

});
//get spokane gradients
$.simpleWeather({
    location: 'hanoi',
    woeid: '',
    unit: 'f',
    success: function(weather) {
        // Display Data
        $('#spokane .temp').text(" " + weather.temp + "\u00B0");
        $('#spokane .city').text(weather.city);
        $('#spokane i').addClass('icon-' + weather.code);

        // Entire weather object
        console.log(weather);
    },
    error: function(error) {
        // Show if weather cannot be retreived
    }

});

//get geolocation
$('.geo').click(function() {


    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude);
    });

});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {

    $.simpleWeather({
        location: location,
        woeid: '',
        unit: 'f',
        success: function(weather) {

            // Display Data
            $('#geo .temp').text(" " + weather.temp + "\u00B0");
            $('#geo .city').text(weather.city);
            $('#geo i').addClass('icon-' + weather.code);

            // Entire weather object
            console.log();
        },
        error: function(error) {
            // Show if weather cannot be retreived
        }

    });

};
