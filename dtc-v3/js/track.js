
var spitoday = new Date();
var spiexpire = new Date();
spiexpire.setTime(spitoday.getTime() + 3600000*24*90);

// Get hostname without the subdomain
//
// The method looks at the second-level domain for common ones, to determine if we need the
// last 2 or the last 3 parts
//
// Parameters:
//  Fully qualified hostname (potentially including subdomain)
//
// Returns:
//  Domain name without the subdomain
//
function SPIGetDomainName(domain) 
{
	var parts = domain.split('.').reverse();
	var cnt = parts.length;
	if (cnt >= 3) {
		// see if the second level domain is a common SLD.
		if (parts[1].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i) && !parts[0].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i)) {
			return parts[2] + '.' + parts[1] + '.' + parts[0];
		}
	}
	return parts[1]+'.'+parts[0];
}

// Get hostname without the subdomain
var hostname = SPIGetDomainName(window.location.hostname);

// Save sessid2 cookie
document.cookie = "sessid2="+escape("sessid20250525165736123")+";expires="+spiexpire.toGMTString()+";path=/;domain=."+hostname;

// Save funnel cookies
document.cookie = "spi_funnel_codename="+escape("")+";expires="+spiexpire.toGMTString()+";path=/;domain=."+hostname;
			
document.cookie = "referrer="+("2a00:b703:fff1:102::1::sugarsweeptoday.com%2Fdtc-v2")+";expires="+spiexpire.toGMTString()+";path=/;domain="+hostname;

var spi_myNodelist = document.getElementsByTagName("a");
var spi_i;

var spi_pattern_enc_bg = "buygoods.com%2Fsecure%2F%3F";
var spi_pattern_base_bg = "buygoods.com/secure/?";
var spi_replace_str_bg = spi_pattern_base_bg+"sessid2="+escape("sessid20250525165736123")+"&";


var spi_pattern_enc_bg_html = "buygoods.com%2Fsecure%2Fcheckout.html%3F";
var spi_pattern_base_bg_html = "buygoods.com/secure/checkout.html?";
var spi_replace_str_bg_html = spi_pattern_base_bg_html+"sessid2="+escape("sessid20250525165736123")+"&";

var spi_pattern_enc_bg_html2 = "buygoods.com%2Fsecure%order.html%3F";
var spi_pattern_base_bg_html2 = "buygoods.com/secure/order.html?";
var spi_replace_str_bg_html2 = spi_pattern_base_bg_html2+"sessid2="+escape("sessid20250525165736123")+"&";

var spi_pattern_enc_spi = "softwareprojects.com%2Fsecure%2F%3F";
var spi_pattern_base_spi = "softwareprojects.com/secure/?";
var spi_replace_str_spi = spi_pattern_base_spi+"sessid2="+escape("sessid20250525165736123")+"&";

var spi_pattern_enc_cbd = "buygoodshomeoils.com%2Fsecure%2F%3F";
var spi_pattern_base_cbd = "buygoodshomeoils.com/secure/?";
var spi_replace_str_cbd = spi_pattern_base_cbd+"sessid2="+escape("sessid20250525165736123")+"&";

var spi_pattern_enc_cbd_html = "buygoodshomeoils.com%2Fsecure%2Fcheckout.html%3F";
var spi_pattern_base_cbd_html = "buygoodshomeoils.com/secure/checkout.html?";
var spi_replace_str_cbd_html = spi_pattern_base_cbd_html+"sessid2="+escape("sessid20250525165736123")+"&";
			


var spi_replace_enc_cbd = encodeURIComponent(spi_replace_str_cbd);
var spi_replace_enc_cbd_html = encodeURIComponent(spi_replace_str_cbd_html);
var spi_replace_enc_bg = encodeURIComponent(spi_replace_str_bg);
var spi_replace_enc_bg_html = encodeURIComponent(spi_replace_str_bg_html);
var spi_replace_enc_bg_html2 = encodeURIComponent(spi_replace_str_bg_html2);
var spi_replace_enc_spi = encodeURIComponent(spi_replace_str_spi);

for (spi_i = 0; spi_i < spi_myNodelist.length; spi_i++) 
{
	var spi_track_link = spi_myNodelist[spi_i].href;

	// BuyGoodsHomeOils
	if(spi_track_link.indexOf(spi_pattern_base_cbd) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_cbd,spi_replace_str_cbd);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_cbd) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_cbd,spi_replace_enc_cbd);
		spi_myNodelist[spi_i].href = spi_track_link;
	}

	// BuyGoodsHomeOils HTML
	if(spi_track_link.indexOf(spi_pattern_base_cbd_html) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_cbd_html,spi_replace_str_cbd_html);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_cbd_html) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_cbd_html,spi_replace_enc_cbd_html);
		spi_myNodelist[spi_i].href = spi_track_link;
	}

	// BuyGoods HTML
	if(spi_track_link.indexOf(spi_pattern_base_bg_html) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_bg_html,spi_replace_str_bg_html);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_bg_html) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_bg_html,spi_replace_enc_bg_html);
		spi_myNodelist[spi_i].href = spi_track_link;
	}

	// BuyGoods HTML2 - order.html
	if(spi_track_link.indexOf(spi_pattern_base_bg_html2) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_bg_html2,spi_replace_str_bg_html2);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_bg_html2) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_bg_html2,spi_replace_enc_bg_html2);
		spi_myNodelist[spi_i].href = spi_track_link;
	}

	// BuyGoods
	if(spi_track_link.indexOf(spi_pattern_base_bg) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_bg,spi_replace_str_bg);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_bg) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_bg,spi_replace_enc_bg);
		spi_myNodelist[spi_i].href = spi_track_link;
	}

	// SoftwareProjects
	if(spi_track_link.indexOf(spi_pattern_base_spi) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_base_spi,spi_replace_str_spi);
		spi_myNodelist[spi_i].href = spi_track_link;
	}else if(spi_track_link.indexOf(spi_pattern_enc_spi) > -1)
	{
		spi_track_link = spi_track_link.replace(spi_pattern_enc_spi,spi_replace_enc_spi);
		spi_myNodelist[spi_i].href = spi_track_link;
	}
}        
			