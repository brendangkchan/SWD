/*
To customize the look and feel of Ionic, you can override the variables
in ionic's _variables.scss file.

For example, you might change some of the default colors:

$light:                           #fff !default;
$stable:                          #f8f8f8 !default;
$positive:                        #4a87ee !default;
$calm:                            #43cee6 !default;
$balanced:                        #66cc33 !default;
$energized:                       #f0b840 !default;
$assertive:                       #ef4e3a !default;
$royal:                           #8a6de9 !default;
$dark:                            #444 !default;
*/
/*!
  Ionicons, v1.5.2
  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/
  https://twitter.com/benjsperry  https://twitter.com/ionicframework
  MIT License: https://github.com/driftyco/ionicons
*/
@font-face {
  font-family: "Ionicons";
  src: url("../lib/ionic/fonts/ionicons.eot?v=1.5.2");
  src: url("../lib/ionic/fonts/ionicons.eot?v=1.5.2#iefix") format("embedded-opentype"), url("../lib/ionic/fonts/ionicons.ttf?v=1.5.2") format("truetype"), url("../lib/ionic/fonts/ionicons.woff?v=1.5.2") format("woff"), url("../lib/ionic/fonts/ionicons.svg?v=1.5.2#Ionicons") format("svg");
  font-weight: normal;
  font-style: normal; }
.ion, .ion-loading-a,
.ion-loading-b,
.ion-loading-c,
.ion-loading-d,
.ion-looping,
.ion-refreshing,
.ion-ios7-reloading, .ionicons,
.ion-alert:before,
.ion-alert-circled:before,
.ion-android-add:before,
.ion-android-add-contact:before,
.ion-android-alarm:before,
.ion-android-archive:before,
.ion-android-arrow-back:before,
.ion-android-arrow-down-left:before,
.ion-android-arrow-down-right:before,
.ion-android-arrow-forward:before,
.ion-android-arrow-up-left:before,
.ion-android-arrow-up-right:before,
.ion-android-battery:before,
.ion-android-book:before,
.ion-android-calendar:before,
.ion-android-call:before,
.ion-android-camera:before,
.ion-android-chat:before,
.ion-android-checkmark:before,
.ion-android-clock:before,
.ion-android-close:before,
.ion-android-contact:before,
.ion-android-contacts:before,
.ion-android-data:before,
.ion-android-developer:before,
.ion-android-display:before,
.ion-android-download:before,
.ion-android-drawer:before,
.ion-android-dropdown:before,
.ion-android-earth:before,
.ion-android-folder:before,
.ion-android-forums:before,
.ion-android-friends:before,
.ion-android-hand:before,
.ion-android-image:before,
.ion-android-inbox:before,
.ion-android-information:before,
.ion-android-keypad:before,
.ion-android-lightbulb:before,
.ion-android-locate:before,
.ion-android-location:before,
.ion-android-mail:before,
.ion-android-microphone:before,
.ion-android-mixer:before,
.ion-android-more:before,
.ion-android-note:before,
.ion-android-playstore:before,
.ion-android-printer:before,
.ion-android-promotion:before,
.ion-android-reminder:before,
.ion-android-remove:before,
.ion-android-search:before,
.ion-android-send:before,
.ion-android-settings:before,
.ion-android-share:before,
.ion-android-social:before,
.ion-android-social-user:before,
.ion-android-sort:before,
.ion-android-stair-drawer:before,
.ion-android-star:before,
.ion-android-stopwatch:before,
.ion-android-storage:before,
.ion-android-system-back:before,
.ion-android-system-home:before,
.ion-android-system-windows:before,
.ion-android-timer:before,
.ion-android-trash:before,
.ion-android-user-menu:before,
.ion-android-volume:before,
.ion-android-wifi:before,
.ion-aperture:before,
.ion-archive:before,
.ion-arrow-down-a:before,
.ion-arrow-down-b:before,
.ion-arrow-down-c:before,
.ion-arrow-expand:before,
.ion-arrow-graph-down-left:before,
.ion-arrow-graph-down-right:before,
.ion-arrow-graph-up-left:before,
.ion-arrow-graph-up-right:before,
.ion-arrow-left-a:before,
.ion-arrow-left-b:before,
.ion-arrow-left-c:before,
.ion-arrow-move:before,
.ion-arrow-resize:before,
.ion-arrow-return-left:before,
.ion-arrow-return-right:before,
.ion-arrow-right-a:before,
.ion-arrow-right-b:before,
.ion-arrow-right-c:before,
.ion-arrow-shrink:before,
.ion-arrow-swap:before,
.ion-arrow-up-a:before,
.ion-arrow-up-b:before,
.ion-arrow-up-c:before,
.ion-asterisk:before,
.ion-at:before,
.ion-bag:before,
.ion-battery-charging:before,
.ion-battery-empty:before,
.ion-battery-full:before,
.ion-battery-half:before,
.ion-battery-low:before,
.ion-beaker:before,
.ion-beer:before,
.ion-bluetooth:before,
.ion-bonfire:before,
.ion-bookmark:before,
.ion-briefcase:before,
.ion-bug:before,
.ion-calculator:before,
.ion-calendar:before,
.ion-camera:before,
.ion-card:before,
.ion-cash:before,
.ion-chatbox:before,
.ion-chatbox-working:before,
.ion-chatboxes:before,
.ion-chatbubble:before,
.ion-chatbubble-working:before,
.ion-chatbubbles:before,
.ion-checkmark:before,
.ion-checkmark-circled:before,
.ion-checkmark-round:before,
.ion-chevron-down:before,
.ion-chevron-left:before,
.ion-chevron-right:before,
.ion-chevron-up:before,
.ion-clipboard:before,
.ion-clock:before,
.ion-close:before,
.ion-close-circled:before,
.ion-close-round:before,
.ion-closed-captioning:before,
.ion-cloud:before,
.ion-code:before,
.ion-code-download:before,
.ion-code-working:before,
.ion-coffee:before,
.ion-compass:before,
.ion-compose:before,
.ion-connection-bars:before,
.ion-contrast:before,
.ion-cube:before,
.ion-disc:before,
.ion-document:before,
.ion-document-text:before,
.ion-drag:before,
.ion-earth:before,
.ion-edit:before,
.ion-egg:before,
.ion-eject:before,
.ion-email:before,
.ion-eye:before,
.ion-eye-disabled:before,
.ion-female:before,
.ion-filing:before,
.ion-film-marker:before,
.ion-fireball:before,
.ion-flag:before,
.ion-flame:before,
.ion-flash:before,
.ion-flash-off:before,
.ion-flask:before,
.ion-folder:before,
.ion-fork:before,
.ion-fork-repo:before,
.ion-forward:before,
.ion-funnel:before,
.ion-game-controller-a:before,
.ion-game-controller-b:before,
.ion-gear-a:before,
.ion-gear-b:before,
.ion-grid:before,
.ion-hammer:before,
.ion-happy:before,
.ion-headphone:before,
.ion-heart:before,
.ion-heart-broken:before,
.ion-help:before,
.ion-help-buoy:before,
.ion-help-circled:before,
.ion-home:before,
.ion-icecream:before,
.ion-icon-social-google-plus:before,
.ion-icon-social-google-plus-outline:before,
.ion-image:before,
.ion-images:before,
.ion-information:before,
.ion-information-circled:before,
.ion-ionic:before,
.ion-ios7-alarm:before,
.ion-ios7-alarm-outline:before,
.ion-ios7-albums:before,
.ion-ios7-albums-outline:before,
.ion-ios7-americanfootball:before,
.ion-ios7-americanfootball-outline:before,
.ion-ios7-analytics:before,
.ion-ios7-analytics-outline:before,
.ion-ios7-arrow-back:before,
.ion-ios7-arrow-down:before,
.ion-ios7-arrow-forward:before,
.ion-ios7-arrow-left:before,
.ion-ios7-arrow-right:before,
.ion-ios7-arrow-thin-down:before,
.ion-ios7-arrow-thin-left:before,
.ion-ios7-arrow-thin-right:before,
.ion-ios7-arrow-thin-up:before,
.ion-ios7-arrow-up:before,
.ion-ios7-at:before,
.ion-ios7-at-outline:before,
.ion-ios7-barcode:before,
.ion-ios7-barcode-outline:before,
.ion-ios7-baseball:before,
.ion-ios7-baseball-outline:before,
.ion-ios7-basketball:before,
.ion-ios7-basketball-outline:before,
.ion-ios7-bell:before,
.ion-ios7-bell-outline:before,
.ion-ios7-bolt:before,
.ion-ios7-bolt-outline:before,
.ion-ios7-bookmarks:before,
.ion-ios7-bookmarks-outline:before,
.ion-ios7-box:before,
.ion-ios7-box-outline:before,
.ion-ios7-briefcase:before,
.ion-ios7-briefcase-outline:before,
.ion-ios7-browsers:before,
.ion-ios7-browsers-outline:before,
.ion-ios7-calculator:before,
.ion-ios7-calculator-outline:before,
.ion-ios7-calendar:before,
.ion-ios7-calendar-outline:before,
.ion-ios7-camera:before,
.ion-ios7-camera-outline:before,
.ion-ios7-cart:before,
.ion-ios7-cart-outline:before,
.ion-ios7-chatboxes:before,
.ion-ios7-chatboxes-outline:before,
.ion-ios7-chatbubble:before,
.ion-ios7-chatbubble-outline:before,
.ion-ios7-checkmark:before,
.ion-ios7-checkmark-empty:before,
.ion-ios7-checkmark-outline:before,
.ion-ios7-circle-filled:before,
.ion-ios7-circle-outline:before,
.ion-ios7-clock:before,
.ion-ios7-clock-outline:before,
.ion-ios7-close:before,
.ion-ios7-close-empty:before,
.ion-ios7-close-outline:before,
.ion-ios7-cloud:before,
.ion-ios7-cloud-download:before,
.ion-ios7-cloud-download-outline:before,
.ion-ios7-cloud-outline:before,
.ion-ios7-cloud-upload:before,
.ion-ios7-cloud-upload-outline:before,
.ion-ios7-cloudy:before,
.ion-ios7-cloudy-night:before,
.ion-ios7-cloudy-night-outline:before,
.ion-ios7-cloudy-outline:before,
.ion-ios7-cog:before,
.ion-ios7-cog-outline:before,
.ion-ios7-compose:before,
.ion-ios7-compose-outline:before,
.ion-ios7-contact:before,
.ion-ios7-contact-outline:before,
.ion-ios7-copy:before,
.ion-ios7-copy-outline:before,
.ion-ios7-download:before,
.ion-ios7-download-outline:before,
.ion-ios7-drag:before,
.ion-ios7-email:before,
.ion-ios7-email-outline:before,
.ion-ios7-expand:before,
.ion-ios7-eye:before,
.ion-ios7-eye-outline:before,
.ion-ios7-fastforward:before,
.ion-ios7-fastforward-outline:before,
.ion-ios7-filing:before,
.ion-ios7-filing-outline:before,
.ion-ios7-film:before,
.ion-ios7-film-outline:before,
.ion-ios7-flag:before,
.ion-ios7-flag-outline:before,
.ion-ios7-folder:before,
.ion-ios7-folder-outline:before,
.ion-ios7-football:before,
.ion-ios7-football-outline:before,
.ion-ios7-gear:before,
.ion-ios7-gear-outline:before,
.ion-ios7-glasses:before,
.ion-ios7-glasses-outline:before,
.ion-ios7-heart:before,
.ion-ios7-heart-outline:before,
.ion-ios7-help:before,
.ion-ios7-help-empty:before,
.ion-ios7-help-outline:before,
.ion-ios7-home:before,
.ion-ios7-home-outline:before,
.ion-ios7-infinite:before,
.ion-ios7-infinite-outline:before,
.ion-ios7-information:before,
.ion-ios7-information-empty:before,
.ion-ios7-information-outline:before,
.ion-ios7-ionic-outline:before,
.ion-ios7-keypad:before,
.ion-ios7-keypad-outline:before,
.ion-ios7-lightbulb:before,
.ion-ios7-lightbulb-outline:before,
.ion-ios7-location:before,
.ion-ios7-location-outline:before,
.ion-ios7-locked:before,
.ion-ios7-locked-outline:before,
.ion-ios7-loop:before,
.ion-ios7-loop-strong:before,
.ion-ios7-medkit:before,
.ion-ios7-medkit-outline:before,
.ion-ios7-mic:before,
.ion-ios7-mic-off:before,
.ion-ios7-mic-outline:before,
.ion-ios7-minus:before,
.ion-ios7-minus-empty:before,
.ion-ios7-minus-outline:before,
.ion-ios7-monitor:before,
.ion-ios7-monitor-outline:before,
.ion-ios7-moon:before,
.ion-ios7-moon-outline:before,
.ion-ios7-more:before,
.ion-ios7-more-outline:before,
.ion-ios7-musical-note:before,
.ion-ios7-musical-notes:before,
.ion-ios7-navigate:before,
.ion-ios7-navigate-outline:before,
.ion-ios7-paper:before,
.ion-ios7-paper-outline:before,
.ion-ios7-paperplane:before,
.ion-ios7-paperplane-outline:before,
.ion-ios7-partlysunny:before,
.ion-ios7-partlysunny-outline:before,
.ion-ios7-pause:before,
.ion-ios7-pause-outline:before,
.ion-ios7-paw:before,
.ion-ios7-paw-outline:before,
.ion-ios7-people:before,
.ion-ios7-people-outline:before,
.ion-ios7-person:before,
.ion-ios7-person-outline:before,
.ion-ios7-personadd:before,
.ion-ios7-personadd-outline:before,
.ion-ios7-photos:before,
.ion-ios7-photos-outline:before,
.ion-ios7-pie:before,
.ion-ios7-pie-outline:before,
.ion-ios7-play:before,
.ion-ios7-play-outline:before,
.ion-ios7-plus:before,
.ion-ios7-plus-empty:before,
.ion-ios7-plus-outline:before,
.ion-ios7-pricetag:before,
.ion-ios7-pricetag-outline:before,
.ion-ios7-pricetags:before,
.ion-ios7-pricetags-outline:before,
.ion-ios7-printer:before,
.ion-ios7-printer-outline:before,
.ion-ios7-pulse:before,
.ion-ios7-pulse-strong:before,
.ion-ios7-rainy:before,
.ion-ios7-rainy-outline:before,
.ion-ios7-recording:before,
.ion-ios7-recording-outline:before,
.ion-ios7-redo:before,
.ion-ios7-redo-outline:before,
.ion-ios7-refresh:before,
.ion-ios7-refresh-empty:before,
.ion-ios7-refresh-outline:before,
.ion-ios7-reload:before,
.ion-ios7-reloading:before,
.ion-ios7-reverse-camera:before,
.ion-ios7-reverse-camera-outline:before,
.ion-ios7-rewind:before,
.ion-ios7-rewind-outline:before,
.ion-ios7-search:before,
.ion-ios7-search-strong:before,
.ion-ios7-settings:before,
.ion-ios7-settings-strong:before,
.ion-ios7-shrink:before,
.ion-ios7-skipbackward:before,
.ion-ios7-skipbackward-outline:before,
.ion-ios7-skipforward:before,
.ion-ios7-skipforward-outline:before,
.ion-ios7-snowy:before,
.ion-ios7-speedometer:before,
.ion-ios7-speedometer-outline:before,
.ion-ios7-star:before,
.ion-ios7-star-half:before,
.ion-ios7-star-outline:before,
.ion-ios7-stopwatch:before,
.ion-ios7-stopwatch-outline:before,
.ion-ios7-sunny:before,
.ion-ios7-sunny-outline:before,
.ion-ios7-telephone:before,
.ion-ios7-telephone-outline:before,
.ion-ios7-tennisball:before,
.ion-ios7-tennisball-outline:before,
.ion-ios7-thunderstorm:before,
.ion-ios7-thunderstorm-outline:before,
.ion-ios7-time:before,
.ion-ios7-time-outline:before,
.ion-ios7-timer:before,
.ion-ios7-timer-outline:before,
.ion-ios7-toggle:before,
.ion-ios7-toggle-outline:before,
.ion-ios7-trash:before,
.ion-ios7-trash-outline:before,
.ion-ios7-undo:before,
.ion-ios7-undo-outline:before,
.ion-ios7-unlocked:before,
.ion-ios7-unlocked-outline:before,
.ion-ios7-upload:before,
.ion-ios7-upload-outline:before,
.ion-ios7-videocam:before,
.ion-ios7-videocam-outline:before,
.ion-ios7-volume-high:before,
.ion-ios7-volume-low:before,
.ion-ios7-wineglass:before,
.ion-ios7-wineglass-outline:before,
.ion-ios7-world:before,
.ion-ios7-world-outline:before,
.ion-ipad:before,
.ion-iphone:before,
.ion-ipod:before,
.ion-jet:before,
.ion-key:before,
.ion-knife:before,
.ion-laptop:before,
.ion-leaf:before,
.ion-levels:before,
.ion-lightbulb:before,
.ion-link:before,
.ion-load-a:before,
.ion-loading-a:before,
.ion-load-b:before,
.ion-loading-b:before,
.ion-load-c:before,
.ion-loading-c:before,
.ion-load-d:before,
.ion-loading-d:before,
.ion-location:before,
.ion-locked:before,
.ion-log-in:before,
.ion-log-out:before,
.ion-loop:before,
.ion-looping:before,
.ion-magnet:before,
.ion-male:before,
.ion-man:before,
.ion-map:before,
.ion-medkit:before,
.ion-merge:before,
.ion-mic-a:before,
.ion-mic-b:before,
.ion-mic-c:before,
.ion-minus:before,
.ion-minus-circled:before,
.ion-minus-round:before,
.ion-model-s:before,
.ion-monitor:before,
.ion-more:before,
.ion-mouse:before,
.ion-music-note:before,
.ion-navicon:before,
.ion-navicon-round:before,
.ion-navigate:before,
.ion-network:before,
.ion-no-smoking:before,
.ion-nuclear:before,
.ion-outlet:before,
.ion-paper-airplane:before,
.ion-paperclip:before,
.ion-pause:before,
.ion-person:before,
.ion-person-add:before,
.ion-person-stalker:before,
.ion-pie-graph:before,
.ion-pin:before,
.ion-pinpoint:before,
.ion-pizza:before,
.ion-plane:before,
.ion-planet:before,
.ion-play:before,
.ion-playstation:before,
.ion-plus:before,
.ion-plus-circled:before,
.ion-plus-round:before,
.ion-podium:before,
.ion-pound:before,
.ion-power:before,
.ion-pricetag:before,
.ion-pricetags:before,
.ion-printer:before,
.ion-pull-request:before,
.ion-qr-scanner:before,
.ion-quote:before,
.ion-radio-waves:before,
.ion-record:before,
.ion-refresh:before,
.ion-refreshing:before,
.ion-reply:before,
.ion-reply-all:before,
.ion-ribbon-a:before,
.ion-ribbon-b:before,
.ion-sad:before,
.ion-scissors:before,
.ion-search:before,
.ion-settings:before,
.ion-share:before,
.ion-shuffle:before,
.ion-skip-backward:before,
.ion-skip-forward:before,
.ion-social-android:before,
.ion-social-android-outline:before,
.ion-social-apple:before,
.ion-social-apple-outline:before,
.ion-social-bitcoin:before,
.ion-social-bitcoin-outline:before,
.ion-social-buffer:before,
.ion-social-buffer-outline:before,
.ion-social-designernews:before,
.ion-social-designernews-outline:before,
.ion-social-dribbble:before,
.ion-social-dribbble-outline:before,
.ion-social-dropbox:before,
.ion-social-dropbox-outline:before,
.ion-social-facebook:before,
.ion-social-facebook-outline:before,
.ion-social-foursquare:before,
.ion-social-foursquare-outline:before,
.ion-social-freebsd-devil:before,
.ion-social-github:before,
.ion-social-github-outline:before,
.ion-social-google:before,
.ion-social-google-outline:before,
.ion-social-googleplus:before,
.ion-social-googleplus-outline:before,
.ion-social-hackernews:before,
.ion-social-hackernews-outline:before,
.ion-social-instagram:before,
.ion-social-instagram-outline:before,
.ion-social-linkedin:before,
.ion-social-linkedin-outline:before,
.ion-social-pinterest:before,
.ion-social-pinterest-outline:before,
.ion-social-reddit:before,
.ion-social-reddit-outline:before,
.ion-social-rss:before,
.ion-social-rss-outline:before,
.ion-social-skype:before,
.ion-social-skype-outline:before,
.ion-social-tumblr:before,
.ion-social-tumblr-outline:before,
.ion-social-tux:before,
.ion-social-twitter:before,
.ion-social-twitter-outline:before,
.ion-social-usd:before,
.ion-social-usd-outline:before,
.ion-social-vimeo:before,
.ion-social-vimeo-outline:before,
.ion-social-windows:before,
.ion-social-windows-outline:before,
.ion-social-wordpress:before,
.ion-social-wordpress-outline:before,
.ion-social-yahoo:before,
.ion-social-yahoo-outline:before,
.ion-social-youtube:before,
.ion-social-youtube-outline:before,
.ion-speakerphone:before,
.ion-speedometer:before,
.ion-spoon:before,
.ion-star:before,
.ion-stats-bars:before,
.ion-steam:before,
.ion-stop:before,
.ion-thermometer:before,
.ion-thumbsdown:before,
.ion-thumbsup:before,
.ion-toggle:before,
.ion-toggle-filled:before,
.ion-trash-a:before,
.ion-trash-b:before,
.ion-trophy:before,
.ion-umbrella:before,
.ion-university:before,
.ion-unlocked:before,
.ion-upload:before,
.ion-usb:before,
.ion-videocamera:before,
.ion-volume-high:before,
.ion-volume-low:before,
.ion-volume-medium:before,
.ion-volume-mute:before,
.ion-wand:before,
.ion-waterdrop:before,
.ion-wifi:before,
.ion-wineglass:before,
.ion-woman:before,
.ion-wrench:before,
.ion-xbox:before {
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.ion-spin, .ion-loading-a,
.ion-loading-b,
.ion-loading-c,
.ion-loading-d,
.ion-looping,
.ion-refreshing,
.ion-ios7-reloading {
  -webkit-animation: spin 1s infinite linear;
  -moz-animation: spin 1s infinite linear;
  -o-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear; }

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg); }

  100% {
    -moz-transform: rotate(359deg); } }
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg); }

  100% {
    -webkit-transform: rotate(359deg); } }
@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg); }

  100% {
    -o-transform: rotate(359deg); } }
@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg); }

  100% {
    -ms-transform: rotate(359deg); } }
@keyframes spin {
  0% {
    transform: rotate(0deg); }

  100% {
    transform: rotate(359deg); } }
.ion-loading-a {
  -webkit-animation-timing-function: steps(8, start);
  -moz-animation-timing-function: steps(8, start);
  animation-timing-function: steps(8, start); }

.ion-alert:before {
  content: "\f101"; }

.ion-alert-circled:before {
  content: "\f100"; }

.ion-android-add:before {
  content: "\f2c7"; }

.ion-android-add-contact:before {
  content: "\f2c6"; }

.ion-android-alarm:before {
  content: "\f2c8"; }

.ion-android-archive:before {
  content: "\f2c9"; }

.ion-android-arrow-back:before {
  content: "\f2ca"; }

.ion-android-arrow-down-left:before {
  content: "\f2cb"; }

.ion-android-arrow-down-right:before {
  content: "\f2cc"; }

.ion-android-arrow-forward:before {
  content: "\f30f"; }

.ion-android-arrow-up-left:before {
  content: "\f2cd"; }

.ion-android-arrow-up-right:before {
  content: "\f2ce"; }

.ion-android-battery:before {
  content: "\f2cf"; }

.ion-android-book:before {
  content: "\f2d0"; }

.ion-android-calendar:before {
  content: "\f2d1"; }

.ion-android-call:before {
  content: "\f2d2"; }

.ion-android-camera:before {
  content: "\f2d3"; }

.ion-android-chat:before {
  content: "\f2d4"; }

.ion-android-checkmark:before {
  content: "\f2d5"; }

