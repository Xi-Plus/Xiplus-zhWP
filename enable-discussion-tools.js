/* eslint-disable no-console */
// <nowiki>
(function() {

    $('a').each(function(i, e) {
        try {
            var url = new URL(e.href);
            if (url.host.match(/\.(wikipedia|wiktionary|wikiquote|wikisource|wikinews|wikivoyage|wikibooks|wikiversity|wikimedia|mediawiki|wikidata)\.org$/)) {
                url.searchParams.set('dtenable', '1');
                e.href = url.href;
            }
        } catch (err) {
            console.log(e.href);
        }
    });

    var url = new URL(window.location.href);
    url.searchParams.set('dtenable', '1');
    mw.util.addPortletLink(
		'p-tb',
		url.href,
		'Enable DiscussionTools',
		't-debug'
    );

}
)();
// </nowiki>