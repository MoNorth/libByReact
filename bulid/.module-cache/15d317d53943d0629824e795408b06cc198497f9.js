// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }

var pageStr = [
	"index","search"
]
// var getFooterNav = function(page,that){

// 	// var doms = [];
// 	// for(var i = 0; i < 3; i++)
// 	// {
// 	// 	if(pageNum[page] === i)
// 	// 		doms.push(<div className="active"></div>);
// 	// 	else
// 	// 		doms.push(<div onClick={that.props.handleClickFooter(pageStr[i])}></div>);
// 	// }

// 	var doms = pageStr.map(function(value){
// 		return value === page ?
// 				<div className="active"></div> : 
// 				<div onClick={that.props.handleClickFooter(value)}></div>;
// 	});
// 	return doms;
// }


var FooterNavContent = React.createClass({displayName: "FooterNavContent",
	render : function(){
		// return getFooterNav(this.props.page,this);
		// return <div>{this.props.page}</div>;
		var page = this.props.page;
		var handleClickFooter = this.props.handleClickFooter;
		// handleClickFooter();
		return pageStr.map(function(value){
			// return (value === page ?
			// 		<div className="active"></div> : 
			// 		<div onClick={handleClickFooter(value)}></div>);
			return React.createElement("div", null);
		});
	}
});