var footerNavContentObj = {
	index : [
		{

		}
	]	
}


var footerNavContent = React.createClass({displayName: "footerNavContent",
	render : function(){
		var footerNav = [];
		switch(this.props.page)
		{
			case "index" : footerNav.push(React.createElement("div", null));
						   footerNav.push(React.createElement("div", null));
						   footerNav.push(React.createElement("div", null));
						   break;
		}
	}
});