.ion-android-clock:before {
  content: "\f2d6"; }

.ion-android-close:before {
  content: "\f2d7"; }

.ion-android-contact:before {
  content: "\f2d8"; }

.ion-android-contacts:before {
  content: "\f2d9"; }

.ion-android-data:before {
  content: "\f2da"; }

.ion-android-developer:before {
  content: "\f2db"; }

.ion-android-display:before {
  content: "\f2dc"; }

.ion-android-download:before {
  content: "\f2dd"; }

.ion-android-drawer:before {
  content: "\f310"; }

.ion-android-dropdown:before {
  content: "\f2de"; }

.ion-android-earth:before {
  content: "\f2df"; }

.ion-android-folder:before {
  content: "\f2e0"; }

.ion-android-forums:before {
  content: "\f2e1"; }

.ion-android-friends:before {
  content: "\f2e2"; }

.ion-android-hand:before {
  content: "\f2e3"; }

.ion-android-image:before {
  content: "\f2e4"; }

.ion-android-inbox:before {
  content: "\f2e5"; }

.ion-android-information:before {
  content: "\f2e6"; }

.ion-android-keypad:before {
  content: "\f2e7"; }

.ion-android-lightbulb:before {
  content: "\f2e8"; }

.ion-android-locate:before {
  content: "\f2e9"; }

.ion-android-location:before {
  content: "\f2ea"; }

.ion-android-mail:before {
  content: "\f2eb"; }

.ion-android-microphone:before {
  content: "\f2ec"; }

.ion-android-mixer:before {
  content: "\f2ed"; }

.ion-android-more:before {
  content: "\f2ee"; }

.ion-android-note:before {
  content: "\f2ef"; }

.ion-android-playstore:before {
  content: "\f2f0"; }

.ion-android-printer:before {
  content: "\f2f1"; }

.ion-android-promotion:before {
  content: "\f2f2"; }

.ion-android-reminder:before {
  content: "\f2f3"; }

.ion-android-remove:before {
  content: "\f2f4"; }

.ion-android-search:before {
  content: "\f2f5"; }

.ion-android-send:before {
  content: "\f2f6"; }

.ion-android-settings:before {
  content: "\f2f7"; }

.ion-android-share:before {
  content: "\f2f8"; }

.ion-android-social:before {
  content: "\f2fa"; }

.ion-android-social-user:before {
  content: "\f2f9"; }

.ion-android-sort:before {
  content: "\f2fb"; }

.ion-android-stair-drawer:before {
  content: "\f311"; }

.ion-android-star:before {
  content: "\f2fc"; }

.ion-android-stopwatch:before {
  content: "\f2fd"; }

.ion-android-storage:before {
  content: "\f2fe"; }

.ion-android-system-back:before {
  content: "\f2ff"; }

.ion-android-system-home:before {
  content: "\f300"; }

.ion-android-system-windows:before {
  content: "\f301"; }

.ion-android-timer:before {
  content: "\f302"; }

.ion-android-trash:before {
  content: "\f303"; }

.ion-android-user-menu:before {
  content: "\f312"; }

.ion-android-volume:before {
  content: "\f304"; }

.ion-android-wifi:before {
  content: "\f305"; }

.ion-aperture:before {
  content: "\f313"; }

.ion-archive:before {
  content: "\f102"; }

.ion-arrow-down-a:before {
  content: "\f103"; }

.ion-arrow-down-b:before {
  content: "\f104"; }

.ion-arrow-down-c:before {
  content: "\f105"; }

.ion-arrow-expand:before {
  content: "\f25e"; }

.ion-arrow-graph-down-left:before {
  content: "\f25f"; }

.ion-arrow-graph-down-right:before {
  content: "\f260"; }

.ion-arrow-graph-up-left:before {
  content: "\f261"; }

.ion-arrow-graph-up-right:before {
  content: "\f262"; }

.ion-arrow-left-a:before {
  content: "\f106"; }

.ion-arrow-left-b:before {
  content: "\f107"; }

.ion-arrow-left-c:before {
  content: "\f108"; }

.ion-arrow-move:before {
  content: "\f263"; }

.ion-arrow-resize:before {
  content: "\f264"; }

.ion-arrow-return-left:before {
  content: "\f265"; }

.ion-arrow-return-right:before {
  content: "\f266"; }

.ion-arrow-right-a:before {
  content: "\f109"; }

.ion-arrow-right-b:before {
  content: "\f10a"; }

.ion-arrow-right-c:before {
  content: "\f10b"; }

.ion-arrow-shrink:before {
  content: "\f267"; }

.ion-arrow-swap:before {
  content: "\f268"; }

.ion-arrow-up-a:before {
  content: "\f10c"; }

.ion-arrow-up-b:before {
  content: "\f10d"; }

.ion-arrow-up-c:before {
  content: "\f10e"; }

.ion-asterisk:before {
  content: "\f314"; }

.ion-at:before {
  content: "\f10f"; }

.ion-bag:before {
  content: "\f110"; }

.ion-battery-charging:before {
  content: "\f111"; }

.ion-battery-empty:before {
  content: "\f112"; }

.ion-battery-full:before {
  content: "\f113"; }

.ion-battery-half:before {
  content: "\f114"; }

.ion-battery-low:before {
  content: "\f115"; }

.ion-beaker:before {
  content: "\f269"; }

.ion-beer:before {
  content: "\f26a"; }

.ion-bluetooth:before {
  content: "\f116"; }

.ion-bonfire:before {
  content: "\f315"; }

.ion-bookmark:before {
  content: "\f26b"; }

.ion-briefcase:before {
  content: "\f26c"; }

.ion-bug:before {
  content: "\f2be"; }

.ion-calculator:before {
  content: "\f26d"; }

.ion-calendar:before {
  content: "\f117"; }

.ion-camera:before {
  content: "\f118"; }

.ion-card:before {
  content: "\f119"; }

.ion-cash:before {
  content: "\f316"; }

.ion-chatbox:before {
  content: "\f11b"; }

.ion-chatbox-working:before {
  content: "\f11a"; }

.ion-chatboxes:before {
  content: "\f11c"; }

.ion-chatbubble:before {
  content: "\f11e"; }

.ion-chatbubble-working:before {
  content: "\f11d"; }

.ion-chatbubbles:before {
  content: "\f11f"; }

.ion-checkmark:before {
  content: "\f122"; }

.ion-checkmark-circled:before {
  content: "\f120"; }

.ion-checkmark-round:before {
  content: "\f121"; }

.ion-chevron-down:before {
  content: "\f123"; }

.ion-chevron-left:before {
  content: "\f124"; }

.ion-chevron-right:before {
  content: "\f125"; }

.ion-chevron-up:before {
  content: "\f126"; }

.ion-clipboard:before {
  content: "\f127"; }

.ion-clock:before {
  content: "\f26e"; }

.ion-close:before {
  content: "\f12a"; }

.ion-close-circled:before {
  content: "\f128"; }

.ion-close-round:before {
  content: "\f129"; }

.ion-closed-captioning:before {
  content: "\f317"; }

.ion-cloud:before {
  content: "\f12b"; }

.ion-code:before {
  content: "\f271"; }

.ion-code-download:before {
  content: "\f26f"; }

.ion-code-working:before {
  content: "\f270"; }

.ion-coffee:before {
  content: "\f272"; }

.ion-compass:before {
  content: "\f273"; }

.ion-compose:before {
  content: "\f12c"; }

.ion-connection-bars:before {
  content: "\f274"; }

.ion-contrast:before {
  content: "\f275"; }

.ion-cube:before {
  content: "\f318"; }

.ion-disc:before {
  content: "\f12d"; }

.ion-document:before {
  content: "\f12f"; }

.ion-document-text:before {
  content: "\f12e"; }

.ion-drag:before {
  content: "\f130"; }

.ion-earth:before {
  content: "\f276"; }

.ion-edit:before {
  content: "\f2bf"; }

.ion-egg:before {
  content: "\f277"; }

.ion-eject:before {
  content: "\f131"; }

.ion-email:before {
  content: "\f132"; }

.ion-eye:before {
  content: "\f133"; }

.ion-eye-disabled:before {
  content: "\f306"; }

.ion-female:before {
  content: "\f278"; }

.ion-filing:before {
  content: "\f134"; }

.ion-film-marker:before {
  content: "\f135"; }

.ion-fireball:before {
  content: "\f319"; }

.ion-flag:before {
  content: "\f279"; }

.ion-flame:before {
  content: "\f31a"; }

.ion-flash:before {
  content: "\f137"; }

.ion-flash-off:before {
  content: "\f136"; }

.ion-flask:before {
  content: "\f138"; }

.ion-folder:before {
  content: "\f139"; }

.ion-fork:before {
  content: "\f27a"; }

.ion-fork-repo:before {
  content: "\f2c0"; }

.ion-forward:before {
  content: "\f13a"; }

.ion-funnel:before {
  content: "\f31b"; }

.ion-game-controller-a:before {
  content: "\f13b"; }

.ion-game-controller-b:before {
  content: "\f13c"; }

.ion-gear-a:before {
  content: "\f13d"; }

.ion-gear-b:before {
  content: "\f13e"; }

.ion-grid:before {
  content: "\f13f"; }

.ion-hammer:before {
  content: "\f27b"; }

.ion-happy:before {
  content: "\f31c"; }

.ion-headphone:before {
  content: "\f140"; }

.ion-heart:before {
  content: "\f141"; }

.ion-heart-broken:before {
  content: "\f31d"; }

.ion-help:before {
  content: "\f143"; }

.ion-help-buoy:before {
  content: "\f27c"; }

.ion-help-circled:before {
  content: "\f142"; }

.ion-home:before {
  content: "\f144"; }

.ion-icecream:before {
  content: "\f27d"; }

.ion-icon-social-google-plus:before {
  content: "\f146"; }

.ion-icon-social-google-plus-outline:before {
  content: "\f145"; }

.ion-image:before {
  content: "\f147"; }

.ion-images:before {
  content: "\f148"; }

.ion-information:before {
  content: "\f14a"; }

.ion-information-circled:before {
  content: "\f149"; }

.ion-ionic:before {
  content: "\f14b"; }

.ion-ios7-alarm:before {
  content: "\f14d"; }

.ion-ios7-alarm-outline:before {
  content: "\f14c"; }

.ion-ios7-albums:before {
  content: "\f14f"; }

.ion-ios7-albums-outline:before {
  content: "\f14e"; }

.ion-ios7-americanfootball:before {
  content: "\f31f"; }

.ion-ios7-americanfootball-outline:before {
  content: "\f31e"; }

.ion-ios7-analytics:before {
  content: "\f321"; }

.ion-ios7-analytics-outline:before {
  content: "\f320"; }

.ion-ios7-arrow-back:before {
  content: "\f150"; }

.ion-ios7-arrow-down:before {
  content: "\f151"; }

.ion-ios7-arrow-forward:before {
  content: "\f152"; }

.ion-ios7-arrow-left:before {
  content: "\f153"; }

.ion-ios7-arrow-right:before {
  content: "\f154"; }

.ion-ios7-arrow-thin-down:before {
  content: "\f27e"; }

.ion-ios7-arrow-thin-left:before {
  content: "\f27f"; }

.ion-ios7-arrow-thin-right:before {
  content: "\f280"; }

.ion-ios7-arrow-thin-up:before {
  content: "\f281"; }

.ion-ios7-arrow-up:before {
  content: "\f155"; }

.ion-ios7-at:before {
  content: "\f157"; }

.ion-ios7-at-outline:before {
  content: "\f156"; }

.ion-ios7-barcode:before {
  content: "\f323"; }

.ion-ios7-barcode-outline:before {
  content: "\f322"; }

.ion-ios7-baseball:before {
  content: "\f325"; }

.ion-ios7-baseball-outline:before {
  content: "\f324"; }

.ion-ios7-basketball:before {
  content: "\f327"; }

.ion-ios7-basketball-outline:before {
  content: "\f326"; }

.ion-ios7-bell:before {
  content: "\f159"; }

.ion-ios7-bell-outline:before {
  content: "\f158"; }

.ion-ios7-bolt:before {
  content: "\f15b"; }

.ion-ios7-bolt-outline:before {
  content: "\f15a"; }

.ion-ios7-bookmarks:before {
  content: "\f15d"; }

.ion-ios7-bookmarks-outline:before {
  content: "\f15c"; }

.ion-ios7-box:before {
  content: "\f15f"; }

.ion-ios7-box-outline:before {
  content: "\f15e"; }

.ion-ios7-briefcase:before {
  content: "\f283"; }

.ion-ios7-briefcase-outline:before {
  content: "\f282"; }

.ion-ios7-browsers:before {
  content: "\f161"; }

.ion-ios7-browsers-outline:before {
  content: "\f160"; }

.ion-ios7-calculator:before {
  content: "\f285"; }

.ion-ios7-calculator-outline:before {
  content: "\f284"; }

.ion-ios7-calendar:before {
  content: "\f163"; }

.ion-ios7-calendar-outline:before {
  content: "\f162"; }

.ion-ios7-camera:before {
  content: "\f165"; }

.ion-ios7-camera-outline:before {
  content: "\f164"; }

.ion-ios7-cart:before {
  content: "\f167"; }

.ion-ios7-cart-outline:before {
  content: "\f166"; }

.ion-ios7-chatboxes:before {
  content: "\f169"; }

.ion-ios7-chatboxes-outline:before {
  content: "\f168"; }

.ion-ios7-chatbubble:before {
  content: "\f16b"; }

.ion-ios7-chatbubble-outline:before {
  content: "\f16a"; }

.ion-ios7-checkmark:before {
  content: "\f16e"; }

.ion-ios7-checkmark-empty:before {
  content: "\f16c"; }

.ion-ios7-checkmark-outline:before {
  content: "\f16d"; }

.ion-ios7-circle-filled:before {
  content: "\f16f"; }

.ion-ios7-circle-outline:before {
  content: "\f170"; }

.ion-ios7-clock:before {
  content: "\f172"; }

.ion-ios7-clock-outline:before {
  content: "\f171"; }

.ion-ios7-close:before {
  content: "\f2bc"; }

.ion-ios7-close-empty:before {
  content: "\f2bd"; }

.ion-ios7-close-outline:before {
  content: "\f2bb"; }

.ion-ios7-cloud:before {
  content: "\f178"; }

.ion-ios7-cloud-download:before {
  content: "\f174"; }

.ion-ios7-cloud-download-outline:before {
  content: "\f173"; }

.ion-ios7-cloud-outline:before {
  content: "\f175"; }

.ion-ios7-cloud-upload:before {
  content: "\f177"; }

.ion-ios7-cloud-upload-outline:before {
  content: "\f176"; }

.ion-ios7-cloudy:before {
  content: "\f17a"; }

.ion-ios7-cloudy-night:before {
  content: "\f308"; }

.ion-ios7-cloudy-night-outline:before {
  content: "\f307"; }

.ion-ios7-cloudy-outline:before {
  content: "\f179"; }

.ion-ios7-cog:before {
  content: "\f17c"; }

.ion-ios7-cog-outline:before {
  content: "\f17b"; }

.ion-ios7-compose:before {
  content: "\f17e"; }

.ion-ios7-compose-outline:before {
  content: "\f17d"; }

.ion-ios7-contact:before {
  content: "\f180"; }

.ion-ios7-contact-outline:before {
  content: "\f17f"; }

.ion-ios7-copy:before {
  content: "\f182"; }

.ion-ios7-copy-outline:before {
  content: "\f181"; }

.ion-ios7-download:before {
  content: "\f184"; }

.ion-ios7-download-outline:before {
  content: "\f183"; }

.ion-ios7-drag:before {
  content: "\f185"; }

.ion-ios7-email:before {
  content: "\f187"; }

.ion-ios7-email-outline:before {
  content: "\f186"; }

.ion-ios7-expand:before {
  content: "\f30d"; }

.ion-ios7-eye:before {
  content: "\f189"; }

.ion-ios7-eye-outline:before {
  content: "\f188"; }

.ion-ios7-fastforward:before {
  content: "\f18b"; }

.ion-ios7-fastforward-outline:before {
  content: "\f18a"; }

.ion-ios7-filing:before {
  content: "\f18d"; }

.ion-ios7-filing-outline:before {
  content: "\f18c"; }

.ion-ios7-film:before {
  content: "\f18f"; }

.ion-ios7-film-outline:before {
  content: "\f18e"; }

.ion-ios7-flag:before {
  content: "\f191"; }

.ion-ios7-flag-outline:before {
  content: "\f190"; }

.ion-ios7-folder:before {
  content: "\f193"; }

.ion-ios7-folder-outline:before {
  content: "\f192"; }

.ion-ios7-football:before {
  content: "\f329"; }

.ion-ios7-football-outline:before {
  content: "\f328"; }

.ion-ios7-gear:before {
  content: "\f195"; }

.ion-ios7-gear-outline:before {
  content: "\f194"; }

.ion-ios7-glasses:before {
  content: "\f197"; }

.ion-ios7-glasses-outline:before {
  content: "\f196"; }

.ion-ios7-heart:before {
  content: "\f199"; }

.ion-ios7-heart-outline:before {
  content: "\f198"; }

.ion-ios7-help:before {
  content: "\f19c"; }

.ion-ios7-help-empty:before {
  content: "\f19a"; }

.ion-ios7-help-outline:before {
  content: "\f19b"; }

.ion-ios7-home:before {
  content: "\f32b"; }

.ion-ios7-home-outline:before {
  content: "\f32a"; }

.ion-ios7-infinite:before {
  content: "\f19e"; }

.ion-ios7-infinite-outline:before {
  content: "\f19d"; }

.ion-ios7-information:before {
  content: "\f1a1"; }

.ion-ios7-information-empty:before {
  content: "\f19f"; }

.ion-ios7-information-outline:before {
  content: "\f1a0"; }

.ion-ios7-ionic-outline:before {
  content: "\f1a2"; }

.ion-ios7-keypad:before {
  content: "\f1a4"; }

.ion-ios7-keypad-outline:before {
  content: "\f1a3"; }

.ion-ios7-lightbulb:before {
  content: "\f287"; }

.ion-ios7-lightbulb-outline:before {
  content: "\f286"; }

.ion-ios7-location:before {
  content: "\f1a6"; }

.ion-ios7-location-outline:before {
  content: "\f1a5"; }

.ion-ios7-locked:before {
  content: "\f1a8"; }

.ion-ios7-locked-outline:before {
  content: "\f1a7"; }

.ion-ios7-loop:before {
  content: "\f32d"; }

.ion-ios7-loop-strong:before {
  content: "\f32c"; }

.ion-ios7-medkit:before {
  content: "\f289"; }

.ion-ios7-medkit-outline:before {
  content: "\f288"; }

.ion-ios7-mic:before {
  content: "\f1ab"; }

.ion-ios7-mic-off:before {
  content: "\f1a9"; }

.ion-ios7-mic-outline:before {
  content: "\f1aa"; }

.ion-ios7-minus:before {
  content: "\f1ae"; }

.ion-ios7-minus-empty:before {
  content: "\f1ac"; }

.ion-ios7-minus-outline:before {
  content: "\f1ad"; }

.ion-ios7-monitor:before {
  content: "\f1b0"; }

.ion-ios7-monitor-outline:before {
  content: "\f1af"; }

.ion-ios7-moon:before {
  content: "\f1b2"; }

.ion-ios7-moon-outline:before {
  content: "\f1b1"; }

.ion-ios7-more:before {
  content: "\f1b4"; }

.ion-ios7-more-outline:before {
  content: "\f1b3"; }

.ion-ios7-musical-note:before {
  content: "\f1b5"; }

.ion-ios7-musical-notes:before {
  content: "\f1b6"; }

.ion-ios7-navigate:before {
  content: "\f1b8"; }

.ion-ios7-navigate-outline:before {
  content: "\f1b7"; }

.ion-ios7-paper:before {
  content: "\f32f"; }

.ion-ios7-paper-outline:before {
  content: "\f32e"; }

.ion-ios7-paperplane:before {
  content: "\f1ba"; }

.ion-ios7-paperplane-outline:before {
  content: "\f1b9"; }

.ion-ios7-partlysunny:before {
  content: "\f1bc"; }

.ion-ios7-partlysunny-outline:before {
  content: "\f1bb"; }

.ion-ios7-pause:before {
  content: "\f1be"; }

.ion-ios7-pause-outline:before {
  content: "\f1bd"; }

.ion-ios7-paw:before {
  content: "\f331"; }

.ion-ios7-paw-outline:before {
  content: "\f330"; }

.ion-ios7-people:before {
  content: "\f1c0"; }

.ion-ios7-people-outline:before {
  content: "\f1bf"; }

.ion-ios7-person:before {
  content: "\f1c2"; }

.ion-ios7-person-outline:before {
  content: "\f1c1"; }

.ion-ios7-personadd:before {
  content: "\f1c4"; }

.ion-ios7-personadd-outline:before {
  content: "\f1c3"; }

.ion-ios7-photos:before {
  content: "\f1c6"; }

.ion-ios7-photos-outline:before {
  content: "\f1c5"; }

.ion-ios7-pie:before {
  content: "\f28b"; }

.ion-ios7-pie-outline:before {
  content: "\f28a"; }

.ion-ios7-play:before {
  content: "\f1c8"; }

.ion-ios7-play-outline:before {
  content: "\f1c7"; }

.ion-ios7-plus:before {
  content: "\f1cb"; }

.ion-ios7-plus-empty:before {
  content: "\f1c9"; }

.ion-ios7-plus-outline:before {
  content: "\f1ca"; }

.ion-ios7-pricetag:before {
  content: "\f28d"; }

.ion-ios7-pricetag-outline:before {
  content: "\f28c"; }

.ion-ios7-pricetags:before {
  content: "\f333"; }

.ion-ios7-pricetags-outline:before {
  content: "\f332"; }

.ion-ios7-printer:before {
  content: "\f1cd"; }

.ion-ios7-printer-outline:before {
  content: "\f1cc"; }

.ion-ios7-pulse:before {
  content: "\f335"; }

.ion-ios7-pulse-strong:before {
  content: "\f334"; }

.ion-ios7-rainy:before {
  content: "\f1cf"; }

.ion-ios7-rainy-outline:before {
  content: "\f1ce"; }

.ion-ios7-recording:before {
  content: "\f1d1"; }

.ion-ios7-recording-outline:before {
  content: "\f1d0"; }

.ion-ios7-redo:before {
  content: "\f1d3"; }

.ion-ios7-redo-outline:before {
  content: "\f1d2"; }

.ion-ios7-refresh:before {
  content: "\f1d6"; }

.ion-ios7-refresh-empty:before {
  content: "\f1d4"; }

.ion-ios7-refresh-outline:before {
  content: "\f1d5"; }

.ion-ios7-reload:before, .ion-ios7-reloading:before {
  content: "\f28e"; }

.ion-ios7-reverse-camera:before {
  content: "\f337"; }

.ion-ios7-reverse-camera-outline:before {
  content: "\f336"; }

.ion-ios7-rewind:before {
  content: "\f1d8"; }

.ion-ios7-rewind-outline:before {
  content: "\f1d7"; }

.ion-ios7-search:before {
  content: "\f1da"; }

.ion-ios7-search-strong:before {
  content: "\f1d9"; }

.ion-ios7-settings:before {
  content: "\f339"; }

.ion-ios7-settings-strong:before {
  content: "\f338"; }

.ion-ios7-shrink:before {
  content: "\f30e"; }

.ion-ios7-skipbackward:before {
  content: "\f1dc"; }

.ion-ios7-skipbackward-outline:before {
  content: "\f1db"; }

.ion-ios7-skipforward:before {
  content: "\f1de"; }

.ion-ios7-skipforward-outline:before {
  content: "\f1dd"; }

.ion-ios7-snowy:before {
  content: "\f309"; }

.ion-ios7-speedometer:before {
  content: "\f290"; }

.ion-ios7-speedometer-outline:before {
  content: "\f28f"; }

.ion-ios7-star:before {
  content: "\f1e0"; }

.ion-ios7-star-half:before {
  content: "\f33a"; }

.ion-ios7-star-outline:before {
  content: "\f1df"; }

