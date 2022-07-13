function openURLInSteam( url )
{ 
    const STEAM_URI = "steam://openurl/" + url;
    browsers.tabs.create( {
        active: false,
        discarded: true,
        url: STEAM_URI
    });
}
browser.tabs.query( { currentWindow: true } )
    .then();