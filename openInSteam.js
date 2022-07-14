function openURLInSteam( url )
{ 
    const STEAM_URI = "steam://openurl/" + url;
    browsers.tabs.create( {
        active: false,
        discarded: true,
        url: STEAM_URI
    });
}
browser.browserAction.onClicked.addListener( () =>
{
    console.log("Opening in Steam...");
    browser.tabs.getCurrent()
        .then( tab => { openURLInSteam( tab.url ); } );
})