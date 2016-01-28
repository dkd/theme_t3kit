
# Solr
# Notes:
# The scheduler task is disabled by default

# enable solr
plugin.tx_solr.enabled = {$themes.configuration.features.enableSolr}

# Solr default ts setup
plugin.tx_solr.suggest = 1
plugin.tx_solr.search.faceting = 1
plugin.tx_solr.search.spellchecking = 1
plugin.tx_solr.search.results.resultsHighlighting = 1
plugin.tx_solr.search.results.resultsHighlighting.wrap = <mark>|</mark>
plugin.tx_solr.search.sorting = 1
plugin.tx_solr.search.targetPage = {$themes.configuration.features.searchTargetPage}
plugin.tx_solr.solr.path = /solr/{$themes.configuration.siteName}_{$themes.languages.default.isoCode}/

## TEST
#plugin.tx_solr.general.dateFormat.date =
## Just to check pagination with many pages
#plugin.tx_solr.search.results.resultsPerPageSwitchOptions = 2,10,25,50
#plugin.tx_solr.search.results.pagebrowser.pagesBefore = 2
#plugin.tx_solr.search.results.pagebrowser.pagesAfter = 2

## Test to enable solr features to see if template is correct
#plugin.tx_solr.statistics = 1
#plugin.tx_solr.search.frequentSearches = 1
#plugin.tx_solr.search.lastSearches = 1
#plugin.tx_solr.logging.query.searchWords = 1

## Fix query for latest
#plugin.tx_solr.search.frequentSearches.select.ADD_WHERE = AND num_found > 0

## Solr tools
#plugin.tx_solr.search.results.showDocumentScoreAnalysis = 0
#plugin.tx_solr.search.frequentSearches.select.ORDER_BY =
#plugin.tx_solr.search.frequentSearches.select.ADD_WHERE =

## Test to add more filters
#plugin.tx_solr.search.faceting.facets.keywords.field = keywords
#plugin.tx_solr.search.faceting.facets.keywords.label = keywords

plugin.tx_solr {
    # Change solr templates to our custom
    templateFiles {
        frequentSearches = EXT:theme_t3kit/Resources/Private/Extensions/Solr/Templates/PiFrequentSearches/frequentsearches.htm
        pagebrowser      = EXT:theme_t3kit/Resources/Private/Extensions/Solr/Templates/PiResults/pagebrowser.htm
        results          = EXT:theme_t3kit/Resources/Private/Extensions/Solr/Templates/PiResults/results.htm
        search           = EXT:theme_t3kit/Resources/Private/Extensions/Solr/Templates/PiSearch/search.htm
    }
    cssFiles {
        # Disable solr default css
        #results = EXT:solr/Resources/Css/PiResults/results.css
        results >
        ui      = EXT:solr/Resources/Css/JQueryUi/jquery-ui.custom.css
        #ui >
    }
}

# Change solr core if language other than default
[globalVar = GP:L > 0]
    plugin.tx_solr.solr.path = /solr/{$themes.configuration.siteName}_{$themes.languages.current.isoCode}/
[global]


# Additional when solr is enabled
[globalVar = LIT:1 = {$themes.configuration.features.enableSolr}]

    config.index_enable = 1

    lib.searchbox >
    lib.searchbox < plugin.tx_solr_PiSearch_Search

[global]

