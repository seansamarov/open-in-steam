console.log( "test" );
function openURLInSteam( url )
{ 
    const STEAM_URI = "steam://openurl/" + url;
    browsers.tabs.create( {
        url: "https://google.com"
    });
}
browser.browserAction.onClicked.addListener( (tab) =>
{
    console.log( "Opening in Steam...", tab );
    openURLInSteam( tab.url );
} );