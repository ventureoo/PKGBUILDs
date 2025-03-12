// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable extensions in the application directory
pref("extensions.autoDisableScopes", 11);

// Enable WebRender
pref("gfx.webrender.all", true);

// Enable hardware accelerated video
pref("media.hardware-video-decoding.enabled", true);
pref("media.hardware-video-decoding.force-enabled", true);
pref("media.ffmpeg.vaapi.enabled", true);
pref("media.webrtc.hw.h264.enabled", true);

// Fuck mozilla garbage
pref("app.normandy.enabled", false, locked);
pref("app.normandy.api_url", "", locked);
pref("captivedetect.canonicalURL", "", locked);
pref("browser.ml.enable", false, locked);
pref("browser.places.interactions.enabled", false, locked);
pref("browser.contentanalysis.enabled", false, locked);
pref("browser.contentanalysis.default_result", 0, locked);
pref("browser.discovery.enabled", false, locked);
pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false, locked);
pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false, locked);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", false, locked);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false, locked);
pref("browser.newtabpage.activity-stream.feeds.topsites", false, locked);
pref("browser.newtabpage.activity-stream.feeds.places", false, locked);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false, locked);
pref("browser.newtabpage.activity-stream.feeds.adsfeed", false, locked);
pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false, locked);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", 0, locked);
pref("browser.newtabpage.activity-stream.telemetry.ut.event", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled",	false, locked);
pref("browser.newtabpage.activity-stream.system.showSponsored", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "", locked);
pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled",	false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false, locked);
pref("browser.tabs.crashReporting.sendReport", false, locked);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false, locked);
pref("extensions.blocklist.enabled", false, locked);
pref("extensions.getAddons.showPane", false, locked);
pref("extensions.pocket.enabled", false, locked);
pref("extensions.htmlaboutaddons.recommendations.enabled", false, locked);
pref("extensions.abuseReport.enabled", false, locked);
pref("dom.push.enabled", false, locked);
pref("dom.security.unexpected_system_load_telemetry_enabled", false, locked);
pref("dom.private-attribution.submission.enabled", false, locked);
pref("breakpad.reportURL", "", locked);
pref("security.remote_settings.crlite_filters.enabled", false, locked);
pref("security.pki.crlite_mode", 0, locked);
pref("devtools.debugger.remote-enabled", false, locked);
pref("media.gmp-gmpopenh264.autoupdate", false, locked);

// Fuck telemetry
pref("datareporting.healthreport.uploadEnabled", false, locked);
pref("datareporting.policy.dataSubmissionEnabled", false, locked);
pref("browser.shopping.experience2023.enabled", false, locked);
pref("browser.search.update", false, locked);
pref("browser.discovery.enabled", false, locked);
pref("browser.contentblocking.report.lockwise.enabled", false, locked);
pref("browser.contentblocking.report.monitor.enabled", false, locked);
pref("browser.urlbar.addons.featureGate", false, locked);
pref("browser.urlbar.fakespot.featureGate", false, locked);
pref("browser.urlbar.mdn.featureGate", false, locked);
pref("browser.urlbar.pocket.featureGate", false, locked);
pref("browser.urlbar.weather.featureGate", false, locked);
pref("browser.urlbar.yelp.featureGate", false, locked);
pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false, locked);
pref("browser.search.serpEventTelemetryCategorization.enabled", false, locked);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false, locked);
pref("browser.newtabpage.activity-stream.showSponsored", false, locked);
pref("browser.newtabpage.activity-stream.telemetry.ut.events", false, locked);
pref("browser.ping-centre.telemetry", false, locked);
pref("security.certerrors.recordEventTelemetry", false, locked);
pref("network.trr.confirmation_telemetry_enabled", false, locked);
pref("network.captive-portal-service.enabled", false, locked);
pref("network.connectivity-service.enabled", false, locked);
pref("toolkit.telemetry.unified", false, locked);
pref("toolkit.telemetry.enabled", false, locked);
pref("toolkit.telemetry.server", "data:,", locked);
pref("toolkit.telemetry.archive.enabled", false, locked);
pref("toolkit.telemetry.cachedClientID", "", locked);
pref("toolkit.telemetry.cachedProfileGroupID", "", locked);
pref("toolkit.telemetry.newProfilePing.enabled", false, locked);
pref("toolkit.telemetry.shutdownPingSender.enabled", false, locked);
pref("toolkit.telemetry.updatePing.enabled", false, locked);
pref("toolkit.telemetry.bhrPing.enabled", false, locked);
pref("toolkit.telemetry.firstShutdownPing.enabled", false, locked);
pref("toolkit.telemetry.coverage.opt-out", true, locked);
pref("toolkit.coverage.opt-out", true, locked);
pref("toolkit.coverage.endpoint.base", "", locked);

// Fuck Google safebrowsing
pref("browser.safebrowsing.id", "", locked);
pref("browser.safebrowsing.debug", false, locked);
pref("browser.safebrowsing.allowOverride", false, locked);
pref("browser.safebrowsing.malware.enabled", false, locked);
pref("browser.safebrowsing.phishing.enabled", false, locked);
pref("browser.safebrowsing.reportPhishURL", "", locked);
pref("browser.safebrowsing.blockedURIs.enabled", false, locked);
pref("browser.safebrowsing.downloads.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.url", "", locked);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false, locked);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false, locked);
pref("browser.safebrowsing.downloads.remote.remote.url", "", locked);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false, locked);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false, locked);
pref("browser.safebrowsing.provider.mozilla.lists", "", locked);
pref("browser.safebrowsing.provider.mozilla.lists.content", "", locked);
pref("browser.safebrowsing.provider.mozilla.lists.base", "", locked);
pref("browser.safebrowsing.provider.mozilla.gethashURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.reportURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.lastupdatetime", 0, locked);
pref("browser.safebrowsing.provider.mozilla.updateURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.pver", 0, locked);
pref("browser.safebrowsing.provider.google.advisoryName", "", locked);
pref("browser.safebrowsing.provider.google.advisoryURL", "", locked);
pref("browser.safebrowsing.provider.google.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google.lists", "", locked);
pref("browser.safebrowsing.provider.google.reportURL", "", locked);
pref("browser.safebrowsing.provider.google.updateURL", "", locked);
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google.pver", 0, locked);
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google4.reportURL", "", locked);
pref("browser.safebrowsing.provider.google4.updateURL", "", locked);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "", locked);
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false, locked);
pref("browser.safebrowsing.provider.google4.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google4.advisoryURL", "", locked);
pref("browser.safebrowsing.provider.google4.advisoryName", "", locked);
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google4.lists", "", locked);
pref("browser.safebrowsing.provider.google4.pver", 0, locked);
pref("browser.safebrowsing.provider.mozilla.nextupdatetime", 0, locked);