.ion-ios7-stopwatch:before {
  content: "\f1e2"; }

.ion-ios7-stopwatch-outline:before {
  content: "\f1e1"; }

.ion-ios7-sunny:before {
  content: "\f1e4"; }

.ion-ios7-sunny-outline:before {
  content: "\f1e3"; }

.ion-ios7-telephone:before {
  content: "\f1e6"; }

.ion-ios7-telephone-outline:before {
  content: "\f1e5"; }

.ion-ios7-tennisball:before {
  content: "\f33c"; }

.ion-ios7-tennisball-outline:before {
  content: "\f33b"; }

.ion-ios7-thunderstorm:before {
  content: "\f1e8"; }

.ion-ios7-thunderstorm-outline:before {
  content: "\f1e7"; }

.ion-ios7-time:before {
  content: "\f292"; }

.ion-ios7-time-outline:before {
  content: "\f291"; }

.ion-ios7-timer:before {
  content: "\f1ea"; }

.ion-ios7-timer-outline:before {
  content: "\f1e9"; }

.ion-ios7-toggle:before {
  content: "\f33e"; }

.ion-ios7-toggle-outline:before {
  content: "\f33d"; }

.ion-ios7-trash:before {
  content: "\f1ec"; }

.ion-ios7-trash-outline:before {
  content: "\f1eb"; }

.ion-ios7-undo:before {
  content: "\f1ee"; }

.ion-ios7-undo-outline:before {
  content: "\f1ed"; }

.ion-ios7-unlocked:before {
  content: "\f1f0"; }

.ion-ios7-unlocked-outline:before {
  content: "\f1ef"; }

.ion-ios7-upload:before {
  content: "\f1f2"; }

.ion-ios7-upload-outline:before {
  content: "\f1f1"; }

.ion-ios7-videocam:before {
  content: "\f1f4"; }

.ion-ios7-videocam-outline:before {
  content: "\f1f3"; }

.ion-ios7-volume-high:before {
  content: "\f1f5"; }

.ion-ios7-volume-low:before {
  content: "\f1f6"; }

.ion-ios7-wineglass:before {
  content: "\f294"; }

.ion-ios7-wineglass-outline:before {
  content: "\f293"; }

.ion-ios7-world:before {
  content: "\f1f8"; }

.ion-ios7-world-outline:before {
  content: "\f1f7"; }

.ion-ipad:before {
  content: "\f1f9"; }

.ion-iphone:before {
  content: "\f1fa"; }

.ion-ipod:before {
  content: "\f1fb"; }

.ion-jet:before {
  content: "\f295"; }

.ion-key:before {
  content: "\f296"; }

.ion-knife:before {
  content: "\f297"; }

.ion-laptop:before {
  content: "\f1fc"; }

.ion-leaf:before {
  content: "\f1fd"; }

.ion-levels:before {
  content: "\f298"; }

.ion-lightbulb:before {
  content: "\f299"; }

.ion-link:before {
  content: "\f1fe"; }

.ion-load-a:before, .ion-loading-a:before {
  content: "\f29a"; }

.ion-load-b:before, .ion-loading-b:before {
  content: "\f29b"; }

.ion-load-c:before, .ion-loading-c:before {
  content: "\f29c"; }

.ion-load-d:before, .ion-loading-d:before {
  content: "\f29d"; }

.ion-location:before {
  content: "\f1ff"; }

.ion-locked:before {
  content: "\f200"; }

.ion-log-in:before {
  content: "\f29e"; }

.ion-log-out:before {
  content: "\f29f"; }

.ion-loop:before, .ion-looping:before {
  content: "\f201"; }

.ion-magnet:before {
  content: "\f2a0"; }

.ion-male:before {
  content: "\f2a1"; }

.ion-man:before {
  content: "\f202"; }

.ion-map:before {
  content: "\f203"; }

.ion-medkit:before {
  content: "\f2a2"; }

.ion-merge:before {
  content: "\f33f"; }

.ion-mic-a:before {
  content: "\f204"; }

.ion-mic-b:before {
  content: "\f205"; }

.ion-mic-c:before {
  content: "\f206"; }

.ion-minus:before {
  content: "\f209"; }

.ion-minus-circled:before {
  content: "\f207"; }

.ion-minus-round:before {
  content: "\f208"; }

.ion-model-s:before {
  content: "\f2c1"; }

.ion-monitor:before {
  content: "\f20a"; }

.ion-more:before {
  content: "\f20b"; }

.ion-mouse:before {
  content: "\f340"; }

.ion-music-note:before {
  content: "\f20c"; }

.ion-navicon:before {
  content: "\f20e"; }

.ion-navicon-round:before {
  content: "\f20d"; }

.ion-navigate:before {
  content: "\f2a3"; }

.ion-network:before {
  content: "\f341"; }

.ion-no-smoking:before {
  content: "\f2c2"; }

.ion-nuclear:before {
  content: "\f2a4"; }

.ion-outlet:before {
  content: "\f342"; }

.ion-paper-airplane:before {
  content: "\f2c3"; }

.ion-paperclip:before {
  content: "\f20f"; }

.ion-pause:before {
  content: "\f210"; }

.ion-person:before {
  content: "\f213"; }

.ion-person-add:before {
  content: "\f211"; }

.ion-person-stalker:before {
  content: "\f212"; }

.ion-pie-graph:before {
  content: "\f2a5"; }

.ion-pin:before {
  content: "\f2a6"; }

.ion-pinpoint:before {
  content: "\f2a7"; }

.ion-pizza:before {
  content: "\f2a8"; }

.ion-plane:before {
  content: "\f214"; }

.ion-planet:before {
  content: "\f343"; }

.ion-play:before {
  content: "\f215"; }

.ion-playstation:before {
  content: "\f30a"; }

.ion-plus:before {
  content: "\f218"; }

.ion-plus-circled:before {
  content: "\f216"; }

.ion-plus-round:before {
  content: "\f217"; }

.ion-podium:before {
  content: "\f344"; }

.ion-pound:before {
  content: "\f219"; }

.ion-power:before {
  content: "\f2a9"; }

.ion-pricetag:before {
  content: "\f2aa"; }

.ion-pricetags:before {
  content: "\f2ab"; }

.ion-printer:before {
  content: "\f21a"; }

.ion-pull-request:before {
  content: "\f345"; }

.ion-qr-scanner:before {
  content: "\f346"; }

.ion-quote:before {
  content: "\f347"; }

.ion-radio-waves:before {
  content: "\f2ac"; }

.ion-record:before {
  content: "\f21b"; }

.ion-refresh:before, .ion-refreshing:before {
  content: "\f21c"; }

.ion-reply:before {
  content: "\f21e"; }

.ion-reply-all:before {
  content: "\f21d"; }

.ion-ribbon-a:before {
  content: "\f348"; }

.ion-ribbon-b:before {
  content: "\f349"; }

.ion-sad:before {
  content: "\f34a"; }

.ion-scissors:before {
  content: "\f34b"; }

.ion-search:before {
  content: "\f21f"; }

.ion-settings:before {
  content: "\f2ad"; }

.ion-share:before {
  content: "\f220"; }

.ion-shuffle:before {
  content: "\f221"; }

.ion-skip-backward:before {
  content: "\f222"; }

.ion-skip-forward:before {
  content: "\f223"; }

.ion-social-android:before {
  content: "\f225"; }

.ion-social-android-outline:before {
  content: "\f224"; }

.ion-social-apple:before {
  content: "\f227"; }

.ion-social-apple-outline:before {
  content: "\f226"; }

.ion-social-bitcoin:before {
  content: "\f2af"; }

.ion-social-bitcoin-outline:before {
  content: "\f2ae"; }

.ion-social-buffer:before {
  content: "\f229"; }

.ion-social-buffer-outline:before {
  content: "\f228"; }

.ion-social-designernews:before {
  content: "\f22b"; }

.ion-social-designernews-outline:before {
  content: "\f22a"; }

.ion-social-dribbble:before {
  content: "\f22d"; }

.ion-social-dribbble-outline:before {
  content: "\f22c"; }

.ion-social-dropbox:before {
  content: "\f22f"; }

.ion-social-dropbox-outline:before {
  content: "\f22e"; }

.ion-social-facebook:before {
  content: "\f231"; }

.ion-social-facebook-outline:before {
  content: "\f230"; }

.ion-social-foursquare:before {
  content: "\f34d"; }

.ion-social-foursquare-outline:before {
  content: "\f34c"; }

.ion-social-freebsd-devil:before {
  content: "\f2c4"; }

.ion-social-github:before {
  content: "\f233"; }

.ion-social-github-outline:before {
  content: "\f232"; }

.ion-social-google:before {
  content: "\f34f"; }

.ion-social-google-outline:before {
  content: "\f34e"; }

.ion-social-googleplus:before {
  content: "\f235"; }

.ion-social-googleplus-outline:before {
  content: "\f234"; }

.ion-social-hackernews:before {
  content: "\f237"; }

.ion-social-hackernews-outline:before {
  content: "\f236"; }

.ion-social-instagram:before {
  content: "\f351"; }

.ion-social-instagram-outline:before {
  content: "\f350"; }

.ion-social-linkedin:before {
  content: "\f239"; }

.ion-social-linkedin-outline:before {
  content: "\f238"; }

.ion-social-pinterest:before {
  content: "\f2b1"; }

.ion-social-pinterest-outline:before {
  content: "\f2b0"; }

.ion-social-reddit:before {
  content: "\f23b"; }

.ion-social-reddit-outline:before {
  content: "\f23a"; }

.ion-social-rss:before {
  content: "\f23d"; }

.ion-social-rss-outline:before {
  content: "\f23c"; }

.ion-social-skype:before {
  content: "\f23f"; }

.ion-social-skype-outline:before {
  content: "\f23e"; }

.ion-social-tumblr:before {
  content: "\f241"; }

.ion-social-tumblr-outline:before {
  content: "\f240"; }

.ion-social-tux:before {
  content: "\f2c5"; }

.ion-social-twitter:before {
  content: "\f243"; }

.ion-social-twitter-outline:before {
  content: "\f242"; }

.ion-social-usd:before {
  content: "\f353"; }

.ion-social-usd-outline:before {
  content: "\f352"; }

.ion-social-vimeo:before {
  content: "\f245"; }

.ion-social-vimeo-outline:before {
  content: "\f244"; }

.ion-social-windows:before {
  content: "\f247"; }

.ion-social-windows-outline:before {
  content: "\f246"; }

.ion-social-wordpress:before {
  content: "\f249"; }

.ion-social-wordpress-outline:before {
  content: "\f248"; }

.ion-social-yahoo:before {
  content: "\f24b"; }

.ion-social-yahoo-outline:before {
  content: "\f24a"; }

.ion-social-youtube:before {
  content: "\f24d"; }

.ion-social-youtube-outline:before {
  content: "\f24c"; }

.ion-speakerphone:before {
  content: "\f2b2"; }

.ion-speedometer:before {
  content: "\f2b3"; }

.ion-spoon:before {
  content: "\f2b4"; }

.ion-star:before {
  content: "\f24e"; }

.ion-stats-bars:before {
  content: "\f2b5"; }

.ion-steam:before {
  content: "\f30b"; }

.ion-stop:before {
  content: "\f24f"; }

.ion-thermometer:before {
  content: "\f2b6"; }

.ion-thumbsdown:before {
  content: "\f250"; }

.ion-thumbsup:before {
  content: "\f251"; }

.ion-toggle:before {
  content: "\f355"; }

.ion-toggle-filled:before {
  content: "\f354"; }

.ion-trash-a:before {
  content: "\f252"; }

.ion-trash-b:before {
  content: "\f253"; }

.ion-trophy:before {
  content: "\f356"; }

.ion-umbrella:before {
  content: "\f2b7"; }

.ion-university:before {
  content: "\f357"; }

.ion-unlocked:before {
  content: "\f254"; }

.ion-upload:before {
  content: "\f255"; }

.ion-usb:before {
  content: "\f2b8"; }

.ion-videocamera:before {
  content: "\f256"; }

.ion-volume-high:before {
  content: "\f257"; }

.ion-volume-low:before {
  content: "\f258"; }

.ion-volume-medium:before {
  content: "\f259"; }

.ion-volume-mute:before {
  content: "\f25a"; }

.ion-wand:before {
  content: "\f358"; }

.ion-waterdrop:before {
  content: "\f25b"; }

.ion-wifi:before {
  content: "\f25c"; }

.ion-wineglass:before {
  content: "\f2b9"; }

.ion-woman:before {
  content: "\f25d"; }

.ion-wrench:before {
  content: "\f2ba"; }

.ion-xbox:before {
  content: "\f30c"; }

/**
 * Resets
 * --------------------------------------------------
 * Adapted from normalize.css and some reset.css. We don't care even one
 * bit about old IE, so we don't need any hacks for that in here.
 *
 * There are probably other things we could remove here, as well.
 *
 * normalize.css v2.1.2 | MIT License | git.io/normalize

 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, i, u, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, fieldset,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font: inherit;
  font-size: 100%; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0; }

/**
 * Hide the `template` element in IE, Safari, and Firefox < 22.
 */
[hidden],
template {
  display: none; }

script {
  display: none !important; }

/* ==========================================================================
   Base
   ========================================================================== */
/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *  user zoom.
 */
html {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: sans-serif;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */ }

/**
 * Remove default margin.
 */
body {
  margin: 0;
  line-height: 1; }

/**
 * Remove default outlines.
 */
a,
button,
:focus,
a:focus,
button:focus,
a:active,
a:hover {
  outline: 0; }

/* *
 * Remove tap highlight color
 */
a {
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent; }
  a[href]:hover {
    cursor: pointer; }

/* ==========================================================================
   Typography
   ========================================================================== */
/**
 * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.
 */
b,
strong {
  font-weight: bold; }

/**
 * Address styling not present in Safari 5 and Chrome.
 */
dfn {
  font-style: italic; }

/**
 * Address differences between Firefox and other browsers.
 */
hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0; }

/**
 * Correct font family set oddly in Safari 5 and Chrome.
 */
code,
kbd,
pre,
samp {
  font-size: 1em;
  font-family: monospace, serif; }

/**
 * Improve readability of pre-formatted text in all browsers.
 */
pre {
  white-space: pre-wrap; }

/**
 * Set consistent quote types.
 */
q {
  quotes: "\201C" "\201D" "\2018" "\2019"; }

/**
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%; }

/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0; }

sup {
  top: -0.5em; }

sub {
  bottom: -0.25em; }

/**
 * Define consistent border, margin, and padding.
 */
fieldset {
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
  border: 1px solid #c0c0c0; }

/**
 * 1. Correct `color` not being inherited in IE 8/9.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */
legend {
  padding: 0;
  /* 2 */
  border: 0;
  /* 1 */ }

/**
 * 1. Correct font family not being inherited in all browsers.
 * 2. Correct font size not being inherited in all browsers.
 * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.
 * 4. Remove any default :focus styles
 * 5. Make sure webkit font smoothing is being inherited
 * 6. Remove default gradient in Android Firefox / FirefoxOS
 */
button,
input,
select,
textarea {
  margin: 0;
  /* 3 */
  font-size: 100%;
  /* 2 */
  font-family: inherit;
  /* 1 */
  outline-offset: 0;
  /* 4 */
  outline-style: none;
  /* 4 */
  outline-width: 0;
  /* 4 */
  -webkit-font-smoothing: inherit;
  /* 5 */
  background-image: none;
  /* 6 */ }

/**
 * Address Firefox 4+ setting `line-height` on `input` using `importnt` in
 * the UA stylesheet.
 */
button,
input {
  line-height: normal; }

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */
button,
select {
  text-transform: none; }

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *  and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *  `input` and others.
 */
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  /* 3 */
  -webkit-appearance: button;
  /* 2 */ }

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default; }

/**
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *  (include `-moz` to future-proof).
 */
input[type="search"] {
  -webkit-box-sizing: content-box;
  /* 2 */
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-appearance: textfield;
  /* 1 */ }

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

/**
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0; }

/**
 * 1. Remove default vertical scrollbar in IE 8/9.
 * 2. Improve readability and alignment in all browsers.
 */
textarea {
  overflow: auto;
  /* 1 */
  vertical-align: top;
  /* 2 */ }

img {
  -webkit-user-drag: none; }

/* ==========================================================================
   Tables
   ========================================================================== */
/**
 * Remove most spacing between table cells.
 */
table {
  border-spacing: 0;
  border-collapse: collapse; }

/**
 * Scaffolding
 * --------------------------------------------------
 */
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

html {
  overflow: hidden;
  -ms-touch-action: pan-y;
  touch-action: pan-y; }

body,
.ionic-body {
  -webkit-touch-callout: none;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  color: black;
  word-wrap: break-word;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  line-height: 20px;
  text-rendering: optimizeLegibility;
  -webkit-backface-visibility: hidden;
  -webkit-user-drag: none; }

body.grade-b,
body.grade-c {
  text-rendering: auto; }

.content {
  position: relative; }

.scroll-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  margin-top: -1px;
  width: auto;
  height: auto; }

.scroll-content-false,
.menu .scroll-content.scroll-content-false {
  z-index: 11; }

.scroll-view {
  position: relative;
  display: block;
  overflow: hidden;
  margin-top: -1px; }

/**
 * Scroll is the scroll view component available for complex and custom
 * scroll view functionality.
 */
.scroll {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  transform-origin: left top; }

::-webkit-scrollbar {
  display: none; }

.scroll-bar {
  position: absolute;
  z-index: 9999; }

.ng-animate .scroll-bar {
  visibility: hidden; }

.scroll-bar-h {
  right: 2px;
  bottom: 3px;
  left: 2px;
  height: 3px; }
  .scroll-bar-h .scroll-bar-indicator {
    height: 100%; }

.scroll-bar-v {
  top: 2px;
  right: 3px;
  bottom: 2px;
  width: 3px; }
  .scroll-bar-v .scroll-bar-indicator {
    width: 100%; }

.scroll-bar-indicator {
  position: absolute;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1; }
  .scroll-bar-indicator.scroll-bar-fade-out {
    -webkit-transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    transition: opacity 0.3s linear;
    opacity: 0; }

.grade-b .scroll-bar-indicator,
.grade-c .scroll-bar-indicator {
  border-radius: 0;
  background: #aaa; }
  .grade-b .scroll-bar-indicator.scroll-bar-fade-out,
  .grade-c .scroll-bar-indicator.scroll-bar-fade-out {
    -webkit-transition: none;
    -moz-transition: none;
    transition: none; }

@keyframes refresh-spin {
  0% {
    transform: translate3d(0, 0, 0) rotate(0); }

  100% {
    transform: translate3d(0, 0, 0) rotate(-180deg); } }
@-webkit-keyframes refresh-spin {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotate(0); }

  100% {
    -webkit-transform: translate3d(0, 0, 0) rotate(-180deg); } }
@keyframes refresh-spin-back {
  0% {
    transform: translate3d(0, 0, 0) rotate(-180deg); }

  100% {
    transform: translate3d(0, 0, 0) rotate(0); } }
@-webkit-keyframes refresh-spin-back {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotate(-180deg); }

  100% {
    -webkit-transform: translate3d(0, 0, 0) rotate(0); } }
.scroll-refresher {
  position: absolute;
  top: -60px;
  right: 0;
  left: 0;
  overflow: hidden;
  margin: auto;
  height: 60px; }
  .scroll-refresher .ionic-refresher-content {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    color: #666666;
    text-align: center;
    font-size: 30px; }
    .scroll-refresher .ionic-refresher-content .text-refreshing,
    .scroll-refresher .ionic-refresher-content .text-pulling {
      font-size: 16px;
      line-height: 16px; }
    .scroll-refresher .ionic-refresher-content.ionic-refresher-with-text {
      bottom: 10px; }
  .scroll-refresher .icon-refreshing,
  .scroll-refresher .icon-pulling {
    width: 100%;
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-style: preserve-3d; }
  .scroll-refresher .icon-pulling {
    -webkit-animation-name: refresh-spin-back;
    -moz-animation-name: refresh-spin-back;
    animation-name: refresh-spin-back;
    -webkit-animation-duration: 200ms;
    -moz-animation-duration: 200ms;
    animation-duration: 200ms;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-fill-mode: none;
    -moz-animation-fill-mode: none;
    animation-fill-mode: none;
    -webkit-transform: translate3d(0, 0, 0) rotate(0deg);
    transform: translate3d(0, 0, 0) rotate(0deg); }
  .scroll-refresher .icon-refreshing,
  .scroll-refresher .text-refreshing {
    display: none; }
  .scroll-refresher .icon-refreshing {
    -webkit-animation-duration: 1.5s;
    -moz-animation-duration: 1.5s;
    animation-duration: 1.5s; }
  .scroll-refresher.active .icon-pulling {
    -webkit-animation-name: refresh-spin;
    -moz-animation-name: refresh-spin;
    animation-name: refresh-spin;
    -webkit-transform: translate3d(0, 0, 0) rotate(-180deg);
    transform: translate3d(0, 0, 0) rotate(-180deg); }
  .scroll-refresher.active.refreshing .icon-pulling,
  .scroll-refresher.active.refreshing .text-pulling {
    display: none; }
  .scroll-refresher.active.refreshing .icon-refreshing,
  .scroll-refresher.active.refreshing .text-refreshing {
    display: block; }

.scroll-refresher-content {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  color: #666666;
  text-align: center;
  font-size: 30px; }

ion-infinite-scroll .scroll-infinite {
  position: relative;
  overflow: hidden;
  margin-top: -70px;
  height: 60px; }

.scroll-infinite-content {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  color: #666666;
  text-align: center;
  font-size: 30px; }

ion-infinite-scroll.active .scroll-infinite {
  margin-top: -30px; }

.overflow-scroll {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; }
  .overflow-scroll .scroll {
    position: static;
    height: 100%;
    -webkit-transform: translate3d(0, 0, 0); }

/* If you change these, change platform.scss as well */
.has-header {
  top: 44px; }

.no-header {
  top: 0; }

.has-subheader {
  top: 88px; }

.has-tabs-top {
  top: 93px; }

.has-header.has-subheader.has-tabs-top {
  top: 137px; }

.has-footer {
  bottom: 44px; }

.has-subfooter {
  bottom: 88px; }

.has-tabs,
.bar-footer.has-tabs {
  bottom: 49px; }

.has-footer.has-tabs {
  bottom: 93px; }

.pane {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 1; }

.view {
  z-index: 1; }

.pane,
.view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden; }

/**
 * Typography
 * --------------------------------------------------
 */
p {
  margin: 0 0 10px; }

small {
  font-size: 85%; }

cite {
  font-style: normal; }

.text-left {
  text-align: left; }

.text-right {
  text-align: right; }

.text-center {
  text-align: center; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  color: black;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  line-height: 1.2; }
  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small,
  .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small {
    font-weight: normal;
    line-height: 1; }

h1, .h1,
h2, .h2,
h3, .h3 {
  margin-top: 20px;
  margin-bottom: 10px; }
  h1:first-child, .h1:first-child,
  h2:first-child, .h2:first-child,
  h3:first-child, .h3:first-child {
    margin-top: 0; }
  h1 + h1, h1 + .h1,
  h1 + h2, h1 + .h2,
  h1 + h3, h1 + .h3, .h1 + h1, .h1 + .h1,
  .h1 + h2, .h1 + .h2,
  .h1 + h3, .h1 + .h3,
  h2 + h1,
  h2 + .h1,
  h2 + h2,
  h2 + .h2,
  h2 + h3,
  h2 + .h3, .h2 + h1, .h2 + .h1,
  .h2 + h2, .h2 + .h2,
  .h2 + h3, .h2 + .h3,
  h3 + h1,
  h3 + .h1,
  h3 + h2,
  h3 + .h2,
  h3 + h3,
  h3 + .h3, .h3 + h1, .h3 + .h1,
  .h3 + h2, .h3 + .h2,
  .h3 + h3, .h3 + .h3 {
    margin-top: 10px; }

h4, .h4,
h5, .h5,
h6, .h6 {
  margin-top: 10px;
  margin-bottom: 10px; }

