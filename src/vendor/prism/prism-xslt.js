Prism.languages.xslt = Prism.languages.extend('markup', {
	'param': /\$\w+/i,
	'attr-selector': /@\w+/i,
	'function': /\b(string|not|boolean|generate-id|translate)/
});

Prism.languages.xslt['tag'].inside['attr-value'].inside['constant'] = Prism.languages.xslt['param'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['operator'] = Prism.languages.xslt['attr-selector'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['function'] = Prism.languages.xslt['function'];
