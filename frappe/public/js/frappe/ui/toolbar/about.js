frappe.provide('frappe.ui.misc');
frappe.ui.misc.about = function() {
	if(!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({title: __('RECiPHER BiS')})

		$(d.body).html(repl("<div>\
		<p>RECiPHER GROUP is a Melbourne based iT Organisation deploying and supporting customized Enterprise Resource and Planning (ERP) Solutions for the SME Market in Australia and New Zealand.</p>\
		<p>Powered by ERPNext, RECiPHER Business Intelligence Solutions are the perfect solution for Australian Businesses. With solutions tailored to a number of industries including Retail, Distribution, Manufacturing and Professional Services, our Team of Developers and Business Analysts can assist your Company in migrating from multiple disjointed systems to a single application.</p>\
		<p>RECiPHER BiS is the solution for Businesses that require the same features provided by Netsuite, SAP and XERO, yet wish to minimise associated costs! </p>\
		<p>Simply SEND US A INQUIRY for more information in relation to RECiPHER BiS or to start your FREE 30 DAY TRIAL! </p>\
		<hr>\
		</div>", frappe.app));

		frappe.ui.misc.about_dialog = d;

		frappe.ui.misc.about_dialog.on_page_show = function() {
			if(!frappe.versions) {
				frappe.call({
					method: "frappe.utils.change_log.get_versions",
					callback: function(r) {
						show_versions(r.message);
					}
				})
			}
		};

		var show_versions = function(versions) {
			var $wrap = $("#about-app-versions").empty();
			$.each(keys(versions).sort(), function(i, key) {
				var v = versions[key];
				$($.format('<p><b>{0}:</b> v{1}<br></p>',
						   [v.title, v.version])).appendTo($wrap);
			});

			frappe.versions = versions;
		}

	}

	frappe.ui.misc.about_dialog.show();

}
