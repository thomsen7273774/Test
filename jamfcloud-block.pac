function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "stakadnds.jamfcloud.com")) {
        return "PROXY localhost";
    }

    // Alle anderen Verbindungen ohne Proxy
    return "DIRECT";
}
