Prism.languages.xslt = Prism.languages.extend('markup', {
	'constant': /\$\w+/i,
	'attr-selector': /@\w+/i
});

Prism.languages.xslt['tag'].inside['attr-value'].inside['constant'] = Prism.languages.xslt['constant'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['selector'] = Prism.languages.xslt['attr-selector'];
