function FindProxyForURL(url, host) {
    // Verbindung zu google.de durch Proxy blocken
    if (dnsDomainIs(host, "google.de")) {
        return "PROXY localhost";
    }

    // Alle anderen Verbindungen ohne Proxy
    return "DIRECT";
}
