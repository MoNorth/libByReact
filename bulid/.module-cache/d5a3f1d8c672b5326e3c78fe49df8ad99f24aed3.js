// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }

var pageNum = {
	index : 0,
	search : 1
}
var pageStr = [
	"index","search"
]
var getFooterNav = function(page){

	var doms = [];
	for(var i = 0; i < 3; i++)
	{
		if(pageNum[page] === i)
			doms.push(React.createElement("div", {className: "active"}))
	}
}


var footerNavContent = React.createClass({displayName: "footerNavContent",
	render : function(){
		var footerNav = [];
		switch(this.props.page)
		{
			case "index" : footerNav.push(React.createElement("div", {onClick: this.props.handleClickFooter("search")}));
						   footerNav.push(React.createElement("div", {className: "active"}));
						   footerNav.push(React.createElement("div", null));
						   break;
			case "search" : footerNav.push(React.createElement("div", {className: "active"}));
						    footerNav.push(React.createElement("div", {onClick: this.props.handleClickFooter("index")}));
						    fovoterNav.push(React.createElement("div", null));
						    break;
		}
		return footerNav;
	}
});