h1, .h1 {
  font-size: 36px; }

h2, .h2 {
  font-size: 30px; }

h3, .h3 {
  font-size: 24px; }

h4, .h4 {
  font-size: 18px; }

h5, .h5 {
  font-size: 14px; }

h6, .h6 {
  font-size: 12px; }

h1 small, .h1 small {
  font-size: 24px; }

h2 small, .h2 small {
  font-size: 18px; }

h3 small, .h3 small,
h4 small, .h4 small {
  font-size: 14px; }

dl {
  margin-bottom: 20px; }

dt,
dd {
  line-height: 1.42857; }

dt {
  font-weight: bold; }

blockquote {
  margin: 0 0 20px;
  padding: 10px 20px;
  border-left: 5px solid gray; }
  blockquote p {
    font-weight: 300;
    font-size: 17.5px;
    line-height: 1.25; }
  blockquote p:last-child {
    margin-bottom: 0; }
  blockquote small {
    display: block;
    line-height: 1.42857; }
    blockquote small:before {
      content: '\2014 \00A0'; }

q:before,
q:after,
blockquote:before,
blockquote:after {
  content: ""; }

address {
  display: block;
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857; }

a.subdued {
  padding-right: 10px;
  color: #888;
  text-decoration: none; }
  a.subdued:hover {
    text-decoration: none; }
  a.subdued:last-child {
    padding-right: 0; }

/**
 * Action Sheets
 * --------------------------------------------------
 */
.action-sheet-backdrop {
  -webkit-transition: background-color 300ms ease-in-out;
  -moz-transition: background-color 300ms ease-in-out;
  transition: background-color 300ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: transparent; }
  .action-sheet-backdrop.active {
    background-color: rgba(0, 0, 0, 0.5); }

.action-sheet-wrapper {
  -webkit-transform: translate3d(0, 100%, 0);
  -moz-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  -webkit-transition: all ease-in-out 300ms;
  -moz-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  position: absolute;
  bottom: 0;
  width: 100%; }

.action-sheet-up {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }

