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
var getFooterNav = function(page,that){

	var doms = [];
	for(var i = 0; i < 3; i++)
	{
		if(pageNum[page] === i)
			doms.push(React.createElement("div", {className: "active"}));
		else
			doms.push(React.createElement("div", {onClick: that.props.handleClickFooter(pageStr[i])}));
	}
}


var footerNavContent = React.createClass({displayName: "footerNavContent",
	render : function(){
		return getFooterNav(this.props.page,this);
	}
});