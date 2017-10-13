Prism.languages.xslt = Prism.languages.extend('markup', {
	'param': /\$\w+/i,
	'attr-selector': /@\w+/i,
	'axis': {
		pattern: /\b((self|parent|ancestor-or-self|descendant-or-self|ancestor|descendant|preceding-sibling|following-sibling)::)\b/,
		alias: 'attr-selector'
	},
	'function': /\b(string|not|boolean|generate-id|translate|key)/,
	'keyword': /\b(key|and|or|param|variable)\b/
});

Prism.languages.xslt['tag'].inside['attr-value'].inside['constant'] = Prism.languages.xslt['param'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['operator'] = Prism.languages.xslt['attr-selector'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['axis'] = Prism.languages.xslt['axis'];
Prism.languages.xslt['tag'].inside['attr-value'].inside['function'] = Prism.languages.xslt['function'];
