function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "*.jamfcloud.com")) {
        return "PROXY localhost";
    }

    // Alle anderen Verbindungen ohne Proxy
    return "DIRECT";
}
