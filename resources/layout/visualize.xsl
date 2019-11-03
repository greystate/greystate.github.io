<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:g="http://xmlns.greystate.dk/2009/layout"
	xmlns="http://www.w3.org/1999/xhtml"
	exclude-result-prefixes="g"
>

	<xsl:output
		method="xml"
		indent="yes"
		doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"
		doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
	/>

	<xsl:template match="/">
		<html>
		<head>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>Visualizer</title>
			<link rel="stylesheet" type="text/css" href="file:///Users/chriz/Development/greystate_dk/production/resources/layout/visualizer_liquid.css" />
		</head>
		<body>
			
			<h1><xsl:value-of select="g:layout/@title" /></h1>
			
			<xsl:apply-templates />
			
			<xsl:call-template name="render-legend" />

		</body>
		</html>
	</xsl:template>

	<xsl:template match="g:layout">
		<xsl:apply-templates />
	</xsl:template>

	<xsl:template match="g:wrap | g:box | g:navigation">
		<div>
			<xsl:call-template name="class-stuff" />
			<xsl:call-template name="id-stuff" />
			
			<xsl:apply-templates />
		</div>
	</xsl:template>
	
	<xsl:template name="id-stuff">
		<xsl:variable name="name" select="local-name()" />
		<xsl:variable name="id">
			<xsl:choose>
				<xsl:when test="@id">
					<xsl:value-of select="@id" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$name" />
					<xsl:if test="count(//g:*[local-name() = $name][not(@id)]) &gt; 1">
						<xsl:number level="any" />
					</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<!-- Generate an id attribute and a header with the attribute name -->
		<xsl:attribute name="id"><xsl:value-of select="$id" /></xsl:attribute>
		<h2>#<xsl:value-of select="$id" /></h2>				
	</xsl:template>
	
	<xsl:template name="class-stuff">
		<xsl:variable name="floated" select="contains(@layout, 'left') or contains(@layout, 'right')" />
		<xsl:variable name="hasFloatedChild" select="*[contains(@layout, 'left') or contains(@layout, 'right')]" />
		<!-- <xsl:variable name="hasFloatedChild" select="false()" /> -->
		
		<xsl:variable name="className">
			<xsl:value-of select="@layout" />
			<xsl:if test="not(contains(@layout, 'contain')) and $hasFloatedChild and not($floated)">
				 <xsl:text> contain</xsl:text>
			</xsl:if>
			<xsl:if test="self::g:wrap[parent::g:layout]">
				<xsl:text> initial</xsl:text>
			</xsl:if>
		</xsl:variable>
		<xsl:if test="normalize-space($className)">
			<xsl:attribute name="class">
				<xsl:value-of select="normalize-space($className)" />
			</xsl:attribute>
		</xsl:if>
	</xsl:template>
	
	<xsl:template name="render-legend">
		<div id="legend">
			<h3>Legend</h3>
			<ul>
				<li><span>&#x2190;</span>: floated left</li>
				<li><span>&#x2192;</span>: floated right</li>
				<li><span>&#x21B5;</span>: 'contains' its floats</li>
			</ul>
		</div>
	</xsl:template>
	
</xsl:stylesheet>