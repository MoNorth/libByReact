// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }

var pageStr = [
	"index","search"
]
var getFooterNav = function(page,that){

	// var doms = [];
	// for(var i = 0; i < 3; i++)
	// {
	// 	if(pageNum[page] === i)
	// 		doms.push(<div className="active"></div>);
	// 	else
	// 		doms.push(<div onClick={that.props.handleClickFooter(pageStr[i])}></div>);
	// }

	var doms = pageStr.map(function(value){
		return value === page ?
				React.createElement("div", {className: "active"}) : 
				React.createElement("div", {onClick: that.props.handleClickFooter(value)});
	});
	return doms;
}


var FooterNavContent = React.createClass({displayName: "FooterNavContent",
	render : function(){
		// return getFooterNav(this.props.page,this);
		return React.createElement("div", null)
	}
});