.action-sheet {
  margin-left: 15px;
  margin-right: 15px;
  width: auto;
  z-index: 11;
  overflow: hidden; }
  .action-sheet .button {
    display: block;
    padding: 1px;
    width: 100%;
    border-radius: 0;
    background-color: transparent;
    color: #4a87ee;
    font-size: 18px; }
    .action-sheet .button.destructive {
      color: #ef4e3a; }

.action-sheet-title {
  padding: 10px;
  color: #666666;
  text-align: center;
  font-size: 12px; }

.action-sheet-group {
  margin-bottom: 5px;
  border-radius: 3px 3px 3px 3px;
  background-color: #fff; }
  .action-sheet-group .button {
    border-width: 1px 0px 0px 0px;
    border-radius: 0; }
    .action-sheet-group .button.active {
      background-color: transparent;
      color: inherit; }
  .action-sheet-group .button:first-child:last-child {
    border-width: 0; }

.action-sheet-open {
  pointer-events: none; }
  .action-sheet-open.modal-open .modal {
    pointer-events: none; }
  .action-sheet-open .action-sheet-backdrop {
    pointer-events: auto; }

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: 0.1s opacity linear;
  -moz-transition: 0.1s opacity linear;
  transition: 0.1s opacity linear; }
  .backdrop.visible {
    visibility: visible; }
  .backdrop.active {
    opacity: 1; }

/**
 * Bar (Headers and Footers)
 * --------------------------------------------------
 */
.bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 44px;
  border-width: 0;
  border-style: solid;
  border-top: 1px solid transparent;
  border-bottom: 1px solid #dddddd;
  background-color: white;
  /* border-width: 1px will actually create 2 device pixels on retina */
  /* this nifty trick sets an actual 1px border on hi-res displays */
  background-size: 0; }
  @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {
    .bar {
      border: none;
      background-image: linear-gradient(0deg, #dddddd, #dddddd 50%, transparent 50%);
      background-position: bottom;
      background-size: 100% 1px;
      background-repeat: no-repeat; } }
  .bar.bar-clear {
    border: none;
    background: none;
    color: #fff; }
    .bar.bar-clear .button {
      color: #fff; }
    .bar.bar-clear .title {
      color: #fff; }
  .bar.item-input-inset .item-input-wrapper {
    margin-top: -1px; }
    .bar.item-input-inset .item-input-wrapper input {
      padding-left: 8px;
      width: 94%;
      height: 28px;
      background: transparent; }
  .bar.bar-light {
    border-color: #dddddd;
    background-color: white;
    background-image: linear-gradient(0deg, #dddddd, #dddddd 50%, transparent 50%);
    color: #444444; }
    .bar.bar-light .title {
      color: #444444; }
    .bar.bar-light.bar-footer {
      background-image: linear-gradient(180deg, #dddddd, #dddddd 50%, transparent 50%); }
  .bar.bar-stable {
    border-color: #b2b2b2;
    background-color: #f8f8f8;
    background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);
    color: #444444; }
    .bar.bar-stable .title {
      color: #444444; }
    .bar.bar-stable.bar-footer {
      background-image: linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%); }
  .bar.bar-positive {
    border-color: #145dd7;
    background-color: #4a87ee;
    background-image: linear-gradient(0deg, #145dd7, #145dd7 50%, transparent 50%);
    color: white; }
    .bar.bar-positive .title {
      color: white; }
    .bar.bar-positive.bar-footer {
      background-image: linear-gradient(180deg, #145dd7, #145dd7 50%, transparent 50%); }
  .bar.bar-calm {
    border-color: #1aaac3;
    background-color: #43cee6;
    background-image: linear-gradient(0deg, #1aaac3, #1aaac3 50%, transparent 50%);
    color: white; }
    .bar.bar-calm .title {
      color: white; }
    .bar.bar-calm.bar-footer {
      background-image: linear-gradient(180deg, #1aaac3, #1aaac3 50%, transparent 50%); }
  .bar.bar-assertive {
    border-color: #cc2511;
    background-color: #ef4e3a;
    background-image: linear-gradient(0deg, #cc2511, #cc2511 50%, transparent 50%);
    color: white; }
    .bar.bar-assertive .title {
      color: white; }
    .bar.bar-assertive.bar-footer {
      background-image: linear-gradient(180deg, #cc2511, #cc2511 50%, transparent 50%); }
  .bar.bar-balanced {
    border-color: #478f24;
    background-color: #66cc33;
    background-image: linear-gradient(0deg, #478f24, #478f24 50%, transparent 50%);
    color: white; }
    .bar.bar-balanced .title {
      color: white; }
    .bar.bar-balanced.bar-footer {
      background-image: linear-gradient(180deg, #478f24, #145dd7 50%, transparent 50%); }
  .bar.bar-energized {
    border-color: #d39511;
    background-color: #f0b840;
    background-image: linear-gradient(0deg, #d39511, #d39511 50%, transparent 50%);
    color: white; }
    .bar.bar-energized .title {
      color: white; }
    .bar.bar-energized.bar-footer {
      background-image: linear-gradient(180deg, #d39511, #d39511 50%, transparent 50%); }
  .bar.bar-royal {
    border-color: #552bdf;
    background-color: #8a6de9;
    background-image: linear-gradient(0deg, #552bdf, #552bdf 50%, transparent 50%);
    color: white; }
    .bar.bar-royal .title {
      color: white; }
    .bar.bar-royal.bar-footer {
      background-image: linear-gradient(180deg, #552bdf, #552bdf 50%, transparent 50%); }
  .bar.bar-dark {
    border-color: #111111;
    background-color: #444444;
    background-image: linear-gradient(0deg, #111111, #111111 50%, transparent 50%);
    color: white; }
    .bar.bar-dark .title {
      color: white; }
    .bar.bar-dark.bar-footer {
      background-image: linear-gradient(180deg, #111111, #111111 50%, transparent 50%); }
  .bar .title {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    margin: 0 10px;
    min-width: 30px;
    height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    line-height: 44px; }
    .bar .title.title-left {
      text-align: left; }
    .bar .title.title-right {
      text-align: right; }
  .bar .title a {
    color: inherit; }
  .bar .button {
    z-index: 1;
    padding: 0 8px;
    min-width: initial;
    min-height: 31px;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px; }
    .bar .button.button-icon:before,
    .bar .button .icon:before, .bar .button.icon:before, .bar .button.icon-left:before, .bar .button.icon-right:before {
      padding-right: 2px;
      padding-left: 2px;
      font-size: 20px;
      line-height: 32px; }
    .bar .button.button-icon {
      font-size: 17px; }
      .bar .button.button-icon .icon:before, .bar .button.button-icon:before, .bar .button.button-icon.icon-left:before, .bar .button.button-icon.icon-right:before {
        vertical-align: top;
        font-size: 32px;
        line-height: 32px; }
    .bar .button.button-clear {
      padding-right: 2px;
      padding-left: 2px;
      font-weight: 300;
      font-size: 17px; }
      .bar .button.button-clear .icon:before, .bar .button.button-clear.icon:before, .bar .button.button-clear.icon-left:before, .bar .button.button-clear.icon-right:before {
        font-size: 32px;
        line-height: 32px; }
    .bar .button.back-button {
      padding: 0;
      opacity: 0.8; }
      .bar .button.back-button .back-button-title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 4px; }
    .bar .button.back-button.active, .bar .button.back-button.activated {
      opacity: 1; }
  .bar .button-bar > .button,
  .bar .buttons > .button {
    min-height: 31px;
    line-height: 32px; }
  .bar .button-bar + .button,
  .bar .button + .button-bar {
    margin-left: 5px; }
  .bar .buttons,
  .bar .buttons.left-buttons,
  .bar .buttons.right-buttons {
    display: inherit; }
  .bar .title + .button:last-child,
  .bar > .button + .button:last-child,
  .bar > .button.pull-right,
  .bar .buttons.pull-right,
  .bar .title + .buttons {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px; }

.bar-light .button {
  border-color: #dddddd;
  background-color: white;
  color: #444444; }
  .bar-light .button:hover {
    color: #444444;
    text-decoration: none; }
  .bar-light .button.active, .bar-light .button.activated {
    border-color: #cccccc;
    background-color: #fafafa;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-light .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: #444444;
    font-size: 17px; }
  .bar-light .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-stable .button {
  border-color: #b2b2b2;
  background-color: #f8f8f8;
  color: #444444; }
  .bar-stable .button:hover {
    color: #444444;
    text-decoration: none; }
  .bar-stable .button.active, .bar-stable .button.activated {
    border-color: #a2a2a2;
    background-color: #e5e5e5;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-stable .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: #444444;
    font-size: 17px; }
  .bar-stable .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-positive .button {
  border-color: #145dd7;
  background-color: #4a87ee;
  color: white; }
  .bar-positive .button:hover {
    color: white;
    text-decoration: none; }
  .bar-positive .button.active, .bar-positive .button.activated {
    border-color: #145dd7;
    background-color: #145dd7;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-positive .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-positive .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-calm .button {
  border-color: #1aaac3;
  background-color: #43cee6;
  color: white; }
  .bar-calm .button:hover {
    color: white;
    text-decoration: none; }
  .bar-calm .button.active, .bar-calm .button.activated {
    border-color: #1aaac3;
    background-color: #1aaac3;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-calm .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-calm .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-assertive .button {
  border-color: #cc2511;
  background-color: #ef4e3a;
  color: white; }
  .bar-assertive .button:hover {
    color: white;
    text-decoration: none; }
  .bar-assertive .button.active, .bar-assertive .button.activated {
    border-color: #cc2511;
    background-color: #cc2511;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-assertive .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-assertive .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-balanced .button {
  border-color: #478f24;
  background-color: #66cc33;
  color: white; }
  .bar-balanced .button:hover {
    color: white;
    text-decoration: none; }
  .bar-balanced .button.active, .bar-balanced .button.activated {
    border-color: #478f24;
    background-color: #478f24;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-balanced .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-balanced .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-energized .button {
  border-color: #d39511;
  background-color: #f0b840;
  color: white; }
  .bar-energized .button:hover {
    color: white;
    text-decoration: none; }
  .bar-energized .button.active, .bar-energized .button.activated {
    border-color: #d39511;
    background-color: #d39511;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-energized .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-energized .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-royal .button {
  border-color: #552bdf;
  background-color: #8a6de9;
  color: white; }
  .bar-royal .button:hover {
    color: white;
    text-decoration: none; }
  .bar-royal .button.active, .bar-royal .button.activated {
    border-color: #552bdf;
    background-color: #552bdf;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-royal .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-royal .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-dark .button {
  border-color: #111111;
  background-color: #444444;
  color: white; }
  .bar-dark .button:hover {
    color: white;
    text-decoration: none; }
  .bar-dark .button.active, .bar-dark .button.activated {
    border-color: black;
    background-color: #262626;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .bar-dark .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 17px; }
  .bar-dark .button.button-icon {
    border-color: transparent;
    background: none; }

.bar-header {
  top: 0;
  border-top-width: 0;
  border-bottom-width: 1px; }

.bar-footer {
  bottom: 0;
  border-top-width: 1px;
  border-bottom-width: 0;
  background-position: top; }
  .bar-footer.item-input-inset {
    position: absolute; }

.bar-tabs {
  padding: 0; }

.bar-subheader {
  top: 44px;
  display: block; }

.bar-subfooter {
  bottom: 44px;
  display: block; }

/**
 * Tabs
 * --------------------------------------------------
 * A navigation bar with any number of tab items supported.
 */
.tabs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: horizontal;
  -moz-flex-direction: horizontal;
  -ms-flex-direction: horizontal;
  flex-direction: horizontal;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  border-color: #b2b2b2;
  background-color: #f8f8f8;
  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);
  color: #444444;
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100%;
  height: 49px;
  border-style: solid;
  border-top-width: 1px;
  background-size: 0;
  line-height: 49px; }
  .tabs .tab-item .badge {
    background-color: #444444;
    color: #f8f8f8; }
  @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {
    .tabs {
      padding-top: 2px;
      border-top: none !important;
      border-bottom: none !important;
      background-position: top;
      background-size: 100% 1px;
      background-repeat: no-repeat; } }

/* Allow parent element of tabs to define color, or just the tab itself */
.tabs-light > .tabs,
.tabs.tabs-light {
  border-color: #dddddd;
  background-color: white;
  background-image: linear-gradient(0deg, #dddddd, #dddddd 50%, transparent 50%);
  color: #444444; }
  .tabs-light > .tabs .tab-item .badge,
  .tabs.tabs-light .tab-item .badge {
    background-color: #444444;
    color: white; }

.tabs-stable > .tabs,
.tabs.tabs-stable {
  border-color: #b2b2b2;
  background-color: #f8f8f8;
  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);
  color: #444444; }
  .tabs-stable > .tabs .tab-item .badge,
  .tabs.tabs-stable .tab-item .badge {
    background-color: #444444;
    color: #f8f8f8; }

.tabs-positive > .tabs,
.tabs.tabs-positive {
  border-color: #145dd7;
  background-color: #4a87ee;
  background-image: linear-gradient(0deg, #145dd7, #145dd7 50%, transparent 50%);
  color: white; }
  .tabs-positive > .tabs .tab-item .badge,
  .tabs.tabs-positive .tab-item .badge {
    background-color: white;
    color: #4a87ee; }

.tabs-calm > .tabs,
.tabs.tabs-calm {
  border-color: #1aaac3;
  background-color: #43cee6;
  background-image: linear-gradient(0deg, #1aaac3, #1aaac3 50%, transparent 50%);
  color: white; }
  .tabs-calm > .tabs .tab-item .badge,
  .tabs.tabs-calm .tab-item .badge {
    background-color: white;
    color: #43cee6; }

.tabs-assertive > .tabs,
.tabs.tabs-assertive {
  border-color: #cc2511;
  background-color: #ef4e3a;
  background-image: linear-gradient(0deg, #cc2511, #cc2511 50%, transparent 50%);
  color: white; }
  .tabs-assertive > .tabs .tab-item .badge,
  .tabs.tabs-assertive .tab-item .badge {
    background-color: white;
    color: #ef4e3a; }

.tabs-balanced > .tabs,
.tabs.tabs-balanced {
  border-color: #478f24;
  background-color: #66cc33;
  background-image: linear-gradient(0deg, #478f24, #478f24 50%, transparent 50%);
  color: white; }
  .tabs-balanced > .tabs .tab-item .badge,
  .tabs.tabs-balanced .tab-item .badge {
    background-color: white;
    color: #66cc33; }

.tabs-energized > .tabs,
.tabs.tabs-energized {
  border-color: #d39511;
  background-color: #f0b840;
  background-image: linear-gradient(0deg, #d39511, #d39511 50%, transparent 50%);
  color: white; }
  .tabs-energized > .tabs .tab-item .badge,
  .tabs.tabs-energized .tab-item .badge {
    background-color: white;
    color: #f0b840; }

.tabs-royal > .tabs,
.tabs.tabs-royal {
  border-color: #552bdf;
  background-color: #8a6de9;
  background-image: linear-gradient(0deg, #552bdf, #552bdf 50%, transparent 50%);
  color: white; }
  .tabs-royal > .tabs .tab-item .badge,
  .tabs.tabs-royal .tab-item .badge {
    background-color: white;
    color: #8a6de9; }

.tabs-dark > .tabs,
.tabs.tabs-dark {
  border-color: #111111;
  background-color: #444444;
  background-image: linear-gradient(0deg, #111111, #111111 50%, transparent 50%);
  color: white; }
  .tabs-dark > .tabs .tab-item .badge,
  .tabs.tabs-dark .tab-item .badge {
    background-color: white;
    color: #444444; }

.tabs-striped .tabs {
  background-color: white;
  background-image: none;
  border: none; }
.tabs-striped.tabs-light .tab-item.tab-item-active,
.tabs-striped.tabs-light .tab-item.active,
.tabs-striped.tabs-light .tab-item.activated {
  margin-top: -4px;
  color: white;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: white; }
.tabs-striped.tabs-stable .tab-item.tab-item-active,
.tabs-striped.tabs-stable .tab-item.active,
.tabs-striped.tabs-stable .tab-item.activated {
  margin-top: -4px;
  color: #f8f8f8;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #f8f8f8; }
.tabs-striped.tabs-positive .tab-item.tab-item-active,
.tabs-striped.tabs-positive .tab-item.active,
.tabs-striped.tabs-positive .tab-item.activated {
  margin-top: -4px;
  color: #4a87ee;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #4a87ee; }
.tabs-striped.tabs-calm .tab-item.tab-item-active,
.tabs-striped.tabs-calm .tab-item.active,
.tabs-striped.tabs-calm .tab-item.activated {
  margin-top: -4px;
  color: #43cee6;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #43cee6; }
.tabs-striped.tabs-assertive .tab-item.tab-item-active,
.tabs-striped.tabs-assertive .tab-item.active,
.tabs-striped.tabs-assertive .tab-item.activated {
  margin-top: -4px;
  color: #ef4e3a;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #ef4e3a; }
.tabs-striped.tabs-balanced .tab-item.tab-item-active,
.tabs-striped.tabs-balanced .tab-item.active,
.tabs-striped.tabs-balanced .tab-item.activated {
  margin-top: -4px;
  color: #66cc33;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #66cc33; }
.tabs-striped.tabs-energized .tab-item.tab-item-active,
.tabs-striped.tabs-energized .tab-item.active,
.tabs-striped.tabs-energized .tab-item.activated {
  margin-top: -4px;
  color: #f0b840;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #f0b840; }
.tabs-striped.tabs-royal .tab-item.tab-item-active,
.tabs-striped.tabs-royal .tab-item.active,
.tabs-striped.tabs-royal .tab-item.activated {
  margin-top: -4px;
  color: #8a6de9;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #8a6de9; }
.tabs-striped.tabs-dark .tab-item.tab-item-active,
.tabs-striped.tabs-dark .tab-item.active,
.tabs-striped.tabs-dark .tab-item.activated {
  margin-top: -4px;
  color: #444444;
  border-style: solid;
  border-width: 4px 0 0 0;
  border-color: #444444; }
.tabs-striped .tab-item {
  color: black;
  opacity: 0.4; }
.tabs-striped .tab-item + .tab-item:before {
  border-left: 1px solid #ccc;
  display: block;
  float: left;
  width: 2px;
  height: 26px;
  margin: 11px auto;
  content: " "; }

.tabs-top.tabs-striped .tab-item.tab-item-active,
.tabs-top.tabs-striped .tab-item.active,
.tabs-top.tabs-striped .tab-item.activated {
  margin-top: 0;
  margin-bottom: -4px;
  border-width: 0px 0px 4px 0px !important; }

/* Allow parent element to have tabs-top */
/* If you change this, change platform.scss as well */
.tabs-top > .tabs,
.tabs.tabs-top {
  top: 44px;
  padding-top: 0;
  padding-bottom: 2px;
  background-position: bottom; }

.tab-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  overflow: hidden;
  max-width: 150px;
  height: 100%;
  color: inherit;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 14px;
  font-family: "Helvetica Neue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  opacity: 0.7; }
  .tab-item:hover {
    cursor: pointer; }
  .tab-item.tab-hidden {
    display: none; }

.tabs-item-hide > .tabs,
.tabs.tabs-item-hide {
  display: none; }

.tabs-icon-top > .tabs .tab-item,
.tabs-icon-top.tabs .tab-item,
.tabs-icon-bottom > .tabs .tab-item,
.tabs-icon-bottom.tabs .tab-item {
  font-size: 12px;
  line-height: 14px; }

.tab-item .icon {
  display: block;
  margin: 0 auto;
  height: 32px;
  font-size: 32px; }

.tabs-icon-left.tabs .tab-item,
.tabs-icon-left > .tabs .tab-item,
.tabs-icon-right.tabs .tab-item,
.tabs-icon-right > .tabs .tab-item {
  font-size: 12px; }
  .tabs-icon-left.tabs .tab-item .icon,
  .tabs-icon-left > .tabs .tab-item .icon,
  .tabs-icon-right.tabs .tab-item .icon,
  .tabs-icon-right > .tabs .tab-item .icon {
    display: inline-block;
    vertical-align: top; }
    .tabs-icon-left.tabs .tab-item .icon:before,
    .tabs-icon-left > .tabs .tab-item .icon:before,
    .tabs-icon-right.tabs .tab-item .icon:before,
    .tabs-icon-right > .tabs .tab-item .icon:before {
      font-size: 24px;
      line-height: 49px; }

.tabs-icon-left > .tabs .tab-item .icon,
.tabs-icon-left.tabs .tab-item .icon {
  padding-right: 3px; }

.tabs-icon-right > .tabs .tab-item .icon,
.tabs-icon-right.tabs .tab-item .icon {
  padding-left: 3px; }

.tabs-icon-only > .tabs .icon,
.tabs-icon-only.tabs .icon {
  line-height: inherit; }

.tab-item.has-badge {
  position: relative; }

.tab-item .badge {
  position: absolute;
  top: 4%;
  right: 33%;
  right: calc(50% - 26px);
  padding: 1px 6px;
  height: auto;
  font-size: 12px;
  line-height: 16px; }

/* Navigational tab */
/* Active state for tab */
.tab-item.tab-item-active,
.tab-item.active,
.tab-item.activated {
  opacity: 1; }
  .tab-item.tab-item-active.tab-item-light,
  .tab-item.active.tab-item-light,
  .tab-item.activated.tab-item-light {
    color: white; }
  .tab-item.tab-item-active.tab-item-stable,
  .tab-item.active.tab-item-stable,
  .tab-item.activated.tab-item-stable {
    color: #f8f8f8; }
  .tab-item.tab-item-active.tab-item-positive,
  .tab-item.active.tab-item-positive,
  .tab-item.activated.tab-item-positive {
    color: #4a87ee; }
  .tab-item.tab-item-active.tab-item-calm,
  .tab-item.active.tab-item-calm,
  .tab-item.activated.tab-item-calm {
    color: #43cee6; }
  .tab-item.tab-item-active.tab-item-assertive,
  .tab-item.active.tab-item-assertive,
  .tab-item.activated.tab-item-assertive {
    color: #ef4e3a; }
  .tab-item.tab-item-active.tab-item-balanced,
  .tab-item.active.tab-item-balanced,
  .tab-item.activated.tab-item-balanced {
    color: #66cc33; }
  .tab-item.tab-item-active.tab-item-energized,
  .tab-item.active.tab-item-energized,
  .tab-item.activated.tab-item-energized {
    color: #f0b840; }
  .tab-item.tab-item-active.tab-item-royal,
  .tab-item.active.tab-item-royal,
  .tab-item.activated.tab-item-royal {
    color: #8a6de9; }
  .tab-item.tab-item-active.tab-item-dark,
  .tab-item.active.tab-item-dark,
  .tab-item.activated.tab-item-dark {
    color: #444444; }

.item.tabs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0; }
  .item.tabs .icon:before {
    position: relative; }

.tab-item.disabled,
.tab-item[disabled] {
  opacity: .4;
  cursor: default;
  pointer-events: none; }

/** Platform styles **/
.tab-item.tab-item-android {
  border-top: 2px solid inherit; }

/**
 * Menus
 * --------------------------------------------------
 * Side panel structure
 */
.menu {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  min-height: 100%;
  max-height: 100%;
  width: 275px;
  background-color: white; }
  .menu .scroll-content {
    z-index: 10; }
  .menu .bar-header {
    z-index: 11; }

.menu-content {
  -webkit-transform: none;
  -moz-transform: none;
  transform: none;
  box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.2), 1px 0px 2px rgba(0, 0, 0, 0.2); }

.menu-open .menu-content .pane,
.menu-open .menu-content .scroll-content {
  pointer-events: none; }

.grade-b .menu-content,
.grade-c .menu-content {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  right: -1px;
  left: -1px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  box-shadow: none; }

.menu-left {
  left: 0; }

.menu-right {
  right: 0; }

.menu-animated {
  -webkit-transition: -webkit-transform 200ms ease;
  -moz-transition: -moz-transform 200ms ease;
  transition: transform 200ms ease; }

/**
 * Modals
 * --------------------------------------------------
 * Modals are independent windows that slide in from off-screen.
 */
.modal-backdrop {
  -webkit-transition: background-color 300ms ease-in-out;
  -moz-transition: background-color 300ms ease-in-out;
  transition: background-color 300ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: transparent; }
  .modal-backdrop.active {
    background-color: rgba(0, 0, 0, 0.5); }

.modal {
  display: block;
  position: absolute;
  top: 0;
  z-index: 10;
  overflow: hidden;
  min-height: 100%;
  width: 100%;
  background-color: white; }

@media (min-width: 680px) {
  .modal {
    top: 20%;
    right: 20%;
    bottom: 20%;
    left: 20%;
    overflow: visible;
    min-height: 240px;
    width: 60%; }

  .modal.ng-leave-active {
    bottom: 0; }

  .platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) {
    height: 44px; }
    .platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) > * {
      margin-top: 0; }
  .platform-ios.platform-cordova .modal-wrapper .modal .tabs-top > .tabs,
  .platform-ios.platform-cordova .modal-wrapper .modal .tabs.tabs-top {
    top: 44px; }
  .platform-ios.platform-cordova .modal-wrapper .modal .has-header,
  .platform-ios.platform-cordova .modal-wrapper .modal .bar-subheader {
    top: 44px; }
  .platform-ios.platform-cordova .modal-wrapper .modal .has-subheader {
    top: 88px; }
  .platform-ios.platform-cordova .modal-wrapper .modal .has-tabs-top {
    top: 93px; }
  .platform-ios.platform-cordova .modal-wrapper .modal .has-header.has-subheader.has-tabs-top {
    top: 137px; } }
.modal-open {
  pointer-events: none; }
  .modal-open .modal,
  .modal-open .modal-backdrop {
    pointer-events: auto; }
  .modal-open.loading-active .modal,
  .modal-open.loading-active .modal-backdrop {
    pointer-events: none; }

/**
 * Popups
 * --------------------------------------------------
 */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 12;
  visibility: hidden;
  width: 250px;
  max-width: 100%;
  border-radius: 0px;
  background-color: rgba(255, 255, 255, 0.9); }
  .popup.popup-hidden {
    -webkit-animation-name: scaleOut;
    -moz-animation-name: scaleOut;
    animation-name: scaleOut;
    -webkit-animation-duration: 0.1s;
    -moz-animation-duration: 0.1s;
    animation-duration: 0.1s;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .popup.popup-showing {
    visibility: visible; }
  .popup.active {
    -webkit-animation-name: superScaleIn;
    -moz-animation-name: superScaleIn;
    animation-name: superScaleIn;
    -webkit-animation-duration: 0.2s;
    -moz-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .popup.popup-tall {
    overflow: hidden; }
    .popup.popup-tall .popup-body {
      overflow: auto; }

.popup-head {
  padding: 15px 0px;
  border-bottom: 1px solid #eee;
  text-align: center; }

.popup-title {
  margin: 0;
  padding: 0;
  font-size: 15px; }

.popup-sub-title {
  margin: 5px 0 0 0;
  padding: 0;
  font-weight: normal;
  font-size: 11px; }

.popup-body {
  padding: 10px; }

.popup-buttons.row {
  padding: 10px 10px; }
.popup-buttons .button {
  margin: 0px 5px;
  min-height: 45px;
  border-radius: 2px;
  line-height: 20px; }
  .popup-buttons .button:first-child {
    margin-left: 0px; }
  .popup-buttons .button:last-child {
    margin-right: 0px; }

.popup-open {
  pointer-events: none; }
  .popup-open.modal-open .modal {
    pointer-events: none; }
  .popup-open .popup-backdrop, .popup-open .popup {
    pointer-events: auto; }

/**
 * Loading
 * --------------------------------------------------
 */
.loading-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 13;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-transition: 0.2s opacity linear;
  -moz-transition: 0.2s opacity linear;
  transition: 0.2s opacity linear;
  visibility: hidden;
  opacity: 0; }
  .loading-container.visible {
    visibility: visible; }
  .loading-container.active {
    opacity: 1; }
  .loading-container .loading {
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 15px; }
    .loading-container .loading h1, .loading-container .loading h2, .loading-container .loading h3, .loading-container .loading h4, .loading-container .loading h5, .loading-container .loading h6 {
      color: white; }

/**
 * Items
 * --------------------------------------------------
 */
.item {
  border-color: #dddddd;
  background-color: white;
  color: #444444;
  position: relative;
  z-index: 2;
  display: block;
  margin: -1px;
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px; }
  .item h2 {
    margin: 0 0 4px 0;
    font-size: 16px; }
  .item h3 {
    margin: 0 0 4px 0;
    font-size: 14px; }
  .item h4 {
    margin: 0 0 4px 0;
    font-size: 12px; }
  .item h5, .item h6 {
    margin: 0 0 3px 0;
    font-size: 10px; }
  .item p {
    color: #666;
    font-size: 14px; }
  .item h1:last-child,
  .item h2:last-child,
  .item h3:last-child,
  .item h4:last-child,
  .item h5:last-child,
  .item h6:last-child,
  .item p:last-child {
    margin-bottom: 0; }
  .item .badge {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 15px;
    right: 30px; }
  .item.item-button-right .badge {
    right: 65px; }
  .item.item-divider .badge {
    top: 8px; }
  .item .badge + .badge {
    margin-right: 5px; }
  .item.item-light {
    border-color: #dddddd;
    background-color: white;
    color: #444444; }
  .item.item-stable {
    border-color: #b2b2b2;
    background-color: #f8f8f8;
    color: #444444; }
  .item.item-positive {
    border-color: #145dd7;
    background-color: #4a87ee;
    color: white; }
  .item.item-calm {
    border-color: #1aaac3;
    background-color: #43cee6;
    color: white; }
  .item.item-assertive {
    border-color: #cc2511;
    background-color: #ef4e3a;
    color: white; }
  .item.item-balanced {
    border-color: #478f24;
    background-color: #66cc33;
    color: white; }
  .item.item-energized {
    border-color: #d39511;
    background-color: #f0b840;
    color: white; }
  .item.item-royal {
    border-color: #552bdf;
    background-color: #8a6de9;
    color: white; }
  .item.item-dark {
    border-color: #111111;
    background-color: #444444;
    color: white; }
  .item[ng-click]:hover {
    cursor: pointer; }

.item.active,
.item.activated,
.item-complex.active .item-content,
.item-complex.activated .item-content,
.item .item-content.active,
.item .item-content.activated {
  border-color: #cccccc;
  background-color: #d9d9d9; }
  .item.active.item-light,
  .item.activated.item-light,
  .item-complex.active .item-content.item-light,
  .item-complex.activated .item-content.item-light,
  .item .item-content.active.item-light,
  .item .item-content.activated.item-light {
    border-color: #cccccc;
    background-color: #fafafa; }
  .item.active.item-stable,
  .item.activated.item-stable,
  .item-complex.active .item-content.item-stable,
  .item-complex.activated .item-content.item-stable,
  .item .item-content.active.item-stable,
  .item .item-content.activated.item-stable {
    border-color: #a2a2a2;
    background-color: #e5e5e5; }
  .item.active.item-positive,
  .item.activated.item-positive,
  .item-complex.active .item-content.item-positive,
  .item-complex.activated .item-content.item-positive,
  .item .item-content.active.item-positive,
  .item .item-content.activated.item-positive {
    border-color: #145dd7;
    background-color: #145dd7; }
  .item.active.item-calm,
  .item.activated.item-calm,
  .item-complex.active .item-content.item-calm,
  .item-complex.activated .item-content.item-calm,
  .item .item-content.active.item-calm,
  .item .item-content.activated.item-calm {
    border-color: #1aaac3;
    background-color: #1aaac3; }
  .item.active.item-assertive,
  .item.activated.item-assertive,
  .item-complex.active .item-content.item-assertive,
  .item-complex.activated .item-content.item-assertive,
  .item .item-content.active.item-assertive,
  .item .item-content.activated.item-assertive {
    border-color: #cc2511;
    background-color: #cc2511; }
  .item.active.item-balanced,
  .item.activated.item-balanced,
  .item-complex.active .item-content.item-balanced,
  .item-complex.activated .item-content.item-balanced,
  .item .item-content.active.item-balanced,
  .item .item-content.activated.item-balanced {
    border-color: #478f24;
    background-color: #478f24; }
  .item.active.item-energized,
  .item.activated.item-energized,
  .item-complex.active .item-content.item-energized,
  .item-complex.activated .item-content.item-energized,
  .item .item-content.active.item-energized,
  .item .item-content.activated.item-energized {
    border-color: #d39511;
    background-color: #d39511; }
  .item.active.item-royal,
  .item.activated.item-royal,
  .item-complex.active .item-content.item-royal,
  .item-complex.activated .item-content.item-royal,
  .item .item-content.active.item-royal,
  .item .item-content.activated.item-royal {
    border-color: #552bdf;
    background-color: #552bdf; }
  .item.active.item-dark,
  .item.activated.item-dark,
  .item-complex.active .item-content.item-dark,
  .item-complex.activated .item-content.item-dark,
  .item .item-content.active.item-dark,
  .item .item-content.activated.item-dark {
    border-color: black;
    background-color: #262626; }

.item,
.item h1,
.item h2,
.item h3,
.item h4,
.item h5,
.item h6,
.item p,
.item-content,
.item-content h1,
.item-content h2,
.item-content h3,
.item-content h4,
.item-content h5,
.item-content h6,
.item-content p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

a.item {
  color: inherit;
  text-decoration: none; }
  a.item:hover, a.item:focus {
    text-decoration: none; }

/**
 * Complex Items
 * --------------------------------------------------
 * Adding .item-complex allows the .item to be slidable and
 * have options underneath the button, but also requires an
 * additional .item-content element inside .item.
 * Basically .item-complex removes any default settings which
 * .item added, so that .item-content looks them as just .item.
 */
.item-complex,
a.item.item-complex,
button.item.item-complex {
  padding: 0; }

.item-complex .item-content,
.item-radio .item-content {
  position: relative;
  z-index: 2;
  padding: 15px 45px 15px 15px;
  border: none;
  background-color: white; }

a.item-content {
  display: block;
  color: inherit;
  text-decoration: none; }

.item-text-wrap .item,
.item-text-wrap .item-content,
.item-text-wrap,
.item-text-wrap h1,
.item-text-wrap h2,
.item-text-wrap h3,
.item-text-wrap h4,
.item-text-wrap h5,
.item-text-wrap h6,
.item-text-wrap p,
.item-complex.item-text-wrap .item-content,
.item-body h1,
.item-body h2,
.item-body h3,
.item-body h4,
.item-body h5,
.item-body h6,
.item-body p {
  overflow: visible;
  white-space: normal; }

.item-complex.item-text-wrap,
.item-complex.item-text-wrap h1,
.item-complex.item-text-wrap h2,
.item-complex.item-text-wrap h3,
.item-complex.item-text-wrap h4,
.item-complex.item-text-wrap h5,
.item-complex.item-text-wrap h6,
.item-complex.item-text-wrap p {
  overflow: visible;
  white-space: normal; }

.item-complex.item-light > .item-content {
  border-color: #dddddd;
  background-color: white;
  color: #444444; }
  .item-complex.item-light > .item-content.active, .item-complex.item-light > .item-content:active {
    border-color: #cccccc;
    background-color: #fafafa; }
.item-complex.item-stable > .item-content {
  border-color: #b2b2b2;
  background-color: #f8f8f8;
  color: #444444; }
  .item-complex.item-stable > .item-content.active, .item-complex.item-stable > .item-content:active {
    border-color: #a2a2a2;
    background-color: #e5e5e5; }
.item-complex.item-positive > .item-content {
  border-color: #145dd7;
  background-color: #4a87ee;
  color: white; }
  .item-complex.item-positive > .item-content.active, .item-complex.item-positive > .item-content:active {
    border-color: #145dd7;
    background-color: #145dd7; }
.item-complex.item-calm > .item-content {
  border-color: #1aaac3;
  background-color: #43cee6;
  color: white; }
  .item-complex.item-calm > .item-content.active, .item-complex.item-calm > .item-content:active {
    border-color: #1aaac3;
    background-color: #1aaac3; }
.item-complex.item-assertive > .item-content {
  border-color: #cc2511;
  background-color: #ef4e3a;
  color: white; }
  .item-complex.item-assertive > .item-content.active, .item-complex.item-assertive > .item-content:active {
    border-color: #cc2511;
    background-color: #cc2511; }
.item-complex.item-balanced > .item-content {
  border-color: #478f24;
  background-color: #66cc33;
  color: white; }
  .item-complex.item-balanced > .item-content.active, .item-complex.item-balanced > .item-content:active {
    border-color: #478f24;
    background-color: #478f24; }
.item-complex.item-energized > .item-content {
  border-color: #d39511;
  background-color: #f0b840;
  color: white; }
  .item-complex.item-energized > .item-content.active, .item-complex.item-energized > .item-content:active {
    border-color: #d39511;
    background-color: #d39511; }
.item-complex.item-royal > .item-content {
  border-color: #552bdf;
  background-color: #8a6de9;
  color: white; }
  .item-complex.item-royal > .item-content.active, .item-complex.item-royal > .item-content:active {
    border-color: #552bdf;
    background-color: #552bdf; }
.item-complex.item-dark > .item-content {
  border-color: #111111;
  background-color: #444444;
  color: white; }
  .item-complex.item-dark > .item-content.active, .item-complex.item-dark > .item-content:active {
    border-color: black;
    background-color: #262626; }

/**
 * Item Icons
 * --------------------------------------------------
 */
.item-icon-left .icon,
.item-icon-right .icon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  font-size: 32px; }
  .item-icon-left .icon:before,
  .item-icon-right .icon:before {
    display: block;
    width: 32px;
    text-align: center; }

.item .fill-icon {
  min-width: 30px;
  min-height: 30px;
  font-size: 28px; }

.item-icon-left {
  padding-left: 50px; }
  .item-icon-left .icon {
    left: 10px; }

.item-complex.item-icon-left {
  padding-left: 0; }
  .item-complex.item-icon-left .item-content {
    padding-left: 50px; }

.item-icon-right {
  padding-right: 50px; }
  .item-icon-right .icon {
    right: 10px; }

.item-complex.item-icon-right {
  padding-right: 0; }
  .item-complex.item-icon-right .item-content {
    padding-right: 50px; }

.item-icon-left.item-icon-right .icon:first-child {
  right: auto; }

.item-icon-left.item-icon-right .icon:last-child,
.item-icon-left .item-delete .icon {
  left: auto; }

.item-icon-left .icon-accessory,
.item-icon-right .icon-accessory {
  color: #cccccc;
  font-size: 16px; }

.item-icon-left .icon-accessory {
  left: 3px; }

.item-icon-right .icon-accessory {
  right: 3px; }

/**
 * Item Button
 * --------------------------------------------------
 * An item button is a child button inside an .item (not the entire .item)
 */
.item-button-left {
  padding-left: 68px; }

.item-button-left > .button,
.item-button-left .item-content > .button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 10px;
  min-width: 34px;
  min-height: 34px;
  font-size: 18px;
  line-height: 32px; }
  .item-button-left > .button .icon:before,
  .item-button-left .item-content > .button .icon:before {
    position: relative;
    left: auto;
    width: auto;
    line-height: 31px; }
  .item-button-left > .button > .button,
  .item-button-left .item-content > .button > .button {
    margin: 0px 2px;
    min-height: 34px;
    font-size: 18px;
    line-height: 32px; }

.item-button-right,
a.item.item-button-right,
button.item.item-button-right {
  padding-right: 75px; }

.item-button-right > .button,
.item-button-right .item-content > .button,
.item-button-right > .buttons,
.item-button-right .item-content > .buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 15px;
  min-width: 34px;
  min-height: 34px;
  font-size: 18px;
  line-height: 32px; }
  .item-button-right > .button .icon:before,
  .item-button-right .item-content > .button .icon:before,
  .item-button-right > .buttons .icon:before,
  .item-button-right .item-content > .buttons .icon:before {
    position: relative;
    left: auto;
    width: auto;
    line-height: 31px; }
  .item-button-right > .button > .button,
  .item-button-right .item-content > .button > .button,
  .item-button-right > .buttons > .button,
  .item-button-right .item-content > .buttons > .button {
    margin: 0px 2px;
    min-width: 34px;
    min-height: 34px;
    font-size: 18px;
    line-height: 32px; }

.item-avatar,
.item-avatar .item-content,
.item-avatar-left,
.item-avatar-left .item-content {
  padding-left: 70px;
  min-height: 70px; }
  .item-avatar > img:first-child,
  .item-avatar .item-image,
  .item-avatar .item-content > img:first-child,
  .item-avatar .item-content .item-image,
  .item-avatar-left > img:first-child,
  .item-avatar-left .item-image,
  .item-avatar-left .item-content > img:first-child,
  .item-avatar-left .item-content .item-image {
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    border-radius: 4px; }

.item-avatar-right,
.item-avatar-right .item-content {
  padding-right: 70px;
  min-height: 70px; }
  .item-avatar-right > img:first-child,
  .item-avatar-right .item-image,
  .item-avatar-right .item-content > img:first-child,
  .item-avatar-right .item-content .item-image {
    position: absolute;
    top: 15px;
    right: 15px;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    border-radius: 4px; }

.item-thumbnail-left,
.item-thumbnail-left .item-content {
  padding-left: 105px;
  min-height: 100px; }
  .item-thumbnail-left > img:first-child,
  .item-thumbnail-left .item-image,
  .item-thumbnail-left .item-content > img:first-child,
  .item-thumbnail-left .item-content .item-image {
    position: absolute;
    top: 10px;
    left: 10px;
    max-width: 80px;
    max-height: 80px;
    width: 100%; }

.item-avatar.item-complex,
.item-avatar-left.item-complex,
.item-thumbnail-left.item-complex {
  padding-left: 0; }

.item-thumbnail-right,
.item-thumbnail-right .item-content {
  padding-right: 105px;
  min-height: 100px; }
  .item-thumbnail-right > img:first-child,
  .item-thumbnail-right .item-image,
  .item-thumbnail-right .item-content > img:first-child,
  .item-thumbnail-right .item-content .item-image {
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 80px;
    max-height: 80px;
    width: 100%; }

.item-avatar-right.item-complex,
.item-thumbnail-right.item-complex {
  padding-right: 0; }

.item-image {
  padding: 0;
  text-align: center; }
  .item-image img:first-child, .item-image .list-img {
    width: 100%;
    vertical-align: middle; }

.item-body {
  overflow: auto;
  padding: 15px;
  text-overflow: inherit;
  white-space: normal; }
  .item-body h1, .item-body h2, .item-body h3, .item-body h4, .item-body h5, .item-body h6, .item-body p {
    margin-top: 15px;
    margin-bottom: 15px; }

.item-divider {
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 30px;
  background-color: whitesmoke;
  color: #222222;
  font-weight: bold; }

.item-note {
  float: right;
  color: #aaa;
  font-size: 14px; }

.item-left-editable .item-content,
.item-right-editable .item-content {
  -webkit-transition-duration: 250ms;
  -moz-transition-duration: 250ms;
  transition-duration: 250ms;
  -webkit-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform; }

.list-left-editing .item-left-editable .item-content,
.item-left-editing.item-left-editable .item-content {
  -webkit-transform: translate3d(50px, 0, 0);
  -moz-transform: translate3d(50px, 0, 0);
  transform: translate3d(50px, 0, 0); }

.list-right-editing .item-right-editable .item-content,
.item-right-editing.item-right-editable .item-content {
  -webkit-transform: translate3d(-50px, 0, 0);
  -moz-transform: translate3d(-50px, 0, 0);
  transform: translate3d(-50px, 0, 0); }

.item-left-edit {
  -webkit-transition: all ease-in-out 125ms;
  -moz-transition: all ease-in-out 125ms;
  transition: all ease-in-out 125ms;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 50px;
  height: 100%;
  line-height: 100%;
  display: none;
  opacity: 0;
  -webkit-transform: translate3d(-21px, 0, 0);
  -moz-transform: translate3d(-21px, 0, 0);
  transform: translate3d(-21px, 0, 0); }
  .item-left-edit .button {
    height: 100%; }
    .item-left-edit .button.icon {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      position: absolute;
      top: 0;
      height: 100%; }
  .item-left-edit.visible {
    display: block; }
    .item-left-edit.visible.active {
      opacity: 1;
      -webkit-transform: translate3d(8px, 0, 0);
      -moz-transform: translate3d(8px, 0, 0);
      transform: translate3d(8px, 0, 0); }

.list-left-editing .item-left-edit {
  -webkit-transition-delay: 125ms;
  -moz-transition-delay: 125ms;
  transition-delay: 125ms; }

.item-delete .button.icon {
  color: #ef4e3a;
  font-size: 24px; }
  .item-delete .button.icon:hover {
    opacity: .7; }

.item-right-edit {
  -webkit-transition: all ease-in-out 125ms;
  -moz-transition: all ease-in-out 125ms;
  transition: all ease-in-out 125ms;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 75px;
  height: 100%;
  background: inherit;
  padding-left: 20px;
  display: none;
  opacity: 0;
  -webkit-transform: translate3d(25px, 0, 0);
  -moz-transform: translate3d(25px, 0, 0);
  transform: translate3d(25px, 0, 0); }
  .item-right-edit .button {
    min-width: 50px;
    height: 100%; }
    .item-right-edit .button.icon {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      position: absolute;
      top: 0;
      height: 100%;
      font-size: 32px; }
  .item-right-edit.visible {
    display: block;
    z-index: 3; }
    .item-right-edit.visible.active {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0); }

.list-right-editing .item-right-edit {
  -webkit-transition-delay: 125ms;
  -moz-transition-delay: 125ms;
  transition-delay: 125ms; }

.item-reorder .button.icon {
  color: #444444;
  font-size: 32px; }

.item-reordering {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  box-shadow: 0px 0px 10px 0px #aaa; }
  .item-reordering .item-reorder {
    z-index: 1; }

.item-placeholder {
  opacity: 0.7; }

/**
 * The hidden right-side buttons that can be exposed under a list item
 * with dragging.
 */
.item-options {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%; }
  .item-options .button {
    height: 100%;
    border: none;
    border-radius: 0; }

/**
 * Lists
 * --------------------------------------------------
 */
.list {
  position: relative;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0;
  margin-bottom: 20px; }

.list:last-child {
  margin-bottom: 0px; }
  .list:last-child.card {
    margin-bottom: 40px; }

/**
 * List Header
 * --------------------------------------------------
 */
.list-header {
  margin-top: 20px;
  padding: 5px 15px;
  background-color: transparent;
  color: #222222;
  font-weight: bold; }

.card.list .list-item {
  padding-right: 1px;
  padding-left: 1px; }

/**
 * Cards and Inset Lists
 * --------------------------------------------------
 * A card and list-inset are close to the same thing, except a card as a box shadow.
 */
.card,
.list-inset {
  overflow: hidden;
  margin: 20px 10px;
  border-radius: 2px;
  background-color: white; }

.card {
  padding-top: 1px;
  padding-bottom: 1px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }

.card .item:first-child,
.list-inset .item:first-child,
.padding > .list .item:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; }
  .card .item:first-child .item-content,
  .list-inset .item:first-child .item-content,
  .padding > .list .item:first-child .item-content {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px; }
.card .item:last-child,
.list-inset .item:last-child,
.padding > .list .item:last-child {
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px; }
  .card .item:last-child .item-content,
  .list-inset .item:last-child .item-content,
  .padding > .list .item:last-child .item-content {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px; }

.card .item:last-child,
.list-inset .item:last-child {
  margin-bottom: -1px; }

.card .item,
.list-inset .item,
.padding > .list .item,
.padding-horizontal > .list .item {
  margin-right: 0;
  margin-left: 0; }
  .card .item.item-input input,
  .list-inset .item.item-input input,
  .padding > .list .item.item-input input,
  .padding-horizontal > .list .item.item-input input {
    padding-right: 44px; }

.padding-left > .list .item {
  margin-left: 0; }

.padding-right > .list .item {
  margin-right: 0; }

/**
 * Badges
 * --------------------------------------------------
 */
.badge {
  background-color: transparent;
  color: #aaaaaa;
  z-index: 1;
  display: inline-block;
  padding: 3px 8px;
  min-width: 10px;
  border-radius: 10px;
  vertical-align: baseline;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px; }
  .badge:empty {
    display: none; }

.tabs .tab-item .badge.badge-light,
.badge.badge-light {
  background-color: white;
  color: #444444; }
.tabs .tab-item .badge.badge-stable,
.badge.badge-stable {
  background-color: #f8f8f8;
  color: #444444; }
.tabs .tab-item .badge.badge-positive,
.badge.badge-positive {
  background-color: #4a87ee;
  color: white; }
.tabs .tab-item .badge.badge-calm,
.badge.badge-calm {
  background-color: #43cee6;
  color: white; }
.tabs .tab-item .badge.badge-assertive,
.badge.badge-assertive {
  background-color: #ef4e3a;
  color: white; }
.tabs .tab-item .badge.badge-balanced,
.badge.badge-balanced {
  background-color: #66cc33;
  color: white; }
.tabs .tab-item .badge.badge-energized,
.badge.badge-energized {
  background-color: #f0b840;
  color: white; }
.tabs .tab-item .badge.badge-royal,
.badge.badge-royal {
  background-color: #8a6de9;
  color: white; }
.tabs .tab-item .badge.badge-dark,
.badge.badge-dark {
  background-color: #444444;
  color: white; }

.button .badge {
  position: relative;
  top: -1px; }

/**
 * Slide Box
 * --------------------------------------------------
 */
.slider {
  position: relative;
  visibility: hidden;
  overflow: hidden; }

.slider-slides {
  position: relative;
  height: 100%; }

.slider-slide {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  height: 100%;
  vertical-align: top; }

.slider-slide-image > img {
  width: 100%; }

.slider-pager {
  position: absolute;
  bottom: 20px;
  z-index: 1;
  width: 100%;
  height: 15px;
  text-align: center; }
  .slider-pager .slider-pager-page {
    display: inline-block;
    margin: 0px 3px;
    width: 15px;
    color: #000;
    text-decoration: none;
    opacity: 0.3; }
    .slider-pager .slider-pager-page.active {
      -webkit-transition: opacity 0.4s ease-in;
      -moz-transition: opacity 0.4s ease-in;
      transition: opacity 0.4s ease-in;
      opacity: 1; }

/**
 * Split Pane
 * --------------------------------------------------
 */
.split-pane {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  -moz-align-items: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%; }

.split-pane-menu {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 320px;
  -moz-box-flex: 0;
  -moz-flex: 0 0 320px;
  -ms-flex: 0 0 320px;
  flex: 0 0 320px;
  overflow-y: auto;
  width: 320px;
  height: 100%;
  border-right: 1px solid #eeeeee; }
  @media all and (max-width: 568px) {
    .split-pane-menu {
      border-right: none; } }

.split-pane-content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -moz-box-flex: 1;
  -moz-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto; }

/**
 * Forms
 * --------------------------------------------------
 */
form {
  margin: 0 0 1.42857; }

legend {
  display: block;
  margin-bottom: 1.42857;
  padding: 0;
  width: 100%;
  border: 1px solid #dddddd;
  color: #444444;
  font-size: 21px;
  line-height: 2.85714; }
  legend small {
    color: #f8f8f8;
    font-size: 1.07143; }

label,
input,
button,
select,
textarea {
  font-weight: normal;
  font-size: 14px;
  line-height: 1.42857; }

input,
button,
select,
textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; }

.item-input {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 6px 0 5px 8px; }
  .item-input input {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 220px;
    -moz-box-flex: 1;
    -moz-flex: 1 0 220px;
    -ms-flex: 1 0 220px;
    flex: 1 0 220px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding-right: 24px;
    background-color: transparent; }
  .item-input .button .icon {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 24px;
    -moz-box-flex: 0;
    -moz-flex: 0 0 24px;
    -ms-flex: 0 0 24px;
    flex: 0 0 24px;
    position: static;
    display: inline-block;
    height: auto;
    text-align: center;
    font-size: 16px; }
  .item-input .button-bar {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 220px;
    -moz-box-flex: 1;
    -moz-flex: 1 0 220px;
    -ms-flex: 1 0 220px;
    flex: 1 0 220px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; }
  .item-input .icon {
    min-width: 14px; }

.item-input-inset {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px; }

.item-input-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -moz-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding-right: 8px;
  padding-left: 8px;
  background: #eee; }

.item-input-inset .item-input-wrapper input {
  padding-left: 4px;
  height: 29px;
  background: transparent;
  line-height: 18px; }

.item-input-wrapper ~ .button {
  margin-left: 10px; }

.input-label {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 100px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  flex: 1 0 100px;
  display: table;
  padding: 7px 10px 7px 3px;
  max-width: 200px;
  width: 35%;
  color: #444444;
  font-weight: bold;
  font-size: 14px; }

.placeholder-icon {
  color: #aaa; }
  .placeholder-icon:first-child {
    padding-right: 6px; }
  .placeholder-icon:last-child {
    padding-left: 6px; }

.item-stacked-label {
  display: block;
  background-color: transparent;
  box-shadow: none; }
  .item-stacked-label .input-label, .item-stacked-label .icon {
    display: inline-block;
    padding: 4px 0;
    vertical-align: middle; }

.item-stacked-label input,
.item-stacked-label textarea {
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  padding: 4px 8px 3px;
  border: none;
  background-color: white; }

.item-stacked-label input {
  overflow: hidden;
  height: 46px; }

.item-floating-label {
  display: block;
  background-color: transparent;
  box-shadow: none; }
  .item-floating-label .input-label {
    position: relative;
    padding: 5px 0 0 0;
    opacity: 0;
    top: 10px;
    -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;
    -moz-transition: opacity 0.15s ease-in, top 0.2s linear;
    transition: opacity 0.15s ease-in, top 0.2s linear; }
    .item-floating-label .input-label.has-input {
      opacity: 1;
      top: 0;
      -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;
      -moz-transition: opacity 0.15s ease-in, top 0.2s linear;
      transition: opacity 0.15s ease-in, top 0.2s linear; }

textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"] {
  display: block;
  padding-top: 2px;
  height: 34px;
  color: #111111;
  vertical-align: middle;
  font-size: 14px;
  line-height: 16px; }

.platform-ios input[type="datetime-local"],
.platform-ios input[type="date"],
.platform-ios input[type="month"],
.platform-ios input[type="time"],
.platform-ios input[type="week"],
.platform-android input[type="datetime-local"],
.platform-android input[type="date"],
.platform-android input[type="month"],
.platform-android input[type="time"],
.platform-android input[type="week"] {
  padding-top: 8px; }

input,
textarea {
  width: 100%; }

textarea {
  height: auto; }

textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"] {
  border: 0; }

input[type="radio"],
input[type="checkbox"] {
  margin: 0;
  line-height: normal; }

input[type="file"],
input[type="image"],
input[type="submit"],
input[type="reset"],
input[type="button"],
input[type="radio"],
input[type="checkbox"] {
  width: auto; }

input[type="file"] {
  line-height: 34px; }

.previous-input-focus,
.cloned-text-input + input,
.cloned-text-input + textarea {
  position: absolute !important;
  left: -9999px;
  width: 200px; }

input::-moz-placeholder,
textarea::-moz-placeholder {
  /* Firefox 19+ */
  color: #aaaaaa; }
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #aaaaaa; }
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #aaaaaa; }

input[disabled],
select[disabled],
textarea[disabled],
input[readonly]:not(.cloned-text-input),
textarea[readonly]:not(.cloned-text-input),
select[readonly] {
  background-color: #f8f8f8;
  cursor: not-allowed; }

input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"][readonly],
input[type="checkbox"][readonly] {
  background-color: transparent; }

/**
 * Checkbox
 * --------------------------------------------------
 */
.checkbox {
  position: relative;
  display: inline-block;
  padding: 7px 7px;
  cursor: pointer; }
  .checkbox input:before, .checkbox .checkbox-icon:before {
    border-color: #4a87ee; }
  .checkbox input:checked:before, .checkbox input:checked + .checkbox-icon:before {
    background: #4a87ee; }

.checkbox-light input:before, .checkbox-light .checkbox-icon:before {
  border-color: #dddddd; }
.checkbox-light input:checked:before, .checkbox-light input:checked + .checkbox-icon:before {
  background: #dddddd; }

.checkbox-stable input:before, .checkbox-stable .checkbox-icon:before {
  border-color: #b2b2b2; }
.checkbox-stable input:checked:before, .checkbox-stable input:checked + .checkbox-icon:before {
  background: #b2b2b2; }

.checkbox-positive input:before, .checkbox-positive .checkbox-icon:before {
  border-color: #4a87ee; }
.checkbox-positive input:checked:before, .checkbox-positive input:checked + .checkbox-icon:before {
  background: #4a87ee; }

.checkbox-calm input:before, .checkbox-calm .checkbox-icon:before {
  border-color: #43cee6; }
.checkbox-calm input:checked:before, .checkbox-calm input:checked + .checkbox-icon:before {
  background: #43cee6; }

.checkbox-assertive input:before, .checkbox-assertive .checkbox-icon:before {
  border-color: #ef4e3a; }
.checkbox-assertive input:checked:before, .checkbox-assertive input:checked + .checkbox-icon:before {
  background: #ef4e3a; }

.checkbox-balanced input:before, .checkbox-balanced .checkbox-icon:before {
  border-color: #66cc33; }
.checkbox-balanced input:checked:before, .checkbox-balanced input:checked + .checkbox-icon:before {
  background: #66cc33; }

.checkbox-energized input:before, .checkbox-energized .checkbox-icon:before {
  border-color: #f0b840; }
.checkbox-energized input:checked:before, .checkbox-energized input:checked + .checkbox-icon:before {
  background: #f0b840; }

.checkbox-royal input:before, .checkbox-royal .checkbox-icon:before {
  border-color: #8a6de9; }
.checkbox-royal input:checked:before, .checkbox-royal input:checked + .checkbox-icon:before {
  background: #8a6de9; }

.checkbox-dark input:before, .checkbox-dark .checkbox-icon:before {
  border-color: #444444; }
.checkbox-dark input:checked:before, .checkbox-dark input:checked + .checkbox-icon:before {
  background: #444444; }

.checkbox input:disabled:before,
.checkbox input:disabled + .checkbox-icon:before {
  border-color: #dddddd; }

.checkbox input:disabled:checked:before,
.checkbox input:disabled:checked + .checkbox-icon:before {
  background: #dddddd; }

.checkbox.checkbox-input-hidden input {
  display: none !important; }

.checkbox input,
.checkbox-icon {
  position: relative;
  width: 28px;
  height: 28px;
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none; }
  .checkbox input:before,
  .checkbox-icon:before {
    display: table;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-radius: 28px;
    background: white;
    content: ' ';
    transition: background-color 20ms ease-in-out; }

.checkbox input:checked:before,
input:checked + .checkbox-icon:before {
  border-width: 2px; }

.checkbox input:after,
.checkbox-icon:after {
  -webkit-transition: opacity 0.05s ease-in-out;
  -moz-transition: opacity 0.05s ease-in-out;
  transition: opacity 0.05s ease-in-out;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  top: 30%;
  left: 26%;
  display: table;
  width: 15px;
  height: 10.33333px;
  border: 3px solid white;
  border-top: 0;
  border-right: 0;
  content: ' ';
  opacity: 0; }

.grade-c .checkbox input:after,
.grade-c .checkbox-icon:after {
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  transform: rotate(0);
  top: 3px;
  left: 4px;
  border: none;
  color: white;
  content: '\2713';
  font-weight: bold;
  font-size: 20px; }

.checkbox input:checked:after,
input:checked + .checkbox-icon:after {
  opacity: 1; }

.item-checkbox {
  padding-left: 58px; }
  .item-checkbox.active {
    box-shadow: none; }

.item-checkbox .checkbox {
  position: absolute;
  top: 50%;
  right: 7.5px;
  left: 7.5px;
  z-index: 3;
  margin-top: -21px; }

.item-checkbox.item-checkbox-right {
  padding-right: 58px;
  padding-left: 15px; }

.item-checkbox-right .checkbox input,
.item-checkbox-right .checkbox-icon {
  float: right; }

/**
 * Toggle
 * --------------------------------------------------
 */
.item-toggle {
  pointer-events: none; }

.toggle {
  position: relative;
  display: inline-block;
  pointer-events: auto;
  margin: -5px;
  padding: 5px; }
  .toggle input:checked + .track {
    border-color: #4a87ee;
    background-color: #4a87ee; }
  .toggle.dragging .handle {
    background-color: #f2f2f2 !important; }
  .toggle.toggle-light input:checked + .track {
    border-color: #dddddd;
    background-color: #dddddd; }
  .toggle.toggle-stable input:checked + .track {
    border-color: #b2b2b2;
    background-color: #b2b2b2; }
  .toggle.toggle-positive input:checked + .track {
    border-color: #4a87ee;
    background-color: #4a87ee; }
  .toggle.toggle-calm input:checked + .track {
    border-color: #43cee6;
    background-color: #43cee6; }
  .toggle.toggle-assertive input:checked + .track {
    border-color: #ef4e3a;
    background-color: #ef4e3a; }
  .toggle.toggle-balanced input:checked + .track {
    border-color: #66cc33;
    background-color: #66cc33; }
  .toggle.toggle-energized input:checked + .track {
    border-color: #f0b840;
    background-color: #f0b840; }
  .toggle.toggle-royal input:checked + .track {
    border-color: #8a6de9;
    background-color: #8a6de9; }
  .toggle.toggle-dark input:checked + .track {
    border-color: #444444;
    background-color: #444444; }

.toggle input {
  display: none; }

/* the track appearance when the toggle is "off" */
.toggle .track {
  -webkit-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: background-color, border;
  -moz-transition-property: background-color, border;
  transition-property: background-color, border;
  display: inline-block;
  box-sizing: border-box;
  width: 54px;
  height: 32px;
  border: solid 2px #e5e5e5;
  border-radius: 20px;
  background-color: #e5e5e5;
  content: ' ';
  cursor: pointer;
  pointer-events: none; }

/* Fix to avoid background color bleeding */
/* (occured on (at least) Android 4.2, Asus MeMO Pad HD7 ME173X) */
.platform-android4_2 .toggle .track {
  -webkit-background-clip: padding-box; }

/* the handle (circle) thats inside the toggle's track area */
/* also the handle's appearance when it is "off" */
.toggle .handle {
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  position: absolute;
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: white;
  top: 7px;
  left: 7px; }
  .toggle .handle:before {
    position: absolute;
    top: -4px;
    left: -22px;
    padding: 19px 35px;
    content: " "; }

.toggle input:checked + .track .handle {
  -webkit-transform: translate3d(22px, 0, 0);
  -moz-transform: translate3d(22px, 0, 0);
  transform: translate3d(22px, 0, 0);
  background-color: white; }

.item-toggle.active {
  box-shadow: none; }

.item-toggle,
.item-toggle.item-complex .item-content {
  padding-right: 99px; }

.item-toggle.item-complex {
  padding-right: 0; }

.item-toggle .toggle {
  position: absolute;
  top: 7.5px;
  right: 15px;
  z-index: 3; }

.toggle input:disabled + .track {
  opacity: .6; }

/**
 * Radio Button Inputs
 * --------------------------------------------------
 */
.item-radio {
  padding: 0; }
  .item-radio:hover {
    cursor: pointer; }

.item-radio .item-content {
  /* give some room to the right for the checkmark icon */
  padding-right: 60px; }

.item-radio .radio-icon {
  /* checkmark icon will be hidden by default */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  visibility: hidden;
  padding: 13px;
  height: 100%;
  font-size: 24px; }

.item-radio input {
  /* hide any radio button inputs elements (the ugly circles) */
  position: absolute;
  left: -9999px; }
  .item-radio input:checked ~ .item-content {
    /* style the item content when its checked */
    background: #f7f7f7; }
  .item-radio input:checked ~ .radio-icon {
    /* show the checkmark icon when its checked */
    visibility: visible; }

.platform-android.grade-b .item-radio,
.platform-android.grade-c .item-radio {
  -webkit-animation: androidCheckedbugfix infinite 1s; }

@-webkit-keyframes androidCheckedbugfix {
  from {
    padding: 0; }

  to {
    padding: 0; } }
/**
 * Range
 * --------------------------------------------------
 */
input[type="range"] {
  display: inline-block;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 2px;
  padding-left: 1px;
  width: auto;
  height: 35px;
  outline: none;
  background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #cccccc), color-stop(100%, #cccccc));
  background: linear-gradient(to right, #cccccc 0%, #cccccc 100%);
  background-position: center;
  background-size: 99% 4px;
  background-repeat: no-repeat;
  -webkit-appearance: none; }
  input[type="range"]::-webkit-slider-thumb {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 1px 3px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-appearance: none; }
  input[type="range"]::-webkit-slider-thumb:before {
    /* what creates the colorful line on the left side of the slider */
    position: absolute;
    top: 8px;
    left: -2001px;
    width: 2000px;
    height: 4px;
    background: #444444;
    content: ' '; }
  input[type="range"]::-webkit-slider-thumb:after {
    /* create a larger (but hidden) hit area */
    position: absolute;
    top: -20px;
    left: -20px;
    padding: 30px;
    content: ' '; }

.range {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  padding: 2px 4px; }
  .range.range-light input::-webkit-slider-thumb:before {
    background: #dddddd; }
  .range.range-stable input::-webkit-slider-thumb:before {
    background: #b2b2b2; }
  .range.range-positive input::-webkit-slider-thumb:before {
    background: #4a87ee; }
  .range.range-calm input::-webkit-slider-thumb:before {
    background: #43cee6; }
  .range.range-balanced input::-webkit-slider-thumb:before {
    background: #66cc33; }
  .range.range-assertive input::-webkit-slider-thumb:before {
    background: #ef4e3a; }
  .range.range-energized input::-webkit-slider-thumb:before {
    background: #f0b840; }
  .range.range-royal input::-webkit-slider-thumb:before {
    background: #8a6de9; }
  .range.range-dark input::-webkit-slider-thumb:before {
    background: #444444; }

.range .icon {
  -webkit-box-flex: 0;
  -webkit-flex: 0;
  -moz-box-flex: 0;
  -moz-flex: 0;
  -ms-flex: 0;
  flex: 0;
  display: block;
  min-width: 24px;
  text-align: center;
  font-size: 24px; }

.range input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  margin-right: 10px;
  margin-left: 10px; }

.range-label {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -moz-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: block;
  white-space: nowrap; }

.range-label:first-child {
  padding-left: 5px; }

.range input + .range-label {
  padding-right: 5px;
  padding-left: 0; }

/**
 * Select
 * --------------------------------------------------
 */
.item-select {
  position: relative; }
  .item-select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 13px 45px 15px 15px;
    max-width: 65%;
    border: none;
    background: white;
    color: #333;
    text-indent: .01px;
    text-overflow: '';
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    direction: rtl; }
  .item-select select::-ms-expand {
    display: none; }
  .item-select option {
    direction: ltr; }
  .item-select:after {
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -3px;
    width: 0;
    height: 0;
    border-top: 5px solid;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    color: #999;
    content: "";
    pointer-events: none; }
  .item-select.item-light select {
    background: white;
    color: #444444; }
  .item-select.item-stable select {
    background: #f8f8f8;
    color: #444444; }
  .item-select.item-stable:after, .item-select.item-stable .input-label {
    color: #656565; }
  .item-select.item-positive select {
    background: #4a87ee;
    color: white; }
  .item-select.item-positive:after, .item-select.item-positive .input-label {
    color: white; }
  .item-select.item-calm select {
    background: #43cee6;
    color: white; }
  .item-select.item-calm:after, .item-select.item-calm .input-label {
    color: white; }
  .item-select.item-assertive select {
    background: #ef4e3a;
    color: white; }
  .item-select.item-assertive:after, .item-select.item-assertive .input-label {
    color: white; }
  .item-select.item-balanced select {
    background: #66cc33;
    color: white; }
  .item-select.item-balanced:after, .item-select.item-balanced .input-label {
    color: white; }
  .item-select.item-energized select {
    background: #f0b840;
    color: white; }
  .item-select.item-energized:after, .item-select.item-energized .input-label {
    color: white; }
  .item-select.item-royal select {
    background: #8a6de9;
    color: white; }
  .item-select.item-royal:after, .item-select.item-royal .input-label {
    color: white; }
  .item-select.item-dark select {
    background: #444444;
    color: white; }
  .item-select.item-dark:after, .item-select.item-dark .input-label {
    color: white; }

select[multiple], select[size] {
  height: auto; }

/**
 * Progress
 * --------------------------------------------------
 */
progress {
  display: block;
  margin: 15px auto;
  width: 100%; }

/**
 * Buttons
 * --------------------------------------------------
 */
.button {
  border-color: #b2b2b2;
  background-color: #f8f8f8;
  color: #444444;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0 12px;
  min-width: 52px;
  min-height: 47px;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  vertical-align: top;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 42px;
  cursor: pointer; }
  .button:hover {
    color: #444444;
    text-decoration: none; }
  .button.active, .button.activated {
    border-color: #a2a2a2;
    background-color: #e5e5e5;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
  .button:after {
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    content: ' '; }
  .button .icon {
    vertical-align: top;
    pointer-events: none; }
  .button .icon:before, .button.icon:before, .button.icon-left:before, .button.icon-right:before {
    display: inline-block;
    padding: 0 0 1px 0;
    vertical-align: inherit;
    font-size: 24px;
    line-height: 41px;
    pointer-events: none; }
  .button.icon-left:before {
    float: left;
    padding-right: .2em;
    padding-left: 0; }
  .button.icon-right:before {
    float: right;
    padding-right: 0;
    padding-left: .2em; }
  .button.button-block, .button.button-full {
    margin-top: 10px;
    margin-bottom: 10px; }
  .button.button-light {
    border-color: #dddddd;
    background-color: white;
    color: #444444; }
    .button.button-light:hover {
      color: #444444;
      text-decoration: none; }
    .button.button-light.active, .button.button-light.activated {
      border-color: #cccccc;
      background-color: #fafafa;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-light.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #dddddd; }
    .button.button-light.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-light.button-outline {
      border-color: #dddddd;
      background: transparent;
      color: #dddddd; }
      .button.button-light.button-outline.active, .button.button-light.button-outline.activated {
        background-color: #dddddd;
        box-shadow: none;
        color: #fff; }
  .button.button-stable {
    border-color: #b2b2b2;
    background-color: #f8f8f8;
    color: #444444; }
    .button.button-stable:hover {
      color: #444444;
      text-decoration: none; }
    .button.button-stable.active, .button.button-stable.activated {
      border-color: #a2a2a2;
      background-color: #e5e5e5;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-stable.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #b2b2b2; }
    .button.button-stable.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-stable.button-outline {
      border-color: #b2b2b2;
      background: transparent;
      color: #b2b2b2; }
      .button.button-stable.button-outline.active, .button.button-stable.button-outline.activated {
        background-color: #b2b2b2;
        box-shadow: none;
        color: #fff; }
  .button.button-positive {
    border-color: #145dd7;
    background-color: #4a87ee;
    color: white; }
    .button.button-positive:hover {
      color: white;
      text-decoration: none; }
    .button.button-positive.active, .button.button-positive.activated {
      border-color: #145dd7;
      background-color: #145dd7;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-positive.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #4a87ee; }
    .button.button-positive.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-positive.button-outline {
      border-color: #4a87ee;
      background: transparent;
      color: #4a87ee; }
      .button.button-positive.button-outline.active, .button.button-positive.button-outline.activated {
        background-color: #4a87ee;
        box-shadow: none;
        color: #fff; }
  .button.button-calm {
    border-color: #1aaac3;
    background-color: #43cee6;
    color: white; }
    .button.button-calm:hover {
      color: white;
      text-decoration: none; }
    .button.button-calm.active, .button.button-calm.activated {
      border-color: #1aaac3;
      background-color: #1aaac3;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-calm.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #43cee6; }
    .button.button-calm.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-calm.button-outline {
      border-color: #43cee6;
      background: transparent;
      color: #43cee6; }
      .button.button-calm.button-outline.active, .button.button-calm.button-outline.activated {
        background-color: #43cee6;
        box-shadow: none;
        color: #fff; }
  .button.button-assertive {
    border-color: #cc2511;
    background-color: #ef4e3a;
    color: white; }
    .button.button-assertive:hover {
      color: white;
      text-decoration: none; }
    .button.button-assertive.active, .button.button-assertive.activated {
      border-color: #cc2511;
      background-color: #cc2511;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-assertive.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #ef4e3a; }
    .button.button-assertive.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-assertive.button-outline {
      border-color: #ef4e3a;
      background: transparent;
      color: #ef4e3a; }
      .button.button-assertive.button-outline.active, .button.button-assertive.button-outline.activated {
        background-color: #ef4e3a;
        box-shadow: none;
        color: #fff; }
  .button.button-balanced {
    border-color: #478f24;
    background-color: #66cc33;
    color: white; }
    .button.button-balanced:hover {
      color: white;
      text-decoration: none; }
    .button.button-balanced.active, .button.button-balanced.activated {
      border-color: #478f24;
      background-color: #478f24;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-balanced.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #66cc33; }
    .button.button-balanced.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-balanced.button-outline {
      border-color: #66cc33;
      background: transparent;
      color: #66cc33; }
      .button.button-balanced.button-outline.active, .button.button-balanced.button-outline.activated {
        background-color: #66cc33;
        box-shadow: none;
        color: #fff; }
  .button.button-energized {
    border-color: #d39511;
    background-color: #f0b840;
    color: white; }
    .button.button-energized:hover {
      color: white;
      text-decoration: none; }
    .button.button-energized.active, .button.button-energized.activated {
      border-color: #d39511;
      background-color: #d39511;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-energized.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #f0b840; }
    .button.button-energized.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-energized.button-outline {
      border-color: #f0b840;
      background: transparent;
      color: #f0b840; }
      .button.button-energized.button-outline.active, .button.button-energized.button-outline.activated {
        background-color: #f0b840;
        box-shadow: none;
        color: #fff; }
  .button.button-royal {
    border-color: #552bdf;
    background-color: #8a6de9;
    color: white; }
    .button.button-royal:hover {
      color: white;
      text-decoration: none; }
    .button.button-royal.active, .button.button-royal.activated {
      border-color: #552bdf;
      background-color: #552bdf;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-royal.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #8a6de9; }
    .button.button-royal.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-royal.button-outline {
      border-color: #8a6de9;
      background: transparent;
      color: #8a6de9; }
      .button.button-royal.button-outline.active, .button.button-royal.button-outline.activated {
        background-color: #8a6de9;
        box-shadow: none;
        color: #fff; }
  .button.button-dark {
    border-color: #111111;
    background-color: #444444;
    color: white; }
    .button.button-dark:hover {
      color: white;
      text-decoration: none; }
    .button.button-dark.active, .button.button-dark.activated {
      border-color: black;
      background-color: #262626;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15); }
    .button.button-dark.button-clear {
      border-color: transparent;
      background: none;
      box-shadow: none;
      color: #444444; }
    .button.button-dark.button-icon {
      border-color: transparent;
      background: none; }
    .button.button-dark.button-outline {
      border-color: #444444;
      background: transparent;
      color: #444444; }
      .button.button-dark.button-outline.active, .button.button-dark.button-outline.activated {
        background-color: #444444;
        box-shadow: none;
        color: #fff; }

.button-small {
  padding: 2px 4px 1px;
  min-width: 28px;
  min-height: 30px;
  font-size: 12px;
  line-height: 26px; }
  .button-small .icon:before, .button-small.icon:before, .button-small.icon-left:before, .button-small.icon-right:before {
    font-size: 16px;
    line-height: 19px;
    margin-top: 3px; }

.button-large {
  padding: 0 16px;
  min-width: 68px;
  min-height: 59px;
  font-size: 20px;
  line-height: 53px; }
  .button-large .icon:before, .button-large.icon:before, .button-large.icon-left:before, .button-large.icon-right:before {
    padding-bottom: 2px;
    font-size: 32px;
    line-height: 51px; }

.button-icon {
  -webkit-transition: opacity 0.1s;
  -moz-transition: opacity 0.1s;
  transition: opacity 0.1s;
  padding: 0 6px;
  min-width: initial;
  border-color: transparent;
  background: none; }
  .button-icon.button.active, .button-icon.button.activated {
    border-color: transparent;
    background: none;
    box-shadow: none;
    opacity: 0.3; }
  .button-icon .icon:before, .button-icon.icon:before {
    font-size: 32px; }

.button-clear {
  -webkit-transition: opacity 0.1s;
  -moz-transition: opacity 0.1s;
  transition: opacity 0.1s;
  padding: 0 6px;
  max-height: 42px;
  border-color: transparent;
  background: none;
  box-shadow: none; }
  .button-clear.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: #b2b2b2; }
  .button-clear.button-icon {
    border-color: transparent;
    background: none; }
  .button-clear.active, .button-clear.activated {
    opacity: 0.3; }

.button-outline {
  -webkit-transition: opacity 0.1s;
  -moz-transition: opacity 0.1s;
  transition: opacity 0.1s;
  background: none;
  box-shadow: none; }
  .button-outline.button-outline {
    border-color: #b2b2b2;
    background: transparent;
    color: #b2b2b2; }
    .button-outline.button-outline.active, .button-outline.button-outline.activated {
      background-color: #b2b2b2;
      box-shadow: none;
      color: #fff; }

.padding > .button.button-block:first-child {
  margin-top: 0; }

.button-block {
  display: block;
  clear: both; }
  .button-block:after {
    clear: both; }

.button-full,
.button-full > .button {
  display: block;
  margin-right: 0;
  margin-left: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0; }

button.button-block,
button.button-full,
.button-full > button.button,
input.button.button-block {
  width: 100%; }

a.button {
  text-decoration: none; }

.button.disabled,
.button[disabled] {
  opacity: .4;
  cursor: default !important;
  pointer-events: none; }

/**
 * Button Bar
 * --------------------------------------------------
 */
.button-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%; }
  .button-bar.button-bar-inline {
    display: block;
    width: auto;
    *zoom: 1; }
    .button-bar.button-bar-inline:before, .button-bar.button-bar-inline:after {
      display: table;
      content: "";
      line-height: 0; }
    .button-bar.button-bar-inline:after {
      clear: both; }
    .button-bar.button-bar-inline > .button {
      width: auto;
      display: inline-block;
      float: left; }

.button-bar > .button {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  overflow: hidden;
  padding: 0 16px;
  width: 0;
  border-width: 1px 0px 1px 1px;
  border-radius: 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap; }
  .button-bar > .button:before,
  .button-bar > .button .icon:before {
    line-height: 44px; }
  .button-bar > .button:first-child {
    border-radius: 2px 0px 0px 2px; }
  .button-bar > .button:last-child {
    border-right-width: 1px;
    border-radius: 0px 2px 2px 0px; }

/**
 * Animations
 * --------------------------------------------------
 * The animations in this file are "simple" - not too complex
 * and pretty easy on performance. They can be overidden
 * and enhanced easily.
 */
/**
 * Keyframes
 * --------------------------------------------------
 */
@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translate3d(0, 100%, 0); }

  100% {
    -webkit-transform: translate3d(0, 0, 0); } }
@-moz-keyframes slideInUp {
  0% {
    -moz-transform: translate3d(0, 100%, 0); }

  100% {
    -moz-transform: translate3d(0, 0, 0); } }
@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0); }

  100% {
    transform: translate3d(0, 0, 0); } }
@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translate3d(0, 0, 0); }

  100% {
    -webkit-transform: translate3d(0, 100%, 0); } }
@-moz-keyframes slideOutUp {
  0% {
    -moz-transform: translate3d(0, 0, 0); }

  100% {
    -moz-transform: translate3d(0, 100%, 0); } }
@keyframes slideOutUp {
  0% {
    transform: translate3d(0, 0, 0); }

  100% {
    transform: translate3d(0, 100%, 0); } }
@-webkit-keyframes slideInFromLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0); }

  to {
    -webkit-transform: translate3d(0, 0, 0); } }
@-moz-keyframes slideInFromLeft {
  from {
    -moz-transform: translateX(-100%); }

  to {
    -moz-transform: translateX(0); } }
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%); }

  to {
    transform: translateX(0); } }
@-webkit-keyframes slideInFromRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0); }

  to {
    -webkit-transform: translate3d(0, 0, 0); } }
@-moz-keyframes slideInFromRight {
  from {
    -moz-transform: translateX(100%); }

  to {
    -moz-transform: translateX(0); } }
@keyframes slideInFromRight {
  from {
    transform: translateX(100%); }

  to {
    transform: translateX(0); } }
@-webkit-keyframes slideOutToLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0); }

  to {
    -webkit-transform: translate3d(-100%, 0, 0); } }
@-moz-keyframes slideOutToLeft {
  from {
    -moz-transform: translateX(0); }

  to {
    -moz-transform: translateX(-100%); } }
@keyframes slideOutToLeft {
  from {
    transform: translateX(0); }

  to {
    transform: translateX(-100%); } }
@-webkit-keyframes slideOutToRight {
  from {
    -webkit-transform: translate3d(0, 0, 0); }

  to {
    -webkit-transform: translate3d(100%, 0, 0); } }
@-moz-keyframes slideOutToRight {
  from {
    -moz-transform: translateX(0); }

  to {
    -moz-transform: translateX(100%); } }
@keyframes slideOutToRight {
  from {
    transform: translateX(0); }

  to {
    transform: translateX(100%); } }
@-webkit-keyframes fadeOut {
  from {
    opacity: 1; }

  to {
    opacity: 0; } }
@-moz-keyframes fadeOut {
  from {
    opacity: 1; }

  to {
    opacity: 0; } }
@keyframes fadeOut {
  from {
    opacity: 1; }

  to {
    opacity: 0; } }
@-webkit-keyframes fadeIn {
  from {
    opacity: 0; }

  to {
    opacity: 1; } }
@-moz-keyframes fadeIn {
  from {
    opacity: 0; }

  to {
    opacity: 1; } }
@keyframes fadeIn {
  from {
    opacity: 0; }

  to {
    opacity: 1; } }
@-webkit-keyframes fadeInHalf {
  from {
    background-color: transparent; }

  to {
    background-color: rgba(0, 0, 0, 0.5); } }
@-moz-keyframes fadeInHalf {
  from {
    background-color: transparent; }

  to {
    background-color: rgba(0, 0, 0, 0.5); } }
@keyframes fadeInHalf {
  from {
    background-color: transparent; }

  to {
    background-color: rgba(0, 0, 0, 0.5); } }
@-webkit-keyframes fadeOutHalf {
  from {
    background-color: rgba(0, 0, 0, 0.5); }

  to {
    background-color: transparent; } }
@-moz-keyframes fadeOutHalf {
  from {
    background-color: rgba(0, 0, 0, 0.5); }

  to {
    background-color: transparent; } }
@keyframes fadeOutHalf {
  from {
    background-color: rgba(0, 0, 0, 0.5); }

  to {
    background-color: transparent; } }
@-webkit-keyframes scaleOut {
  from {
    -webkit-transform: scale(1);
    opacity: 1; }

  to {
    -webkit-transform: scale(0.8);
    opacity: 0; } }
@-moz-keyframes scaleOut {
  from {
    -moz-transform: scale(1);
    opacity: 1; }

  to {
    -moz-transform: scale(0.8);
    opacity: 0; } }
@keyframes scaleOut {
  from {
    transform: scale(1);
    opacity: 1; }

  to {
    transform: scale(0.8);
    opacity: 0; } }
@-webkit-keyframes scaleIn {
  from {
    -webkit-transform: scale(0); }

  to {
    -webkit-transform: scale(1); } }
@-moz-keyframes scaleIn {
  from {
    -moz-transform: scale(0); }

  to {
    -moz-transform: scale(1); } }
@keyframes scaleIn {
  from {
    transform: scale(0); }

  to {
    transform: scale(1); } }
@-webkit-keyframes superScaleIn {
  from {
    -webkit-transform: scale(1.2);
    opacity: 0; }

  to {
    -webkit-transform: scale(1);
    opacity: 1; } }
@-moz-keyframes superScaleIn {
  from {
    -moz-transform: scale(1.2);
    opacity: 0; }

  to {
    -moz-transform: scale(1);
    opacity: 1; } }
@keyframes superScaleIn {
  from {
    transform: scale(1.2);
    opacity: 0; }

  to {
    transform: scale(1);
    opacity: 1; } }
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg); } }
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg); } }
@keyframes spin {
  100% {
    transform: rotate(360deg); } }
.no-animation > .ng-enter, .no-animation.ng-enter, .no-animation > .ng-leave, .no-animation.ng-leave {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none; }

.noop-animation > .ng-enter, .noop-animation.ng-enter, .noop-animation > .ng-leave, .noop-animation.ng-leave {
  -webkit-transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  -moz-transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }

.ng-animate .pane {
  position: absolute; }

/**
 * Slide Left-Right, and Right-Left, each with the reserve
 * --------------------------------------------------
 * NEW content slides IN from the RIGHT, OLD slides OUT to the LEFT
 * Reverse: NEW content slides IN from the LEFT, OLD slides OUT to the RIGHT
 */
.slide-left-right > .ng-enter, .slide-left-right.ng-enter,
.slide-left-right > .ng-leave, .slide-left-right.ng-leave,
.slide-right-left.reverse > .ng-enter,
.slide-right-left.reverse.ng-enter,
.slide-right-left.reverse > .ng-leave,
.slide-right-left.reverse.ng-leave {
  -webkit-transition: all ease-in-out 250ms;
  -moz-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }
.slide-left-right > .ng-enter, .slide-left-right.ng-enter,
.slide-right-left.reverse > .ng-enter,
.slide-right-left.reverse.ng-enter {
  /* NEW content placed far RIGHT BEFORE it slides IN from the RIGHT */
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0); }
.slide-left-right > .ng-enter.ng-enter-active, .slide-left-right.ng-enter.ng-enter-active,
.slide-right-left.reverse > .ng-enter.ng-enter-active,
.slide-right-left.reverse.ng-enter.ng-enter-active {
  /* NEW content ACTIVELY sliding IN from the RIGHT */
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }
.slide-left-right > .ng-leave.ng-leave-active, .slide-left-right.ng-leave.ng-leave-active,
.slide-right-left.reverse > .ng-leave.ng-leave-active,
.slide-right-left.reverse.ng-leave.ng-leave-active {
  /* OLD content ACTIVELY sliding OUT to the LEFT */
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0); }

.slide-left-right.reverse > .ng-enter, .slide-left-right.reverse.ng-enter, .slide-left-right.reverse > .ng-leave, .slide-left-right.reverse.ng-leave,
.slide-right-left > .ng-enter,
.slide-right-left.ng-enter,
.slide-right-left > .ng-leave,
.slide-right-left.ng-leave {
  -webkit-transition: all ease-in-out 250ms;
  -moz-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }
.slide-left-right.reverse > .ng-enter, .slide-left-right.reverse.ng-enter,
.slide-right-left > .ng-enter,
.slide-right-left.ng-enter {
  /* NEW content placed far LEFT BEFORE it slides IN from the LEFT */
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0); }
.slide-left-right.reverse > .ng-enter.ng-enter-active, .slide-left-right.reverse.ng-enter.ng-enter-active,
.slide-right-left > .ng-enter.ng-enter-active,
.slide-right-left.ng-enter.ng-enter-active {
  /* NEW content ACTIVELY sliding IN from the LEFT */
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }
.slide-left-right.reverse > .ng-leave.ng-leave-active, .slide-left-right.reverse.ng-leave.ng-leave-active,
.slide-right-left > .ng-leave.ng-leave-active,
.slide-right-left.ng-leave.ng-leave-active {
  /* OLD content ACTIVELY sliding OUT to the RIGHT */
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0); }

/**
 * iOS7 style slide left to right
 * --------------------------------------------------
 */
.slide-left-right-ios7 > .ng-enter, .slide-left-right-ios7.ng-enter,
.slide-left-right-ios7 > .ng-leave, .slide-left-right-ios7.ng-leave,
.slide-right-left-ios7.reverse > .ng-enter,
.slide-right-left-ios7.reverse.ng-enter,
.slide-right-left-ios7.reverse > .ng-leave,
.slide-right-left-ios7.reverse.ng-leave {
  -webkit-transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  -moz-transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto;
  border-right: none;
  border-left: none; }
  .slide-left-right-ios7 > .ng-enter:not(.bar), .slide-left-right-ios7.ng-enter:not(.bar),
  .slide-left-right-ios7 > .ng-leave:not(.bar), .slide-left-right-ios7.ng-leave:not(.bar),
  .slide-right-left-ios7.reverse > .ng-enter:not(.bar),
  .slide-right-left-ios7.reverse.ng-enter:not(.bar),
  .slide-right-left-ios7.reverse > .ng-leave:not(.bar),
  .slide-right-left-ios7.reverse.ng-leave:not(.bar) {
    border-right: 1px solid transparent;
    border-left: 1px solid transparent; }
.slide-left-right-ios7 > .ng-enter, .slide-left-right-ios7.ng-enter,
.slide-right-left-ios7.reverse > .ng-enter,
.slide-right-left-ios7.reverse.ng-enter {
  /* NEW content placed far RIGHT BEFORE it slides IN from the RIGHT */
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0); }
.slide-left-right-ios7 > .ng-leave, .slide-left-right-ios7.ng-leave,
.slide-right-left-ios7.reverse > .ng-leave,
.slide-right-left-ios7.reverse.ng-leave {
  z-index: 1; }
.slide-left-right-ios7 > .ng-enter.ng-enter-active, .slide-left-right-ios7.ng-enter.ng-enter-active,
.slide-right-left-ios7.reverse > .ng-enter.ng-enter-active,
.slide-right-left-ios7.reverse.ng-enter.ng-enter-active {
  /* NEW content ACTIVELY sliding IN from the RIGHT */
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }
.slide-left-right-ios7 > .ng-leave.ng-leave-active, .slide-left-right-ios7.ng-leave.ng-leave-active,
.slide-right-left-ios7.reverse > .ng-leave.ng-leave-active,
.slide-right-left-ios7.reverse.ng-leave.ng-leave-active {
  /* OLD content ACTIVELY sliding OUT to the LEFT */
  -webkit-transform: translate3d(-15%, 0, 0);
  -moz-transform: translate3d(-15%, 0, 0);
  transform: translate3d(-15%, 0, 0); }

.slide-left-right-ios7.reverse > .ng-enter, .slide-left-right-ios7.reverse.ng-enter, .slide-left-right-ios7.reverse > .ng-leave, .slide-left-right-ios7.reverse.ng-leave,
.slide-right-left-ios7 > .ng-enter,
.slide-right-left-ios7.ng-enter,
.slide-right-left-ios7 > .ng-leave,
.slide-right-left-ios7.ng-leave {
  -webkit-transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  -moz-transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  transition: all cubic-bezier(0.4, 0.6, 0.2, 1) 340ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent; }
.slide-left-right-ios7.reverse > .ng-enter, .slide-left-right-ios7.reverse.ng-enter,
.slide-right-left-ios7 > .ng-enter,
.slide-right-left-ios7.ng-enter {
  /* NEW content placed far LEFT BEFORE it slides IN from the LEFT */
  -webkit-transform: translate3d(-15%, 0, 0);
  -moz-transform: translate3d(-15%, 0, 0);
  transform: translate3d(-15%, 0, 0); }
.slide-left-right-ios7.reverse > .ng-leave, .slide-left-right-ios7.reverse.ng-leave,
.slide-right-left-ios7 > .ng-leave,
.slide-right-left-ios7.ng-leave {
  z-index: 2; }
.slide-left-right-ios7.reverse > .ng-enter.ng-enter-active, .slide-left-right-ios7.reverse.ng-enter.ng-enter-active,
.slide-right-left-ios7 > .ng-enter.ng-enter-active,
.slide-right-left-ios7.ng-enter.ng-enter-active {
  /* NEW content ACTIVELY sliding IN from the LEFT */
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }
.slide-left-right-ios7.reverse > .ng-leave.ng-leave-active, .slide-left-right-ios7.reverse.ng-leave.ng-leave-active,
.slide-right-left-ios7 > .ng-leave.ng-leave-active,
.slide-right-left-ios7.ng-leave.ng-leave-active {
  /* OLD content ACTIVELY sliding OUT to the RIGHT */
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0); }

/**
 * iPad doesn't like box shadows
 */
/*
.grade-a:not(.platform-ipad) {
  .slide-left-right-ios7, .slide-right-left-ios7.reverse {
    > .ng-enter, &.ng-enter {
      box-shadow: $ios-transition-box-shadow-start;
    }
    > .ng-enter.ng-enter-active, &.ng-enter.ng-enter-active {
      box-shadow: $ios-transition-box-shadow-end;
    }
  }
  .slide-left-right-ios7.reverse, .slide-right-left-ios7 {
    > .ng-leave, &.ng-leave {
      //box-shadow: $ios-transition-box-shadow-end;
    }
    > .ng-leave.ng-leave-active, &.ng-leave.ng-leave-active {
      //box-shadow: $ios-transition-box-shadow-start;
    }
  }
}
*/
.grade-a.platform-ipad .slide-left-right-ios7 > .ng-enter, .grade-a.platform-ipad .slide-left-right-ios7.ng-enter, .grade-a.platform-ipad .slide-right-left-ios7.reverse > .ng-enter, .grade-a.platform-ipad .slide-right-left-ios7.reverse.ng-enter {
  border-left: 1px solid #ddd; }
.grade-a.platform-ipad .slide-left-right-ios7.reverse > .ng-leave, .grade-a.platform-ipad .slide-left-right-ios7.reverse.ng-leave, .grade-a.platform-ipad .slide-right-left-ios7 > .ng-leave, .grade-a.platform-ipad .slide-right-left-ios7.ng-leave {
  border-left: 1px solid #ddd; }

/**
 * Android style "pop in" with fade and scale
 */
.fade-explode > .ng-enter, .fade-explode.ng-enter,
.fade-explode > .ng-leave, .fade-explode.ng-leave {
  -webkit-transition: all ease-out 300ms;
  -moz-transition: all ease-out 300ms;
  transition: all ease-out 300ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto; }
  .fade-explode > .ng-enter:not(.bar), .fade-explode.ng-enter:not(.bar),
  .fade-explode > .ng-leave:not(.bar), .fade-explode.ng-leave:not(.bar) {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd; }
.fade-explode > .ng-enter, .fade-explode.ng-enter {
  /* NEW content placed far RIGHT BEFORE it slides IN from the RIGHT */
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  transform: scale(1.6);
  opacity: 0;
  z-index: 2; }
.fade-explode > .ng-leave, .fade-explode.ng-leave {
  z-index: 1; }
.fade-explode > .ng-enter.ng-enter-active, .fade-explode.ng-enter.ng-enter-active {
  /* NEW content ACTIVELY sliding IN from the RIGHT */
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1; }
.fade-explode > .ng-leave.ng-leave-active, .fade-explode.ng-leave.ng-leave-active {
  /* OLD content ACTIVELY sliding OUT to the LEFT */
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
  transform: scale(0.95); }

.fade-explode.reverse > .ng-enter, .fade-explode.reverse.ng-enter, .fade-explode.reverse > .ng-leave, .fade-explode.reverse.ng-leave {
  -webkit-transition: all ease-out 300ms;
  -moz-transition: all ease-out 300ms;
  transition: all ease-out 300ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto; }
  .fade-explode.reverse > .ng-enter:not(.bar), .fade-explode.reverse.ng-enter:not(.bar), .fade-explode.reverse > .ng-leave:not(.bar), .fade-explode.reverse.ng-leave:not(.bar) {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd; }
.fade-explode.reverse > .ng-enter, .fade-explode.reverse.ng-enter {
  /* NEW content placed far LEFT BEFORE it slides IN from the LEFT */
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
  transform: scale(0.95);
  opacity: 0;
  z-index: 1; }
.fade-explode.reverse > .ng-leave, .fade-explode.reverse.ng-leave {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  z-index: 2; }
.fade-explode.reverse > .ng-enter.ng-enter-active, .fade-explode.reverse.ng-enter.ng-enter-active {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1; }
.fade-explode.reverse > .ng-leave.ng-leave-active, .fade-explode.reverse.ng-leave.ng-leave-active {
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  transform: scale(1.6);
  opacity: 0; }

/**
 * Android style "pop in" with fade and scale
 */
.fade-implode > .ng-enter, .fade-implode.ng-enter,
.fade-implode > .ng-leave, .fade-implode.ng-leave {
  -webkit-transition: all ease-out 200ms;
  -moz-transition: all ease-out 200ms;
  transition: all ease-out 200ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto; }
  .fade-implode > .ng-enter:not(.bar), .fade-implode.ng-enter:not(.bar),
  .fade-implode > .ng-leave:not(.bar), .fade-implode.ng-leave:not(.bar) {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd; }
.fade-implode > .ng-enter, .fade-implode.ng-enter {
  /* NEW content placed far RIGHT BEFORE it slides IN from the RIGHT */
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
  z-index: 2; }
.fade-implode > .ng-leave, .fade-implode.ng-leave {
  z-index: 1; }
.fade-implode > .ng-enter.ng-enter-active, .fade-implode.ng-enter.ng-enter-active {
  /* NEW content */
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1; }

.fade-implode.reverse > .ng-enter, .fade-implode.reverse.ng-enter, .fade-implode.reverse > .ng-leave, .fade-implode.reverse.ng-leave {
  -webkit-transition: all ease-out 200ms;
  -moz-transition: all ease-out 200ms;
  transition: all ease-out 200ms;
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  left: -1px;
  width: auto;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd; }
.fade-implode.reverse > .ng-enter, .fade-implode.reverse.ng-enter {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  z-index: 1; }
.fade-implode.reverse > .ng-leave, .fade-implode.reverse.ng-leave {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  z-index: 2; }
.fade-implode.reverse > .ng-enter.ng-enter-active, .fade-implode.reverse.ng-enter.ng-enter-active {
  opacity: 1; }
.fade-implode.reverse > .ng-leave.ng-leave-active, .fade-implode.reverse.ng-leave.ng-leave-active {
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0; }

/**
 * Simple slide-in animation
 */
.slide-in-left {
  -webkit-transform: translate3d(0%, 0, 0);
  -moz-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0); }
  .slide-in-left.ng-enter, .slide-in-left > .ng-enter {
    -webkit-animation-name: slideInFromLeft;
    -moz-animation-name: slideInFromLeft;
    animation-name: slideInFromLeft;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .slide-in-left.ng-leave, .slide-in-left > .ng-leave {
    -webkit-animation-name: slideOutToLeft;
    -moz-animation-name: slideOutToLeft;
    animation-name: slideOutToLeft;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }

.slide-in-left-add {
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  -webkit-animation-duration: 250ms;
  -moz-animation-duration: 250ms;
  animation-duration: 250ms;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both; }

.slide-in-left-add-active {
  -webkit-animation-name: slideInFromLeft;
  -moz-animation-name: slideInFromLeft;
  animation-name: slideInFromLeft; }

.slide-out-left {
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0); }
  .slide-out-left.ng-enter, .slide-out-left > .ng-enter {
    -webkit-animation-name: slideOutToLeft;
    -moz-animation-name: slideOutToLeft;
    animation-name: slideOutToLeft;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .slide-out-left.ng-leave, .slide-out-left > .ng-leave {
    -webkit-animation-name: slideOutToLeft;
    -moz-animation-name: slideOutToLeft;
    animation-name: slideOutToLeft;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }

.slide-out-left-add {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-animation-duration: 250ms;
  -moz-animation-duration: 250ms;
  animation-duration: 250ms;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both; }

.slide-out-left-add-active {
  -webkit-animation-name: slideOutToLeft;
  -moz-animation-name: slideOutToLeft;
  animation-name: slideOutToLeft; }

.slide-in-right {
  -webkit-transform: translate3d(0%, 0, 0);
  -moz-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0); }
  .slide-in-right.ng-enter, .slide-in-right > .ng-enter {
    -webkit-animation-name: slideInFromRight;
    -moz-animation-name: slideInFromRight;
    animation-name: slideInFromRight;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .slide-in-right.ng-leave, .slide-in-right > .ng-leave {
    -webkit-animation-name: slideOutToRight;
    -moz-animation-name: slideOutToRight;
    animation-name: slideOutToRight;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }

.slide-in-right-add {
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  -webkit-animation-duration: 250ms;
  -moz-animation-duration: 250ms;
  animation-duration: 250ms;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both; }

.slide-in-right-add-active {
  -webkit-animation-name: slideInFromRight;
  -moz-animation-name: slideInFromRight;
  animation-name: slideInFromRight; }

.slide-out-right {
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0); }
  .slide-out-right.ng-enter, .slide-out-right > .ng-enter {
    -webkit-animation-name: slideOutToRight;
    -moz-animation-name: slideOutToRight;
    animation-name: slideOutToRight;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }
  .slide-out-right.ng-leave, .slide-out-right > .ng-leave {
    -webkit-animation-name: slideOutToRight;
    -moz-animation-name: slideOutToRight;
    animation-name: slideOutToRight;
    -webkit-animation-duration: 250ms;
    -moz-animation-duration: 250ms;
    animation-duration: 250ms;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both; }

.slide-out-right-add {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-animation-duration: 250ms;
  -moz-animation-duration: 250ms;
  animation-duration: 250ms;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both; }

.slide-out-right-add-active {
  -webkit-animation-name: slideOutToRight;
  -moz-animation-name: slideOutToRight;
  animation-name: slideOutToRight; }

/**
 * Slide up from the bottom, used for modals
 * --------------------------------------------------
 */
.slide-in-up {
  -webkit-transform: translate3d(0, 100%, 0);
  -moz-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0); }

.slide-in-up.ng-enter,
.slide-in-up > .ng-enter {
  -webkit-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;
  -moz-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;
  transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms; }

.slide-in-up.ng-enter-active,
.slide-in-up > .ng-enter-active {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }

.slide-in-up.ng-leave,
.slide-in-up > .ng-leave {
  -webkit-transition: all ease-in-out 250ms;
  -moz-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms; }

.fade-in {
  -webkit-animation: fadeOut 0.3s;
  -moz-animation: fadeOut 0.3s;
  animation: fadeOut 0.3s; }
  .fade-in.active {
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s; }

.fade-in-not-out.ng-enter, .fade-in-not-out .ng-enter {
  -webkit-animation: fadeIn 0.3s;
  -moz-animation: fadeIn 0.3s;
  animation: fadeIn 0.3s;
  position: relative; }
.fade-in-not-out.ng-leave, .fade-in-not-out .ng-leave {
  display: none; }

/**
 * Some component specific animations
 */
.nav-title-slide-ios7:not(.no-animation) .button.back-button {
  -webkit-transition: all 340ms;
  -moz-transition: all 340ms;
  transition: all 340ms;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  -webkit-transform: translate3d(0%, 0, 0);
  -moz-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
  opacity: 1; }
  .nav-title-slide-ios7:not(.no-animation) .button.back-button.active, .nav-title-slide-ios7:not(.no-animation) .button.back-button.activated {
    opacity: 0.5; }
  .nav-title-slide-ios7:not(.no-animation) .button.back-button.ng-hide {
    opacity: 0;
    -webkit-transform: translate3d(30%, 0, 0);
    -moz-transform: translate3d(30%, 0, 0);
    transform: translate3d(30%, 0, 0); }
  .nav-title-slide-ios7:not(.no-animation) .button.back-button.ng-hide-add, .nav-title-slide-ios7:not(.no-animation) .button.back-button.ng-hide-remove {
    display: block !important; }
  .nav-title-slide-ios7:not(.no-animation) .button.back-button.ng-hide-add {
    position: absolute; }
.nav-title-slide-ios7 > .ng-enter, .nav-title-slide-ios7.ng-enter,
.nav-title-slide-ios7 > .ng-leave, .nav-title-slide-ios7.ng-leave {
  -webkit-transition: all 340ms;
  -moz-transition: all 340ms;
  transition: all 340ms;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  opacity: 1; }
.nav-title-slide-ios7 > .ng-enter, .nav-title-slide-ios7.ng-enter {
  -webkit-transform: translate3d(30%, 0, 0);
  -moz-transform: translate3d(30%, 0, 0);
  transform: translate3d(30%, 0, 0);
  opacity: 0; }
  .nav-title-slide-ios7 > .ng-enter.title, .nav-title-slide-ios7.ng-enter.title {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0); }
.nav-title-slide-ios7 > .ng-enter.ng-enter-active, .nav-title-slide-ios7.ng-enter.ng-enter-active {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1; }
.nav-title-slide-ios7 > .ng-leave.ng-leave-active, .nav-title-slide-ios7.ng-leave.ng-leave-active {
  -webkit-transform: translate3d(-30%, 0, 0);
  -moz-transform: translate3d(-30%, 0, 0);
  transform: translate3d(-30%, 0, 0);
  opacity: 0; }
.nav-title-slide-ios7.reverse > .ng-enter, .nav-title-slide-ios7.reverse.ng-enter,
.nav-title-slide-ios7.reverse > .ng-leave, .nav-title-slide-ios7.reverse.ng-leave {
  -webkit-transition: all 340ms;
  -moz-transition: all 340ms;
  transition: all 340ms;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);
  opacity: 1; }
.nav-title-slide-ios7.reverse > .ng-enter, .nav-title-slide-ios7.reverse.ng-enter {
  -webkit-transform: translate3d(-30%, 0, 0);
  -moz-transform: translate3d(-30%, 0, 0);
  transform: translate3d(-30%, 0, 0);
  opacity: 0; }
.nav-title-slide-ios7.reverse > .ng-enter.ng-enter-active, .nav-title-slide-ios7.reverse.ng-enter.ng-enter-active {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1; }
.nav-title-slide-ios7.reverse > .ng-leave.ng-leave-active, .nav-title-slide-ios7.reverse.ng-leave.ng-leave-active {
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  opacity: 0; }

.nav-title-android:not(.no-animation) .button.back-button {
  -webkit-transition: all 200ms;
  -moz-transition: all 200ms;
  transition: all 200ms;
  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  transition-timing-function: linear;
  opacity: 1; }
  .nav-title-android:not(.no-animation) .button.back-button.ng-hide {
    opacity: 0; }
  .nav-title-android:not(.no-animation) .button.back-button.ng-hide-add, .nav-title-android:not(.no-animation) .button.back-button.ng-hide-remove {
    display: block !important; }
  .nav-title-android:not(.no-animation) .button.back-button.ng-hide-add {
    position: absolute; }
.nav-title-android > .ng-enter, .nav-title-android.ng-enter,
.nav-title-android > .ng-leave, .nav-title-android.ng-leave {
  -webkit-transition: all 200ms;
  -moz-transition: all 200ms;
  transition: all 200ms;
  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  transition-timing-function: linear; }
.nav-title-android > .ng-enter, .nav-title-android.ng-enter {
  opacity: 0; }
.nav-title-android > .ng-enter.ng-enter-active, .nav-title-android.ng-enter.ng-enter-active {
  opacity: 1; }
.nav-title-android > .ng-leave.ng-leave-active, .nav-title-android.ng-leave.ng-leave-active {
  opacity: 0; }

/**
 * Grid
 * --------------------------------------------------
 * Using flexbox for the grid, inspired by Philip Walton:
 * http://philipwalton.github.io/solved-by-flexbox/demos/grids/
 * By default each .col within a .row will evenly take up
 * available width, and the height of each .col with take
 * up the height of the tallest .col in the same .row.
 */
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  width: 100%; }

.row + .row {
  margin-top: -5px;
  padding-top: 0; }

.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  padding: 5px;
  width: 100%; }

/* Vertically Align Columns */
/* .row-* vertically aligns every .col in the .row */
.row-top {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  align-items: flex-start; }

.row-bottom {
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  -moz-align-items: flex-end;
  align-items: flex-end; }

.row-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center; }

.row-stretch {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  -moz-align-items: stretch;
  align-items: stretch; }

.row-baseline {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  -webkit-align-items: baseline;
  -moz-align-items: baseline;
  align-items: baseline; }

/* .col-* vertically aligns an individual .col */
.col-top {
  -webkit-align-self: flex-start;
  -moz-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start; }

.col-bottom {
  -webkit-align-self: flex-end;
  -moz-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end; }

.col-center {
  -webkit-align-self: center;
  -moz-align-self: center;
  -ms-flex-item-align: center;
  align-self: center; }

/* Column Offsets */
.col-offset-10 {
  margin-left: 10%; }

.col-offset-20 {
  margin-left: 20%; }

.col-offset-25 {
  margin-left: 25%; }

.col-offset-33, .col-offset-34 {
  margin-left: 33.3333%; }

.col-offset-50 {
  margin-left: 50%; }

.col-offset-66, .col-offset-67 {
  margin-left: 66.6666%; }

.col-offset-75 {
  margin-left: 75%; }

.col-offset-80 {
  margin-left: 80%; }

.col-offset-90 {
  margin-left: 90%; }

/* Explicit Column Percent Sizes */
/* By default each grid column will evenly distribute */
/* across the grid. However, you can specify individual */
/* columns to take up a certain size of the available area */
.col-10 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 10%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 10%;
  -ms-flex: 0 0 10%;
  flex: 0 0 10%;
  max-width: 10%; }

.col-20 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 20%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 20%;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%; }

.col-25 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 25%;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%; }

.col-33, .col-34 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 33.3333%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 33.3333%;
  -ms-flex: 0 0 33.3333%;
  flex: 0 0 33.3333%;
  max-width: 33.3333%; }

.col-50 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%; }

.col-66, .col-67 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 66.6666%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 66.6666%;
  -ms-flex: 0 0 66.6666%;
  flex: 0 0 66.6666%;
  max-width: 66.6666%; }

.col-75 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 75%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 75%;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%; }

.col-80 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 80%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 80%;
  -ms-flex: 0 0 80%;
  flex: 0 0 80%;
  max-width: 80%; }

.col-90 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 90%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 90%;
  -ms-flex: 0 0 90%;
  flex: 0 0 90%;
  max-width: 90%; }

/* Responsive Grid Classes */
/* Adding a class of responsive-X to a row */
/* will trigger the flex-direction to */
/* change to column and add some margin */
/* to any columns in the row for clearity */
@media (max-width: 567px) {
  .responsive-sm {
    -webkit-box-direction: normal;
    -moz-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column; }
    .responsive-sm .col, .responsive-sm .col-10, .responsive-sm .col-20, .responsive-sm .col-25, .responsive-sm .col-33, .responsive-sm .col-34, .responsive-sm .col-50, .responsive-sm .col-66, .responsive-sm .col-67, .responsive-sm .col-75, .responsive-sm .col-80, .responsive-sm .col-90 {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin-bottom: 15px;
      margin-left: 0;
      max-width: 100%;
      width: 100%; } }
@media (max-width: 767px) {
  .responsive-md {
    -webkit-box-direction: normal;
    -moz-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column; }
    .responsive-md .col, .responsive-md .col-10, .responsive-md .col-20, .responsive-md .col-25, .responsive-md .col-33, .responsive-md .col-34, .responsive-md .col-50, .responsive-md .col-66, .responsive-md .col-67, .responsive-md .col-75, .responsive-md .col-80, .responsive-md .col-90 {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin-bottom: 15px;
      margin-left: 0;
      max-width: 100%;
      width: 100%; } }
@media (max-width: 1023px) {
  .responsive-lg {
    -webkit-box-direction: normal;
    -moz-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column; }
    .responsive-lg .col, .responsive-lg .col-10, .responsive-lg .col-20, .responsive-lg .col-25, .responsive-lg .col-33, .responsive-lg .col-34, .responsive-lg .col-50, .responsive-lg .col-66, .responsive-lg .col-67, .responsive-lg .col-75, .responsive-lg .col-80, .responsive-lg .col-90 {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin-bottom: 15px;
      margin-left: 0;
      max-width: 100%;
      width: 100%; } }
/**
 * Utility Classes
 * --------------------------------------------------
 */
.hide {
  display: none; }

.opacity-hide {
  opacity: 0; }

.grade-b .opacity-hide,
.grade-c .opacity-hide {
  opacity: 1;
  display: none; }

.show {
  display: block; }

.opacity-show {
  opacity: 1; }

.invisible {
  visibility: hidden; }

.keyboard-open .hide-on-keyboard-open {
  display: none; }

.keyboard-open .tabs.hide-on-keyboard-open + .pane .has-tabs,
.keyboard-open .bar-footer.hide-on-keyboard-open + .pane .has-footer {
  bottom: 0; }

.inline {
  display: inline-block; }

.disable-pointer-events {
  pointer-events: none; }

.enable-pointer-events {
  pointer-events: auto; }

.disable-user-behavior {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-drag: none;
  -ms-touch-action: none;
  -ms-content-zooming: none; }

.no-resize {
  resize: none; }

.block {
  display: block;
  clear: both; }
  .block:after {
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    content: "."; }

.full-image {
  width: 100%; }

.clearfix {
  *zoom: 1; }
  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0; }
  .clearfix:after {
    clear: both; }

/**
 * Content Padding
 * --------------------------------------------------
 */
.padding {
  padding: 10px; }

.padding-top,
.padding-vertical {
  padding-top: 10px; }

.padding-right,
.padding-horizontal {
  padding-right: 10px; }

.padding-bottom,
.padding-vertical {
  padding-bottom: 10px; }

.padding-left,
.padding-horizontal {
  padding-left: 10px; }

/**
 * Rounded
 * --------------------------------------------------
 */
.rounded {
  border-radius: 4px; }

/**
 * Utility Colors
 * --------------------------------------------------
 * Utility colors are added to help set a naming convention. You'll
 * notice we purposely do not use words like "red" or "blue", but
 * instead have colors which represent an emotion or generic theme.
 */
.light, a.light {
  color: white; }

.light-bg {
  background-color: white; }

.light-border {
  border-color: #dddddd; }

.stable, a.stable {
  color: #f8f8f8; }

.stable-bg {
  background-color: #f8f8f8; }

.stable-border {
  border-color: #b2b2b2; }

.positive, a.positive {
  color: #4a87ee; }

.positive-bg {
  background-color: #4a87ee; }

.positive-border {
  border-color: #145dd7; }

.calm, a.calm {
  color: #43cee6; }

.calm-bg {
  background-color: #43cee6; }

.calm-border {
  border-color: #1aaac3; }

.assertive, a.assertive {
  color: #ef4e3a; }

.assertive-bg {
  background-color: #ef4e3a; }

.assertive-border {
  border-color: #cc2511; }

.balanced, a.balanced {
  color: #66cc33; }

.balanced-bg {
  background-color: #66cc33; }

.balanced-border {
  border-color: #478f24; }

.energized, a.energized {
  color: #f0b840; }

.energized-bg {
  background-color: #f0b840; }

.energized-border {
  border-color: #d39511; }

.royal, a.royal {
  color: #8a6de9; }

.royal-bg {
  background-color: #8a6de9; }

.royal-border {
  border-color: #552bdf; }

.dark, a.dark {
  color: #444444; }

.dark-bg {
  background-color: #444444; }

.dark-border {
  border-color: #111111; }

/**
 * Platform
 * --------------------------------------------------
 * Platform specific tweaks
 */
/**
 * Apply roboto font
 */
.roboto {
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; }
  .roboto input {
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; }

/*
.platform-android {


  .bar {
    padding: 0;

    line-height: 40px;

    .button {
      line-height: 40px;
    }

    .button-icon:before {
      font-size: 24px;
    }
  }

  .back-button {
    &.button-icon:before {
      line-height: 40px;
    }
    margin-left: -3px;
    padding: 0px 2px !important;
    &.ion-android-arrow-back:before {
      font-size: 12px;
    }

    &.back-button.active,
    &.back-button.activated {
      background-color: rgba(0,0,0,0.1);
    }
  }

  .item-divider {
    background: none;
    border-top-width: 0;
    border-bottom-width: 2px;
    text-transform: uppercase;
    margin-top: 10px;
    font-size: 14px;
  }
  .item {
    border-left-width: 0;
    border-right-width: 0;
  }

  .item-divider ~ .item:not(.item-divider) {
    border-bottom-width: 0;
  }

  .back-button:not(.ng-hide) + .left-buttons + .title {
    // Don't allow normal titles in this mode
    display: none;
  }

  .bar .title {
    text-align: left;
    font-weight: normal;
  }

  font-family: 'Roboto';

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto', $font-family-base;
  }

  .tab-item {
    font-family: 'Roboto', $font-family-base;
  }


  input, button, select, textarea {
    font-family: 'Roboto', $font-family-base;
  }
  */
.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) {
  height: 64px; }
  .platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader).item-input-inset .item-input-wrapper {
    margin-top: 19px !important; }
  .platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) > * {
    margin-top: 20px; }
.platform-ios.platform-cordova:not(.fullscreen) .tabs-top > .tabs,
.platform-ios.platform-cordova:not(.fullscreen) .tabs.tabs-top {
  top: 64px; }
.platform-ios.platform-cordova:not(.fullscreen) .has-header,
.platform-ios.platform-cordova:not(.fullscreen) .bar-subheader {
  top: 64px; }
.platform-ios.platform-cordova:not(.fullscreen) .has-subheader {
  top: 108px; }
.platform-ios.platform-cordova:not(.fullscreen) .has-tabs-top {
  top: 113px; }
.platform-ios.platform-cordova:not(.fullscreen) .has-header.has-subheader.has-tabs-top {
  top: 157px; }
.platform-ios.platform-cordova.status-bar-hide {
  margin-bottom: 20px; }

@media (orientation: landscape) {
  .platform-ios.platform-browser.platform-ipad {
    position: fixed; } }
.platform-c:not(.enable-transitions) * {
  -webkit-transition: none !important;
  transition: none !important; }
