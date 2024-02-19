function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "stakadnds.jamfcloud.com")) {
        return "PROXY 0.0.0.0";
    }
    return "DIRECT";
}
